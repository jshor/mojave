<template>
    <div class="ribbon-checkbox">
        <label class="ribbon-checkbox__label">
            {{ label }}
            <input type="checkbox" class="ribbon-checkbox__input" />
            <span class="ribbon-checkbox__checkmark"></span>
        </label>
    </div>
</template>

<script>
export default {
    name: 'RibbonCheckbox',
    props: ['label']
}
</script>

<style>
.ribbon-checkbox {
    display: flex;
    align-items: center;
    padding: 0.25rem;
    height: 100%;
}

/* The container */
.ribbon-checkbox__label {
    display: block;
    position: relative;
    padding-left: calc(0.25rem + 0.1rem + 16px);
}

/* Hide the browser's default checkbox */
.ribbon-checkbox__input {
    position: absolute;
    opacity: 0;
}

/* Create a custom checkbox */
.ribbon-checkbox__checkmark {
    position: absolute;
    left: 0.1rem;
    top: 0.1rem;
    height: 16px;
    width: 16px;
    background-color: #eee;
    border: 1px solid #6E6E6E;
    box-sizing: border-box;
}

/* On mouse-over, add a grey background color */
.ribbon-checkbox__label:hover .ribbon-checkbox__input ~ .ribbon-checkbox__checkmark {
    background-color: #ccc;
}

/* On mousedown, add a dark grey background color */
.ribbon-checkbox__label:active:hover .ribbon-checkbox__input ~ .ribbon-checkbox__checkmark {
    background-color: #808080;
}

/* Create the checkmark/indicator (hidden when not checked) */
.ribbon-checkbox__checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the checkmark when checked */
.ribbon-checkbox__input:checked ~ .ribbon-checkbox__checkmark:after {
    display: block;
}

/* Style the checkmark/indicator */
.ribbon-checkbox__checkmark:after {
    left: 5px;
    width: 4px;
    height: 9px;
    border: solid #000;
    border-width: 0 1px 1px 0;
    transform: rotate(45deg);
}
</style>