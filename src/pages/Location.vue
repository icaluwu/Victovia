<template>
    <div class="location">
        <!-- Hero Section -->
        <section :style="{ backgroundImage: `url(${locImage})` }" class="hero d-flex align-items-center">
            <div class="container text-center">
                <h1 class="hero-title">Lokasi Victovia</h1>
                <p class="hero-subtitle">Temukan kami dengan mudah dan kunjungi tempat adopsi kucing kami.</p>
            </div>
        </section>

        <!-- Detail Lokasi -->
        <section class="location-details py-5">
            <div class="container">
                <h2 class="text-center">Alamat Kami</h2>
                <p class="text-center">Jl. Kucing Bahagia No. 10, Jakarta, Indonesia</p>
                <div class="row">
                    <div class="col-md-6 text-center">
                        <h4>Jam Operasional</h4>
                        <ul class="list-unstyled">
                            <li>Senin - Jumat: 09.00 - 18.00</li>
                            <li>Sabtu - Minggu: 10.00 - 16.00</li>
                        </ul>
                    </div>
                    <div class="col-md-6 text-center">
                        <h4>Kontak Kami</h4>
                        <ul class="list-unstyled">
                            <li><i class="bi bi-telephone-fill"></i> +62 812-3456-7890</li>
                            <li><i class="bi bi-envelope-fill"></i> contact@victovia.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Peta Lokasi -->
        <section class="map py-5">
            <div class="container text-center">
                <h2>Lokasi di Peta</h2>
                <iframe class="google-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.2341587148983!2d107.6296496748547!3d-7.217264871381303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9a9c9e8b6b1%3A0xd28f0c9e64b5a817!2sBandung%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1700000000000"
                    allowfullscreen="" loading="lazy">
                </iframe>
            </div>
        </section>
    </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter.js'
import { storeToRefs } from 'pinia'

const counter = useCounterStore()
const { locImage } = storeToRefs(counter)
</script>

<style>
/* Hero Section */
.hero {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 80vh;
    color: black;
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

/* Location Details */
.location-details {
    text-align: center;
}

/* Map */
.google-map {
    width: 100%;
    height: 400px;
    border: none;
}
</style>