<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-3">
        <router-link to="/" class="navbar-brand">Learn Hangul</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMain" aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbarMain">
          <ul class="navbar-nav">
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
        </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'Navbar',
  components: {

  },
  methods: {

  }
}
</script>
