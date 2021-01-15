<template>
  <div class="col-sm-2 mb-3">
    <div class="card hoverable">
      <div class="card-body text-center p-0">
        <button type="button" class="btn btn-block display-5 p-3" @click="evaluateGuess">{{ guess }}</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from "vuex";
  export default {
    name: "Guess",
    props: ["guess"],
    methods: {
      ...mapActions('Quiz', ["incrementCorrect", "incrementWrong", "nextQuestion"]),
      evaluateGuess(){
        if(this.guess === this.currentQ.en){
          this.incrementCorrect();
          this.nextQuestion();
        }
        else{
          this.incrementWrong();
        }
        // TODO: 
        // 1. define quiz end
        // 2. highlight wrong/right selections
      }
    },
    computed:{
      ...mapState('Quiz', ["currentQ"]),
    }
  }
</script>

<style>

</style>