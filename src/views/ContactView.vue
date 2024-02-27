<script setup>
import FooterSection from '@/components/layouts/FooterSection.vue'
import NavbarSection from '@/components/layouts/NavbarSection.vue'
</script>

<template>
  <NavbarSection />

  <section class="pt-24">
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2
        class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white"
      >
        Contact Us
      </h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
        Untuk Info Kerjasama, Bisnis, Sparing, Join Member, Dan lainyaa. Jangan ragu untuk
        menghubungi kita
      </p>
      <form @submit.prevent="sendEmail" class="space-y-8">
        <div>
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Your email</label
          >
          <input
            type="email"
            id="email"
            v-model="email"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500 dark:shadow-sm-light"
            placeholder="mabolista@gmail.com"
            required
          />
        </div>
        <div>
          <label
            for="subject"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Subject</label
          >
          <input
            type="text"
            id="subject"
            v-model="subject"
            class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500 dark:shadow-sm-light"
            placeholder="Let us know how we can help you"
            required
          />
        </div>
        <div class="sm:col-span-2">
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >Your message</label
          >
          <textarea
            id="message"
            v-model="message"
            rows="6"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <button
          type="submit"
          value="send"
          class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-slate-700 sm:w-fit hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
        >
          Send message
        </button>
      </form>
    </div>
  </section>

  <FooterSection />
  <a
    href="https://api.whatsapp.com/send?phone=6287773622095"
    class="rounded-full w-12 h-12 bg-gray-100 fixed bottom-0 right-0 flex items-center justify-center text-gray-800 mr-8 mb-8 shadow-sm border-gray-300 border"
    target="_blank"
    ><i class="fa-brands fa-whatsapp fa-2xl" style="color: #05ff37"></i
  ></a>
</template>

<script>
import emailjs from 'emailjs-com'

export default {
  name: 'ContactView',
  data() {
    return {
      email: '',
      subject: '',
      message: ''
    }
  },
  methods: {
    sendEmail() {
      // Assuming you have a form with refs for email, subject, and message fields
      const formData = {
        email: this.email,
        subject: this.subject,
        message: this.message
      }

      emailjs.sendForm('service_kfpe6to', 'template_bzy8cut', formData, 'Xfv4Pwo6q8blucGg7').then(
        (result) => {
          console.log('SUCCESS!', result.text)
          // Reset form fields after successful submission
          this.email = ''
          this.subject = ''
          this.message = ''
          alert('Success delivery message!')
        },
        (error) => {
          alert('Failed delivery message!')
          console.log('FAILED...', error.text)
        }
      )
    }
  }
}

//   methods: {
//     sendEmail(e) {
//       try {
//         emailjs.sendForm('service_kfpe6to', 'template_g6dexkc', e.target, 'Xfv4Pwo6q8blucGg7', {
//           email: this.email,
//           subject: this.subject,
//           message: this.message
//         })
//         alert('Berhasil Mengirim Pesan!')
//       } catch (error) {
//         console.log({ error })
//       }

//       this.email = ''
//       this.subject = ''
//       this.message = ''
//     }
//   }
// }
</script>

<style></style>
