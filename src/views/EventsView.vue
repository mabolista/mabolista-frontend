<script setup>
import FooterSection from '../components/layouts/FooterSection.vue'
import NavbarSection from '../components/layouts/NavbarSection.vue'
</script>

<template>
  <NavbarSection />

  <section class="bg-white dark:bg-gray-900 pt-20 px-8">
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
        <img src="@/assets/img/headevents.png" alt="events mabolista" />
      </div>
    </div>
  </section>

  <h1 class="title-shop text-4xl font-mabolistafont">Our Jerseys -></h1>
  <article class="banner">
    <div class="card__img">
      <img src="@/assets/img/jersey1st.webp" alt="" />
    </div>
    <div class="card__name">
      <p>Jersey Mabolista 1st</p>
    </div>
    <div class="card__precis">
      <div class="card__price gap-4">
        <div>
          <span class="card__preci card__preci--now mb-4">Rp.175.000</span>
          <a
            href="#"
            class="text-white bg-black hover:bg-slate-700 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-slate-600 dark:hover:bg-slate-700 focus:outline-none dark:focus:ring-slate-800"
            >Order Now</a
          >
        </div>
      </div>
    </div>
  </article>

  <main class="main bd-grid">
    <article class="card">
      <div class="card__img">
        <img src="@/assets/img/jersey3rd.webp" alt="" />
      </div>
      <div class="card__name">
        <p>Jersey Mabolista 3rd</p>
      </div>
      <div class="card__precis">
        <a href="" class="card__icon"
          ><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
            <path
              d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
            /></svg
        ></a>
        <div>
          <span class="card__preci card__preci--before"><s>Rp.205.000</s></span>
          <span class="card__preci card__preci--now">Rp.175.000</span>
        </div>
        <a href="" class="card__icon"
          ><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
            <path
              d="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16H53.9c7.6 0 14.2 5.3 15.7 12.8l58.9 288c6.1 29.8 32.3 51.2 62.7 51.2H496c8.8 0 16-7.2 16-16s-7.2-16-16-16H191.2c-15.2 0-28.3-10.7-31.4-25.6L152 288H466.5c29.4 0 55-20 62.1-48.5L570.6 71.8c5-20.2-10.2-39.8-31-39.8H99.1C92.5 13 74.4 0 53.9 0H16zm90.1 64H539.5L497.6 231.8C494 246 481.2 256 466.5 256H145.4L106.1 64zM168 456a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm80 0a56 56 0 1 0 -112 0 56 56 0 1 0 112 0zm200-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 80a56 56 0 1 0 0-112 56 56 0 1 0 0 112z"
            /></svg
        ></a>
      </div>
    </article>

    <article class="card">
      <div class="card__img">
        <img src="@/assets/img/jersey2nd.webp" alt="" />
      </div>
      <div class="card__name">
        <p>Jersey Mabolista 2nd</p>
      </div>
      <div class="card__precis">
        <a href="" class="card__icon"
          ><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
            <path
              d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
            /></svg
        ></a>
        <div>
          <span class="card__preci card__preci--before"><s>Rp.205.000</s></span>
          <span class="card__preci card__preci--now">Rp.175.000</span>
        </div>
        <a href="" class="card__icon"
          ><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
            <path
              d="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16H53.9c7.6 0 14.2 5.3 15.7 12.8l58.9 288c6.1 29.8 32.3 51.2 62.7 51.2H496c8.8 0 16-7.2 16-16s-7.2-16-16-16H191.2c-15.2 0-28.3-10.7-31.4-25.6L152 288H466.5c29.4 0 55-20 62.1-48.5L570.6 71.8c5-20.2-10.2-39.8-31-39.8H99.1C92.5 13 74.4 0 53.9 0H16zm90.1 64H539.5L497.6 231.8C494 246 481.2 256 466.5 256H145.4L106.1 64zM168 456a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm80 0a56 56 0 1 0 -112 0 56 56 0 1 0 112 0zm200-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 80a56 56 0 1 0 0-112 56 56 0 1 0 0 112z"
            /></svg
        ></a>
      </div>
    </article>

    <article class="card">
      <div class="card__img">
        <img src="@/assets/img/jersey4th.webp" alt="" />
      </div>
      <div class="card__name">
        <p>Jersey Mabolista 4th</p>
      </div>
      <div class="card__precis">
        <a href="" class="card__icon"
          ><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
            <path
              d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
            /></svg
        ></a>
        <div>
          <span class="card__preci card__preci--before"><s>Rp.205.000</s></span>
          <span class="card__preci card__preci--now">Rp.175.000</span>
        </div>
        <a href="" class="card__icon"
          ><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
            <path
              d="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16H53.9c7.6 0 14.2 5.3 15.7 12.8l58.9 288c6.1 29.8 32.3 51.2 62.7 51.2H496c8.8 0 16-7.2 16-16s-7.2-16-16-16H191.2c-15.2 0-28.3-10.7-31.4-25.6L152 288H466.5c29.4 0 55-20 62.1-48.5L570.6 71.8c5-20.2-10.2-39.8-31-39.8H99.1C92.5 13 74.4 0 53.9 0H16zm90.1 64H539.5L497.6 231.8C494 246 481.2 256 466.5 256H145.4L106.1 64zM168 456a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm80 0a56 56 0 1 0 -112 0 56 56 0 1 0 112 0zm200-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 80a56 56 0 1 0 0-112 56 56 0 1 0 0 112z"
            /></svg
        ></a>
      </div>
    </article>
  </main>

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
              <p>Minggu, 12 November 2023 | NYTC Sawangan Depok</p>
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
            <a
              href="#"
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
            <a
              href="#"
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
              ><a href="" class="underline">Champions Arena Futsal 28 Oktober 2023</a>
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
              ><a href="" class="underline">NYTC Sawangan 12 November 2023</a>
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
          <div>
            <img
              class="h-full w-full bg-cover rounded shadow-md"
              src="@/assets/img/gallery/Gallery.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="md:w-1/2 h-auto px-4">
          <div class="mb-8">
            <img class="rounded shadow-md" src="@/assets/img/gallery/Gallery14.jpg" alt="" />
          </div>
          <div>
            <img class="rounded shadow-md" src="@/assets/img/gallery/Gallery17.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section class="py-8 px-4">
      <div class="flex flex-wrap -mx-4">
        <div class="md:w-1/2 px-4 mb-8 md:mb-0">
          <img class="rounded shadow-md" src="@/assets/img/gallery/Gallery18.jpg" alt="" />
        </div>
        <div class="md:w-1/2 px-4 mb-8 md:mb-0">
          <img class="rounded shadow-md" src="@/assets/img/gallery/Gallery8.jpg" alt="" />
        </div>
      </div>
    </section>

    <section class="pt-8 px-4">
      <div class="flex flex-wrap -mx-4">
        <div class="md:w-1/3 px-4 mb-8">
          <img class="rounded shadow-md" src="@/assets/img/gallery/Gallery2.jpg" alt="" />
        </div>
        <div class="md:w-1/3 px-4 mb-8">
          <img class="rounded shadow-md" src="@/assets/img/gallery/Gallery3.jpg" alt="" />
        </div>
        <div class="md:w-1/3 px-4 mb-8">
          <img class="rounded shadow-md" src="@/assets/img/gallery/Gallery4.jpg" alt="" />
        </div>
        <div class="md:w-1/3 px-4 mb-8">
          <img class="rounded shadow-md" src="@/assets/img/gallery/Gallery5.jpg" alt="" />
        </div>
        <div class="md:w-1/3 px-4 mb-8">
          <img class="rounded shadow-md" src="@/assets/img/gallery/Gallery6.jpg" alt="" />
        </div>
        <div class="md:w-1/3 px-4 mb-8">
          <img class="rounded shadow-md" src="@/assets/img/gallery/Gallery7.jpg" alt="" />
        </div>
      </div>
    </section>

    <section class="py-8 px-4">
      <div class="flex flex-wrap -mx-4 -mb-8">
        <div class="md:w-1/4 px-4 mb-8">
          <img class="rounded shadow-md" src="@/assets/img/gallery/Gallery9.jpg" alt="" />
        </div>
        <div class="md:w-1/4 px-4 mb-8">
          <img class="rounded shadow-md" src="@/assets/img/gallery/Gallery10.jpg" alt="" />
        </div>
        <div class="md:w-1/4 px-4 mb-8">
          <img class="rounded shadow-md" src="@/assets/img/gallery/Gallery11.jpg" alt="" />
        </div>
        <div class="md:w-1/4 px-4 mb-8">
          <img class="rounded shadow-md" src="@/assets/img/gallery/Gallery12.jpg" alt="" />
        </div>
        <div class="md:w-1/4 px-4 mb-8">
          <img class="rounded shadow-md" src="@/assets/img/gallery/Gallery13.jpg" alt="" />
        </div>
        <div class="md:w-1/4 px-4 mb-8">
          <img class="rounded shadow-md" src="@/assets/img/gallery/Gallery15.jpg" alt="" />
        </div>
        <div class="md:w-1/4 px-4 mb-8">
          <img class="rounded shadow-md" src="@/assets/img/gallery/Gallery16.jpg" alt="" />
        </div>
        <div class="md:w-1/4 px-4 mb-8">
          <img class="rounded shadow-md" src="@/assets/img/gallery/Gallery20.jpg" alt="" />
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

