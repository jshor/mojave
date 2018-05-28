<template>
    <div class="ribbon">
        <div class="ribbon__tabs">
            <ribbon-tab text="Font" />
            <ribbon-tab text="Insert" :is-active="true" />
            <ribbon-tab text="Another" />
        </div>
        <div class="ribbon__ribbons">
            <insert-ribbon />
        </div>
    </div>
</template>

<script>
import RibbonTab from './components/RibbonTab'
import InsertRibbon from './contextual/InsertRibbon'

export default {
    name: 'Ribbon',
    components: { InsertRibbon, RibbonTab }
}
</script>

<style>
.ribbon {
    background-color: #5AB783;
}

.ribbon__tabs {
    display: flex;
}

</style>