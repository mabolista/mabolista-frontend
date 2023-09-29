<script setup>
import FooterSection from '../components/layouts/FooterSection.vue'
import NavbarSection from '../components/layouts/NavbarSection.vue'
</script>

<template>
  <NavbarSection />

  <section
    class="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3"
  >
    <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
      <video
        class="min-w-full min-h-full absolute object-cover"
        src="/src/assets/video/homevideo.mp4"
        type="video/mp4"
        autoplay
        muted
        loop
      ></video>
    </div>
    <div class="video-content space-y-2">
      <h1
        class="animate__fadeInUp font-mabolistafont text-3xl sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-700"
      >
        Welcome Mabolism!
      </h1>
      <h3 class="mt-3 mx-auto w-96 font-bold">#Makemoreconnections #MabolistaFc</h3>
    </div>
  </section>

  <!-- ---------- SPONSOR ----------  -->
  <div class="bg-white py-24 sm:py-32 flex items-center justify-center">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="text-center text-3xl font-mabolistafont leading-8 text-gray-900">Sponsorship</h2>
      <div
        class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4"
      >
        <img
          class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          src="/src/assets/img/logochavi.png"
          alt="Transistor"
          width="158"
          height="48"
        />
        <img
          class="col-span-2 object-contain h-20 w-32 lg:col-span-1 justify-self-center"
          src="/src/assets/img/logokratingdaeng.png"
          alt="Reform"
          width="158"
          height="48"
        />
        <img
          class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          src="/src/assets/img/logokahf.png"
          alt="Tuple"
          width="158"
          height="48"
        />
        <img
          class="col-span-2 object-contain h-24 w-32 mt-4 sm:col-start-2 lg:col-span-1 justify-self-center"
          src="/src/assets/img/logopanguripan.png"
          alt="SavvyCal"
          width="158"
          height="48"
        />
      </div>
    </div>
  </div>

  <!-- ---------- Home Base ----------  -->
  <div class="flex flex-wrap w-full mb-5 flex-col items-center text-center">
    <h2 class="text-center text-3xl font-mabolistafont leading-8 text-gray-900">Home Base</h2>
    <p class="lg:w-1/2 w-full leading-relaxed text-base">
      Home Base Mabolista Fc Untuk Area Jakarta, Bogor, Depok Tangerang dan Bekasi
    </p>
  </div>
  <div
    id="app"
    class="max-w-screen-lg mx-auto px-4 md:px-8 py-12 transition-all duration-500 ease-linear"
  >
    <div class="flex justify-between mb-2">
      <p class="font-bold text-xl">
        Homebase <span class="text-yellow-600 font-bold text-xl">SepakBola</span>
      </p>
      <a href="/homebase" class="text-yellow-500 hover:underline">Selengkapnya</a>
    </div>
    <div class="relative">
      <div
        class="slides-container h-72 flex snap-x snap-mandatory overflow-hidden overflow-x-auto space-x-2 rounded scroll-smooth before:w-[45vw] before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0"
      >
        <div
          class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden border border-slate-700"
        >
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              class="w-full"
              src="/src/assets/img/NYTC sawangan.jpg"
              alt="Lapangan NYTC Sawangan"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">NYTC Sawangan (Depok)</div>
              <p class="text-gray-700 text-base">
                Jl. Gg. Rotan Pelita Jaya Blok Masjid Nurul Iman No.61, RT.3/RW.6, Bojongsari Baru,
                Kec. Bojongsari, Kota Depok, Jawa Barat 16516
              </p>
            </div>
          </div>
        </div>
        <div class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
          <div
            class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden border border-slate-700"
          >
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img class="w-full" src="/src/assets/img/big ham.jpg" alt="Lapangan BIG Ham" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">BIG Ham Stadium (Depok)</div>
                <p class="text-gray-700 text-base">
                  Jl. Yayasan No.RT.006/01, Grogol, Kec. Limo, Kota Depok, Jawa Barat 16512
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
          <div
            class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden border border-slate-700"
          >
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                class="w-full"
                src="/src/assets/img/kingkong soccer arena.jpg"
                alt="Lapangan KingKong Soccer Arena"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">KingKong Soccer Arena (Bekasi)</div>
                <p class="text-gray-700 text-base">
                  Jl. Gg. Rotan Pelita Jaya Blok Masjid Nurul Iman No.61, RT.3/RW.6, Bojongsari
                  Baru, Kec. Bojongsari, Kota Depok, Jawa Barat 16516
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
          <div
            class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden border border-slate-700"
          >
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                class="w-full h-40"
                src="/src/assets/img/Pancoransoccerfield.jpg"
                alt="Lapangan Pancoran Soccer Field"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Pancoran Soccer Field (Jakarta)</div>
                <p class="text-gray-700 text-base">
                  Jl. Gatot Subroto No.72, RT.1/RW.4, Pancoran, Kec. Pancoran, Kota Jakarta Selatan,
                  Daerah Khusus Ibukota Jakarta 12780
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
          <div
            class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden border border-slate-700"
          >
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                class="w-full"
                src="/src/assets/img/tehbotolayoarena.png"
                alt="Lapangan Teh Botol Ayo Arena"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Teh Botol Ayo Arena (Bogor)</div>
                <p class="text-gray-700 text-base">
                  Jl. Siliwangi, Sumur Batu, Kec. Babakan Madang, Kabupaten Bogor, Jawa Barat 16810
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
          <div
            class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden border border-slate-700"
          >
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                class="w-full"
                src="/src/assets/img/latihjakartainternationalstadium.jpg"
                alt="Lapangan JIS"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Lapangan Latih JIS (Jakarta)</div>
                <p class="text-gray-700 text-base">
                  Papanggo, Tanjung Priok, Jakarta Utara, Jakarta, Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
          <div
            class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden border border-slate-700"
          >
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img class="w-full" src="/src/assets/img/dmsport.jpg" alt="Sunset in the mountains" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">DM Sport Ciledug (Tangerang)</div>
                <p class="text-gray-700 text-base">
                  Jl. Raden Fatah No.88A, Parung Serab, Kec. Ciledug, Kota Tangerang, Banten 15153
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute top-0 -left-4 h-full items-center hidden md:flex">
        <button
          role="button"
          class="prev px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group"
          aria-label="prev"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 group-active:-translate-x-2 transition-all duration-200 ease-linear"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
      </div>
      <div class="absolute top-0 -right-4 h-full items-center hidden md:flex">
        <button
          role="button"
          class="next px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group"
          aria-label="next"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 group-active:translate-x-2 transition-all duration-200 ease-linear"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- ---------- Events ----------  -->
  <div class="container px-6 py-8 mx-auto">
    <div class="mb-4 flex items-center justify-between">
      <h1 class="font-mabolistafont text-4xl">Events Terdekat</h1>
      <a href="#" class="text-2 text-yellow-400 hover:underline"> Selengkapnya</a>
    </div>

    <div class="flex gap-4">
      <div
        class="max-w-sm bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <img class="rounded-t-lg" src="/src/assets/img/internalevents.png" alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              INTERNAL FUN MATCH
            </h5>
          </a>
          <p class="mb-1 font-semibold text-gray-700 dark:text-gray-400">Lokasi: NYTC Sawangan</p>
          <p class="mb-1 font-semibold text-gray-700 dark:text-gray-400">
            <i class="fa-regular fa-calendar"></i> Sabtu, 07 Oktober 2023
          </p>
          <p class="mb-1 font-semibold text-gray-700 dark:text-gray-400">
            <i class="fa-regular fa-clock"></i> 15.30 - 18.00 WIB
          </p>

          <div class="flex gap-4 mb-3">
            <p class="mb-1 font-semibold text-gray-700 dark:text-gray-400">
              <i class="fa-regular fa-circle-check"></i> Benefits
            </p>
            <p class="mb-1 font-semibold text-gray-700 dark:text-gray-400">
              <i class="fa-regular fa-money-bill-1"></i> Pemain 115 K / Kiper 95K
            </p>
          </div>

          <a
            href="/events/nytcsawangan"
            class="mt-2 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Join Events
          </a>
        </div>
      </div>
      <div
        class="max-w-sm bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <img class="rounded-t-lg" src="/src/assets/img/internalevents.png" alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              INTERNAL FUN MATCH
            </h5>
          </a>
          <p class="mb-1 font-semibold text-gray-700 dark:text-gray-400">Lokasi: NYTC Sawangan</p>
          <p class="mb-1 font-semibold text-gray-700 dark:text-gray-400">
            <i class="fa-regular fa-calendar"></i> Sabtu, 07 Oktober 2023
          </p>
          <p class="mb-1 font-semibold text-gray-700 dark:text-gray-400">
            <i class="fa-regular fa-clock"></i> 15.30 - 18.00 WIB
          </p>

          <div class="flex gap-4 mb-3">
            <p class="mb-1 font-semibold text-gray-700 dark:text-gray-400">
              <i class="fa-regular fa-circle-check"></i> Benefits
            </p>
            <p class="mb-1 font-semibold text-gray-700 dark:text-gray-400">
              <i class="fa-regular fa-money-bill-1"></i> Pemain 115 K / Kiper 95K
            </p>
          </div>

          <a
            href="/events/nytcsawangan"
            class="mt-2 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Join Events
          </a>
        </div>
      </div>
      <div
        class="max-w-sm bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <img class="rounded-t-lg" src="/src/assets/img/internalevents.png" alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              INTERNAL FUN MATCH
            </h5>
          </a>
          <p class="mb-1 font-semibold text-gray-700 dark:text-gray-400">Lokasi: NYTC Sawangan</p>
          <p class="mb-1 font-semibold text-gray-700 dark:text-gray-400">
            <i class="fa-regular fa-calendar"></i> Sabtu, 07 Oktober 2023
          </p>
          <p class="mb-1 font-semibold text-gray-700 dark:text-gray-400">
            <i class="fa-regular fa-clock"></i> 15.30 - 18.00 WIB
          </p>

          <div class="flex gap-4 mb-3">
            <p class="mb-1 font-semibold text-gray-700 dark:text-gray-400">
              <i class="fa-regular fa-circle-check"></i> Benefits
            </p>
            <p class="mb-1 font-semibold text-gray-700 dark:text-gray-400">
              <i class="fa-regular fa-money-bill-1"></i> Pemain 115 K / Kiper 95K
            </p>
          </div>

          <a
            href="/events/nytcsawangan"
            class="mt-2 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Join Events
          </a>
        </div>
      </div>
      <div
        class="max-w-sm bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <img class="rounded-t-lg" src="/src/assets/img/internalevents.png" alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              INTERNAL FUN MATCH
            </h5>
          </a>
          <p class="mb-1 font-semibold text-gray-700 dark:text-gray-400">Lokasi: NYTC Sawangan</p>
          <p class="mb-1 font-semibold text-gray-700 dark:text-gray-400">
            <i class="fa-regular fa-calendar"></i> Sabtu, 07 Oktober 2023
          </p>
          <p class="mb-1 font-semibold text-gray-700 dark:text-gray-400">
            <i class="fa-regular fa-clock"></i> 15.30 - 18.00 WIB
          </p>

          <div class="flex gap-4 mb-3">
            <p class="mb-1 font-semibold text-gray-700 dark:text-gray-400">
              <i class="fa-regular fa-circle-check"></i> Benefits
            </p>
            <p class="mb-1 font-semibold text-gray-700 dark:text-gray-400">
              <i class="fa-regular fa-money-bill-1"></i> Pemain 115 K / Kiper 95K
            </p>
          </div>

          <a
            href="/events/nytcsawangan"
            class="mt-2 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Join Events
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- ---------- Benefits ----------  -->
  <section class="text-gray-700 body-font border-t border-gray-200">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <h2 class="text-center text-3xl font-mabolistafont leading-8 text-gray-900">benefits</h2>
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
      <a href="/events">
        <button
          class="flex mx-auto mt-16 text-white bg-gradient-to-r from-pink-500 to-violet-700 border-0 py-2 px-8 focus:outline-none rounded text-lg"
        >
          Join Events
        </button></a
      >
    </div>
  </section>

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
  name: 'HomePage',

  mounted() {
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', '/src/assets/js/eventscard.js')
    document.head.appendChild(recaptchaScript)
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
