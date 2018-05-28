<template>
    <div class="ribbon-radio">
        <label class="ribbon-radio__label">
            {{ label }}
            <input type="radio" class="ribbon-radio__input" />
            <span class="ribbon-radio__checkmark"></span>
        </label>
    </div>
</template>

<script>
export default {
    name: 'RibbonRadio',
    props: ['label']
}
</script>

<style>
.ribbon-radio {
    display: flex;
    justify-content: center;
    padding: 0.25rem;
    height: 100%;
}

/* The container */
.ribbon-radio__label {
    display: block;
    position: relative;
    padding-left: calc(0.25rem + 0.1rem + 16px);
}

/* Hide the browser's default radio */
.ribbon-radio__input {
    position: absolute;
    opacity: 0;
}

/* Create a custom radio */
.ribbon-radio__checkmark {
    position: absolute;
    left: 0.1rem;
    top: 0.1rem;
    height: 16px;
    width: 16px;
    background-color: #eee;
    border: 1px solid #6E6E6E;
    border-radius: 50%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* On mouse-over, add a grey background color */
.ribbon-radio__label:hover .ribbon-radio__input ~ .ribbon-radio__checkmark {
    background-color: #ccc;
}

/* On mousedown, add a dark grey background color */
.ribbon-radio__label:active:hover .ribbon-radio__input ~ .ribbon-radio__checkmark {
    background-color: #808080;
}

/* Create the checkmark/indicator (hidden when not checked) */
.ribbon-radio__checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the checkmark when checked */
.ribbon-radio__input:checked ~ .ribbon-radio__checkmark:after {
    display: block;
}

/* Style the checkmark/indicator */
.ribbon-radio__checkmark:after {
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: #000;
}
</style>