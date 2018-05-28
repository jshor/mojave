<template>
    <div class="ribbon-combo-box">
        <ou-dropdown
            :placeholder="value || ''">
          <ou-dropdown-item
            v-for="font in fonts"
            :key="font"
            :value="font">{{ font }}</ou-dropdown-item>
        </ou-dropdown>
    </div>
</template>

<script>
export default {
    name: 'RibbonComboBox',
    data () {
        return {
            fonts: ['Arial', 'Tahoma', 'Comic Sans MS']
        }
    },
    props: ['value']
}
</script>

<style>
.ribbon-combo-box {
    font-size: 12px;
    width: 150px;
    padding: 0.25rem;
}

.ribbon-combo-box .ms-Dropdown {
    font-size: 12px;
    margin: 0;
}

.ribbon-combo-box .ms-Dropdown-title {
    padding-top: 0px;
    height: 18px;
    cursor: default;
}

.ribbon-combo-box .ms-Dropdown-caretDown {
    bottom: 3px;
    font-size: 10px;
}

.ribbon-combo-box .ms-Dropdown-item {
    cursor: default;
    padding: 3px 10px;
    height: inherit;
}
</style>