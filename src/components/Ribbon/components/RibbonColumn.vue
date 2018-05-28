<template>
    <div class="ribbon-column">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'RibbonColumn'
}
</script>

<style>
.ribbon-column {
    display: flex;
    flex-direction: column;
}
</style>
