<template>
        <!-- Preloader -->
        <div v-if="loading" class="preloader">
        <img class="logo" src="/src/assets/img/MABOLISTA FC.png" alt="Loading Logo">
    </div>

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
          <span>Don't have an account?</span>
          <a href="/signup" class="underline">Sign Up</a>
        </p>
        <p class="mt-6 text-sm text-center text-gray-300">
          Read our <a href="#" class="underline">terms</a> and
          <a href="#" class="underline">conditions</a>
        </p>
      </div>
      <div class="p-5 bg-white md:flex-1">
        <h3 class="my-4 text-2xl font-semibold text-gray-700">Account Login</h3>
        <form @submit.prevent="submitLoginForm" enctype="multipart/form-data" class="flex flex-col space-y-5">
          <div class="flex flex-col space-y-1">
            <label for="email" class="text-sm font-semibold text-gray-500">Email address</label>
            <input
              type="email"
              id="email"
              v-model="email"
              placeholder="Input your email"
              autofocus
              required
              class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
            />
          </div>
          <div class="flex flex-col space-y-1">
            <div class="flex items-center justify-between">
              <label for="password" class="text-sm font-semibold text-gray-500">Password</label>
              <a href="#" class="text-sm text-blue-600 hover:underline focus:text-blue-800"
                >Forgot Password?</a
              >
            </div>
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Input your password"
              required
              class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
            />
          </div>
          <div class="flex items-center space-x-2">
            <input
              type="checkbox"
              id="remember"
              class="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
            />
            <label for="remember" class="text-sm font-semibold text-gray-500">Remember me</label>
          </div>
          <div>
            <button
            @click="loginpreloader"
              type="submit"
              id="loadingButton"
              class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-yellow-500 rounded-md shadow hover:bg-yellow-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
            >
              Log in
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
      email: '',
      password: '',
      loading: false
    };
  },
  methods: {
  async submitLoginForm() {
    const response = await axios.post('http://localhost:8080/login', {
        email: this.email,
        password: this.password,
      });

      localStorage.setItem('token', response.data.data.token); 
      this.$router.push({ name: 'HomePage' });
  },catch (error) {
    alert('Email atau Password Salah!!', error);
    },
    loginpreloader() {
      this.loading = true;
    }
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
                transform: translateY(-20px);
            }
        }
</style>