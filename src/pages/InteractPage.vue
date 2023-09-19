<template>
    <div class="interact">
        <ModelView></ModelView>
        <img src="../assets/RORINGCOSMOS_LOGO.svg" alt="" id="LOGO">
    </div>
</template>
  
<script>

import ModelView from '../components/ModelView.vue'

export default {
    name: 'App',
    components: {
        ModelView
    }
}
</script>
  
<style scoped lang="scss">
.interact {
    width: 100%;
    height: 100%;

    #LOGO {
        pointer-events: none;
        position: absolute;
        z-index: 1;
        bottom: 30px;
        left: 50%;
        transform: translate(-50%, 0);
        width: 32%;
        min-width: 200px;
    }
}
</style>
  