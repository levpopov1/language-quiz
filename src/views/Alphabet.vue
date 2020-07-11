<template>
  <div class="container-fluid" id="aplhabet">
    <AllLetters/>
  </div>
</template>

<script>
// @ is an alias to /src
import AllLetters from '@/components/AllLetters.vue'

export default {
  name: 'Alphabet',
  components: {
    AllLetters,
  }
}
</script>
