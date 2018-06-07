<template>
    <div class="ribbon">
        <ribbon-group text="">
            <ribbon-column>
                <ribbon-button
                    text="Pointer"
                    size="lg"
                />
            </ribbon-column>
        </ribbon-group>
        <ribbon-group text="Shapes">
            <ribbon-column>
                <ribbon-button
                    text="Rectangle"
                    size="lg"
                />
            </ribbon-column>
            <ribbon-column>
                <ribbon-button
                    text="Ellipse"
                    size="lg"
                />
            </ribbon-column>
            <ribbon-column>
                <ribbon-button
                    text="Line"
                    size="lg"
                />
            </ribbon-column>
            <ribbon-column>
                <ribbon-button
                    text="Other"
                    size="lg"
                    :split="true"
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