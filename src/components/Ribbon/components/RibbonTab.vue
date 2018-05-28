<template>
    <span
        class="ribbon-tab"
        :class="{ 'ribbon-tab--active': isActive }">
        {{ text}}
    </span>
</template>

<script>
export default {
    name: 'RibbonTab',
    props: ['text', 'isActive']
}
</script>


<style>

.ribbon-tab {
    color: #F1F1F1;
    padding: 0.5rem 1rem;
}

.ribbon-tab:not(.ribbon-tab--active):hover {
    background-color: #3e8e61;
    color: #F1F1F1;
}

.ribbon-tab--active {
    background-color: #F1F1F1;
    color: #5AB783;
}
</style>