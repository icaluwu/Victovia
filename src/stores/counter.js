import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  // Tambahkan daftar gambar kucing
  const cats = ref([
    { name: "Milo", description: "Kucing ramah dan lucu.", image: "/src/assets/img/cat2.webp" },
    { name: "Luna", description: "Suka bermain dan manja.", image: "/src/assets/img/cat4.webp" },
    { name: "Simba", description: "Pemberani dan cerdas.", image: "/src/assets/img/cat5.webp" },
  ])

  return { count, doubleCount, increment, cats }
})
