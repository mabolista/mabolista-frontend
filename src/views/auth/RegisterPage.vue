<template>
      <!-- Preloader -->
      <!-- <div v-if="loading" class="preloader">
        <img class="logo" src="/src/assets/img/MABOLISTA FC.png" alt="Loading Logo">
        Loading...
    </div> -->

  <div class="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
    <div
      class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
    >
      <div
        class="p-4 py-6 text-white bg-purple-700 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
      >
        <div class="my-3 text-4xl font-bold tracking-wider text-center">
          <img src="/src/assets/img/MABOLISTA FC.png" alt="" />
        </div>
        <p class="mt-6 font-normal text-center text-gray-300 md:mt-0">
          Mabolista Fc is a football community that is open to the public and has many homebases
        </p>
        <p class="flex flex-col items-center justify-center mt-10 text-center">
          <span>Have an account?</span>
          <a href="/login" class="underline">Log in</a>
        </p>
        <p class="mt-6 text-sm text-center text-gray-300">
          Read our <a href="#" class="underline">terms</a> and
          <a href="#" class="underline">conditions</a>
        </p>
      </div>
      <div class="p-5 bg-white md:flex-1">
        <h3 class="my-4 text-2xl font-semibold text-gray-700">Account Register</h3>
        <form @submit.prevent="submitFormRegister" enctype="multipart/form-data" class="flex flex-col space-y-5">
  <!-- Username input -->
  <div class="flex flex-col space-y-1">
    <label for="name" class="text-sm font-semibold text-gray-500">Username</label>
    <input
      type="text"
      id="name"
      v-model="name"
      placeholder="mabolista"
      autofocus
      class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
    />
  </div>

  <!-- Email input -->
  <div class="flex flex-col space-y-1">
    <label for="email" class="text-sm font-semibold text-gray-500">Email address</label>
    <input
      type="email"
      id="email"
      v-model="email"
      placeholder="mabolistafc@gmail.com"
      autofocus
      class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
    />
  </div>

  <!-- Phone number input -->
  <div class="flex flex-col space-y-1">
    <label for="phoneNumber" class="text-sm font-semibold text-gray-500">Phone Number</label>
    <input
      type="tel"
      id="phoneNumber"
      v-model="phoneNumber"
      placeholder="0812-3456-7890"
      autofocus
      class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
    />
  </div>

  <!-- Password input -->
  <div class="flex flex-col space-y-1">
    <label for="password" class="text-sm font-semibold text-gray-500">Password</label>
    <input
      type="password"
      id="password"
      v-model="password"
      placeholder="Enter your password"
      class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
    />
  </div>

  <!-- Confirm password input -->
  <div class="flex flex-col space-y-1">
    <label for="confirmPassword" class="text-sm font-semibold text-gray-500">Confirm Password</label>
    <input
      type="password"
      id="confirmPassword"
      v-model="confirmPassword"
      placeholder="Confirm your password"
      class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
    />
  </div>

  <!-- File upload input -->
  <div class="flex flex-col space-y-1">
    <label for="image" class="text-sm font-semibold text-gray-500">Upload Foto</label>
    <input
      class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
      id="image"
      type="file"
      ref="file"
      v-on:change="onFileChange"
    />
    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="image">
      PNG or JPG (MAX. 2MB).
    </p>
  </div>

  <!-- Register button -->
  <div>
    <button
    @click="showAlert"
      type="submit"
      class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-yellow-500 rounded-md shadow hover:bg-yellow-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
    >
      Register
    </button>
  </div>
</form>

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
      image: '',
    };
  },
  methods: {
    submitFormRegister() {
      let formData = new FormData();
      formData.append('name', this.name);
      formData.append('email', this.email);
      formData.append('phoneNumber', this.phoneNumber);
      formData.append('password', this.password);
      formData.append('confirmPassword', this.confirmPassword);
      formData.append('image', this.image);

      axios
        .post('http://localhost:8080/register', formData)
        .then((response) => {
          console.log(response.data);

          localStorage.setItem('token', response.data.data.token);
          
          this.$swal('Berhasil Daftar, Silahkan Login!');
          this.$router.push({ name: 'login' });
        })
        .catch((error) => {
          console.error('FAILURE!!', error);
        });
    },
    onFileChange(e) {
      this.image = e.target.files[0];
    },
  },
};
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
