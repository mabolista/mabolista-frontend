<template>
  <div class="container px-2 sm:px-6 py-4 sm:py-8 lg:px-40 mx-auto">
    <div class="mb-6 sm:mb-8 lg:mb-20 flex flex-col sm:flex-row items-center justify-between">
      <h1 class="font-sans font-bold text-xl sm:text-2xl lg:text-4xl mb-2 sm:mb-0">
        Upcoming Events
      </h1>
      <a href="#" class="text-base sm:text-xl text-yellow-400 hover:underline">Selengkapnya...</a>
    </div>

    <Carousel :items-to-show="3" :wrap-around="true">
      <slide v-for="slide in 10" :key="slide">
        <div v-if="isAuthenticated" class="flex flex-col sm:flex-row gap-4">
          <div
            v-for="event in events"
            :key="event.id"
            class="text-left max-w-sm sm:max-w-md lg:max-w-lg bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <router-link :to="{ name: 'EventsDetails', params: { id: event.id } }">
              <img class="rounded-t-lg w-full" :src="event.imageUrl" alt="" />
            </router-link>
            <div class="p-4 sm:p-5">
              <router-link :to="{ name: 'EventsDetails', params: { id: event.id } }">
                <h5
                  class="mb-1 text-lg sm:text-xl font-bold tracking-tight text-gray-900 dark:text-white"
                >
                  {{ event.title }}
                </h5>
              </router-link>
              <p class="mb-1 text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-400">
                {{ event.location }}
              </p>
              <p class="mb-1 text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-400">
                <i class="fa-regular fa-calendar"></i> {{ event.eventDate }}
              </p>
              <p class="mb-1 text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-400">
                <i class="fa-regular fa-clock"></i> {{ event.startTime }}
              </p>

              <div class="flex gap-4 mb-3">
                <p class="mb-1 text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-400">
                  <i class="fa-regular fa-circle-check"></i> Benefits
                </p>
                <p class="mb-1 text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-400">
                  <i class="fa-regular fa-money-bill-1"></i> {{ event.playerPrice }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import axios from 'axios'

export default defineComponent({
  name: 'UpcomingEvents',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  },
  data() {
    return {
      events: []
    }
  },
  computed: {
    isAuthenticated() {
      return !!localStorage.getItem('token')
    }
  },
  mounted() {
    this.getEvents()
  },
  methods: {
    async getEvents() {
      try {
        const response = await axios.get('events?page=0&pageSize=10')
        this.events = response.data.data.events
      } catch (error) {
        console.error('Error fetching events:', error)
      }
    }
  }
})
</script>

<style scoped></style>
