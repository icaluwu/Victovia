<template>
  <div :style="{ backgroundImage: `url(${backgroundImage})` }" class="app-container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="/">Victovia</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
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

<script setup>
import { useCounterStore } from '@/stores/counter.js'
import { storeToRefs } from 'pinia'

const counter = useCounterStore()
const { backgroundImage } = storeToRefs(counter)
</script>

<style>
/* Background full screen */
.app-container {
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  /* Hindari oversize */
}

/* Container utama */
.content-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
}

/* Box blur untuk teks */
.blur-box {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  max-width: 90%;
  /* Agar tidak terlalu besar */
  width: 400px;
  /* Ukuran tetap */
  color: black;
}

/* Footer responsif */
.footer {
  background: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  padding: 10px 0;
  width: 100%;
  position: relative;
}

/* Responsif untuk layar kecil */
@media (max-width: 768px) {
  .blur-box {
    width: 90%;
    padding: 15px;
  }

  .navbar-brand {
    font-size: 1.2rem;
  }

  .footer {
    font-size: 0.9rem;
  }
}
</style>
