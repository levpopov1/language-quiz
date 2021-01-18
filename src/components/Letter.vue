<template>
  <div class="col mb-4">
    <div class="card hoverable h-100">
      <div class="card-body">
        <h1 class="display-10 text-center">{{ item[lang] }}</h1>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item display-5 text-center">{{ item.en }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Letter",
    props: ["item", "lang"]
  }
</script>

<style>

</style>