<script setup>
import FooterSection from '../components/layouts/FooterSection.vue'
import NavbarSection from '../components/layouts/NavbarSection.vue'
import 'animate.css';
</script>
<template>
  <NavbarSection />

<section>

  <div class="relative overflow-hidden bg-cover bg-no-repeat" style="
        background-position: 50%;
        background-image: url('/src/assets/img/NYTC-about.jpg');
        height: 500px;
      ">
    <div
      class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
      <div class="flex h-full items-center justify-center">
        <div class="px-6 text-center text-white md:px-12">
          <h1 class="animate__fadeInUp mt-2 mb-16 text-5xl font-mabolistafont sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-700 md:text-6xl xl:text-7xl">
            everything about us is here
          </h1>
          <button type="button"
            class="rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
            data-te-ripple-init data-te-ripple-color="light">
            Learn More
            
          </button>
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
      <div
        class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center"
      >
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
      <button
        class="flex mx-auto mt-16 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg"
      >
        Join list
      </button>
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
              src="/src/assets/img/rezateams.jpg"
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
        <!-- <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img
              alt="team"
              class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src="https://dummyimage.com/98x98/edf2f7/a5afbd"
            />
            <div class="flex-grow">
              <h2 class="text-gray-900 title-font font-medium">Boris Kitua</h2>
              <p class="text-gray-500">UX Researcher</p>
            </div>
          </div>
        </div> -->
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
    ><i class="fa-brands fa-whatsapp fa-2xl" style="color: #05ff37;"></i></a>
</template>

<script>
</script>
<style scoped>

</style>
