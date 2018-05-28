<template>
    <div class="ribbon">
        <ribbon-group text="Font">
            <ribbon-column>
                <ribbon-combo-box />
            </ribbon-column>
        </ribbon-group>
        <ribbon-group text="gdfgdfg">
            <ribbon-column>
                <ribbon-checkbox label="Sample checkbox" />
                <ribbon-radio label="Sample radio button" />
                <ribbon-button
                    text="Inlinebutton"
                    size="sm"
                    arrangement="inline"
                />
            </ribbon-column>
            <ribbon-column>
                <ribbon-button
                    text="Sample large button"
                    size="lg"
                />
            </ribbon-column>
        </ribbon-group>
    </div>
</template>

<script>
import RibbonButton from '@/components/Ribbon/components/RibbonButton'
import RibbonCheckbox from '@/components/Ribbon/components/RibbonCheckbox'
import RibbonComboBox from '@/components/Ribbon/components/RibbonComboBox'
import RibbonColumn from '@/components/Ribbon/components/RibbonColumn'
import RibbonGroup from '@/components/Ribbon/components/RibbonGroup'
import RibbonRadio from '@/components/Ribbon/components/RibbonRadio'

export default {
    name: 'TextRibbon',
    components: { RibbonButton, RibbonCheckbox, RibbonComboBox, RibbonColumn, RibbonGroup, RibbonRadio }
}
</script>

<style scoped>
.ribbon {
    background-color: #F1F1F1;
    padding: 0.25rem;
    color: #3C3C3C;
    display: flex;
}
</style>