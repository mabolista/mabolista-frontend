<script setup>
import FooterSection from '../components/layouts/FooterSection.vue'
import NavauthSection from '../components/layouts/auth/NavauthSection.vue'
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
  <NavauthSection />

  <!-- ---------- HEAD CONTENT ----------  -->
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
        class="font-mabolistafont text-3xl sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-700"
      >
        Welcome Mabolism!
      </h1>
      <h3 class="mt-3 mx-auto w-96 font-bold">#Makemoreconnections #MabolistaFc</h3>
    </div>
  </section>

  <!-- ---------- SPONSOR ----------  -->
  <div class="bg-white py-24 sm:py-32 flex items-center justify-center">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="text-center text-3xl font-mabolistafont leading-8 text-gray-900">
        Our Sponsorship
      </h2>
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

  <!-- ---------- JOIN LIST MODAL ----------  -->

  <!-- Main modal -->
  <div
    id="authentication-modal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative w-full max-w-md max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button
          type="button"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-hide="authentication-modal"
        >
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <div class="px-6 py-6 lg:px-8">
          <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Isi List Dulu ya</h3>
          <form class="space-y-6" action="#">
            <div>
              <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Nama</label
              >
              <input
                type="text"
                name="name"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Nama"
                required
              />
            </div>
            <div>
              <label
                for="position"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Posisi</label
              >
              <input
                type="text"
                name="position"
                id="position"
                placeholder="Pemain / Kiper"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <button
              type="submit"
              class="w-full text-white bg-yellow-400 hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- ---------- END JOIN LIST MODAL ----------  -->

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
            <button
            data-modal-target="authentication-modal"
            data-modal-toggle="authentication-modal"
            class="block text-white bg-yellow-400 hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            Join Now
          </button>
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
        <h2 class="text-center text-3xl font-mabolistafont leading-8">Benefits</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-yellow-500 sm:text-4xl">
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

  <div class="card bg-gray-800 card sm:flex md:flex">
    <div class="sm:flex-shrink-0 md:flex-shrink-0">
      <img
        class="imagine w-full sm:w-56 md:w-56 lg:w-56"
        src="/src/assets/img/NYTC sawangan.jpg"
        alt="NYTC Sawangan"
      />
    </div>
    <div class="righty ml-3 md:mt-0 md:ml-6 sm:ml-3">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <div
            class="text-gray-100 mt-2 mb-4 uppercase tracking-wide text-lg text-600 font-bold cardheading cardtitle"
          >
            INTERNAL FUN MATCH
          </div>
          <div
            class="text-gray-100 mb-4 uppercase tracking-wide text-lg text-600 font-bold cardheading"
          >
            <i class="material-icons"> schedule </i
            ><small class="text-gray-200 mb-1 uppercase tracking-wide text-400 cardheading">
              16.00pm - 18.00pm</small
            >
          </div>
        </div>
        <!-- ... -->
        <div class="lefting">
          <div class="date-ribbon border-2 border-gray-200 mr-4">
            <h2 class="text-gray-800 tracking-wide text-lg text-600 font-bold">SEP</h2>
            <h1 class="text-gray-800 tracking-wide text-xl text-600 font-bold">30</h1>
          </div>
        </div>
      </div>

      <div
        class="block mt-1 mr-6 text-lg md:w-3/4 lg:w-3/4 leading-tight font-semibold text-gray-200 hover:underline"
      >
        Description
      </div>
      <p class="mb-2 mt-2 mr-6 text-gray-300 md:w-3/4 lg:w-3/4">
        Here is a description for the even and a bunch of information about that event.
      </p>
      <div class="lefting h-16 mb-2">
        <a
          class="tickets bg-transparent uppercase hover:bg-yellow-500 text-gray-100 font-semibold hover:text-black py-2 px-4 border-2 border-yellow-500 hover:border-transparent mb-2 mr-4"
        >
          Waiting List
        </a>
      </div>
    </div>
  </div>

  <FooterSection />
</template>

<script>
import axios from 'axios'

export default {
  name: 'home-auth',

  async created() {
    const response = await axios.get('http://localhost:8080/users', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    });
    console.log(response);
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
</style>