@media screen and (min-width: 768px) {
  :root {
    --h1-font-size: 2rem;
    --normal-font-size: 1rem;
    --smaller-font-size: 0.813rem;
  }
}

*,
::after,
::before {
  box-sizing: border-box;
}
body {
  margin: 2rem 0 0 0;
  background-color: #fff;
  color: var(--dark-color);
  font-family: var(--body-font);
}
img {
  max-width: 100%;
  height: auto;
}
a {
  text-decoration: none;
}

.main {
  padding: 2rem 0;
}
.bd-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  max-width: 1200px;
  margin-left: 2.5rem;
  margin-right: 2.5rem;
  align-items: center;
  gap: 2rem;
  width: 100%;
  margin: auto;
}

.title-shop {
  position: relative;
  margin: 0 2.5rem;
}
.title-shop::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 72px;
  height: 2px;
  background-color: var(--dark-color);
  margin-left: 0.25rem;
}

.banner {
  max-width: 1200px;
  margin: auto;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1.5rem 2rem;
  border-radius: 1rem;
  overflow: hidden;
  background-color: #efefef !important;
}
.banner .card__img {
  width: 380px;
}
.banner .card__precis {
  width: 20%;
  margin-left: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  align-items: flex-end;
  transition: 0.5s;
  flex-direction: column;
  gap: 20px;
}
.banner .card__precis .card__preci {
  font-size: 1.5rem !important;
}
.banner .card__precis .card__price {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-evenly;
}
.banner .card__precis button {
  font-size: 1.5rem !important;
  border: none;
  background-color: #161616;
  color: #fff;
  padding: 0.9rem 3rem;
  width: 100%;
  cursor: pointer;
}

