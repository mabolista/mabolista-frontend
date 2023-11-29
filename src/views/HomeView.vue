<template>
  <NavbarSection />
  <div class="relative">
    <img src="@/assets/img/head-bg.jpg" alt="Your Image" class="bg-cover w-full h-screen" />

    <div
      class="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-90"
    >
      <div class="lg:container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div class="h-screen grid sm:grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4 items-center">
          <div class="imagehero">
            <img src="@/assets/img/head-img.png" alt="" />
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
        src="@/assets/img/ChaviPutih.png"
        alt="Transistor"
        width="158"
        height="48"
      />
      <img
        class="col-span-2 object-contain h-20 w-32 lg:col-span-1 justify-self-center"
        src="@/assets/img/logokratingdaeng.png"
        alt="Logo Kratingdaeng"
        width="158"
        height="48"
      />
      <img
        class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
        src="@/assets/img/KahfAbu.png"
        alt="Logo Kahf"
        width="158"
        height="48"
      />
      <img
        class="col-span-2 object-contain h-24 w-32 mt-4 sm:col-start-2 lg:col-span-1 justify-self-center"
        src="@/assets/img/PanguripanPutih.png"
        alt="Logo Panguripan"
        width="158"
        height="48"
      />
    </div>
  </div>

  <!-- ---------- Events ----------  -->
  <UpcomingEvents />

  <div
    class="bg-zinc-800 justify-center gap-8 my-4 sm:my-8 md:my-16 h-64 w-full text-white flex flex-col md:flex-col lg:flex-row px-4 sm:px-8 md:px-40"
  >
    <div class="relative hidden lg:mt-0 lg:col-span-5 lg:flex">
      <img src="@/assets/img/goalkeeperblackpink.png" alt="" class="h-80" />
    </div>
    <div class="my-4 sm:my-0 sm:ml-4 md:ml-0">
      <h1 class="font-bold text-2xl sm:text-3xl md:text-4xl">Be part of us</h1>
      <p class="my-8 sm:my-4 md:my-6">
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

  <section class="relative pt-16">
    <div class="container mx-auto">
      <div class="flex flex-wrap items-center">
        <div class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
          <div
            class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-pink-500"
          >
            <img
              alt="..."
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=80"
              class="w-full align-middle rounded-t-lg"
            />
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
              <div class="relative flex flex-col mt-4">
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                  >
                    <i class="fas fa-sitemap"></i>
                  </div>
                  <h6 class="text-xl mb-1 font-semibold">Fotographer</h6>
                  <p class="mb-4 text-blueGray-500">
                    Moment moment keren kamu pas main bola bakal diabadikan langsung.
                  </p>
                </div>
              </div>
              <div class="relative flex flex-col min-w-0">
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                  >
                    <i class="fas fa-drafting-compass"></i>
                  </div>
                  <h6 class="text-xl mb-1 font-semibold">Videographer</h6>
                  <p class="mb-4 text-blueGray-500">
                    Bukan cuma difoto, Moment kamu juga bakal direkam langsung.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-6/12 px-4">
              <div class="relative flex flex-col min-w-0 mt-4">
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                  >
                    <i class="fas fa-newspaper"></i>
                  </div>
                  <h6 class="text-xl mb-1 font-semibold">Jersey Inventaris</h6>
                  <p class="mb-4 text-blueGray-500">
                    Main bola tinggal bawa sepatu aja, Baju nya udah disediain dan gak akan takut
                    kotor kotoran
                  </p>
                </div>
              </div>
              <div class="relative flex flex-col min-w-0">
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                  >
                    <i class="fas fa-file-alt"></i>
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
  <div class="flex flex-wrap w-full mb-5 flex-col items-center text-center">
    <h1 class="font-sans font-bold text-2xl text-center sm:text-4xl mb-2 sm:mb-0">HomeBase</h1>
    <p class="lg:w-1/2 w-full leading-relaxed text-base">
      Home Base Mabolista Fc Untuk Area Jakarta, Bogor, Depok Tangerang dan Bekasi
    </p>
  </div>

  <div class="items-center flex flex-col">
    <div class="md:flex lg:flex mx-40 mt-16">
      <div class="mx-auto flex flex-col w-96 mb-10">
        <div class="h-56 mx-4 -mt-6 overflow-hidden">
          <img src="@/assets/img/NYTCsawangan.jpg" alt="NYTC Sawangan" class="rounded-xl" />
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
          <img src="@/assets/img/dmsport.jpg" alt="DM Sport" class="rounded-xl" />
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
          <img src="@/assets/img/bigham.jpg" alt="Big Ham Stadium" class="rounded-xl" />
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
import FooterSection from '../components/layouts/FooterSection.vue'
import NavbarSection from '../components/layouts/NavbarSection.vue'
import UpcomingEvents from '../components/UpcomingEvents.vue'

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
