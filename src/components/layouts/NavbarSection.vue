<template>
  <nav class="fixed w-full z-50 top-0">
    <ul
      class="navigation max-w-[90vw] flex flex-wrap justify-between items-center relative mx-auto py-8 bg-opacity-50"
    >
      <a class="flex items-center" href="/">
        <img src="@/assets/img/mabolistafc.png" height="50" width="50" alt="Mabolista Fc" />
        <h3 class="font-mabolistafont text-xl">Mabolista Fc</h3>
      </a>
      <input type="checkbox" id="check" />

      <span
        class="menu flex items-center [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out"
      >
        <div class="md:flex lg:flex mb-8 mt-8 font-mabolistafont text-lg [&>li]:pl-8">
          <li><router-link class="hover:text-yellow-300" to="/">Home</router-link></li>
          <li><router-link class="hover:text-yellow-300" to="/about">About</router-link></li>
          <li><router-link class="hover:text-yellow-300" to="/events">Events</router-link></li>
          <li><router-link class="hover:text-yellow-300" to="/contact">Contact</router-link></li>
        </div>
        <div v-if="isAuthenticated" class="py-2 lg:px-4">
          <img
            id="avatarButton"
            type="button"
            data-dropdown-toggle="userDropdown"
            data-dropdown-placement="bottom-start"
            class="w-10 h-10 rounded-full cursor-pointer ring-2 ring-gray-300 dark:ring-gray-500"
            :src="users.imageUrl"
            alt="User Profile"
          />

          <!-- Dropdown menu -->
          <div
            id="userDropdown"
            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
          >
            <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
              <div>{{ users.name }}</div>
              <div class="font-medium truncate">{{ users.email }}</div>
            </div>
            <router-link
              :to="{ name: 'profile', params: { id: id } }"
              class="block px-4 py-2 text-sm text-black font-serif hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >View Profile</router-link
            >
            <div class="py-1">
              <a
                href="#"
                @click="signOut"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >Sign out</a
              >
            </div>
          </div>
        </div>
        <div v-else>
          <router-link
            to="/login"
            class="bg-transparent hover:bg-white-500 text-slate-600 font-1xl ml-7 font-medium hover:text-black py-2 px-8 border border-white-500 hover:bg-white rounded-full"
            >Login</router-link
          >
        </div>
        <label for="check" class="close-menu">X</label>
      </span>

      <label for="check" class="open-menu"
        ><svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512">
          <path
            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
          /></svg
      ></label>
    </ul>
  </nav>
</template>

<script>
import axios from 'axios'

export default {
  name: 'NavbarSection',
  data() {
    return {
      users: {
        name: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        image: ''
      },
      authenticated: false,
      isScrolled: false,
      id: JSON.parse(localStorage.getItem('user'))?.id
    }
  },
  computed: {
    isAuthenticated() {
      return !!localStorage.getItem('token')
    }
  },
  beforeMount() {
    this.getUsers()
  },
  methods: {
    getUsers() {
      axios
        .get(`users/${this.id}`)
        .then((response) => {
          this.users = response.data.data
        })
        .catch((error) => {
          console.error(error)
          console.error(this.users)
        })
    },
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
<style scoped>
.close-menu,
.open-menu {
  position: absolute;
  cursor: pointer;
  display: none;
}

.open-menu {
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}

.close-menu {
  top: 20px;
  right: 20px;
}

#check {
  display: none;
}

@media (max-width: 800px) {
  .menu {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 73%;
    height: 100vh;
    position: fixed;
    top: 0;
    right: -100%;
    z-index: 100;
    background-color: #000;
    color: #fff;
    transition: all 0.5s ease-in-out;
    text-transform: uppercase;
    font-size: 24px;
  }

  .menu li {
    margin-top: 40px;
  }

  .menu li a {
    padding: 10px;
  }

  .close-menu,
  .open-menu {
    display: block;
  }

  #check:checked ~ .menu {
    right: 0;
  }
}
</style>
