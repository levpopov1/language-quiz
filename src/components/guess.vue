<template>
  <div class="col-sm-6 col-md-3">
    <div class="card hoverable mb-3">
      <div class="card-body text-center p-0">
        <button type="button" class="btn btn-block display-5 p-3" @click="setHighlight" v-bind:class="[highlight]">{{ guess }}</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  export default {
    name: "Guess",
    props: ["guess", "guessCount"],
    data(){
      return {
        highlight: "",
      }
    },
    methods: {
      setHighlight(){
        let correctGuess = this.guess === this.currentQ.en;
        if(correctGuess){
          this.highlight = "btn-success";
        }
        else{
          this.highlight = "btn-danger";
        }
        
        this.$emit('madeGuess', correctGuess);
        // TODO: 
        // 1. define quiz end
        // 2. highlight wrong/right selections
      }
    },
    computed:{
      ...mapState('Quiz', ["currentQ"]),
    },
    watch:{
      currentQ: function(){
        this.highlight = "";
      }
    }
  }
</script>

<style>

</style>