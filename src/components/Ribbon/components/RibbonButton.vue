<template>
    <a :class="`ribbon-button ribbon-button--${size} ribbon-button--${arrangement}`">
        <div class="ribbon-button__icon"></div>
        <a>
            <span class="ribbon-button__text">{{ text }}</span>
        </a>
    </a>
</template>

<script>
export default {
    name: 'RibbonButton',
    props: ['arrangement', 'size', 'text']
}
</script>

<style>
.ribbon-button {
    border: 1px solid transparent;
    padding: 0.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 100%;
}

.ribbon-button:hover {
    background-color: #c0c0c0;
}

.ribbon-button:hover:active {
    background-color: #808080;
}

.ribbon-button__icon {
    background-color: #000;
    display: block;
}

.ribbon-button__text {
    padding-top: 0.25rem;
    display: table-caption;
}

.ribbon-button--lg .ribbon-button__icon {
    width: 32px;
    height: 32px;
}

.ribbon-button--sm .ribbon-button__icon {
    width: 16px;
    height: 16px;
}

.ribbon-button--inline {
    flex-direction: row;
}

.ribbon-button--inline .ribbon-button__text {
    padding-top: 0;
    padding-left: 0.25rem;
}
</style>