<template>
  <div>
    <Score/>
    <Question v-if="index < limit && !isEmpty(currentQ)"/>
    <QuizResults v-if="index + 1 == limit"/>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Score from '@/components/Score';
import QuizResults from '@/components/QuizResults';
import Question from '@/components/Question';
export default {
  name: "Quiz",
  components:{
    Score,
    Question,
    QuizResults,
  },
  methods: {
    ...mapActions('Quiz', ["fetchAlphabet", "fetchQuestions"]),
    isEmpty(obj){
      return Object.keys(obj).length === 0;
    }
  },
  computed: {
    ...mapState('Quiz', ["limit", "index", "currentQ"])
  },
  // data(){
  //   return {
  //     guessCount: 0
  //   }
  // },
  // methods: {
  //   ...mapActions('Quiz', ["fetchAlphabet", "fetchQuestions", "incrementCorrect", "incrementWrong", "nextQuestion", "setLimit"]),
  //   shuffle(array){
  //     var currentIndex = array.length, temporaryValue, randomIndex;

  //     // While there remain elements to shuffle...
  //     while (0 !== currentIndex) {

  //       // Pick a remaining element...
  //       randomIndex = Math.floor(Math.random() * currentIndex);
  //       currentIndex -= 1;

  //       // And swap it with the current element.
  //       temporaryValue = array[currentIndex];
  //       array[currentIndex] = array[randomIndex];
  //       array[randomIndex] = temporaryValue;
  //     }

  //     return array;
  //   },
  //   onlyUnique(value, index, self) {
  //     return self.indexOf(value) === index;
  //   },
  //   randomSelection(array, quantity){
  //     let collection = [];
  //     for (let index = 0; index < quantity; index++) {
  //       let item = array[Math.floor(Math.random() * array.length)];
  //       collection.push(item);
  //     }
  //     return collection;
  //   },
  //   getWrongAnswers(quantity){
  //     let options = this.shuffle(this.alphabet);
  //     let collection = [];
  //     for (let index = 0; index < quantity; index++) {
  //       collection.push(options[index].en);
  //     }
  //     if(collection.includes(this.currentQ.en)){
  //       collection = collection.filter(item => item != this.currentQ.en);
  //       collection.push(options[quantity+1].en);
  //     }
  //     return collection;
  //   },
  //   evaluateGuess(correctGuess){
  //     if(correctGuess){
  //       if(this.guessCount < 1){
  //         this.incrementCorrect();
  //       }
  //       if(this.index +1 < this.limit){
  //         setTimeout(() => {
  //           this.nextQuestion();
  //         }, 300);
  //       }
  //       else{
  //         // end quiz and show results
  //       }
  //     }
  //     else{
  //       if(this.guessCount < 1){
  //         this.incrementWrong();
  //       }
  //     }
  //     this.guessCount += 1;
  //   }
  // },
  // computed: {
  //   ...mapGetters('Quiz', ["allQuestions"]),
  //   ...mapState('Quiz', ["limit", "index", "numCorrect", "numWrong", "numTotal", "currentQ", "alphabet"]),
  //   randomizedAnswers(){
  //     let correct = this.currentQ.en;
  //     let incorrect = this.getWrongAnswers(3);
  //     return this.shuffle([correct, ...incorrect]);
  //   }
  // },
  // watch:{
  //   currentQ: function(){
  //     this.guessCount = 0;
  //   }
  // },
  created(){
    this.fetchAlphabet();
    this.fetchQuestions();
  }
};
</script>

<style>

</style>