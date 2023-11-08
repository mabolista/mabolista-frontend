<script setup>
import FooterSection from '../components/layouts/FooterSection.vue'
import NavbarSection from '../components/layouts/NavbarSection.vue'
</script>

<template>
  <NavbarSection />
  <div class="relative">
    <img src="/src/assets/img/head-bg.jpg" alt="Your Image" class="bg-cover w-full h-screen" />

    <div
      class="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-90"
    >
      <div class="lg:container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div class="h-screen grid sm:grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4 items-center">
          <div class="imagehero">
            <img src="/src/assets/img/head-img.png" alt="" />
          </div>

          <div class="text-center mb-16 md:text-left lg:w-headwidth">
            <h1 class="font-bold text-white text-4xl mb-4">Welcome, Mabolism!</h1>
            <p class="text-white font-medium">
              Ini adalah website resmi Mabolista Fc, Eksplore lebih lanjut dengan klik tombol
              dibawah atau scroll
            </p>

            <div class="flex flex-col sm:flex-row gap-4 mt-4">
              <a
                href="https://www.instagram.com/mabolista_fc/"
                target="blank"
                class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full mb-2 sm:mb-0"
              >
                Our Instagram
              </a>
              <a
                href="/about"
                class="bg-transparent hover:bg-white-500 text-white font-xl hover:text-black py-2 px-4 border border-white-500 hover:bg-white rounded-full"
              >
                Learn More
              </a>
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
        src="/src/assets/img/Chavi Putih.png"
        alt="Transistor"
        width="158"
        height="48"
      />
      <img
        class="col-span-2 object-contain h-20 w-32 lg:col-span-1 justify-self-center"
        src="/src/assets/img/logokratingdaeng.png"
        alt="Logo Kratingdaeng"
        width="158"
        height="48"
      />
      <img
        class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
        src="/src/assets/img/Kahf Abu.png"
        alt="Logo Kahf"
        width="158"
        height="48"
      />
      <img
        class="col-span-2 object-contain h-24 w-32 mt-4 sm:col-start-2 lg:col-span-1 justify-self-center"
        src="/src/assets/img/Panguripan Putih.png"
        alt="Logo Panguripan"
        width="158"
        height="48"
      />
    </div>
  </div>

  <!-- ---------- Events ----------  -->
  <div class="container px-2 sm:px-6 py-4 sm:py-8 lg:px-40 mx-auto">
    <div class="mb-6 sm:mb-8 lg:mb-20 flex flex-col sm:flex-row items-center justify-between">
      <h1 class="font-sans font-bold text-xl sm:text-2xl lg:text-4xl mb-2 sm:mb-0">
        Upcoming Events
      </h1>
      <a href="#" class="text-base sm:text-xl text-yellow-400 hover:underline">Selengkapnya...</a>
    </div>

    <div class="flex flex-col sm:flex-row gap-4">
      <!-- Event Card 1 -->
      <div
        class="max-w-sm sm:max-w-md lg:max-w-lg bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="/events">
          <img
            class="rounded-t-lg w-full"
            src="/src/assets/img/eventshome/12November2023.jpg"
            alt=""
          />
        </a>
        <div class="p-4 sm:p-5">
          <a href="/events">
            <h5
              class="mb-1 text-lg sm:text-xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              INTERNAL FUN MATCH
            </h5>
          </a>
          <p class="mb-1 text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-400">
            Lokasi: NYTC Sawangan
          </p>
          <p class="mb-1 text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-400">
            <i class="fa-regular fa-calendar"></i> Minggu, 12 November 2023
          </p>
          <p class="mb-1 text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-400">
            <i class="fa-regular fa-clock"></i> 15.30 - 18.00 WIB
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
      <div
        class="max-w-sm sm:max-w-md lg:max-w-lg bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <img
            class="rounded-t-lg w-full"
            src="/src/assets/img/eventshome/ChampionsFutsal28Oktober2023.jpg"
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
      </div>

      <!-- Event Card 3 (Coming Soon) -->
      <div
        class="max-w-sm sm:max-w-md lg:max-w-lg bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <img
            class="rounded-t-lg w-full"
            src="/src/assets/img/eventshome/15Oktober2023Sparing.jpg"
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
      </div>
    </div>
  </div>

  <div
    class="bg-zinc-800 justify-center my-4 sm:my-8 md:my-16 h-64 w-full text-white flex flex-col sm:flex-row md:flex-col px-4 sm:px-8 md:px-40"
  >
    <div class="relative hidden lg:mt-0 lg:col-span-5 lg:flex">
      <img src="/src/assets/img/goalkeeper blackpink.png" alt="" class="h-80" />
    </div>
    <div class="my-4 sm:my-0 sm:ml-4 md:ml-0">
      <h1 class="font-bold text-2xl sm:text-3xl md:text-4xl">Be part of us</h1>
      <p class="my-2 sm:my-4 md:my-6">
        Ayo gabung main bersama kita, Perbanyak saudara dan koneksi. Main bola gapernah se asik ini
      </p>
      <a
        href="/events"
        class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 sm:py-4 md:py-6 px-4 sm:px-8 md:px-14 rounded-full mb-2 sm:mb-0"
      >
        Join Events
      </a>
    </div>
  </div>

  <!-- ---------- Benefits ----------  -->
  <section class="text-gray-700 body-font border-t border-gray-200">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <h1 class="font-sans font-bold text-2xl text-center sm:text-4xl mb-2 sm:mb-0">Benefits</h1>
        <p class="lg:w-1/2 w-full leading-relaxed text-base">
          Main bola bareng di mabolista banyak untungnya dan fasilitas lengkap
        </p>
      </div>
      <div class="flex flex-wrap -m-4">
        <div class="xl:w-1/3 md:w-1/2 p-4">
          <div class="border border-gray-300 p-6 rounded-lg">
            <div
              class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white outline text-yellow-500 mb-4"
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
            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Videographer</h2>
            <p class="leading-relaxed text-base">
              Setiap permainan dilapangan akan diabadikan lewat videographer dan pastinya seru.
            </p>
          </div>
        </div>
        <div class="xl:w-1/3 md:w-1/2 p-4">
          <div class="border border-gray-300 p-6 rounded-lg">
            <div
              class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white outline text-yellow-500 mb-4"
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
            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Fotographer</h2>
            <p class="leading-relaxed text-base">
              Moment moment langka pasti dapet, Karena difoto terus udah kaya artis hehe...
            </p>
          </div>
        </div>
        <div class="xl:w-1/3 md:w-1/2 p-4">
          <div class="border border-gray-300 p-6 rounded-lg">
            <div
              class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white outline text-yellow-500 mb-4"
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
                  d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                />
              </svg>
            </div>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">P3K Kit</h2>
            <p class="leading-relaxed text-base">
              Keselamatan jadi perhatian nomor satu. Jadi kita sediain P3K yaa kalo kena senggolan
            </p>
          </div>
        </div>
        <div class="xl:w-1/3 md:w-1/2 p-4">
          <div class="border border-gray-300 p-6 rounded-lg">
            <div
              class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white outline text-yellow-500 mb-4"
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
            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Free Mineral Water</h2>
            <p class="leading-relaxed text-base">
              Yang namanya olahraga pasti haus. Ada minum gratis kok tenang aja
            </p>
          </div>
        </div>
        <div class="xl:w-1/3 md:w-1/2 p-4">
          <div class="border border-gray-300 p-6 rounded-lg">
            <div
              class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white outline text-yellow-500 mb-4"
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
                  d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                />
              </svg>
            </div>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Sponsorship Products</h2>
            <p class="leading-relaxed text-base">
              Biasanya kalo sponsor lagi dateng produknya kita bagiin ke member member
            </p>
          </div>
        </div>
        <div class="xl:w-1/3 md:w-1/2 p-4">
          <div class="border border-gray-300 p-6 rounded-lg">
            <div
              class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white outline text-yellow-500 mb-4"
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
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Jersey Inventaris</h2>
            <p class="leading-relaxed text-base">
              Maen tinggal bawa sepatu aja. Baju udah disiapin semua, Tinggal pake aja
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ---------- Home Base ----------  -->
  <div class="flex flex-wrap w-full mb-5 flex-col items-center text-center">
    <h1 class="font-sans font-bold text-2xl text-center sm:text-4xl mb-2 sm:mb-0">HomeBase</h1>
    <p class="lg:w-1/2 w-full leading-relaxed text-base">
      Home Base Mabolista Fc Untuk Area Jakarta, Bogor, Depok Tangerang dan Bekasi
    </p>
  </div>

  <div class="items-center">
    <div class="md:flex lg:flex mx-40 mt-16">
      <div class="mx-auto flex flex-col w-96 mb-10">
        <div class="h-56 mx-4 -mt-6 overflow-hidden">
          <img src="/src/assets/img/NYTC sawangan.jpg" alt="NYTC Sawangan" class="rounded-xl" />
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
          <img src="/src/assets/img/dmsport.jpg" alt="DM Sport" class="rounded-xl" />
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
          <img src="/src/assets/img/big ham.jpg" alt="Big Ham Stadium" class="rounded-xl" />
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
      <a
        href="/homebase"
        class="bg-transparent hover:bg-indigo-500 text-indigo-600 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full"
      >
        More HomeBase
      </a>
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
export default {
  name: 'HomePage'
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
