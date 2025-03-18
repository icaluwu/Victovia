<template>
  <div class="home">
    <!-- Hero Section -->
    <section :style="{ backgroundImage: `url(${heroImage})` }" class="hero d-flex align-items-center">
      <div class="container text-center">
        <h1 class="hero-title">Welcome to Victovia</h1>
        <p class="hero-subtitle">Tempat terbaik untuk menemukan teman berbulu.</p>
        <button class="btn btn-primary btn-lg">Adopt Now</button>
      </div>
    </section>

    <!-- Kenapa Pilih Victovia? -->
    <section class="why-choose text-center py-5">
      <div class="container border border-black bg-white text-dark">
        <h2>Kenapa Pilih Victovia?</h2>
        <div class="row">
          <div class="col-md-4">
            <i class="bi bi-heart-fill icon"></i>
            <h4>Peduli Hewan</h4>
            <p>Semua kucing dirawat dengan kasih sayang sebelum diadopsi.</p>
          </div>
          <div class="col-md-4">
            <i class="bi bi-shield-check icon"></i>
            <h4>Sehat & Terawat</h4>
            <p>Kucing sudah divaksin dan diperiksa kesehatannya.</p>
          </div>
          <div class="col-md-4">
            <i class="bi bi-house-heart icon"></i>
            <h4>Adopsi Mudah</h4>
            <p>Proses adopsi cepat, aman, dan transparan.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Daftar Kucing -->
    <section class="available-cats py-5">
      <div class="container">
        <h2 class="text-center">Kucing Tersedia untuk Adopsi</h2>
        <div class="row">
          <div v-for="(cat, index) in cats" :key="index" class="col-md-4">
            <div class="card">
              <img :src="cat.image" class="card-img-top" alt="Kucing">
              <div class="card-body text-center">
                <h5 class="card-title">{{ cat.name }}</h5>
                <p class="card-text">{{ cat.description }}</p>
                <button class="btn btn-success">Adopsi</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta text-center py-5">
      <div class="container">
        <h2>Siap Adopsi Kucing?</h2>
        <button class="btn btn-lg btn-warning">Hubungi Kami</button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter.js'
import { storeToRefs } from 'pinia'

const counter = useCounterStore()
const { cats } = storeToRefs(counter) // Akses ke`cats` dari counter.js
const { heroImage } = storeToRefs(counter)
</script>


<style>
/* Hero Section */
.hero {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  color: white;
  display: flex;
  text-align: center;
}

.hero-title {
  font-size: 3rem;
  font-weight: bold;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

/* Kenapa Pilih Victovia */
.icon {
  font-size: 3rem;
  color: #f76c6c;
}

/* Daftar Kucing */
.card {
  margin-top: 20px;
}

.card img {
  height: 200px;
  object-fit: cover;
}

/* CTA */
.cta {
  background: #f76c6c;
  color: white;
}
</style>