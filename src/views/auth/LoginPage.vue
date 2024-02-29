<script setup>
const mabolistaLogoLogin = new URL('@/assets/img/mabolistafcLogin.png', import.meta.url).href
const dmSportLogin = new URL('@/assets/img/dmsport.jpg', import.meta.url).href
</script>

<template>
  <!-- Preloader -->
  <div v-if="loading" class="preloader">
    <img class="logo" :src="mabolistaLogoLogin" alt="Loading Logo" />
    <p>Loading...</p>
  </div>

  <section class="relative flex flex-wrap lg:h-screen lg:items-center">
    <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
      <div class="mx-auto max-w-lg text-center dark:text-white">
        <h1 class="text-2xl font-bold sm:text-3xl">Ayoo jadi bagian dari kita!</h1>

        <p class="mt-4 text-gray-500 dark:text-gray-400">
          Mabolista Fc merupakan komunitas sepak bola yang terbuka untuk umum dan memiliki banyak
          benefits unik
        </p>
      </div>

      <form
        @submit.prevent="submitLoginForm"
        enctype="multipart/form-data"
        class="mx-auto mb-0 mt-8 max-w-md space-y-4"
      >
        <div>
          <label for="email" class="sr-only">Email</label>

          <div class="relative">
            <input
              type="email"
              id="email"
              v-model="email"
              :class="{ 'border-red-500': emailError }"
              @input="validateEmail"
              class="w-full text-black rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm focus:ring-black"
              placeholder="Enter email"
              required
            />

            <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
          </div>
          <p v-if="emailError" class="text-red-500 text-xs italic">
            Please enter a valid email address.
          </p>
        </div>

        <div>
          <label for="password" class="sr-only">Password</label>

          <div class="relative">
            <input
              type="password"
              id="password"
              v-model="password"
              :class="{ 'border-red-500': passwordError }"
              @input="validatePassword"
              class="w-full text-black rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm focus:ring-black"
              placeholder="Enter password"
              required
            />

            <span
              @click="showPassword"
              class="absolute inset-y-0 end-0 grid place-content-center px-4"
              id="eye"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>
          <p v-if="passwordError" class="text-red-500 text-xs italic">
            Password must be at least 6 characters.
          </p>
          <div v-if="errorMessage" class="text-red-500">{{ errorMessage }}</div>
        </div>

        <div class="flex items-center justify-between">
          <p class="text-sm text-gray-500">
            No account?
            <router-link class="underline" to="/signup">Sign up</router-link>
          </p>

          <button
            @click="loginpreloader"
            type="submit"
            :disabled="emailError || passwordError"
            class="inline-block rounded-lg bg-yellow-500 px-5 py-3 text-sm font-medium text-white"
          >
            Login
          </button>
        </div>
      </form>
    </div>

    <div class="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
      <img alt="DMSport" :src="dmSportLogin" class="absolute inset-0 h-full w-full object-cover" />
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      email: '',
      password: '',
      emailError: false,
      passwordError: false,
      loading: false,
      authenticated: false
    }
  },
  methods: {
    submitLoginForm() {
      axios
        .post('login', {
          email: this.email,
          password: this.password
        })
        .then((response) => {
          const token = response.data.data

          localStorage.setItem('token', JSON.stringify(token))

          this.authenticated = true
          this.$router.push({ name: 'HomePage' })
        })
        .catch((error) => {
          alert('Login Gagal! Periksa Kembali Email atau Password')
          window.location.reload('/login')
          console.error('Login failed:', error)
        })
    },
    created() {
      const token = JSON.parse(localStorage.getItem('token'))

      if (token) {
        this.authenticated = true
      }
    },
    validateEmail() {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        this.msg['email'] = 'Please enter a valid email address'
      } else {
        this.msg['email'] = ''
      }
    },
    validatePassword() {
      // Password validation logic
      this.passwordError = this.password.length < 6
    },
    loginpreloader() {
      // Check if both email and password fields have values
      if (this.email && this.password) {
        this.loading = true // Set loading to true if both fields are filled
      } else {
        this.errorMessage = 'Please fill in both email and password fields.'
      }
    },
    showPassword() {
      var x = document.getElementById('password')
      if (x.type === 'password') {
        x.type = 'text'
      } else {
        x.type = 'password'
      }
    }
  }
}
</script>

<style scoped>
.preloader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 999;
}

.logo {
  width: 100px; /* Set the size of your logo */
  height: 100px;
  animation: bounce 1s infinite alternate;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}
</style>
