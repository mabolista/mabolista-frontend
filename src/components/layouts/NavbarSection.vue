<script setup></script>
<template>
  <nav class="sticky top-0 w-full transition bg-transparent backdrop-blur-md">
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
          <a href="/login" class="py-5 px-3 font-extrabold">Log in</a>
          <a
            href="/signup"
            class="py-2 px-3 font-extrabold bg-gradient-to-r from-pink-500 to-violet-700 text-white rounded transition duration-300"
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
</template>

<script>
export default {
  name: "NavbarSection",
}
</script>

<style></style>
