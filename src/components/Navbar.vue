<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <div class="container">
        <router-link to="/" class="navbar-brand">
          <img src="favicon.svg" width="30" height="30" class="d-inline-block align-top mr-2" alt="Logo">
          Learn <span class="capitalize">{{ language }}</span>
        </router-link>
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
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                Number of Questions: {{ limit }}
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
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                Language: {{ languageDisplayString }}
              </a>
              <div class="dropdown-menu">
                <li><button class="dropdown-item" @click="changeLanguage('hiragana')">Japanese - Hiragana</button></li>
                <li><button class="dropdown-item" @click="changeLanguage('katakana')">Japanese - Katakana</button></li>
                <li><button class="dropdown-item" @click="changeLanguage('hangul')">Korean - Hangul</button></li>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: 'Navbar',
  methods: {
    ...mapActions('Quiz', ["setLimit", "changeLanguage"]),
  },
  computed: {
    ...mapState('Quiz', ["language", "limit", "languageDisplayString"]),
  },
}
</script>
