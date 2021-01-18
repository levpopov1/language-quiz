<template>
  <div>
    <div v-for="(letterType, index) in letterTypes" v-bind:key="index">
      <h1 class="title">{{ letterType }}</h1>
      <div class="row row-cols-md-3 mb-4" v-bind:class="rowCols(letterType)">
        <Letter v-for="item in getLetters(letterType)" v-bind:key="item._id" v-bind:item="item" v-bind:lang="lang"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import Letter from '@/components/Letter';
export default {
  name: "AllLetters",
  components:{
    Letter
  },
  methods: {
    ...mapActions('Quiz', ["fetchAlphabet"]),
    getLetters(letterType){
      return this.getLettersByType(letterType)
    },
    rowCols(letterType){
      let narrowLetters = ["consonant", "vowel", "monograph", "diacritic", "double-consonant", "double-vowel"];
      let wideLetters = ["diagraph", "diagraph with diacritic"];
      let isNarrow = narrowLetters.includes(letterType);
      let isWide = wideLetters.includes(letterType);
      return {
        'row-cols-1': isWide ? true : false,
        'row-cols-2': isNarrow ? true : false,
        'row-cols-lg-3': isWide ? true : false,
        'row-cols-lg-4': this.lang === "kr" ? true : false,
        'row-cols-lg-5': this.lang === "jp" && isNarrow ? true : false
      }
    }
  },
  computed: {
    ...mapGetters('Quiz', ["getLettersByType"]),
    ...mapState('Quiz', ["alphabet", "letterTypes", "lang"]),
  },
  created(){
    this.fetchAlphabet();
  }
};
</script>

<style>

</style>