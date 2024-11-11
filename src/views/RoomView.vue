<template>
<div>
<!-- <h1>Game Scene</h1> -->
<div class="idDiv">
<p>You: @username</p>
</div>
<canvas></canvas>
</div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
//import { BabylonScene } from '@/BabylonOne/BabylonScene';
import { FPS } from '@/BabylonOne/FPS';

onMounted(() => {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
  //  new BabylonScene(canvas)
  new FPS(canvas);
})
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Roboto:wght@100;700&display=swap");

canvas {
    width: 620px;
    height: 480px;
    /* background-color: brown; */
    border-radius: 24px;
}
.idDiv {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>
