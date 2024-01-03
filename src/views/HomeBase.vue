<script setup>
import FooterSection from '@/components/layouts/FooterSection.vue'
import NavbarSection from '@/components/layouts/NavbarSection.vue'

const nytcSawanganBase = new URL('@/assets/img/NYTCsawangan.jpg', import.meta.url).href
const bigHamBase = new URL('@/assets/img/bigham.jpg', import.meta.url).href
const tehBotol = new URL('@/assets/img/tehbotolayoarena.png', import.meta.url).href
const pancoranSoccer = new URL('@/assets/img/Pancoransoccerfield.jpg', import.meta.url).href
const jis = new URL('@/assets/img/latihjakartainternationalstadium.jpg', import.meta.url).href
const kingkong = new URL('@/assets/img/kingkongsoccerarena.jpg', import.meta.url).href
const dmSportBase = new URL('@/assets/img/dmsport.jpg', import.meta.url).href
const pitchKemang = new URL('@/assets/img/minisoccer/pitchkemang.jpg', import.meta.url).href
const sereniaMansion = new URL('@/assets/img/minisoccer/sereniamansion.jpg', import.meta.url).href
const fSeven = new URL('@/assets/img/minisoccer/f7.jpg', import.meta.url).href
const jonas = new URL('@/assets/img/minisoccer/jonas.png', import.meta.url).href
const triboon = new URL('@/assets/img/minisoccer/triboon.jpeg', import.meta.url).href
const nfMinisoccer = new URL('@/assets/img/minisoccer/NFminisoccer.jpg', import.meta.url).href
const myFutsal = new URL('@/assets/img/futsal/myfutsal.jpg', import.meta.url).href
const vThree = new URL('@/assets/img/futsal/V3.jpg', import.meta.url).href
const citosFutsal = new URL('@/assets/img/futsal/citosfutsal.jpg', import.meta.url).href
const championsFutsal = new URL('@/assets/img/futsal/championsfutsal.png', import.meta.url).href
</script>

