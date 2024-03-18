<script setup>
const nytcHead = new URL('@/assets/img/events/nytchead1.jpg', import.meta.url).href
const nytcHeadTwo = new URL('@/assets/img/events/nytchead2.jpg', import.meta.url).href
const nytcHeadThree = new URL('@/assets/img/events/nytchead3.jpg', import.meta.url).href
</script>

<template>
  <div v-if="isAuthenticated">
    <NavbarSection />
    <div class="carousel relative container mx-auto" style="max-width: 1600px">
      <div class="carousel-inner relative overflow-hidden w-full">
        <!--Slide 1-->
        <input
          class="carousel-open"
          type="radio"
          id="carousel-1"
          name="carousel"
          aria-hidden="true"
          hidden=""
          checked="checked"
        />
        <div class="carousel-item absolute opacity-0" style="height: 50vh">
          <div class="h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right">
            <img :src="nytcHead" alt="nytcHead" />
          </div>
        </div>
        <label
          for="carousel-3"
          class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
          >‹</label
        >
        <label
          for="carousel-2"
          class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
          >›</label
        >

        <!--Slide 2-->
        <input
          class="carousel-open"
          type="radio"
          id="carousel-2"
          name="carousel"
          aria-hidden="true"
          hidden=""
        />
        <div class="carousel-item absolute opacity-0 bg-cover bg-right" style="height: 50vh">
          <div class="h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right">
            <img :src="nytcHeadTwo" alt="nytcHeadTwo" />
          </div>
        </div>
        <label
          for="carousel-1"
          class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
          >‹</label
        >
        <label
          for="carousel-3"
          class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
          >›</label
        >

        <!--Slide 3-->
        <input
          class="carousel-open"
          type="radio"
          id="carousel-3"
          name="carousel"
          aria-hidden="true"
          hidden=""
        />
        <div class="carousel-item absolute opacity-0" style="height: 50vh">
          <div class="h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-bottom">
            <img :src="nytcHeadThree" alt="nytcHeadThree" />
          </div>
        </div>
        <label
          for="carousel-2"
          class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
          >‹</label
        >
        <label
          for="carousel-1"
          class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
          >›</label
        >

        <!-- Add additional indicators for each slide-->
        <ol class="carousel-indicators">
          <li class="inline-block mr-3">
            <label
              for="carousel-1"
              class="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
              >•</label
            >
          </li>
          <li class="inline-block mr-3">
            <label
              for="carousel-2"
              class="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
              >•</label
            >
          </li>
          <li class="inline-block mr-3">
            <label
              for="carousel-3"
              class="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
              >•</label
            >
          </li>
        </ol>
      </div>
    </div>

    <section id="aboutmabolista" class="text-gray-700 body-font border-t border-gray-200">
      <div v-if="events" class="container px-5 py-20 mx-auto flex flex-wrap">
        <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img
            alt="feature"
            class="object-cover object-center h-full w-full"
            :src="events.imageUrl"
          />
        </div>
        <div
          class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center"
        >
          <div class="flex flex-col mb-10">
            <div class="flex-grow">
              <h2 class="text-3xl mb-4 font-mabolistafont leading-8 text-gray-900 dark:text-white">
                Keterangan
              </h2>
              <p class="leading-relaxed text-left text-gray-900 dark:text-white text-xl">
                📆 : {{ events.eventDate }}<br />
                ⏰ : {{ events.startTime }} - {{ events.endTime }}<br />
                🏟 : {{ events.location }}<br />
                📸 : Fotographer<br />
                📹 : Videographer<br />
                🙅🏻‍♂ : Wasit Tengah 1<br />
                💧 : Mineral Water<br />
                👕 : Jersey Inventaris<br />
              </p>
            </div>
            <div class="flex mt-4 gap-3">
              <button
                type="button"
                class="text-slate-700 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
                @click="showModal"
              >
                Joint Events
              </button>

              <JointEventsModal v-show="isModalVisible" @close="closeModal" />

              <button
                @click="leftEvents()"
                class="block mt-2 ml-1 bg-transparent hover:bg-red-500 text-black font-semibold hover:text-white py-2 px-4 border border-red-500 rounded"
                type="submit"
              >
                Cancel List
              </button>
            </div>
            <div class="listUsersEvent mt-4">
              <div class="grid grid-cols-3 grid-rows-1 gap-4">
                <ul class="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
                  <li class="font-bold">
                    List Pemain
                    <ol class="pl-5 mt-2 space-y-1 list-decimal list-inside">
                      <li>Reza</li>
                      <li>Azra</li>
                      <li>test</li>
                    </ol>
                  </li>
                </ul>
                <ul class="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
                  <li class="font-bold">
                    List Kiper
                    <ol class="pl-5 mt-2 space-y-1 list-decimal list-inside">
                      <li>Reza</li>
                      <li>Azra</li>
                      <li>test</li>
                    </ol>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Note -->
    <section class="bg-white py-4">
      <div class="container py-8 px-6 mx-auto">
        <a
          class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8"
          href="#"
        >
          Note
        </a>
        <p class="mt-2 mb-8 text-gray-600">
          JIKA ADA YG MERASA KURANG SEHAT MENJELANG MAIN ATAU ADA HALANGAN LAIN MAU CANCEL TOLONG
          KABARIN DI GRUP H-3 BUAT CANCEL SUPAYA GAMPANG CARI ORANG PENGGANTINYA, JIKA SUDAH LIST
          DAN TIDAK DATANG, WAJIB TF JIKA ENGGAK ADA PENGGANTINYA..DAN TETAP JAGA PROKES
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import NavbarSection from '@/components/layouts/NavbarSection.vue'
import JointEventsModal from '@/components/JointEventsModal.vue'
import axios from 'axios'

