<template>
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
    <carousel v-bind="settings" :breakpoints="breakpoints" :items-to-show="1" :wrap-around="true">
      <slide v-for="slide in 1" :key="slide">
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
      </slide>

      <slide v-for="slide in 1" :key="slide">
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
      </slide>

      <slide v-for="slide in 1" :key="slide">
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
      </slide>

      <slide v-for="slide in 1" :key="slide">
        <article class="card">
          <div class="card__img">
            <img src="@/assets/img/jerseykiper1st.webp" alt="" />
          </div>
          <div class="card__name">
            <p>Jersey Kiper Mabolista 1st</p>
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
      </slide>

      <slide v-for="slide in 1" :key="slide">
        <article class="card">
          <div class="card__img">
            <img src="@/assets/img/jerseykiper2nd.webp" alt="" />
          </div>
          <div class="card__name">
            <p>Jersey Kiper Mabolista 2nd</p>
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
      </slide>

      <slide v-for="slide in 1" :key="slide">
        <article class="card">
          <div class="card__img">
            <img src="@/assets/img/jerseykiper3rd.webp" alt="" />
          </div>
          <div class="card__name">
            <p>Jersey Kiper Kiper Mabolista 3rd</p>
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
      </slide>

      <slide v-for="slide in 1" :key="slide">
        <article class="card">
          <div class="card__img">
            <img src="@/assets/img/jerseykiper4th.webp" alt="" />
          </div>
          <div class="card__name">
            <p>Jersey Kiper Kiper Mabolista 4th</p>
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
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </main>
</template>

<script>
import { defineComponent } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default defineComponent({
  name: 'EventsView',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  },
  data: () => ({
    settings: {
      itemsToShow: 1,
      snapAlign: 'center'
    },
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3,
        snapAlign: 'center'
      },
      // 1024 and up
      1024: {
        itemsToShow: 3.7,
        snapAlign: 'start'
      }
    }
  })
})
</script>

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