<template>
  <NavbarSection />
  <div class="container mx-auto text-center mt-32 py-28 my-10 w-96 lg:w-homebasesecond">
    <h1 class="font-bold text-4xl mb-4">
      Our <span class="font-bold text-4xl text-yellow-600">HomeBase</span>
    </h1>
    <p class="text-xl">
      Berikut merupakan venue lapangan yang sering digunakan event kita, Untuk kedepanya bisa lebih
      luas lagi dan lebih rame lagi
    </p>
  </div>

  <div style="background-color: rgba(0, 0, 0, 0)">
    <div class="container max-w-7xl mx-auto px-4" style="cursor: auto">
      <div class="flex justify-between mb-4 px-8">
        <p class="font-bold text-xl">
          Homebase <span class="text-yellow-600 font-bold text-xl">SepakBola</span>
        </p>
      </div>
      <div class="flex flex-wrap">
        <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <div class="px-6">
            <img
              alt="NYTC Sawangan"
              :src="nytcSawanganBase"
              class="rounded-xl shadow-lg max-w-full h-56 align-middle border-none undefined"
            />
            <div class="pt-6 text-center">
              <h1 class="text-xl font-bold leading-normal mt-0 mb-2">NYTC Sawangan</h1>
              <p class="text-base leading-relaxed mt-0 mb-4">
                Jl. Gg. Rotan Pelita Jaya Blok Masjid Nurul Iman No.61, RT.3/RW.6, Bojongsari Baru,
                Kec. Bojongsari, Kota Depok, Jawa Barat 16516
              </p>
            </div>
          </div>
        </div>
        <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" style="cursor: auto">
          <div class="px-6" style="cursor: auto">
            <img
              alt="BIG Ham"
              :src="bigHamBase"
              class="rounded-xl shadow-lg max-w-full h-56 align-middle border-none undefined"
            />
            <div class="pt-6 text-center">
              <h1 class="text-xl font-bold leading-normal mt-0 mb-2">BIG Ham Stadium</h1>
              <p class="text-base leading-relaxed mt-0 mb-4">
                Jl. Yayasan No.RT.006/01, Grogol, Kec. Limo, Kota Depok, Jawa Barat 16512
              </p>
            </div>
          </div>
        </div>
        <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" style="cursor: auto">
          <div class="px-6" style="cursor: auto">
            <img
              alt="Teh Botol Ayo Arena"
              :src="tehBotol"
              class="rounded-xl shadow-lg max-w-full h-56 align-middle border-none undefined"
            />
            <div class="pt-6 text-center">
              <h1 class="text-xl font-bold leading-normal mt-0 mb-2">Teh Botol Ayo Arena</h1>
              <p class="text-base leading-relaxed mt-0 mb-4">
                Jl. Siliwangi, Sumur Batu, Kec. Babakan Madang, Kabupaten Bogor, Jawa Barat 16810
              </p>
            </div>
          </div>
        </div>
        <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" style="cursor: auto">
          <div class="px-6" style="cursor: auto">
            <img
              alt="Pancoran Soccer Field"
              :src="pancoranSoccer"
              class="rounded-xl shadow-lg max-w-full h-56 align-middle border-none undefined"
            />
            <div class="pt-6 text-center">
              <h1 class="text-xl font-bold leading-normal mt-0 mb-2">Pancoran Soccer Field</h1>
              <p class="text-base leading-relaxed mt-0 mb-4">
                Jl. Gatot Subroto No.72, RT.1/RW.4, Pancoran, Kec. Pancoran, Kota Jakarta Selatan,
                Daerah Khusus Ibukota Jakarta 12780
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ---------- Row 2 SepakBola ----------  -->
  <div style="background-color: rgba(0, 0, 0, 0)">
    <div class="container max-w-7xl mx-auto px-4" style="cursor: auto">
      <div class="flex flex-wrap">
        <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <div class="px-6">
            <img
              alt="Jakarta International Stadium"
              :src="jis"
              class="rounded-xl shadow-lg max-w-full h-56 align-middle border-none undefined"
            />
            <div class="pt-6 text-center">
              <h1 class="text-xl font-bold leading-normal mt-0 mb-2">
                Jakarta International Stadium
              </h1>
              <p class="text-base leading-relaxed mt-0 mb-4">
                Papanggo, Tanjung Priok, Jakarta Utara, Jakarta, Indonesia
              </p>
            </div>
          </div>
        </div>
        <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" style="cursor: auto">
          <div class="px-6" style="cursor: auto">
            <img
              alt="KingKong Soccer Arena"
              :src="kingkong"
              class="rounded-xl shadow-lg max-w-full h-56 align-middle border-none undefined"
            />
            <div class="pt-6 text-center">
              <h1 class="text-xl font-bold leading-normal mt-0 mb-2">KingKong Soccer Arena</h1>
              <p class="text-base leading-relaxed mt-0 mb-4">
                Jl. Yonkav 7 No.7, RT.1/RW.6, Cijantung, Kec. Ps. Rebo, Kota Jakarta Timur, Daerah
                Khusus Ibukota Jakarta 13780
              </p>
            </div>
          </div>
        </div>
        <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" style="cursor: auto">
          <div class="px-6" style="cursor: auto">
            <img
              alt="DM Sport Ciledug"
              :src="dmSportBase"
              class="rounded-xl shadow-lg max-w-full h-56 align-middle border-none undefined"
            />
            <div class="pt-6 text-center">
              <h1 class="text-xl font-bold leading-normal mt-0 mb-2">DM Sport Ciledug</h1>
              <p class="text-base leading-relaxed mt-0 mb-4">
                Jl. Raden Fatah No.88A, Parung Serab, Kec. Ciledug, Kota Tangerang
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ---------- Row 1 Mini Soccer ----------  -->
  <div style="background-color: rgba(0, 0, 0, 0)">
    <div class="container max-w-7xl mx-auto px-4 mt-20" style="cursor: auto">
      <div class="flex justify-between mb-4 px-8">
        <p class="font-bold text-xl">
          Homebase <span class="text-yellow-600 font-bold text-xl">MiniSoccer</span>
        </p>
      </div>
      <div class="flex flex-wrap">
        <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <div class="px-6">
            <img
              alt="Pitch Kemang"
              :src="pitchKemang"
              class="rounded-xl shadow-lg max-w-full h-56 align-middle border-none undefined"
            />
            <div class="pt-6 text-center">
              <h1 class="text-xl font-bold leading-normal mt-0 mb-2">Pitch Kemang</h1>
              <p class="text-base leading-relaxed mt-0 mb-4">
                Jl. Kemang Sel. No.98a, RT.5/RW.4, Cilandak Tim., Ps. Minggu, Kota Jakarta Selatan,
                Daerah Khusus Ibukota Jakarta 12730
              </p>
            </div>
          </div>
        </div>
        <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" style="cursor: auto">
          <div class="px-6" style="cursor: auto">
            <img
              alt="F7 TB Simatupang"
              :src="fSeven"
              class="rounded-xl shadow-lg max-w-full h-56 align-middle border-none undefined"
            />
            <div class="pt-6 text-center">
              <h1 class="text-xl font-bold leading-normal mt-0 mb-2">F7 TB Simatupang</h1>
              <p class="text-base leading-relaxed mt-0 mb-4">
                Jl. TB Simatupang, RT.10/RW.2, Cilandak Bar., Kec. Cilandak, Kota Jakarta Selatan,
                Daerah Khusus Ibukota Jakarta 12430
              </p>
            </div>
          </div>
        </div>
        <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" style="cursor: auto">
          <div class="px-6" style="cursor: auto">
            <img
              alt="Serenia Mansion"
              :src="sereniaMansion"
              class="rounded-xl shadow-lg max-w-full h-56 align-middle border-none undefined"
            />
            <div class="pt-6 text-center">
              <h1 class="text-xl font-bold leading-normal mt-0 mb-2">Serenia Mansion</h1>
              <p class="text-base leading-relaxed mt-0 mb-4">
                Jl. Karang Tengah Raya No.9, RT.1/RW.3, Kelurahaan, Lb. Bulus, Kec. Cilandak, Kota
                Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12440
              </p>
            </div>
          </div>
        </div>
        <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" style="cursor: auto">
          <div class="px-6" style="cursor: auto">
            <img
              alt="Jonas Ciputat"
              :src="jonas"
              class="rounded-xl shadow-lg max-w-full h-56 align-middle border-none undefined"
            />
            <div class="pt-6 text-center">
              <h1 class="text-xl font-bold leading-normal mt-0 mb-2">Jonas Ciputat</h1>
              <p class="text-base leading-relaxed mt-0 mb-4">
                Jl. Aria Putra No.5, RT.001/RW.009, Ciputat, Kec. Ciputat, Kota Tangerang Selatan,
                Banten 15411
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ---------- Row 2 MiniSoccer ----------  -->
  <div style="background-color: rgba(0, 0, 0, 0)">
    <div class="container max-w-7xl mx-auto px-4" style="cursor: auto">
      <div class="flex flex-wrap">
        <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <div class="px-6">
            <img
              alt="Triboon Mini Soccer"
              :src="triboon"
              class="rounded-xl shadow-lg max-w-full h-56 align-middle border-none undefined"
            />
            <div class="pt-6 text-center">
              <h1 class="text-xl font-bold leading-normal mt-0 mb-2">Triboon Mini Soccer</h1>
              <p class="text-base leading-relaxed mt-0 mb-4">
                Jl. Benda Bawah No.77, RT.7/RW.6, Cilandak Tim., Ps. Minggu, Kota Jakarta Selatan,
                Daerah Khusus Ibukota Jakarta 12560
              </p>
            </div>
          </div>
        </div>
        <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" style="cursor: auto">
          <div class="px-6" style="cursor: auto">
            <img
              alt="NF Mini Soccer"
              :src="nfMinisoccer"
              class="rounded-xl shadow-lg max-w-full h-56 align-middle border-none undefined"
            />
            <div class="pt-6 text-center">
              <h1 class="text-xl font-bold leading-normal mt-0 mb-2">NF Mini Soccer</h1>
              <p class="text-base leading-relaxed mt-0 mb-4">
                Jalan Muhammad Saidi, RT.1/RW.1, Petukangan Sel., Kec. Pesanggrahan, DKI Jakarta,
                Daerah Khusus Ibukota Jakarta 12270
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ---------- Row 1 Futsal ----------  -->
  <div style="background-color: rgba(0, 0, 0, 0)">
    <div class="container max-w-7xl mx-auto px-4 mt-20" style="cursor: auto">
      <div class="flex justify-between mb-4 px-8">
        <p class="font-bold text-xl">
          Homebase <span class="text-yellow-600 font-bold text-xl">Futsal</span>
        </p>
      </div>
      <div class="flex flex-wrap">
        <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <div class="px-6">
            <img
              alt="My Futsal"
              :src="myFutsal"
              class="rounded-xl shadow-lg max-w-full h-56 align-middle border-none undefined"
            />
            <div class="pt-6 text-center">
              <h1 class="text-xl font-bold leading-normal mt-0 mb-2">My Futsal</h1>
              <p class="text-base leading-relaxed mt-0 mb-4">
                Jl. Komp. Hankam Cidodol No.17B, RT.10/RW.11, Grogol Sel., Kec. Kby. Lama, Kota
                Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12220
              </p>
            </div>
          </div>
        </div>
        <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" style="cursor: auto">
          <div class="px-6" style="cursor: auto">
            <img
              alt="Vini Vidi Vici (V3)"
              :src="vThree"
              class="rounded-xl shadow-lg max-w-full h-56 align-middle border-none undefined"
            />
            <div class="pt-6 text-center">
              <h1 class="text-xl font-bold leading-normal mt-0 mb-2">Vini Vidi Vici (V3)</h1>
              <p class="text-base leading-relaxed mt-0 mb-4">
                Jl. Raden Saleh No.9, RT.002/RW.014, Karang Tengah, Kec. Karang Tengah, Kota
                Tangerang, Banten 15157
              </p>
            </div>
          </div>
        </div>
        <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" style="cursor: auto">
          <div class="px-6" style="cursor: auto">
            <img
              alt="Citos Futsal"
              :src="citosFutsal"
              class="rounded-xl shadow-lg max-w-full h-56 align-middle border-none undefined"
            />
            <div class="pt-6 text-center">
              <h1 class="text-xl font-bold leading-normal mt-0 mb-2">Citos Futsal</h1>
              <p class="text-base leading-relaxed mt-0 mb-4">
                Jl. Karang Tengah Raya No.9, RT.1/RW.3, Kelurahaan, Lb. Bulus, Kec. Cilandak, Kota
                Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12440
              </p>
            </div>
          </div>
        </div>
        <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" style="cursor: auto">
          <div class="px-6" style="cursor: auto">
            <img
              alt="Champions Futsal Binus"
              :src="championsFutsal"
              class="rounded-xl shadow-lg max-w-full h-56 align-middle border-none undefined"
            />
            <div class="pt-6 text-center">
              <h1 class="text-xl font-bold leading-normal mt-0 mb-2">Champions Futsal Binus</h1>
              <p class="text-base leading-relaxed mt-0 mb-4">
                Jl. Rw. Belong No.13, RT.1/RW.9, Kb. Jeruk, Kec. Kb. Jeruk, Kota Jakarta Barat,
                Daerah Khusus Ibukota Jakarta 11530
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterSection />
  <a
    href="https://api.whatsapp.com/send?phone=6287773622095"
    class="rounded-full w-12 h-12 bg-gray-100 fixed bottom-0 right-0 flex items-center justify-center text-gray-800 mr-8 mb-8 shadow-sm border-gray-300 border"
    target="_blank"
    ><i class="fa-brands fa-whatsapp fa-2xl" style="color: #05ff37"></i
  ></a>
</template>

<script></script>

<style scoped></style>
