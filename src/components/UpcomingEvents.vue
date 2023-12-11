<template>
  <div class="container px-2 sm:px-6 py-4 sm:py-8 lg:px-40 mx-auto">
    <div class="mb-6 sm:mb-8 lg:mb-20 flex flex-col sm:flex-row items-center justify-between">
      <h1 class="font-sans font-bold text-xl sm:text-2xl lg:text-4xl mb-2 sm:mb-0">
        Upcoming Events
      </h1>
      <a href="#" class="text-base sm:text-xl text-yellow-400 hover:underline">Selengkapnya...</a>
    </div>

    <div v-if="isAuthenticated" class="flex flex-col sm:flex-row gap-4">
      <div
        v-for="event in events"
        :key="event.id"
        class="max-w-sm sm:max-w-md lg:max-w-lg bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="/events">
          <img
            class="rounded-t-lg w-full"
            src="@/assets/img/eventshome/12November2023.jpg"
            alt=""
          />
        </a>
        <div class="p-4 sm:p-5">
          <a href="/events">
            <h5
              class="mb-1 text-lg sm:text-xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              {{ event.title }}
            </h5>
          </a>
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
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UpcomingEvents',
  data() {
    return {
      events: {
        title: '',
        eventDate: '',
        startTime: '',
        endTime: '',
        playerPrice: '',
        keeperPrice: '',
        description: '',
        location: '',
        image: ''
      }
    }
  },
  mounted() {
    this.getBenefits()
    this.getEvents()
  },
  methods: {
    async getBenefits() {
      try {
        const response = await axios.get('admin/benefits?page=0&pageSize=10')
        this.benefits = response.data.data.benefits
      } catch (error) {
        console.error('Error fetching benefits:', error)
      }
    },
    async getEvents() {
      try {
        const response = await axios.get('admin/events?page=0&pageSize=10')
        this.events = response.data.data.events
      } catch (error) {
        console.error('Error fetching events:', error)
      }
    }
  }
}
</script>

<style scoped></style>
