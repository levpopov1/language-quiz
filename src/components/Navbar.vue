<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <div class="container">
        <router-link to="/" class="navbar-brand">Learn Hangul</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMain" aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbarMain">
          <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <router-link to="/" class="nav-link">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/alphabet" class="nav-link">Alphabet</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link">About</router-link>
              </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                Number of Questions
              </a>
              <div class="dropdown-menu">
                <li><button class="dropdown-item" @click="setLimit(25)">25</button></li>
                <li><button class="dropdown-item" @click="setLimit(50)">50</button></li>
                <li><button class="dropdown-item" @click="setLimit(75)">75</button></li>
                <li><button class="dropdown-item" @click="setLimit(100)">100</button></li>
                <li><button class="dropdown-item" @click="setLimit(150)">150</button></li>
                <li><button class="dropdown-item" @click="setLimit(200)">200</button></li>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark disabled" href="#">{{ limit }}</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                Language
              </a>
              <div class="dropdown-menu">
                <li><button class="dropdown-item" @click="setLanguage('hiragana')">Japanese - Hiragana</button></li>
                <li><button class="dropdown-item" @click="setLanguage('katakana')">Japanese - Katakana</button></li>
                <li><button class="dropdown-item" @click="setLanguage('hangul')">Korean - Hangul</button></li>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark disabled" href="#">{{ languageDisplayString }}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  name: 'Navbar',
  components: {

  },
  methods: {
    ...mapActions('Quiz', ["setLimit", "setLanguage"]),
    ...mapMutations('Quiz', ["setLanguage"])
  },
  computed: {
    ...mapState('Quiz', ["limit", "languageDisplayString"]),
  },
}
</script>
