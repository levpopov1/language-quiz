<template>
  <div id="quizResults">
    <div class="row mb-4">
      <div class="col-sm-4">
        <div class="card text-white bg-success">
          <div class="card-body text-center">
            <h1 class="title">{{ numCorrect }}</h1>
            <h5 class="card-title">Correct Answers</h5>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card text-white bg-danger">
          <div class="card-body text-center">
            <h1 class="title">{{ numWrong }}</h1>
            <h5 class="card-title">Incorrect Answers</h5>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card">
          <div class="card-body text-center">
            <h1 class="title">{{ limit }}</h1>
            <h5 class="card-title">Total Questions</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center mb-4">
      <div class="col-sm-4 text-center">
        <button class="btn btn-primary" @click="resetQuiz">Try Again</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    name: "QuizResults",
    data(){
      return {
        something: ""
      }
    },
    computed: {
      ...mapState('Quiz', ["limit", "numCorrect", "numWrong"]),
    },
    methods: {
      ...mapActions('Quiz', ["resetQuiz"]),
    }
}
</script>

<style>

</style>