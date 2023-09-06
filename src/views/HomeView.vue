<script setup>
import { ArchiveBoxIcon, CameraIcon, FireIcon, VideoCameraIcon } from '@heroicons/vue/24/outline'

const features = [
  {
    name: 'Fotographer',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: CameraIcon
  },
  {
    name: 'Videographer',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: VideoCameraIcon
  },
  {
    name: 'Free Water',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: ArchiveBoxIcon
  },
  {
    name: 'Sponsorship Producs',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: FireIcon
  }
]
</script>

<template>
  <nav class="bg-gray-100">
    <div class="xl:max-w-full px-3">
      <div class="flex justify-between">
        <div class="flex space-x-4">
          <div>
            <a href="#" class="flex items-center py-5 px-2 hover:text-yellow-300">
              <!-- logo image -->
              <img src="/src/assets/img/MABOLISTA FC.png" alt="Mabolista Fc" class="w-20 h-20" />
              <span class="font-mabolistafont">Mabolista Fc</span>
            </a>
          </div>

          <div class="hidden md:flex items-center gap-3 font-mabolistafont text-2xl">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/events">Events</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>
          </div>
        </div>

        <div class="hidden md:flex items-center space-x-1">
          <div class="pt-2 relative mx-auto text-gray-600">
            <input
              class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
              <svg
                class="text-gray-600 h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                style="enable-background: new 0 0 56.966 56.966"
                xml:space="preserve"
                width="512px"
                height="512px"
              >
                <path
                  d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                />
              </svg>
            </button>
          </div>
          <a href="/login" class="py-5 px-3 font-semibold">Log in</a>
          <a
            href="/signup"
            class="py-2 px-3 font-semibold bg-yellow-400 hover:bg-yellow-300 text-white rounded transition duration-300"
            >Signup</a
          >
        </div>

        <!-- ---------- BUTTON: MOBILE MENU ----------  -->
        <div class="md:hidden flex items-center">
          <button class="mobile-menu-button">
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- ---------- MOBILE MENU  ----------  -->

    <div class="mobile-menu hidden md:hidden font-mabolistafont">
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-300">HOME</a>
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-300">ABOUT</a>
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-300">EVENTS</a>
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-300">CONTACT</a>
    </div>
  </nav>

  <!-- ---------- HEAD CONTENT ----------  -->
  <div class="w-full relative mt-5 mb-16 sm:mt-24">
    <div class="flex flex-col items-center sm:flex-row">
      <div
        class="flex flex-col w-full pl-5 sm:pl-3 mx-auto lg:w-1/2 space-y-6 sm:mr-5 lg:mr-20 mb-6 sm:mb-0"
      >
        <h1 class="font-mabolistafont text-3xl sm:text-5xl text-black">Welcome Mabolism!</h1>
        <p class="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus distinctio, obcaecati
          perferendis deserunt suscipit, architecto est placeat quae ullam ipsam aliquam eaque id
          iure ea. Repellendus totam ipsa nisi laboriosam!
        </p>
        <div class="py-5">
          <a
            href="#"
            class="text-white bg-yellow-500 hover:bg-yellow-700 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-yellow-800"
            >Join Now</a
          >
        </div>
      </div>
      <div class="lg:w-1/3">
        <img src="/src/assets/img/MABOLISTA FC.png" alt="" />
      </div>
    </div>
  </div>

  <!-- ---------- SPONSOR ----------  -->
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="text-center text-3xl font-mabolistafont leading-8 text-gray-900">
        Our Sponsorship
      </h2>
      <div
        class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
      >
        <img
          class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          src="/src/assets/img/logochavi.png"
          alt="Transistor"
          width="158"
          height="48"
        />
        <img
          class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
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
          class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          src="/src/assets/img/logopanguripan.png"
          alt="SavvyCal"
          width="158"
          height="48"
        />
      </div>
    </div>
  </div>

  <!-- ---------- EVENTS ----------  -->
  <div class="container flex justify-center items-center mx-auto">
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
      <div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            class="w-full"
            src="/src/assets/img/kingkong soccer arena.jpg"
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">King Kong Arena</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
              Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 py-6">
            <a
              href="#"
              class="text-white bg-yellow-500 hover:bg-yellow-700 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-yellow-800"
              >Join List</a
            >
          </div>
        </div>
      </div>
      <div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full" src="/src/assets/img/big ham.jpg" alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Big Ham Stadium</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
              Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 py-6">
            <a
              href="#"
              class="text-white bg-yellow-500 hover:bg-yellow-700 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-yellow-800"
              >Join List</a
            >
          </div>
        </div>
      </div>
      <div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            class="w-full"
            src="/src/assets/img/NYTC sawangan.jpg"
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">NYTC Sawangan</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
              Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 py-6">
            <a
              href="#"
              class="text-white bg-yellow-500 hover:bg-yellow-700 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-yellow-800"
              >Join List</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ---------- Benefits ----------  -->
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-base font-semibold leading-7 text-yellow-500">Benefits</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Everything you need to refresh your feelings
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Benefit is the most important thing in running an event because it can make members
          enthusiastic about carrying out activities at the event
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl
          class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
        >
          <div v-for="feature in features" :key="feature.name" class="relative pl-16">
            <dt class="text-base font-semibold leading-7 text-gray-900">
              <div
                class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-500"
              >
                <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              {{ feature.name }}
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">{{ feature.description }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>

  <!-- ---------- Upcoming Events ----------  -->

  <div class="container mx-auto px-4 mb-5">
    <div class="flex items-center justify-between">
      <h2 class="font-semibold mb-4 py-4 md:font-bold md:text-3xl text-xl">Upcoming Events</h2>
      <div class="block">
        <a href="" class="">Explore more events</a>
      </div>
    </div>

    <div class="grid grid-cols-4 grid-rows-1 gap-3">
      <div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            class="w-full"
            src="/src/assets/img/kingkong soccer arena.jpg"
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">King Kong Arena</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
              Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 py-6">
            <a
              href="#"
              class="text-white bg-yellow-500 hover:bg-yellow-700 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-yellow-800"
              >Join List</a
            >
          </div>
        </div>
      </div>
      <div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            class="w-full"
            src="/src/assets/img/kingkong soccer arena.jpg"
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">King Kong Arena</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
              Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 py-6">
            <a
              href="#"
              class="text-white bg-yellow-500 hover:bg-yellow-700 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-yellow-800"
              >Join List</a
            >
          </div>
        </div>
      </div>
      <div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            class="w-full"
            src="/src/assets/img/kingkong soccer arena.jpg"
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">King Kong Arena</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
              Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 py-6">
            <a
              href="#"
              class="text-white bg-yellow-500 hover:bg-yellow-700 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-yellow-800"
              >Join List</a
            >
          </div>
        </div>
      </div>
      <div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            class="w-full"
            src="/src/assets/img/kingkong soccer arena.jpg"
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">King Kong Arena</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
              Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 py-6">
            <a
              href="#"
              class="text-white bg-yellow-500 hover:bg-yellow-700 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-yellow-800"
              >Join List</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ---------- Footer ----------  -->

  <footer class="bg-gray-900 mt-20">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <a href="#" class="flex items-center">
            <img src="/src/assets/img/MABOLISTA FC.png" class="h-11 mr-3" alt="Mabolista Logo" />
            <span
              class="self-center font-mabolistafont text-2xl font-semibold whitespace-nowrap text-white"
              >Mabolista Fc</span
            >
          </a>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 class="mb-6 font-mabolistafont text-lg uppercase text-white">Resources</h2>
            <ul class="text-gray-500 font-mabolistafont">
              <li class="mb-4">
                <a href="#" class="hover:text-white">Home</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:text-white">About</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:text-white">Events</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:text-white">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 font-mabolistafont text-lg text-white uppercase">Follow us</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-mabolistafont">
              <li class="mb-4">
                <a href="#" class="hover:text-white">Instagram</a>
              </li>
              <li>
                <a href="#" class="hover:text-white">Tiktok</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 font-mabolistafont text-lg uppercase text-white">Legal</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-mabolistafont">
              <li class="mb-4">
                <a href="#" class="hover:text-white">Privacy Policy</a>
              </li>
              <li>
                <a href="#" class="hover:text-white">Terms &amp; Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
          >© 2023 <a href="#" class="hover:underline">Mabolista Fc</a>. All Rights Reserved.
        </span>
        <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
          <a href="#" class="text-gray-500 hover:text-white">
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 8 19"
            >
              <path
                fill-rule="evenodd"
                d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="sr-only">Facebook page</span>
          </a>
          <a href="#" class="text-gray-500 hover:text-white">
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 21 16"
            >
              <path
                d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"
              />
            </svg>
            <span class="sr-only">Discord community</span>
          </a>
          <a href="#" class="text-gray-500 hover:text-white">
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 17"
            >
              <path
                fill-rule="evenodd"
                d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="sr-only">Twitter page</span>
          </a>
          <a href="#" class="text-gray-500 hover:text-white">
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="sr-only">GitHub account</span>
          </a>
          <a href="#" class="text-gray-500 hover:text-white">
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="sr-only">Dribbble account</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