export default {
  name: 'UpcomingEvents',
  components: {
    NavbarSection,
    JointEventsModal
  },
  data() {
    return {
      events: {
        eventDate: '',
        startTime: '',
        endTime: '',
        location: '',
        image: ''
      },
      isModalVisible: false
      // id: this.$route.params.id
      // token: JSON.parse(localStorage.getItem('token')).token
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
    getEvents() {
      axios
        .get(`events/${this.$route.params.id}`)
        .then((response) => {
          this.events = response.data.data
        })
        .catch((error) => {
          console.error(error)
        })
    },
    mounted() {
      this.getEvents()
    },
    handleFileChange(event) {
      this.events.image = event.target.files[0]
    },
    leftEvents() {
      axios
        .post('events/left-event', {
          eventId: this.eventId,
          userId: this.userId
        })
        .then((response) => {
          this.leftEvents = response.data.data.events
        })
        .catch((error) => {
          console.error('Out List Failed:', error)
        })
    },
    showModal() {
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false
    }
  }
}
</script>

<style scoped>
.work-sans {
  font-family: 'Work Sans', sans-serif;
}

#menu-toggle:checked + #menu {
  display: block;
}

.hover\:grow {
  transition: all 0.3s;
  transform: scale(1);
}

.hover\:grow:hover {
  transform: scale(1.02);
}

.carousel-open:checked + .carousel-item {
  position: static;
  opacity: 100;
}

.carousel-item {
  -webkit-transition: opacity 0.6s ease-out;
  transition: opacity 0.6s ease-out;
}

#carousel-1:checked ~ .control-1,
#carousel-2:checked ~ .control-2,
#carousel-3:checked ~ .control-3 {
  display: block;
}

.carousel-indicators {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 2%;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
}

#carousel-1:checked ~ .control-1 ~ .carousel-indicators li:nth-child(1) .carousel-bullet,
#carousel-2:checked ~ .control-2 ~ .carousel-indicators li:nth-child(2) .carousel-bullet,
#carousel-3:checked ~ .control-3 ~ .carousel-indicators li:nth-child(3) .carousel-bullet {
  color: #000;
  /*Set to match the Tailwind colour you want the active one to be */
}
</style>
