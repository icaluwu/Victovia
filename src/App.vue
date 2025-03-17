<template>
  <!-- Im using header and footer in App.vue for simplicity -->
  <div class="app-container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="/">Victovia</a>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/location">Location</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="content-container">
      <router-view />
    </div>

    <footer class="footer">
      <p>&copy; 2025 Victovia | Tempat Adopsi Kucing</p>
    </footer>
  </div>
</template>

<style>
/* Background WebP */
.app-container {
  background: url('/src/assets/img/bg.webp') no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Container utama */
.content-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

/* Box blur */
.blur-box {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  max-width: 500px;
  color: white;
}

/* Footer */
.footer {
  background: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  padding: 10px 0;
  position: relative;
  width: 100%;
}
</style>
