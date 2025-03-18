<template>
    <div class="about">
        <!-- Hero Section -->
        <section :style="{ backgroundImage: `url(${heroImage})` }" class="hero d-flex align-items-center">
            <div class="container text-center">
                <h1 class="hero-title">Tentang Victovia</h1>
                <p class="hero-subtitle">Misi kami adalah membantu kucing menemukan rumah baru yang penuh kasih sayang.
                </p>
            </div>
        </section>

        <!-- Tentang Kami -->
        <section class="about-content py-5">
            <div class="container">
                <h2 class="text-center">Siapa Kami?</h2>
                <p class="text-center">Victovia adalah komunitas pecinta kucing yang bertujuan untuk menyediakan rumah
                    bagi kucing terlantar dan membantu mereka menemukan pemilik baru yang bertanggung jawab.</p>
                <div class="row text-center mt-4">
                    <div class="col-md-4">
                        <i class="bi bi-heart-fill icon"></i>
                        <h4>Peduli Hewan</h4>
                        <p>Kami menyelamatkan kucing dan memberikan perawatan terbaik.</p>
                    </div>
                    <div class="col-md-4">
                        <i class="bi bi-shield-check icon"></i>
                        <h4>Kesehatan Terjamin</h4>
                        <p>Setiap kucing telah divaksinasi dan diperiksa kesehatannya.</p>
                    </div>
                    <div class="col-md-4">
                        <i class="bi bi-house-heart icon"></i>
                        <h4>Adopsi Mudah</h4>
                        <p>Proses adopsi transparan dan tanpa biaya tersembunyi.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Tim Kami -->
        <section class="team py-5">
            <div class="container">
                <h2 class="text-center">Tim Victovia</h2>
                <div class="row">
                    <div v-for="(team, index) in team" :key="index" class="col-md-4">
                        <div class="card text-center">
                            <img :src="team.image" class="card-img-top" alt="Team Member">
                            <div class="card-body">
                                <h5 class="card-title">{{ team.name }}</h5>
                                <p class="card-text">{{ team.role }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter.js'
import { storeToRefs } from 'pinia'

const counter = useCounterStore()
const { heroImage } = storeToRefs(counter)
const { team } = storeToRefs(counter)
</script>

<style>
/* Hero Section */
.hero {
    height: 60vh;
    color: white;
    display: flex;
    align-items: center;
    text-align: center;
}

.hero-title {
    font-size: 3rem;
    font-weight: bold;
}

.hero-subtitle {
    font-size: 1.5rem;
    margin-top: 10px;
}

/* About Content */
.about-content {
    text-align: center;
}

/* Icons */
.icon {
    font-size: 3rem;
    color: #f76c6c;
    margin-bottom: 10px;
}

/* Team Section */
.team .card {
    margin-top: 20px;
}

.team .card img {
    height: 250px;
    object-fit: cover;
}
</style>