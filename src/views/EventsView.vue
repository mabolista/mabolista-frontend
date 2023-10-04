<script setup>
import FooterSection from '../components/layouts/FooterSection.vue'
import NavbarSection from '../components/layouts/NavbarSection.vue'
</script>

<template>
  <NavbarSection />

  <section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1
          class="max-w-2xl mb-4 text-4xl font-mabolistafont tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
        >
          More Events More Refreshments
        </h1>
        <p
          class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
        >
          Ayoo gabung main fun football bersama Mabolista Fc dalam events internal fun match maupun
          sparing
        </p>
        <a
          href="#"
          class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-bold text-center text-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
        >
          Connect with us
          <svg
            class="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <a
          href="https://www.instagram.com/mabolista_fc/"
          target="blank"
          class="inline-flex px-5 py-3 text-white font-medium text-center bg-gradient-to-r from-pink-500 to-violet-700 border-0 focus:outline-none rounded text-lg"
        >
          Instagram
        </a>
      </div>
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img src="/src/assets/img/headevents.png" alt="events mabolista" />
      </div>
    </div>
  </section>

  <section class="bg-white dark:bg-gray-900 antialiased">
    <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
      <div class="max-w-3xl mx-auto text-center">
        <h2
          class="text-4xl font-mabolistafont leading-tight tracking-tight text-gray-900 dark:text-white"
        >
          Schedule
        </h2>

        <div class="mt-4">
          <p>Info Jadwal Events Mabolista Fc dan Join List</p>
        </div>
      </div>

      <div class="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
        <div class="-my-4 divide-y divide-gray-200 dark:divide-gray-700">
          <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
            <p
              class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0"
            >
              15.30 - 18.00
            </p>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              <p>Sabtu, 30 September 2023 | NYTC Sawangan Depok</p>
            </h3>
            <a
              href="/events/nytcsawangan"
              title=""
              class="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Join List
              <svg
                aria-hidden="true"
                class="w-5 h-5 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>

          <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
            <p
              class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0"
            >
              00:00 - 00:00
            </p>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              <a href="#" class="hover:underline"
                >Minggu, 00 September 2023 | Big Ham Stadium Depok</a
              >
            </h3>
            <a href=""
              ><button
                class="bg-transparent hover:bg-yellow-500 text-black font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded"
              >
                Join List
              </button></a
            >
          </div>

          <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
            <p
              class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0"
            >
              00:00 - 00:00
            </p>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              <a href="#" class="hover:underline"
                >Minggu, 00 September 2023 | Big Ham Stadium Depok</a
              >
            </h3>
            <a href=""
              ><button
                class="bg-transparent hover:bg-yellow-500 text-black font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded"
              >
                Join List
              </button></a
            >
          </div>

          <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
            <p
              class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0"
            >
              00:00 - 00:00
            </p>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              <a href="#" class="hover:underline"
                >Minggu, 00 September 2023 | Big Ham Stadium Depok</a
              >
            </h3>
            <a href=""
              ><button
                class="bg-transparent hover:bg-yellow-500 text-black font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded"
              >
                Join List
              </button></a
            >
          </div>

          <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
            <p
              class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0"
            >
              00:00 - 00:00
            </p>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              <a href="#" class="hover:underline"
                >Minggu, 00 September 2023 | Big Ham Stadium Depok</a
              >
            </h3>
            <a href=""
              ><button
                class="bg-transparent hover:bg-yellow-500 text-black font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded"
              >
                Join List
              </button></a
            >
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="text-gray-600 body-font overflow-hidden">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-4xl text-3xl font-mabolistafont title-font mb-2 text-gray-900">
          Resources
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
          Silahkan Download Foto & Video Best Moments Kamu!!
        </p>
      </div>
      <div class="flex flex-wrap -m-4">
        <div class="p-4 xl:w-1/3 md:w-1/2 w-full">
          <div
            class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden"
          >
            <h2 class="text-sm tracking-widest title-font mb-1 font-medium">Foto Moments</h2>
            <h1 class="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
              2022
            </h1>
            <p class="flex items-center text-gray-600 mb-2">
              <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg> </span
              ><a href="" class="underline">BIG HAM 27 Maret 2022</a>
            </p>
            <p class="flex items-center text-gray-600 mb-2">
              <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg> </span
              ><a href="" class="underline">Serenia Mansion Bukber 17 April </a>
            </p>
            <p class="flex items-center text-gray-600 mb-2">
              <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg> </span
              ><a href="" class="underline">BIG HAM 29 Mei 2022</a>
            </p>
            <p class="flex items-center text-gray-600 mb-2">
              <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg> </span
              ><a href="" class="underline">BIG HAM 12 Juni 2022</a>
            </p>
            <p class="flex items-center text-gray-600 mb-2">
              <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg> </span
              ><a href="" class="underline">BIG HAM 17 Juli 2022</a>
            </p>
            <p class="flex items-center text-gray-600 mb-2">
              <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg> </span
              ><a href="" class="underline">My Futsal 13 Agustus 2022</a>
            </p>
            <p class="flex items-center text-gray-600 mb-2">
              <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg> </span
              ><a href="" class="underline">NYTC Sawangan 17 September 2022</a>
            </p>
            <p class="flex items-center text-gray-600 mb-2">
              <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg> </span
              ><a href="" class="underline">BIG HAM 09 Oktober 2022</a>
            </p>
            <p class="flex items-center text-gray-600 mb-2">
              <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg> </span
              ><a href="" class="underline">BIG HAM 06 November 2022</a>
            </p>
            <p class="flex items-center text-gray-600 mb-2">
              <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg> </span
              ><a href="" class="underline">DMS Ciledug 10 Desember 2022</a>
            </p>
          </div>
        </div>
        <div class="p-4 xl:w-1/3 md:w-1/2 w-full">
          <div
            class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden"
          >
            <h2 class="text-sm tracking-widest title-font mb-1 font-medium">Foto Moments</h2>
            <h1 class="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
              2023
            </h1>
            <p class="flex items-center text-gray-600 mb-2">
              <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg> </span
              ><a href="" class="underline">NYTC Sawangan 07 Januari 2023</a>
            </p>
            <p class="flex items-center text-gray-600 mb-2">
              <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg> </span
              ><a href="" class="underline">V3 Futsal 23 Januari 2023</a>
            </p>
            <p class="flex items-center text-gray-600 mb-2">
              <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg> </span
              ><a href="" class="underline">BIG HAM 04 Februari 2023</a>
            </p>
            <p class="flex items-center text-gray-600 mb-2">
              <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg> </span
              ><a href="" class="underline">BIG HAM 05 Maret 2023</a>
            </p>
            <p class="flex items-center text-gray-600 mb-2">
              <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg> </span
              ><a href="" class="underline">My Futsal 18 Maret 2023</a>
            </p>
            <p class="flex items-center text-gray-600 mb-2">
              <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg> </span
              ><a href="" class="underline">Triboon Mini Soccer 01 April 2023</a>
            </p>
            <p class="flex items-center text-gray-600 mb-2">
              <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg> </span
              ><a href="" class="underline">Teh Botol Ayo Arena Bogor 06 Mei 2023</a>
            </p>
            <p class="flex items-center text-gray-600 mb-2">
              <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg> </span
              ><a href="" class="underline">BIG HAM 04 Juni 2023</a>
            </p>
            <p class="flex items-center text-gray-600 mb-2">
              <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg> </span
              ><a href="" class="underline">BIG HAM 08 Juli 2023</a>
            </p>
            <p class="flex items-center text-gray-600 mb-2">
              <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg> </span
              ><a href="" class="underline">NYTC Sawangan 22 July 2023</a>
            </p>
            <p class="flex items-center text-gray-600 mb-2">
              <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg> </span
              ><a href="" class="underline">BIG HAM 19 Agustus 2023</a>
            </p>
            <p class="flex items-center text-gray-600 mb-2">
              <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg> </span
              ><a href="" class="underline">Pancoran Soccer Field 09 September 2023</a>
            </p>
            <p class="flex items-center text-gray-600 mb-2">
              <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg> </span
              ><a href="" class="underline">NYTC Sawangan 07 Oktober 2023</a>
            </p>
            <p class="flex items-center text-gray-600 mb-2">
              <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg> </span
              ><a href="" class="underline">BIG HAM 15 Oktober 2023</a>
            </p>
          </div>
        </div>
        <div class="p-4 xl:w-1/3 md:w-1/2 w-full">
          <div
            class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden"
          >
            <h2 class="text-sm tracking-widest title-font mb-1 font-medium">Video Moments</h2>
            <h1 class="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
              2023
            </h1>
            <p class="flex items-center text-gray-600 mb-2">
              <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg> </span
              ><a href="" class="underline">DMS Ciledug 10 Desember 2022</a>
            </p>
            <p class="flex items-center text-gray-600 mb-2">
              <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg> </span
              ><a href="" class="underline">NYTC Sawangan 07 Januari 2023</a>
            </p>
            <p class="flex items-center text-gray-600 mb-2">
              <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg> </span
              ><a href="" class="underline">BIG HAM 04 Februari 2023</a>
            </p>
            <p class="flex items-center text-gray-600 mb-2">
              <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg> </span
              ><a href="" class="underline">BIG HAM 05 Maret 2023</a>
            </p>
            <p class="flex items-center text-gray-600 mb-2">
              <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg> </span
              ><a href="" class="underline">NYTC Sawangan 22 Juli 2023</a>
            </p>
            <p class="flex items-center text-gray-600 mb-2">
              <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg> </span
              ><a href="" class="underline">Big HAM 19 Agustus 2023</a>
            </p>
            <p class="flex items-center text-gray-600 mb-2">
              <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg> </span
              ><a href="" class="underline">NYTC Sawangan 07 Oktober 2023</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section: Gallery -->
  <div class="container mx-auto px-4">
    <div class="flex flex-col text-center w-full mb-15">
      <h1 class="sm:text-4xl text-3xl font-mabolistafont title-font mb-2 text-gray-900">Gallery</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
        Foto Events Internal Fun Match Mabolista Fc
      </p>
    </div>

    <section class="py-8 px-4">
      <div class="flex flex-wrap -mx-4">
        <div class="hidden md:block md:w-1/2 px-4">
          <div
            class="h-full w-full bg-cover rounded shadow-md"
            style="background-image: url('https://source.unsplash.com/random/1280x720')"
          ></div>
        </div>
        <div class="md:w-1/2 h-auto px-4">
          <div class="mb-8">
            <img
              class="rounded shadow-md"
              src="https://source.unsplash.com/random/1280x720"
              alt=""
            />
          </div>
          <div>
            <img
              class="rounded shadow-md"
              src="https://source.unsplash.com/random/1280x720"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>

    <section class="py-8 px-4">
      <div class="flex flex-wrap -mx-4">
        <div class="md:w-1/2 px-4 mb-8 md:mb-0">
          <img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" />
        </div>
        <div class="md:w-1/2 px-4 mb-8 md:mb-0">
          <img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" />
        </div>
      </div>
    </section>

    <section class="pt-8 px-4">
      <div class="flex flex-wrap -mx-4">
        <div class="md:w-1/3 px-4 mb-8">
          <img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" />
        </div>
        <div class="md:w-1/3 px-4 mb-8">
          <img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" />
        </div>
        <div class="md:w-1/3 px-4 mb-8">
          <img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" />
        </div>
        <div class="md:w-1/3 px-4 mb-8">
          <img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" />
        </div>
        <div class="md:w-1/3 px-4 mb-8">
          <img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" />
        </div>
        <div class="md:w-1/3 px-4 mb-8">
          <img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" />
        </div>
      </div>
    </section>

    <section class="py-8 px-4">
      <div class="flex flex-wrap -mx-4 -mb-8">
        <div class="md:w-1/4 px-4 mb-8">
          <img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" />
        </div>
        <div class="md:w-1/4 px-4 mb-8">
          <img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" />
        </div>
        <div class="md:w-1/4 px-4 mb-8">
          <img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" />
        </div>
        <div class="md:w-1/4 px-4 mb-8">
          <img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" />
        </div>
        <div class="md:w-1/4 px-4 mb-8">
          <img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" />
        </div>
        <div class="md:w-1/4 px-4 mb-8">
          <img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" />
        </div>
        <div class="md:w-1/4 px-4 mb-8">
          <img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" />
        </div>
        <div class="md:w-1/4 px-4 mb-8">
          <img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" />
        </div>
      </div>
    </section>
  </div>

  <!-- End Section: Gallery -->
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
