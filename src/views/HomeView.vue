<script setup>
const headBg = new URL('@/assets/img/head-bg.jpg', import.meta.url).href
const headImg = new URL('@/assets/img/head-img.png', import.meta.url).href
const chaviPutih = new URL('@/assets/img/ChaviPutih.png', import.meta.url).href
const kratingDaeng = new URL('@/assets/img/logokratingdaeng.png', import.meta.url).href
const kahfAbu = new URL('@/assets/img/KahfAbu.png', import.meta.url).href
const homeVideo = new URL('@/assets/video/homevideo.mp4', import.meta.url).href
const benefits = new URL('@/assets/img/benefits.jpg', import.meta.url).href
const nytcSawangan = new URL('@/assets/img/NYTCsawangan.jpg', import.meta.url).href
const dmSport = new URL('@/assets/img/dmsport.jpg', import.meta.url).href
const bigHam = new URL('@/assets/img/bigham.jpg', import.meta.url).href
const panguripanPutih = new URL('@/assets/img/PanguripanPutih.png', import.meta.url).href
</script>

<template>
  <NavbarSection />
  <div class="relative">
    <img :src="headBg" alt="head-section image" class="bg-cover w-full h-screen" />

    <div
      class="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-90"
    >
      <div class="lg:container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div class="h-screen grid sm:grid-cols-1 md:grid-cols-2 grid-rows-1 items-center">
          <div class="animate__animated animate__fadeIn mt-44 md:mt-0 lg:mt-0">
            <img :src="headImg" alt="head-img" />
          </div>

          <div
            class="animate__animated animate__fadeInUp animate__delay-1s text-center mb-16 md:text-left lg:w-headwidth"
          >
            <h1 class="font-bold text-white text-2xl md:text-2xl lg:text-4xl mb-4">
              Welcome, Mabolism!
            </h1>
            <p class="text-white font-medium">
              Ini adalah website resmi Mabolista Fc, Eksplore lebih lanjut dengan klik tombol
              dibawah atau scroll
            </p>

            <div class="flex flex-col sm:flex-row gap-4 mt-4">
              <a
                href="https://www.instagram.com/mabolista_fc/"
                target="_blank"
                class="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full mb-2 sm:mb-0"
              >
                Our Instagram
              </a>
              <router-link
                to="/about"
                class="bg-transparent hover:bg-white-500 text-white font-medium hover:text-black py-2 px-4 border border-white-500 hover:bg-white rounded-full"
              >
                Learn More
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ---------- SPONSOR ----------  -->
  <div
    class="bg-zinc-800 relative mb-4 lg:mb-20 mx-auto mt-[-6rem] max-w-7xl px-4 sm:px-6 lg:px-8 rounded-lg"
  >
    <div
      class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4"
    >
      <img
        class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
        :src="chaviPutih"
        alt="Transistor"
        width="158"
        height="48"
      />
      <img
        class="col-span-2 object-contain h-20 w-32 lg:col-span-1 justify-self-center"
        :src="kratingDaeng"
        alt="Logo Kratingdaeng"
        width="158"
        height="48"
      />
      <img
        class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
        :src="kahfAbu"
        alt="Logo Kahf"
        width="158"
        height="48"
      />
      <img
        class="col-span-2 object-contain h-24 w-32 mt-4 sm:col-start-2 lg:col-span-1 justify-self-center"
        :src="panguripanPutih"
        alt="Logo Panguripan"
        width="158"
        height="48"
      />
    </div>
  </div>

  <!-- ---------- Events ----------  -->
  <UpcomingEvents />

  <section
    class="relative h-64 flex flex-col items-center justify-center text-center text-white py-0 px-3"
  >
    <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
      <video
        class="min-w-full min-h-full absolute object-cover"
        :src="homeVideo"
        alt="Banner Video"
        type="video/mp4"
        autoplay
        muted
        loop
      ></video>
    </div>
    <div class="video-content space-y-2">
      <h1
        class="animate__animated animate__fadeInDown animate__delay-1s font-bold text-2xl md:text-6xl lg:text-6xl mb-8"
      >
        Become part of us
      </h1>
      <router-link
        to="/events"
        class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Join events
      </router-link>
    </div>
  </section>

  <!-- ---------- Benefits ----------  -->

  <section class="relative pt-16">
    <div class="container mx-auto">
      <div class="flex flex-wrap items-center">
        <div
          data-aos="fade-right"
          class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78"
        >
          <div
            class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-pink-500"
          >
            <img alt="benefits images" :src="benefits" class="w-full align-middle rounded-t-lg" />
            <blockquote class="relative p-8 mb-4">
              <svg
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 583 95"
                class="absolute left-0 w-full block h-95-px -top-94-px"
              >
                <polygon points="-30,95 583,95 583,65" class="text-pink-500 fill-current"></polygon>
              </svg>
              <h4 class="text-xl font-bold text-white">Benefits for mabolism</h4>
              <p class="text-md font-light mt-2 text-white">
                Dengan harga yang terbilang murah, Banyak banget benefits yang kalian dapetin kalo
                main di mabolista, ada Fotographer, Videographer, P3K, Mineral Water dan Jersey
                Inventaris. Bahkan kalo sponsor lagi kasih produk, kalian juga bisa dapetin
                produknya!
              </p>
            </blockquote>
          </div>
        </div>

        <div class="w-full md:w-6/12 px-4">
          <div class="flex flex-wrap">
            <div class="w-full md:w-6/12 px-4">
              <div data-aos="zoom-in" data-aos-offset="200" class="relative flex flex-col mt-4">
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                      />
                    </svg>
                  </div>
                  <h6 class="text-xl mb-1 font-semibold">Fotographer</h6>
                  <p class="mb-4 text-blueGray-500">
                    Moment moment keren kamu pas main bola bakal diabadikan langsung.
                  </p>
                </div>
              </div>
              <div data-aos="zoom-in" data-aos-offset="200" class="relative flex flex-col min-w-0">
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
                  </div>
                  <h6 class="text-xl mb-1 font-semibold">Videographer</h6>
                  <p class="mb-4 text-blueGray-500">
                    Bukan cuma difoto, Moment kamu juga bakal direkam langsung.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-6/12 px-4">
              <div
                data-aos="zoom-in"
                data-aos-offset="300"
                class="relative flex flex-col min-w-0 mt-4"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                      />
                    </svg>
                  </div>
                  <h6 class="text-xl mb-1 font-semibold">Jersey Inventaris</h6>
                  <p class="mb-4 text-blueGray-500">
                    Main bola tinggal bawa sepatu aja, Baju nya udah disediain pokoknyaa
                  </p>
                </div>
              </div>
              <div data-aos="zoom-in" data-aos-offset="300" class="relative flex flex-col min-w-0">
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                      />
                    </svg>
                  </div>
                  <h6 class="text-xl mb-1 font-semibold">Mineral Water</h6>
                  <p class="mb-4 text-blueGray-500">
                    Kalo haus gaperlu cari warung buat beli air, Disini udah ada tinggal minum aja
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ---------- Home Base ----------  -->
  <div
    data-aos="fade-up"
    class="flex flex-wrap w-full mb-5 mt-20 flex-col items-center text-center"
  >
    <h1 class="font-sans font-bold text-2xl text-center sm:text-4xl mb-2 sm:mb-0">HomeBase</h1>
    <p class="lg:w-1/2 w-full leading-relaxed text-base">
      Home Base Mabolista Fc Untuk Area Jakarta, Bogor, Depok Tangerang dan Bekasi
    </p>
  </div>

  <div class="items-center flex flex-col">
    <div data-aos="zoom-in-up" data-aos-offset="300" class="md:flex lg:flex mx-40 mt-16">
      <div class="mx-auto flex flex-col w-96 mb-10">
        <div class="h-56 mx-4 -mt-6 overflow-hidden">
          <img :src="nytcSawangan" alt="NYTC Sawangan" class="rounded-xl" />
        </div>
        <div class="px-4">
          <div class="font-bold text-xl mb-2">NYTC Sawangan (Depok)</div>
          <p class="text-gray-700 text-base">
            Jl. Gg. Rotan Pelita Jaya Blok Masjid Nurul Iman No.61, RT.3/RW.6, Bojongsari Baru, Kec.
            Bojongsari, Kota Depok, Jawa Barat 16516
          </p>
        </div>
      </div>

      <div class="mx-auto flex flex-col w-96 mb-10">
        <div class="h-56 mx-4 -mt-6 overflow-hidden">
          <img :src="dmSport" alt="DM Sport" class="rounded-xl" />
        </div>
        <div class="px-4">
          <div class="font-bold text-xl mb-2">DM Sport (Tangerang)</div>
          <p class="text-gray-700 text-base">
            Jl. Raden Patah No.88A, Parung Serab, Kec. Ciledug, Kota Tangerang, Banten 15153
          </p>
        </div>
      </div>

      <div class="mx-auto flex flex-col w-96 mb-10">
        <div class="h-56 mx-4 -mt-6 overflow-hidden">
          <img :src="bigHam" alt="Big Ham Stadium" class="rounded-xl" />
        </div>
        <div class="px-4">
          <div class="font-bold text-xl mb-2">Big Ham Stadium (Depok)</div>
          <p class="text-gray-700 text-base">
            Jl. Yayasan No.RT.006/01, Grogol, Kec. Limo, Kota Depok, Jawa Barat 16512
          </p>
        </div>
      </div>
    </div>
    <div class="text-center">
      <router-link
        to="/homebase"
        class="bg-transparent hover:bg-indigo-500 text-indigo-600 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full"
      >
        More HomeBase
      </router-link>
    </div>
  </div>

  <FooterSection />
  <a
    href="https://api.whatsapp.com/send?phone=6287773622095"
    class="rounded-full w-12 h-12 bg-gray-100 fixed bottom-0 right-0 flex items-center justify-center text-gray-800 mr-8 mb-8 shadow-sm border-gray-300 border"
    target="_blank"
    ><i class="fa-brands fa-whatsapp fa-2xl" style="color: #05ff37"></i
  ></a>
</template>

<script>
import FooterSection from '@/components/layouts/FooterSection.vue'
import NavbarSection from '@/components/layouts/NavbarSection.vue'
import UpcomingEvents from '@/components/UpcomingEvents.vue'

export default {
  name: 'HomePage',
  components: {
    FooterSection,
    NavbarSection,
    UpcomingEvents
  }
}
</script>

<style scoped>
.video-docker video {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.video-docker::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
}

.video-content {
  z-index: 2;
}

.slides-container {
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}
.slides-container::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
</style>
