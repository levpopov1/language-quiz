<template>
  <div>
    <div v-for="(letterType, index) in letterTypes" v-bind:key="index">
      <h1 class="title">{{ letterType }}</h1>
      <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5 mb-4">
        <div class="col mb-4" v-for="item in getLetters(letterType)" v-bind:key="item.id">
          <div  class="card hoverable h-100">
            <div class="card-body">
              <h1 class="display-10 text-center">{{ item[lang] }}</h1>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item display-5 text-center">{{ item.en }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
export default {
  name: "AllLetters",
  data(){
    return{
      rowCols: 0
    }
  },
  methods: {
    ...mapActions('Quiz', ["fetchAlphabet"]),
    getLetters(letterType){
      return this.getLettersByType(letterType)
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