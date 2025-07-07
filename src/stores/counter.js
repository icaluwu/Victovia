import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// ✅ Import langsung agar diproses Vite (dibundel & path diubah otomatis saat build)
import bgImage from '@/assets/img/bg.webp'
import hero1 from '@/assets/img/cat1.webp'
import hero2 from '@/assets/img/cat3.webp'

import cat2 from '@/assets/img/cat2.webp'
import cat4 from '@/assets/img/cat4.webp'
import cat5 from '@/assets/img/cat5.webp'

import team1 from '@/assets/img/team1.webp'
import team2 from '@/assets/img/team2.webp'
import team3 from '@/assets/img/team3.webp'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  // ✅ Ini sudah bukan string path, tapi hasil import
  const backgroundImage = ref(bgImage)
  const heroImage = ref(hero1)
  const locImage = ref(hero2)

  const cats = ref([
    { name: "Milo", description: "Kucing ramah dan lucu.", image: cat2 },
    { name: "Luna", description: "Suka bermain dan manja.", image: cat4 },
    { name: "Simba", description: "Pemberani dan cerdas.", image: cat5 },
  ])

  const team = ref([
    { name: "Alice", role: "Founder & CEO", image: team1 },
    { name: "Bob", role: "Veterinarian", image: team2 },
    { name: "Charlie", role: "Adoption Specialist", image: team3 }
  ])

  return {
    count,
    doubleCount,
    increment,
    cats,
    backgroundImage,
    heroImage,
    team,
    locImage
  }
})
