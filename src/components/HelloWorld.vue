<template>
  <div>
    <ribbon />
    <designer />
  </div>
</template>

<script>
import Designer from './Designer/Designer'
import Ribbon from './Ribbon/Ribbon'

export default {
  name: 'HelloWorld',
  components: { Designer, Ribbon }
}
</script>