<template>
    <div>
        <span>Collapse: </span>
        <input type="range" min="0" max="1" step="0.01" v-model="collapse">
        <span>{{ collapse }}</span>
        <div ref="mountPoint"></div>
    </div>
</template>
  
<script>
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

export default {

    data() {
        return {
            // scene: new THREE.Scene(),
            // camera: null,
            // renderer: new THREE.WebGLRenderer({ antialias: true }),
            // gltfModel: null,
            animationFrameID: null,
            collapse: 0
        }
    },

    mounted() {
        this.initThreeScene()
        this.loadGLTF()
        this.animate()
    },

    beforeUnmount() {
        cancelAnimationFrame(this.animationFrameID)
    },

    methods: {
        initThreeScene() {
            this.scene = new THREE.Scene()

            const width = 500
            const height = 500
            this.renderer = new THREE.WebGLRenderer({ antialias: true })
            this.renderer.setSize(width, height)
            this.$refs.mountPoint.appendChild(this.renderer.domElement)

            this.camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000)
            this.camera.position.z = 10



            this.controls = new OrbitControls(this.camera, this.renderer.domElement)
            this.controls.update()


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
        loadGLTF() {
            const loader = new GLTFLoader()
            this.raw_mesh = []
            loader.load(require('@/assets/exhition03.glb').default, (gltf) => {
                let gltfModel = gltf.scene
                this.scene.add(gltfModel)

                // Here, you can manipulate the shape keys (morph targets)
                // For example, to set the influence of the first shape key:
                console.log(gltfModel)
                let objects = [gltfModel]
                while (objects.length > 0) {
                    let obj = objects.pop()
                    console.log(obj)
                    if (obj.children) objects.push(...obj.children)
                    if (obj.morphTargetInfluences && obj.morphTargetInfluences.length > 0) {
                        this.raw_mesh.push(obj)
                    }
                }

                console.log(this.raw_mesh)

            })
        },
        animate() {
            this.animationFrameID = requestAnimationFrame(this.animate)


            for (let obj of this.raw_mesh) {
                obj.morphTargetInfluences[0] = this.collapse
            }

            // this.controls.update()
            this.renderer.render(this.scene, this.camera)
        }
    }
}
</script>
  
<style scoped>
/* Add your styles here */
</style>
  