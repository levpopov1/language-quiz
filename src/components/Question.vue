<template>
  <div>
    <div class="row">
      <div class="col-sm-12 mb-3">
        <div class="card">
          <div class="card-body">
            <h1 class="display-20 text-center">{{ currentQ[lang] }}</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="row row-cols-2 justify-content-center">
      <Guess v-for="(guess, index) in randomizedAnswers" v-bind:key="index" v-bind:guess="guess"
        v-bind:guessCount="guessCount" v-on:madeGuess="evaluateGuess" />
    </div>
    <div class="row justify-content-center">
      <div class="col-sm-6 mb-3">
        <p class="text-center p-3 d-block d-md-none">Question {{ index+1 }} / {{ limit }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState, mapMutations } from "vuex";
  import Guess from '@/components/guess';
  import {shuffle} from '@/lib/arrayHelpers';
  export default {
    name: "Question",
    components:{
      Guess
    },
    data(){
      return {
        guessCount: 0
      }
    },
    methods: {
      ...mapActions('Quiz', ["incrementCorrect", "incrementWrong", "nextQuestion"]),
      ...mapMutations('Quiz', ["incrementIndex"]),
      getWrongAnswers(quantity){
        let options = shuffle(this.alphabet);
        let collection = [];
        for (let index = 0; index < quantity; index++) {
          collection.push(options[index].en);
        }
        if(collection.includes(this.currentQ.en)){
          collection = collection.filter(item => item != this.currentQ.en);
          collection.push(options[quantity+1].en);
        }
        return collection;
      },
      evaluateGuess(correctGuess){
        if(correctGuess){
          if(this.guessCount < 1){
            this.incrementCorrect();
          }
          if(this.index +1 < this.limit){
            setTimeout(() => {
              this.nextQuestion();
            }, 300);
          }
          else{
            // end quiz and show results
            setTimeout(() => {
              this.incrementIndex();
            }, 300);
          }
        }
        else{
          if(this.guessCount < 1){
            this.incrementWrong();
          }
        }
        this.guessCount += 1;
      }
    },
    computed: {
      ...mapState('Quiz', ["limit", "index", "currentQ", "alphabet", "lang"]),
      randomizedAnswers(){
        let correct = this.currentQ.en;
        let incorrect = this.getWrongAnswers(3);
        return shuffle([correct, ...incorrect]);
      }
    },
    watch:{
      currentQ: function(){
        this.guessCount = 0;
      }
    },
  }
</script>

<style>

</style>