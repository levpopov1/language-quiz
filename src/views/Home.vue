<template>
  <div class="container-fluid" id="home">
    <Quiz/>
  </div>
</template>

<script>
// @ is an alias to /src
import Quiz from '@/components/Quiz.vue'

export default {
  name: 'Home',
  components: {
    Quiz
  }
}
</script>
