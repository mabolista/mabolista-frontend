<script setup></script>

<template>
  <main class="profile-page">
    <section class="relative block h-500-px">
      <div class="absolute top-0 w-full h-full bg-center bg-cover">
        <img src="/src/assets/img/background-profile.jpg" alt="" />
        <span id="blackOverlay" class="w-full h-full absolute opacity-50 bg-black"></span>
      </div>
      <div
        class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
        style="transform: translateZ(0px)"
      >
        <svg
          class="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </section>
    <section class="relative py-16 bg-blueGray-200">
      <div class="container mx-auto px-4">
        <div
          class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
        >
          <div class="px-6">
            <div class="flex flex-wrap justify-center">
              <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                <div class="relative">
                  <img
                    alt="..."
                    src="/src/assets/img/azraprofil.jpg"
                    class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                  />
                </div>
              </div>
              <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                <div class="py-6 px-3 mt-32 sm:mt-0">
                  <button
                    class="bg-yellow-500 active:bg-yellow-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Mabolism
                  </button>
                </div>
              </div>
              <div class="w-full lg:w-4/12 px-4 lg:order-1">
                <div class="flex justify-center py-4 lg:pt-4 pt-8">
                  <div class="mr-4 p-3 text-center">
                    <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                      >22</span
                    ><span class="text-sm text-blueGray-400">Friends</span>
                  </div>
                  <div class="mr-4 p-3 text-center">
                    <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                      >10</span
                    ><span class="text-sm text-blueGray-400">Photos</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center mt-12">
              <h3 class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
                Mabolista fc
              </h3>
              <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                Keterangan User / Alamat dll
              </div>
            </div>
            <div class="mt-10 py-10 border-t border-blueGray-200 text-center flex justify-center">
              <form class="w-full max-w-lg" @submit.prevent="saveChanges">
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="username"
                    >
                      Username
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="username"
                      name="username"
                      type="text"
                      placeholder="Input Username"
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
                      name="password"
                      type="password"
                      placeholder="Input Password"
                    />
                  </div>
                  <div class="w-full px-3">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="confirm_password"
                    >
                      Confirm Password
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="confirm_password"
                      name="confirm_password"
                      type="password"
                      placeholder="Input Password Again"
                    />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="phonenumber"
                    >
                      Phone Number
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="phonenumber"
                      name="phonenumber"
                      type="text"
                      placeholder="Input Phone Number"
                    />
                  </div>
                  <div class="w-full md:w-1/2 px-3">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="uploadfoto"
                    >
                      Upload Foto
                    </label>
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
                </div>
                <button
                  class="bg-yellow-500 active:bg-yellow-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        username: '',
        email: '',
        password: '',
        confirm_password: '',
        phonenumber: '',
        uploadfoto: null, // For file input
      },
    };
  },
  mounted() {
    // Fetch edit data from your API or data source
    // and populate the formData object with the fetched data
    this.fetchEditData();
  },
  methods: {
    fetchEditData() {
      // Simulate fetching edit data
      // Replace this with your actual data fetching logic
      const editData = {
        username: 'exampleUser',
        email: 'example@example.com',
        phonenumber: '1234567890',
        // ...
      };
      this.formData = { ...this.formData, ...editData };
    },
    saveChanges() {

    },
  },
};
</script>


