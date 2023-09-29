<script setup>
import NavbarSection from '../components/layouts/NavbarSection.vue'
</script>

<template>
  <NavbarSection />
  <div v-if="users">
    <div
      v-for="user in users"
      :key="user.id"
      class="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5"
    >
      <img
        class="w-32 h-32 rounded-full mx-auto"
        src="https://picsum.photos/200"
        alt="Profile picture"
      />
      <h2 class="text-center text-2xl font-semibold mt-3">Hi, {{ user.name }}</h2>
      <p class="text-center text-gray-600 mt-1">Mabolism</p>
      <div class="flex justify-center mt-5">
        <a
          href="#"
          data-modal-target="medium-modal"
          data-modal-toggle="medium-modal"
          class="text-blue-500 hover:text-blue-700 mx-3"
          >Edit Profile</a
        >
      </div>
      <div class="mt-5">
        <h3 class="text-xl font-semibold">Bio</h3>
        <p class="text-gray-600 mt-2">My name {{ user.name }} im mabolista member</p>
      </div>
      <div>
        <div class="mt-10 py-10 border-t border-blueGray-200 text-center flex justify-center">
          <form class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="name"
                >
                  Username
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight"
                  id="name"
                  v-model="user.name"
                  name="name"
                  type="text"
                  placeholder="Input name"
                  readonly
                />
              </div>
              <div class="w-full px-3 mt-6">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="email"
                >
                  Email
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight"
                  id="email"
                  v-model="user.email"
                  type="email"
                  name="email"
                  placeholder="Input Email"
                  readonly
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="phoneNumber"
                >
                  Phone Number
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight"
                  id="phoneNumber"
                  v-model="user.phoneNumber"
                  name="phoneNumber"
                  type="text"
                  placeholder="Input Phone Number"
                  readonly
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="text-center">
      <div role="status">
        <svg
          aria-hidden="true"
          class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>

  <!-- Edit profile -->
  <!-- <div
    id="medium-modal"
    tabindex="-1"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative w-full max-w-2xl max-h-full">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Edit Profile</h3>
        </div>

        <div class="p-6 space-y-6">
          <form class="w-full max-w-lg" @submit.prevent="saveChanges">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="name"
                >
                  Username
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="name"
                  v-model="name"
                  name="name"
                  type="text"
                  placeholder="Input name"
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="email"
                >
                  Email
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  v-model="email"
                  type="email"
                  name="email"
                  placeholder="Input Email"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="password"
                >
                  Password
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="password"
                  v-model="password"
                  name="password"
                  type="password"
                  placeholder="Input Password"
                />
              </div>
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="confirmPassword"
                >
                  Confirm Password
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="confirmPassword"
                  v-model="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Input Password Again"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="phoneNumber"
                >
                  Phone Number
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="phoneNumber"
                  v-model="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  placeholder="Input Phone Number"
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="image"
                >
                  Upload Foto
                </label>
                <input
                  class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="image"
                  v-on:change="onFileChange"
                  name="image"
                  type="file"
                />
                <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">
                  PNG or JPG (MAX. 2MB).
                </p>
              </div>
            </div>

            <div
              class="flex items-center pt-5 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
            >
              <button
                data-modal-hide="medium-modal"
                type="button"
                class="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
              >
                Save Changes
              </button>
              <button
                data-modal-hide="medium-modal"
                type="button"
                class="text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-white focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      users: []
    }
  },
  methods: {
    getUser() {
      axios.get('http://localhost:8080/users?page=0&pageSize=10').then((response) => {
        this.users = response.data.data
      })
    }
  }
}
</script>
