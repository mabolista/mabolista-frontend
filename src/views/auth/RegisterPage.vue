<template>
  <!-- Preloader -->
  <div v-if="loading" class="preloader">
    <img class="logo" src="@/assets/img/mabolistafc.png" alt="Loading Logo" />
  </div>

  <section class="relative flex flex-wrap lg:h-screen lg:items-center">
    <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
      <div class="mx-auto max-w-lg text-center">
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
          <label for="email" class="sr-only">Email</label>

          <div class="relative">
            <input
              type="text"
              id="name"
              v-model="name"
              class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm focus:ring-black"
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
              class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm focus:ring-black"
              placeholder="Enter email"
              required
            />

            <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-gray-400"
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
        </div>

        <div>
          <label for="email" class="sr-only">Email</label>

          <div class="relative">
            <input
              type="tel"
              id="phoneNumber"
              v-model="phoneNumber"
              class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm focus:ring-black"
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
              class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm focus:ring-black"
              placeholder="Enter password"
              required
            />

            <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-gray-400"
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
        </div>

        <div>
          <label for="confirmPassword" class="sr-only">Confirm Password</label>

          <div class="relative">
            <input
              type="password"
              id="confirmPassword"
              v-model="confirmPassword"
              placeholder="Confirm your password"
              class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm focus:ring-black"
              required
            />

            <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-gray-400"
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
        </div>

        <div>
          <label for="image" class="sr-only">Image</label>

          <div class="relative">
            <input
              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
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
            <a class="underline" href="/login">Login</a>
          </p>

          <button
            @click="registerpreloader"
            type="submit"
            class="inline-block rounded-lg bg-yellow-500 px-5 py-3 text-sm font-medium text-white"
          >
            Register
          </button>
        </div>
      </form>
    </div>

    <div class="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
      <img
        alt="Welcome"
        src="/src/assets/img/dmsport.jpg"
        class="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  </section>
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
      loading: false
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
          this.$swal('Berhasil Daftar, Silahkan Login!')
          this.$router.push({ name: 'login' })
        })
        .catch((error) => {
          this.$swal('Gagal Daftar, Periksa Kembali', error)
        })
    },
    onFileChange(e) {
      this.image = e.target.files[0]
    },
    registerpreloader() {
      this.loading = true
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
