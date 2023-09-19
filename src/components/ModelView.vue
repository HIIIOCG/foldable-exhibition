<template>
    <div>
        <!-- <span>Collapse: </span>
        <input type="range" min="0" max="1" step="0.01" v-model="collapse">
        <span>{{ collapse }}</span> -->



        <div class="three-container">
            <div class="three-canvas" ref="mountPoint"></div>
            <div class="three-button" v-for="button in  buttons " :key="button.i" :style="{ 'left': button.x + 'px', 'top': button.y + 'px' }" @click.prevent="buttonClick(button)" :class="{ 'three-button_show': button.show }">
                <span class="three-button_hint">
                    {{ button.hint }}
                </span>
            </div>
        </div>
    </div>
</template>
  
<script>
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'


function limitDistance(vector, limit, origin, deltaTime = 1 / 60) {
    vector.sub(origin)
    let len = vector.length()

    if (len > limit) {
        len += (limit - len) * 0.1 ** (deltaTime * 60)
        vector.setLength(len)
    }
    vector.add(origin)
}


const states = [
    { // 0
        frame: 0,
        buttons: [
            { hint: 'Expand', name: 'Button001', goto: 1, }
        ]
    }, { // 1
        frame: 100,

        buttons: [
            { hint: 'Wall', name: 'Button0021', goto: 2 },
            { hint: 'Wall', name: 'Button0022', goto: 2 }
        ]
    }, { // 2
        frame: 200,

        buttons: [
            { hint: 'Poster', name: 'Button003', goto: 3 }
        ]
    }, { // 3
        frame: 300,

        buttons: [
            { hint: 'Table & TV', name: 'Button004', goto: 4 }
        ]
    }, { // 4
        frame: 400,

        buttons: [
            { hint: 'Close', name: 'Button005', goto: 0 }
        ]
    }
]

const fps = 60
const frameDuration = 550
const duration = frameDuration / fps
const stateFrames = []

for (let i = 0; i < states.length; i++) {
    const state = states[i]
    state.i = i
    state.time = state.frame / fps
    stateFrames.push(state.frame)

}




