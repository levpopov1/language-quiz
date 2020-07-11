<template>
  <div>
    <div class="row justify-content-center" id="scorePanel">
      <div class="col-sm-6 mb-3">
        <div  class="card">
          <div class="card-body d-flex flex-row justify-content-between">
            <p class="card-text m-0">Correct: <span class="badge badge-success p-2 ml-2">{{numCorrect}}</span></p>
            <p class="card-text m-0">Wrong: <span class="badge badge-danger p-2 ml-2">{{numWrong}}</span></p>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-sm-6 mb-3">
        <div  class="card">
          <div class="card-body">
            <h1 class="display-20 text-center">{{ currentQ.kr }}</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="row row-cols-2 justify-content-center">
      <div class="col-sm-2 mb-3">
        <div  class="card hoverable clickable">
          <div class="card-body">
            <h1 class="display-5 text-center">{{ currentQ.en }}</h1>
          </div>
        </div>
      </div>
      <div class="col-sm-2 mb-3">
        <div  class="card hoverable clickable">
          <div class="card-body">
            <h1 class="display-5 text-center">{{ currentQ.en }}</h1>
          </div>
        </div>
      </div>
      <div class="col-sm-2 mb-3">
        <div  class="card hoverable clickable">
          <div class="card-body">
            <h1 class="display-5 text-center">{{ currentQ.en }}</h1>
          </div>
        </div>
      </div>
      <div class="col-sm-2 mb-3">
        <div  class="card hoverable clickable">
          <div class="card-body">
            <h1 class="display-5 text-center">{{ currentQ.en }}</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col text-center mb-3">
        <button class="btn btn-success mr-3" @click="incrementCorrect">Correct</button>
        <button class="btn btn-danger mr-3" @click="incrementWrong">Wrong</button>
        <button class="btn btn-primary mr-3" @click="nextQuestion">Next</button>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-sm-6 mb-3">
        <h1 class="text-center">{{ index+1 }} / {{ limit }}</h1>
      </div>
    </div>


    <div class="row justify-content-center">
      <div class="col-sm-6 text-center mb-3">
          <button class="btn btn-secondary mx-3" @click="setLimit(25)">25</button>
          <button class="btn btn-secondary mx-3" @click="setLimit(50)">50</button>
          <button class="btn btn-secondary mx-3" @click="setLimit(75)">75</button>
          <button class="btn btn-secondary mx-3" @click="setLimit(100)">100</button>
          <button class="btn btn-secondary mx-3" @click="setLimit(200)">200</button>
      </div>
      <div class="col-12">
        <p class="text-center">Select number of questions</p>
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  name: "Quiz",
  methods: {
    ...mapActions('Quiz', ["fetchQuestions", "incrementCorrect", "incrementWrong", "nextQuestion", "setLimit"])
  },
  computed: {
    ...mapGetters('Quiz', ["allQuestions"]),
    ...mapState('Quiz', ["limit", "index", "numCorrect", "numWrong", "numTotal"]),
    currentQ(){
      return this.allQuestions[this.index];
    }
  },
  created(){
    this.fetchQuestions();
  }
};
</script>

<style>

</style>