.banner .card__name {
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0%;
  top: 0;
  width: 3.5rem;
  height: 100%;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  text-align: center;
  background-color: #000000;
  color: #fff;
  font-weight: bold;
  transition: 0.5s;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 2rem;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 0rem 2rem #e5e9ef;
}

.card__img {
  width: 180px;
  height: auto;
  padding: 3rem 0;
  transition: 0.5s;
  mix-blend-mode: darken;
}
.card__name {
  position: absolute;
  align-items: center;
  justify-content: center;
  left: -25%;
  top: 0;
  width: 3.5rem;
  height: 100%;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  text-align: center;
  background-color: #000000;
  color: #fff;
  transition: 0.5s;
  font-family: 'Open Sans', sans-serif;
}
.card__icon {
  font-size: 1.5rem;
  color: var(--dark-color);
}
.card__icon:hover {
  color: var(--accent-color);
}
.card__precis {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  transition: 0.5s;
}
.card__preci {
  display: block;
  text-align: center;
}
.card__preci--before {
  font-size: var(--smaller-font-size);
  color: var(--accent-color);
  margin-bottom: 0.25rem;
}
.card__preci--now {
  font-size: var(--h3-font-size);
  font-weight: bold;
}

.card:hover {
  box-shadow: 0 0.5rem 1rem #d1d9e6;
}
.card:hover .card__name {
  left: 0;
}
.card:hover .card__img {
  margin-left: 3.5rem;
}
.card:hover .card__precis {
  margin-left: 3.5rem;
  padding: 0 1.5rem;
}
</style>
