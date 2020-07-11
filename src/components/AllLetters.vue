<template>
  <div>
    <div v-for="list in sorted" v-bind:key="list.title">
      <h1 class="title">{{ list.title }}</h1>
      <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 mb-4">
        <div class="col mb-4" v-for="item in list.items" v-bind:key="item.id">
          <div  class="card hoverable h-100">
            <div class="card-body">
              <h1 class="display-10 text-center">{{ item.kr }}</h1>
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
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AllLetters",
  methods: {
    ...mapActions('Alphabet', ["fetchLetters"])
  },
  computed: {
    ...mapGetters('Alphabet', ["allLetters", "letterTypes", "sorted"])
  },
  created(){
    this.fetchLetters();
  }
};
</script>

<style>

</style>