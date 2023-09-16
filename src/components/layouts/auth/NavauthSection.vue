<script setup>

</script>
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
            Syahjuddin Azra
            <svg
              class="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <!-- Dropdown menu -->
          <div
          v-if="isDropdownOpen"
            id="dropdownAvatarName"
            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
          >
            <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
              <div class="font-medium">Admin</div>
              <div class="truncate">mabolista@gmail.com</div>
            </div>
            <ul
              class="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
            >
              <li>
                <a
                  href="/dashboard"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >Dashboard</a
                >
              </li>
              <li>
                <a
                  href="/profile"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >View Profile</a
                >
              </li>
            </ul>
            <div class="py-2">
              <button
          @click="signOut"
          class="block px-4 py-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Sign out
        </button>
            </div>
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
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-300">HOME</a>
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-300">ABOUT</a>
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-300">EVENTS</a>
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-300">CONTACT</a>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'NavauthSection',
  data() {
    return {
      isDropdownOpen: true,
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
  },
};
</script>

<style></style>
