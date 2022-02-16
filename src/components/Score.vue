<template>
  <div class="row justify-content-center align-items-center" id="scorePanel">
    <div class="col-sm-12 mb-3">
      <div class="card">
        <div class="card-body d-flex flex-row justify-content-between">
          <p class="card-text m-0">Correct: <span class="badge bg-success p-2 ms-2">{{numCorrect}}</span></p>
          <p class="card-text m-0 d-none d-md-block">Question {{ index+1 }} / {{ limit }}</p>
          <p class="card-text m-0">Wrong: <span class="badge bg-danger p-2 ms-2">{{numWrong}}</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  export default {
    name: "Score",
    computed: {
      ...mapState('Quiz', ["limit", "index", "numCorrect", "numWrong"]),
    }
  }
</script>

<style>

</style>