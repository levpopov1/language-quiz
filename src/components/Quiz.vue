<template>
  <div>
    <Score v-if="index < limit && !isEmpty(currentQ)"/>
    <Question v-if="index < limit && !isEmpty(allLetters) && !isEmpty(currentQ)"/>
    <QuizResults v-if="index == limit"/>
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
    ...mapState('Quiz', ["limit", "index", "currentQ", "allLetters"])
  },
  created(){
    this.fetchAlphabet();
    this.fetchQuestions();
  }
};
</script>

<style>

</style>