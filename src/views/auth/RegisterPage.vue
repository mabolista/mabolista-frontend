<template>
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
        <form action="#" class="flex flex-col space-y-5">
          <div class="flex flex-col space-y-1">
            <label for="name" class="text-sm font-semibold text-gray-500">Username</label>
            <input
              type="name"
              id="name"
              name="name"
              placeholder="mabolista"
              autofocus
              class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
            />
          </div>
          <div class="flex flex-col space-y-1">
            <label for="email" class="text-sm font-semibold text-gray-500">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="mabolistafc@gmail.com"
              autofocus
              class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
            />
          </div>
          <div class="flex flex-col space-y-1">
            <label for="phone" class="text-sm font-semibold text-gray-500">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="0812-3456-7890"
              autofocus
              class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
            />
          </div>
          <div class="flex flex-col space-y-1">
            <div class="flex items-center justify-between">
              <label for="password" class="text-sm font-semibold text-gray-500">Password</label>
            </div>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
            />
          </div>
          <div class="flex flex-col space-y-1">
            <div class="flex items-center justify-between">
              <label for="confirm_password" class="text-sm font-semibold text-gray-500"
                >Confirm Password</label
              >
            </div>
            <input
              type="confirm_password"
              id="confirm_password"
              name="confirm_password"
              placeholder="Confirm your password"
              class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
            />
          </div>
          <div class="flex flex-col space-y-1">
            <div class="flex items-center justify-between">
              <label for="uploadfoto" class="text-sm font-semibold text-gray-500"
                >Upload Foto</label
              >
            </div>
            <input
              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="uploadfoto"
              name="uploadfoto"
              type="file"
            />
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">
              PNG or JPG (MAX. 2MB).
            </p>
          </div>
          <div>
            <button
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