export default {

    data() {
        return {
            // scene: new THREE.Scene(),
            // camera: null,
            // renderer: new THREE.WebGLRenderer({ antialias: true }),
            // gltfModel: null,
            animationFrameID: null,
            collapse: 0,
            buttons: [],
            time: 0,
            fps: 60,

            currentStateId: 0,
            showStateId: null,
        }
    },

    mounted() {
        this.initThreeScene()
        this.loadGLTF()
        this.onResize()
        this.animate()
        addEventListener('resize', this.onResize)
    },

    beforeUnmount() {
        cancelAnimationFrame(this.animationFrameID)
        removeEventListener('resize', this.onResize)
    },

    methods: {
        initThreeScene() {
            this.lastUpdate = Date.now()
            this.scene = new THREE.Scene()

            this.origin = new THREE.Vector3(0, 0, 0)

            const width = 500
            const height = 500
            this.ground_y = 0
            this.renderer = new THREE.WebGLRenderer({ antialias: true })
            this.renderer.setClearColor(0xffffff, 0)

            this.renderer.setSize(width, height)
            this.$refs.mountPoint.appendChild(this.renderer.domElement)


            // Camera
            this.camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000)
            this.camera.position.z = 10



            // Orbit control
            this.controls = new OrbitControls(this.camera, this.renderer.domElement)
            this.controls.update()
            this.controls.dampingFactor = 0.2
            this.controls.enableDamping = true



            const ambientLight = new THREE.AmbientLight(0xffffff)
            this.scene.add(ambientLight)

            const pointLight = new THREE.PointLight(0xffffff, 1)
            pointLight.position.set(2, 2, 2)
            this.scene.add(pointLight)

            // Adding a dummy cube object for rendering testing
            // const geometry = new THREE.BoxGeometry(1, 1, 1);
            // const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
            // const cube = new THREE.Mesh(geometry, material);
            // this.scene.add(cube);

        },
        resize(width, height) {
            this.camera.aspect = width / height
            this.camera.updateProjectionMatrix()
            this.renderer.setSize(width, height)
        },
        onResize() {
            this.resize(window.innerWidth, window.innerHeight)
        },
        loadGLTF() {
            const loader = new GLTFLoader()
            this.raw_mesh = []

            loader.load(require('../../../Blend File/exhition04.glb').default, (gltf) => {
                let gltfModel = gltf.scene
                this.scene.add(gltfModel)

                // Here, you can manipulate the shape keys (morph targets)
                // For example, to set the influence of the first shape key:
                console.log(gltf)

                this.mixer = new THREE.AnimationMixer(gltfModel)
                this.action = this.mixer.clipAction(gltf.animations[0])
                this.action.play()

                let objects = [gltfModel]

                // Handle 3D buttons
                let temp_buttons = []

                for (let state of states) {
                    for (let button of state.buttons) {
                        let buttonObj = gltfModel.getObjectByName(button.name)
                        temp_buttons.push({
                            name: button.name,
                            goto: button.goto, // goto this state id
                            display: state.i, // display on this state id
                            x: 0, y: 0,
                            obj: buttonObj,
                            hint: button.hint,
                            show: false,
                        })
                    }
                }
                this.buttons = temp_buttons

                while (objects.length > 0) {
                    let obj = objects.pop()
                    obj.frustumCulled = false


                    // Gather Shape Keys (Deprecated)
                    if (obj.children) objects.push(...obj.children)
                    if (obj.morphTargetInfluences && obj.morphTargetInfluences.length > 0) {
                        this.raw_mesh.push(obj)
                    }


                    // Handle Model Specific setting
                    if (obj.name == 'Plane') {
                        obj.parent.remove(obj)
                    }

                    // if (obj.name == 'ground') {
                    //     var target = new THREE.Vector3()
                    //     obj.getWorldPosition(target)
                    //     this.ground_y = target.y
                    //     console.log(this.ground_y)
                    // }

                }
            })
        },
        animate() {
            this.animationFrameID = requestAnimationFrame(this.animate)
            let now = Date.now()
            let deltaTime = (now - this.lastUpdate) / 1000
            this.lastUpdate = now

            if (this.time > duration) {
                this.time = this.time - duration
            }


            let stop_time = states[this.currentStateId].time
            let last_state_id = this.currentStateId - 1
            if (last_state_id < 0) last_state_id += states.length
            let last_stop_time = states[last_state_id].time

            let state_duration = stop_time - last_stop_time
            if (state_duration < 0) state_duration += duration

            // relative time is zero on last stop time, always positive.
            let relative_time = this.time - last_stop_time
            if (relative_time < 0) relative_time += duration

            let state_progress = relative_time / state_duration
            console.log(state_progress, relative_time, state_duration)



            if (relative_time <= state_duration && relative_time + deltaTime > state_duration) {
                this.time = stop_time
            } else {
                this.time += deltaTime
            }

            // Animatino
            if (this.mixer) {

                // Update animation for model
                this.action.time = this.time
                this.mixer.update(0)

            }


            limitDistance(this.controls.target, 1, this.origin, deltaTime)
            limitDistance(this.camera.position, 10, this.origin, deltaTime)


            if (this.camera.position.y < this.ground_y)
                this.camera.position.y = this.ground_y

            this.controls.update(deltaTime)



            for (let obj of this.raw_mesh) {
                obj.morphTargetInfluences[0] = this.collapse
            }

            // this.controls.update()
            this.renderer.render(this.scene, this.camera)


            if (this.buttons) {
                var size = new THREE.Vector3()
                this.renderer.getSize(size)

                let temp_origin = new THREE.Vector3(0, 0, 0)
                let count = 0


                let button_to_show = null
                let button_distance = null

                for (let button of this.buttons) {
                    var vector = new THREE.Vector3()
                    vector.setFromMatrixPosition(button.obj.matrixWorld)
                    vector.project(this.camera)

                    button.x = (vector.x + 1) * size.x / 2
                    button.y = (1 - vector.y) * size.y / 2

                    button.show = false

                    button.time

                    if (button.display == this.currentStateId && state_progress > 0.8) {

                        temp_origin.add(button.obj.position)
                        count += 1

                        let v = new THREE.Vector3()
                        let distance = v.subVectors(this.camera.position, button.obj.position).lengthSq()

                        if (button_distance == null || distance < button_distance) {
                            button_to_show = button
                            button_distance = distance
                        }
                    }
                }

                if (button_to_show !== null) button_to_show.show = true

                if (count > 0) {
                    temp_origin.divideScalar(count)
                    this.origin.add(temp_origin.sub(this.origin).multiplyScalar(0.05 ** (deltaTime * 60)))
                }

            }


        }, buttonClick(button) {
            this.currentStateId = button.goto
        }
    }
}
</script>
  
<style scoped>
/* Add your styles here */
</style>
  