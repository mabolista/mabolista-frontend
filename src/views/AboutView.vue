<script setup>
import FooterSection from '../components/layouts/FooterSection.vue'
import NavbarSection from '../components/layouts/NavbarSection.vue'
</script>
<template>
  <NavbarSection />

  <section>
    <div
      class="relative overflow-hidden bg-cover bg-no-repeat"
      style="
        background-position: 50%;
        background-image: url('/src/assets/img/NYTC-about.jpg');
        height: 500px;
      "
    >
      <div
        class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed"
      >
        <div class="flex h-full items-center justify-center">
          <div class="px-6 text-center text-white md:px-12">
            <h1
              class="animate__fadeInUp mt-2 mb-16 text-5xl font-mabolistafont sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-700 md:text-6xl xl:text-7xl"
            >
              everything about us is here
            </h1>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section: Design Block -->
  <section class="text-gray-700 body-font border-t border-gray-200">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h2 class="text-center text-3xl font-mabolistafont leading-8 text-gray-900">
          Our Partnership
        </h2>
      </div>
      <div class="flex flex-wrap -m-4">
        <div class="p-4 md:w-1/3">
          <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
            <div class="flex items-center mb-3">
              <div
                class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white text-white flex-shrink-0"
              >
                <img src="/src/assets/img/logokratingdaeng.png" alt="Kratingdaeng" />
              </div>
              <h2 class="text-gray-900 text-lg title-font font-medium">Kratingdaeng</h2>
            </div>
            <div class="flex-grow">
              <p class="leading-relaxed text-base">
                Merupakan Suplemen Kesehatan yang baik diminum setiap hari. Energi dibutuhkan
                diantaranya untuk bekerja dan berpikir.
              </p>
              <a
                href="https://www.kratingdaeng.co.id/"
                target="blank"
                class="mt-3 text-slate-500 inline-flex items-center"
                >Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="p-4 md:w-1/3">
          <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
            <div class="flex items-center mb-3">
              <div
                class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white text-white flex-shrink-0"
              >
                <img src="/src/assets/img/logokahf.png" alt="KAHF" />
              </div>
              <h2 class="text-gray-900 text-lg title-font font-medium">Kahf</h2>
            </div>
            <div class="flex-grow">
              <p class="leading-relaxed text-base">
                Kahf memberikan perawatan terbaik untuk pria agar tampil lebih segar setiap harinya.
                temukan produknya yang tersedia di minimarket kotamu!
              </p>
              <a
                href="https://www.kahfeveryday.com/"
                target="blank"
                class="mt-3 text-slate-500 inline-flex items-center"
                >Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="p-4 md:w-1/3">
          <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
            <div class="flex items-center mb-3">
              <div
                class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white text-white flex-shrink-0"
              >
                <img src="/src/assets/img/logochavi.png" alt="Chavi Helmets" />
              </div>
              <h2 class="text-gray-900 text-lg title-font font-medium">Chavi Helmets</h2>
            </div>
            <div class="flex-grow">
              <p class="leading-relaxed text-base">
                Helm klasik dengan kualitas terbaik, memberikan kenyamanan dan keamanan saat
                berkendara. Sehingga sangat worth it untuk digunakan
              </p>
              <a
                href="https://www.tokopedia.com/chavihelmets"
                target="blank"
                class="mt-3 text-slate-500 inline-flex items-center"
                >Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="aboutmabolista" class="text-gray-700 body-font border-t border-gray-200">
    <div class="container px-5 py-24 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
        <img
          alt="feature"
          class="object-cover object-center h-full w-full"
          src="/src/assets/img/aboutus.jpg"
        />
      </div>
      <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left">
        <div class="flex flex-col mb-10">
          <div class="flex-grow">
            <h2 class="text-3xl font-mabolistafont leading-8 text-gray-900">About Us</h2>
            <p class="leading-relaxed text-base">
              Nama Mabolista sendiri diambil dari kata mabol yang sering digunakan orang-orang dalam
              mengajak “main bola”,sedangkan Ista adalah diambil dari istilah liga sepak bola di
              spanyol yang artinya pecinta sepak bola. Jadi Mabolista jika diartikan keseluruhan
              bertujuan mengajak pecintasepak bola (wadah) untuk bermain bersama,mempererat tali
              silahturahmi antar pecinta sepak bola
            </p>
            <a href="/contact" class="mt-3 text-slate-500 inline-flex items-center"
              >Info Kerjasama
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-white dark:bg-gray-900">
    <div
      class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6"
    >
      <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        <h2 class="text-3xl font-mabolistafont leading-8 text-gray-900">Visi & Mission</h2>
        <p class="mb-4">
          "Menjadi pusat pertemuan yang menginspirasi, menyatukan, dan mempromosikan gaya hidup
          sehat melalui permainan sepak bola yang menyenangkan untuk semua kalangan, dengan tujuan
          menciptakan komunitas yang kuat dan berkelanjutan."
        </p>
      </div>
      <div class="grid grid-cols-2 gap-4 mt-8">
        <img class="w-full rounded-lg" src="/src/assets/img/visimisi.jpg" alt="office content 1" />
        <img
          class="mt-4 w-full lg:mt-10 rounded-lg"
          src="/src/assets/img/visimisi2.jpg"
          alt="office content 2"
        />
        <img class="w-full rounded-lg" src="/src/assets/img/visimisi3.jpg" alt="office content 1" />
        <img
          class="mt-4 w-full lg:mt-10 rounded-lg"
          src="/src/assets/img/visimisi4.jpg"
          alt="office content 2"
        />
      </div>
    </div>
  </section>

  <section class="text-gray-700 body-font border-t border-gray-200">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h2 class="text-center text-3xl font-mabolistafont leading-8 text-gray-900">Our Teams</h2>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          Pengelola dan Struktural Komunitas Mabolista Fc
        </p>
      </div>
      <div class="flex flex-wrap -m-2">
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img
              alt="team"
              class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src="/src/assets/img/azrateams.jpg"
            />
            <div class="flex-grow">
              <h2 class="text-gray-900 title-font font-medium">Reza (Captain)</h2>
              <p class="text-gray-500">Ketua Komunitas</p>
            </div>
          </div>
        </div>
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img
              alt="team"
              class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src="/src/assets/img/azrateams.jpg"
            />
            <div class="flex-grow">
              <h2 class="text-gray-900 title-font font-medium">Azra</h2>
              <p class="text-gray-500">Wakil Ketua Komunitas</p>
            </div>
          </div>
        </div>
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img
              alt="team"
              class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src="/src/assets/img/dendyteams.jpg"
            />
            <div class="flex-grow">
              <h2 class="text-gray-900 title-font font-medium">Dendy</h2>
              <p class="text-gray-500">Content Creator</p>
            </div>
          </div>
        </div>
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img
              alt="team"
              class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src="/src/assets/img/hilalteams.jpg"
            />
            <div class="flex-grow">
              <h2 class="text-gray-900 title-font font-medium">Hilal (Balong)</h2>
              <p class="text-gray-500">Perlengkapan / Content Creator</p>
            </div>
          </div>
        </div>
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img
              alt="team"
              class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src="/src/assets/img/ilhamteams.jpg"
            />
            <div class="flex-grow">
              <h2 class="text-gray-900 title-font font-medium">Ilham</h2>
              <p class="text-gray-500">Web Development</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="text-gray-700 body-font border-t border-gray-200">
    <div class="container px-5 py-24 mx-auto">
      <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="inline-block w-8 h-8 text-gray-400 mb-8"
          viewBox="0 0 975.036 975.036"
        >
          <path
            d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"
          ></path>
        </svg>
        <p class="leading-relaxed text-lg">
          Nothing can stop you if you put your mind to it. All it takes is a change of your mindset.
        </p>
        <span class="inline-block h-1 w-10 rounded bg-yellow-500 mt-8 mb-6"></span>
        <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Mabolista Fc</h2>
        <p class="text-gray-500">Football Community</p>
      </div>
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

<script></script>
<style scoped></style>
