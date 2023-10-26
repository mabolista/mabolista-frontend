<template>
  <nav class="fixed w-full z-50 top-0">
    <ul
      class="navigation max-w-[90vw] flex flex-wrap justify-between items-center relative mx-auto py-8 bg-opacity-50"
    >
      <a class="flex items-center" href="#">
        <img src="/src/assets/img/MABOLISTA FC.png" height="50" width="50" alt="" />
        <h3 class="font-mabolistafont text-xl">Mabolista Fc</h3>
      </a>
      <input type="checkbox" id="check" />

      <span
        class="menu flex items-center [&>li]:pl-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:font-mabolistafont [&>li>a]:text-lg"
      >
        <li><router-link class="hover:text-yellow-300" to="/">Home</router-link></li>
        <li><router-link class="hover:text-yellow-300" to="/about">About</router-link></li>
        <li><router-link class="hover:text-yellow-300" to="/events">Events</router-link></li>
        <li><router-link class="hover:text-yellow-300" to="/contact">Contact</router-link></li>
        <div v-if="isAuthenticated">
          <img
            id="avatarButton"
            type="button"
            data-dropdown-toggle="userDropdown"
            data-dropdown-placement="bottom-start"
            class="w-10 h-10 rounded-full cursor-pointer"
            src="/src/assets/img/MABOLISTA FC.png"
            alt="User dropdown"
          />

          <!-- Dropdown menu -->
          <div
            id="userDropdown"
            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
          >
            <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
              <div>my name</div>
              <div class="font-medium truncate">name@gmail.com</div>
            </div>
            <router-link
              :to="{ name: 'profile', params: { id: id } }"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >{{ users.name }}</router-link
            >
            <div class="py-1">
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >Sign out</a
              >
            </div>
          </div>
          +
        </div>
        <div v-else>
          <router-link
            to="/login"
            class="bg-transparent hover:bg-white-500 text-white font-1xl ml-7 font-medium hover:text-black py-2 px-8 border border-white-500 hover:bg-white rounded-full"
            >Login</router-link
          >
        </div>
        <label for="check" class="close-menu">X</label>
      </span>

      <label for="check" class="open-menu"><i class="fas fa-bars"></i></label>
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
          console.log(this.users)
        })
        .catch((error) => {
          console.error(error)
          console.error(this.users)
        })
    }
  },
  signOut() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    this.authenticated = false
    this.users = {}
    window.location.reload('/')
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
