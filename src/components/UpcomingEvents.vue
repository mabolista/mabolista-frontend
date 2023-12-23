<template>
  <div class="container px-2 sm:px-6 py-4 sm:py-8 lg:px-40 mx-auto mb-10">
    <div
      class="animate__animated animate__fadeIn animate__delay-1s mb-6 sm:mb-8 lg:mb-20 flex flex-col sm:flex-row items-center justify-between"
    >
      <h1 class="font-sans font-bold text-xl sm:text-2xl lg:text-4xl mb-2 sm:mb-0">
        Upcoming Events
      </h1>
      <a href="#" class="text-base sm:text-xl text-yellow-400 hover:underline">Selengkapnya...</a>
    </div>

    <div>
      <swiper
        :modules="modules"
        :slides-per-view="3"
        :space-between="50"
        navigation
        :pagination="{ clickable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="event in events" :key="event.id">
          <div
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
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { Navigation, Pagination, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default {
  name: 'UpcomingEvents',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      events: []
    }
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, A11y]
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
    },
    eventSlider() {
      this.$nextTick(() => {
        '.center'.slick({
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 3,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
        })
      })
    }
  }
}
</script>

<style scoped></style>
