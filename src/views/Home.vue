<template>
  <div class="container-fluid" id="home">
    <Alphabet/>
  </div>
</template>

<script>
// @ is an alias to /src
import Alphabet from '@/components/Alphabet.vue'

export default {
  name: 'Home',
  components: {
    Alphabet,
  }
}
</script>
