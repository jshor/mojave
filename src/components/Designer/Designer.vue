<template>
    <canvas id="canvas"></canvas>
</template>

<script>
import { fabric } from 'fabric'
import Draw2d from './services/draw2d'

export default {
    name: 'Designer',
    mounted () {
        this.canvas = new fabric.Canvas('canvas', {
            width: 500,
            height: 500
        })

        new Draw2d(this.canvas)

        var rect = new fabric.Rect({
            top : 100,
            left : 100,
            width : 60,
            height : 70,
            fill : 'red'
        })

        console.log('canvas: ', this.canvas)

        this.canvas.add(rect)
    }
}
</script>