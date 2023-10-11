<template>
  <nav class="sticky top-0 w-full transition bg-transparent backdrop-blur-md z-10">
    <div class="xl:max-w-full px-3">
      <div class="flex justify-between">
        <div class="flex space-x-4">
          <div>
            <a href="#" class="flex items-center py-5 px-2">
              <img src="/src/assets/img/MABOLISTA FC.png" alt="Mabolista Fc" class="w-20 h-20" />
              <span class="font-mabolistafont">Mabolista Fc</span>
            </a>
          </div>

          <div class="hidden md:flex items-center gap-3 font-mabolistafont text-2xl">
            <RouterLink class="hover:text-yellow-300" to="/">Home</RouterLink>
            <RouterLink class="hover:text-yellow-300" to="/about">About</RouterLink>
            <RouterLink class="hover:text-yellow-300" to="/events">Events</RouterLink>
            <RouterLink class="hover:text-yellow-300" to="/contact">Contact</RouterLink>
          </div>
        </div>

        <div class="hidden md:flex items-center space-x-1">
          <div v-if="isAuthenticated">
            <button
              id="dropdownAvatarNameButton"
              data-dropdown-toggle="dropdownAvatarName"
              class="flex items-center text-sm font-medium text-gray-900 rounded-full hover:text-yellow-600 dark:hover:text-yellow-500 md:mr-0 dark:text-white"
              type="button"
            >
              <span class="sr-only">Open user menu</span>
              <img
                class="w-8 h-8 mr-2 rounded-full"
                src="/src/assets/img/azraprofil.jpg"
                alt="user photo"
              />
            </button>

            <!-- Dropdown menu -->
            <div
              id="dropdownAvatarName"
              class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
            >
              <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div class="font-medium">
                  <span>Admin</span>
                </div>
                <div class="truncate">mabolista@gmail.com</div>
              </div>
              <div>
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownAvatarNameButton"
                >
                  <li v-for="user in users" :key="user.id">
                    <router-link
                      :to="'/profile/' + user.id"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {{ user.id }}
                    </router-link>
                  </li>
                </ul>
              </div>
              <div class="py-2">
                <a
                  href="javascript:void(0)"
                  @click="signOut"
                  class="block px-4 py-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
          <div v-else>
            <router-link to="/login" class="py-5 px-3 font-extrabold">Login</router-link>
            <router-link
              to="/signup"
              class="py-2 px-3 font-extrabold bg-gradient-to-r from-pink-500 to-violet-700 text-white rounded transition duration-300"
            >
              SignUp
            </router-link>
          </div>
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
      <a href="/" class="block py-2 px-4 text-sm hover:bg-gray-300">HOME</a>
      <a href="/about" class="block py-2 px-4 text-sm hover:bg-gray-300">ABOUT</a>
      <a href="/events" class="block py-2 px-4 text-sm hover:bg-gray-300">EVENTS</a>
      <a href="/contact" class="block py-2 px-4 text-sm hover:bg-gray-300">CONTACT</a>
    </div>
  </nav>
</template>

<script>
import axios from 'axios'
export default {
  name: 'NavbarSection',
  data() {
    return {
      users: [],
      authenticated: false
    }
  },
  computed: {
    isAuthenticated() {
      return !!localStorage.getItem('token')
    }
  },
  mounted() {
    axios
      .get(`users?page=0&pageSize=10`)
      .then((response) => {
        this.users = response.data.data.users
      })
      .catch((error) => {
        console.error(error)
      })
  },
  methods: {
    signOut() {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      this.authenticated = false
      this.users = {}
      window.location.reload('/')
    }
  }
}
</script>
<style></style>
