<template>
    <div class="ribbon-group">
        <div class="ribbon-group__buttons">
            <slot />
        </div>
        <div class="ribbon-group__text">{{ text }}</div>
    </div>
</template>

<script>
export default {
    name: 'RibbonGroup',
    props: ['text']
}
</script>

<style>
.ribbon-group {
    border-right: 1px solid #D6D6D6;
    display: flex;
    flex-direction: column;
}

.ribbon-group__buttons {
    display: flex;
    flex-direction: row;
}

.ribbon-group__text {
    font-size: 0.7rem;
    text-align: center;
}
</style>