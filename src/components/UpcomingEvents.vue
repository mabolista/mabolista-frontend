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
              {{ events.title }}
            </h5>
          </a>
          <p class="mb-1 text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-400">
            {{ events.location }}
          </p>
          <p class="mb-1 text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-400">
            <i class="fa-regular fa-calendar"></i> {{ events.eventDate }}
          </p>
          <p class="mb-1 text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-400">
            <i class="fa-regular fa-clock"></i> {{ events.startTime }}
          </p>

          <div class="flex gap-4 mb-3">
            <p class="mb-1 text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-400">
              <i class="fa-regular fa-circle-check"></i> Benefits
            </p>
            <p class="mb-1 text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-400">
              <i class="fa-regular fa-money-bill-1"></i> Pemain 115 K / Kiper 95K
            </p>
          </div>
        </div>
      </div>

      <!-- Event Card 2 (Coming Soon) -->
      <!-- <div
        class="max-w-sm sm:max-w-md lg:max-w-lg bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <img
            class="rounded-t-lg w-full"
            src="@/assets/img/eventshome/ChampionsFutsal28Oktober2023.jpg"
            alt=""
          />
        </a>
        <div class="p-4 sm:p-5">
          <a href="#">
            <h5
              class="mb-1 text-lg sm:text-xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              <del> INTERNAL FUTSAL MATCH </del>
            </h5>
          </a>
          <p class="mb-1 text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-400">
            Lokasi: Coming Soon
          </p>
          <p class="mb-1 text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-400">
            <i class="fa-regular fa-calendar"></i> Coming Soon
          </p>
          <p class="mb-1 text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-400">
            <i class="fa-regular fa-clock"></i> Coming Soon
          </p>

          <div class="flex gap-4 mb-3">
            <p class="mb-1 text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-400">
              <i class="fa-regular fa-circle-check"></i> Benefits
            </p>
            <p class="mb-1 text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-400">
              <i class="fa-regular fa-money-bill-1"></i> Coming Soon
            </p>
          </div>
        </div>
      </div> -->

      <!-- Event Card 3 (Coming Soon) -->
      <!-- <div
        class="max-w-sm sm:max-w-md lg:max-w-lg bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <img
            class="rounded-t-lg w-full"
            src="@/assets/img/eventshome/15Oktober2023Sparing.jpg"
            alt=""
          />
        </a>
        <div class="p-4 sm:p-5">
          <a href="#">
            <h5
              class="mb-1 text-lg sm:text-xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              <del> INTERNAL FUN MATCH </del>
            </h5>
          </a>
          <p class="mb-1 text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-400">
            Lokasi: Coming Soon
          </p>
          <p class="mb-1 text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-400">
            <i class="fa-regular fa-calendar"></i> Coming Soon
          </p>
          <p class="mb-1 text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-400">
            <i class="fa-regular fa-clock"></i> Coming Soon
          </p>

          <div class="flex gap-4 mb-3">
            <p class="mb-1 text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-400">
              <i class="fa-regular fa-circle-check"></i> Benefits
            </p>
            <p class="mb-1 text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-400">
              <i class="fa-regular fa-money-bill-1"></i> Coming Soon
            </p>
          </div>
        </div>
      </div> -->
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
      },
      id: this.$route.params.id
    }
  },
  mounted() {
    this.getEvents()
  },
  methods: {
    getEvents() {
      axios
        .get(`admin/events/${this.id}`)
        .then((response) => {
          console.log(this.events)
          this.events = response.data.data
        })
        .catch((error) => {
          console.error(error)
          console.error(this.events)
        })
    }
  }
}
</script>

<style scoped></style>
