<script setup>
const mabolistaLogoRegister = new URL('@/assets/img/mabolistafcRegister.png', import.meta.url).href
const dmSportRegister = new URL('@/assets/img/dmsport.jpg', import.meta.url).href
</script>

<template>
  <div class="h-full">
    <section class="relative flex flex-wrap lg:h-screen lg:items-center">
      <div class="w-full px-4 sm:px-6 lg:w-1/2 lg:px-8">
        <div class="mx-auto max-w-lg text-center dark:text-white">
          <h1 class="text-2xl font-bold sm:text-3xl">Ayoo jadi bagian dari kita!</h1>

          <p class="mt-4 text-gray-500">
            Mabolista Fc merupakan komunitas sepak bola yang terbuka untuk umum dan memiliki banyak
            benefits unik
          </p>
        </div>

        <form
          @submit.prevent="submitFormRegister"
          enctype="multipart/form-data"
          class="mx-auto mb-0 mt-8 max-w-md space-y-4"
        >
          <div>
            <label for="name" class="sr-only">Name</label>
            <div class="relative">
              <input
                type="text"
                id="name"
                v-model="name"
                class="w-full text-black rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm focus:ring-black"
                placeholder="Enter Name"
                required
              />
            </div>
          </div>

          <div>
            <label for="email" class="sr-only">Email</label>
            <div class="relative">
              <input
                type="email"
                id="email"
                v-model="email"
                class="w-full text-black rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm focus:ring-black"
                placeholder="Enter email"
                required
              />
            </div>
          </div>

          <div>
            <label for="phoneNumber" class="sr-only">Phone Number</label>
            <div class="relative">
              <input
                type="tel"
                id="phoneNumber"
                v-model="phoneNumber"
                class="w-full text-black rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm focus:ring-black"
                placeholder="Enter Phone Number"
                required
              />
            </div>
          </div>

          <div>
            <label for="password" class="sr-only">Password</label>
            <div class="relative">
              <input
                type="password"
                id="password"
                v-model="password"
                class="w-full text-black rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm focus:ring-black"
                placeholder="Enter password"
                required
              />
            </div>
          </div>

          <div>
            <label for="confirmPassword" class="sr-only">Confirm Password</label>
            <div class="relative">
              <input
                type="password"
                id="confirmPassword"
                v-model="confirmPassword"
                placeholder="Confirm your password"
                class="w-full text-black rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm focus:ring-black"
                required
              />
            </div>
          </div>

          <div>
            <label for="image" class="sr-only">Image</label>
            <div class="relative">
              <input
                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
                id="image"
                v-on:change="onFileChange"
                name="image"
                ref="file"
                type="file"
              />
              <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">
                PNG or JPG (MAX. 2MB).
              </p>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <p class="text-sm text-gray-500">
              Have account?
              <router-link class="underline" to="/login">Login</router-link>
            </p>
            <button
              @click="registerpreloader"
              type="submit"
              :disabled="
                nameError || emailError || phoneNumberError || passwordError || confirmPasswordError
              "
              class="inline-block rounded-lg bg-yellow-500 px-5 py-3 text-sm font-medium text-white"
            >
              Register
            </button>
          </div>
        </form>
      </div>

      <div class="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <img
          alt="DM Sport"
          :src="dmSportRegister"
          class="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  </div>
  <!-- Preloader -->
  <div v-if="loading" class="preloader">
    <img class="logo" :src="mabolistaLogoRegister" alt="Loading Logo" />
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      name: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
      image: '',
      nameError: false,
      emailError: false,
      phoneNumberError: false,
      passwordError: false,
      confirmPasswordError: false,
      loading: false,
      authenticated: false
    }
  },
  methods: {
    submitFormRegister() {
      let formData = new FormData()
      formData.append('name', this.name)
      formData.append('email', this.email)
      formData.append('phoneNumber', this.phoneNumber)
      formData.append('password', this.password)
      formData.append('confirmPassword', this.confirmPassword)
      formData.append('image', this.image)

      axios
        .post('register', formData)
        .then((response) => {
          console.log(response.data)
          this.$swal('Daftar Berhasil!')
          const token = response.data.data
          localStorage.setItem('token', JSON.stringify(token))
          this.authenticated = true
          this.$router.push({ name: 'HomePage' })
        })
        .catch((error) => {
          alert('Gagal Daftar, Periksa Kembali', error)
          window.location.reload()
        })
    },
    created() {
      const token = JSON.parse(localStorage.getItem('token'))

      if (token) {
        this.authenticated = true
      }
    },
    onFileChange(e) {
      this.image = e.target.files[0]
    },
    registerpreloader() {
      if (this.name && this.email && this.phoneNumber && this.password && this.confirmPassword) {
        this.loading = true
      } else {
        // error logic
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
    transform: translateY(-20px); /* Adjust the bounce height as needed */
  }
}
</style>
