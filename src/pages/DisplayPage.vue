
import { defaults } from 'gh-pages';
<template>
    <div class="display">
        <div class="display-container row">
            <div class="col menu">
                <div class="menu-item" :class="{ hidden: selected != 0 }" @click="selectMenuItem(0)">
                    <div class="menu-body">
                        <h2>可伸縮結構，將空間“摺疊”</h2>
                        <p>摺疊展場的金屬骨架，在穩固支撐的同時，裝上滑輪就能自由拉伸深度。收納時把展牆模塊與燈具簡易拆下，並將展間摺疊壓平，整組系統可收納骨架中。</p>
                        <hr>
                        <div class="row">
                            <div class="spec">
                                <h3>摺疊深度</h3>
                                <p>60cm</p>
                            </div>
                            <div class="spec">
                                <h3>展開深度</h3>
                                <p>&lt;6m</p>
                            </div>
                        </div>
                        <div class="gap"></div>
                        <div class="tags">
                            <span>#空間最佳化</span>
                        </div>
                    </div>
                    <div class="menu-title">
                        <h1>設計原理</h1>
                        <h1 style="letter-spacing: 0.09em">DESIGN</h1>
                    </div>
                </div>
                <div class="menu-item" :class="{ hidden: selected != 1 }" @click="selectMenuItem(1)">
                    <div class="menu-body">
                        <p>骨架使用電鍍鋅鋼管，防鏽且輕量。透光浪板塗覆紫外線吸收劑，防止褪黃並賦予自淨功能。二手棧板外牆的中空結構可一併收納電源線材與LED燈管。</p>
                        <hr>
                        <div class="row">
                            <div class="spec">
                                <h3>使用壽命可達</h3>
                                <p>8-10年</p>
                            </div>

                        </div>
                        <div class="gap"></div>
                        <div class="tags">
                            <span>#穩固防水</span>
                            <span>#室內外通用</span>
                        </div>
                    </div>
                    <div class="menu-title">
                        <h1>結構再利用</h1>
                        <h1 style="letter-spacing: 0.12em">TEXTURE</h1>
                    </div>
                </div>
                <div class="menu-item" :class="{ hidden: selected != 2 }" @click="selectMenuItem(2)">
                    <div class="menu-body">
                        <h2>不止於環保，我們需要更好</h2>
                        <p>要取代展覽業用完即棄的傳統，僅達成循環永續的產品是遠遠不夠的。</p>
                        <p>「Roaring Cosmos摺疊展場」是使用可複用材料，能快速搭建與扁平收納的模組化展場系統。我們旨在打造多方面,都優於市場的展場空間新解答。</p>
                        <div class="gap"></div>
                        <div class="tags">
                            <span>Space-saving</span>
                            <span>Long-lasting</span>
                            <span>Eco-friendly</span>
                        </div>
                    </div>
                    <div class="menu-title">
                        <h1 style="letter-spacing: 0.27em">何謂摺疊展場</h1>
                        <h1>INTRODUCTION</h1>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="images" @click="nextImage()">
                    <a id="IG" href="https://www.instagram.com/mmd_nfu_edu/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                            <path d="M15.18 11.5C15.18 12.2278 14.9642 12.9393 14.5598 13.5445C14.1554 14.1497 13.5807 14.6213 12.9083 14.8999C12.2358 15.1784 11.4959 15.2513 10.7821 15.1093C10.0682 14.9673 9.4125 14.6168 8.89785 14.1022C8.38319 13.5875 8.0327 12.9318 7.89071 12.2179C7.74872 11.5041 7.82159 10.7642 8.10012 10.0917C8.37865 9.41929 8.85033 8.84456 9.4555 8.44019C10.0607 8.03583 10.7722 7.82 11.5 7.82C12.4757 7.82112 13.411 8.20919 14.1009 8.89908C14.7908 9.58897 15.1789 10.5243 15.18 11.5ZM23 6.44V16.56C22.9981 18.2674 22.3189 19.9043 21.1116 21.1116C19.9043 22.3189 18.2674 22.9981 16.56 23H6.44C4.7326 22.9981 3.09568 22.3189 1.88837 21.1116C0.681053 19.9043 0.0019337 18.2674 0 16.56V6.44C0.0019337 4.7326 0.681053 3.09568 1.88837 1.88837C3.09568 0.681053 4.7326 0.0019337 6.44 0H16.56C18.2674 0.0019337 19.9043 0.681053 21.1116 1.88837C22.3189 3.09568 22.9981 4.7326 23 6.44ZM17.02 11.5C17.02 10.4082 16.6963 9.34101 16.0897 8.43325C15.4832 7.52549 14.6211 6.81798 13.6124 6.40019C12.6038 5.98239 11.4939 5.87308 10.4231 6.08607C9.35233 6.29906 8.36876 6.82478 7.59677 7.59677C6.82478 8.36876 6.29906 9.35233 6.08607 10.4231C5.87308 11.4939 5.98239 12.6038 6.40019 13.6124C6.81798 14.6211 7.52549 15.4832 8.43325 16.0897C9.34101 16.6963 10.4082 17.02 11.5 17.02C12.9635 17.0183 14.3666 16.4362 15.4014 15.4014C16.4362 14.3666 17.0183 12.9635 17.02 11.5ZM18.86 5.52C18.86 5.24706 18.7791 4.98025 18.6274 4.75331C18.4758 4.52637 18.2603 4.34949 18.0081 4.24505C17.7559 4.1406 17.4785 4.11327 17.2108 4.16652C16.9431 4.21976 16.6972 4.3512 16.5042 4.54419C16.3112 4.73719 16.1798 4.98308 16.1265 5.25077C16.0733 5.51847 16.1006 5.79594 16.205 6.0481C16.3095 6.30027 16.4864 6.51579 16.7133 6.66743C16.9403 6.81907 17.2071 6.9 17.48 6.9C17.846 6.9 18.197 6.75461 18.4558 6.49581C18.7146 6.23701 18.86 5.886 18.86 5.52Z" fill="white" />
                        </svg>
                        <span style="letter-spacing: 0.08em; margin-left: 5px;">
                            ROARINGCOSMOS
                        </span>
                    </a>
                    <img src="../assets/RORINGCOSMOS_LOGO.svg" alt="" id="LOGO">
                    <TransitionGroup name="fade">
                        <div v-for="image in images.filter((x, i) => i == imageid)" :key="image" class="image" :style="{ 'background-image': `url(${image})` }"></div>
                    </TransitionGroup>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            images: [
                require('../assets/1.jpg'),
                require('../assets/2.jpg'),
                require('../assets/3.jpg'),
                require('../assets/4.jpg'),
            ],
            selected: 0,
            imageid: 0,
            menuInterval: null,
            imageInterval: null
        }
    },
    mounted() {

        for (let image of this.images) {
            let img = new Image()
            img.src = image
        }


        this.setMenuTimer()
        this.setImageTimer()

    },
    unmounted() {
        clearInterval(this.menuInterval)
        clearInterval(this.imageInterval)
    }, methods: {
        setMenuTimer() {
            clearInterval(this.menuInterval)
            this.menuInterval = setInterval(() => {
                this.nextMenuItem()
            }, 10 * 1000)
        },
        setImageTimer() {
            clearInterval(this.imageInterval)
            this.imageInterval = setInterval(() => {
                this.nextImage()
            }, 7 * 1000)
        },
        nextMenuItem() {
            this.selected += 1
            this.selected = this.selected % 3
        },
        nextImage() {
            this.imageid += 1
            this.imageid = this.imageid % this.images.length
            this.setImageTimer()
        },
        selectMenuItem(i) {
            this.setMenuTimer()
            this.selected = i
        }
    }
}
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.display {

    #IG {
        cursor: pointer;
        position: absolute;
        color: white;
        z-index: 1;
        bottom: 113px;
        left: 50%;
        transform: translate(-50%, 0);

        &:hover {
            opacity: 0.8;
        }

        text-decoration: none;
    }

    #LOGO {
        pointer-events: none;
        position: absolute;
        z-index: 1;
        bottom: 40px;
        left: 50%;
        transform: translate(-50%, 0);
        max-width: 678px;
        min-width: 378px;
    }
}
</style>