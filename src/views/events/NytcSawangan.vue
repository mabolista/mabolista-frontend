<script setup>

</script>

<template>

    <div class="carousel relative container mx-auto" style="max-width:1600px;">
        <div class="carousel-inner relative overflow-hidden w-full">
            <!--Slide 1-->
            <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked">
            <div class="carousel-item absolute opacity-0" style="height:50vh;">
                <div class=" h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right">
                    <img src="/src/assets/img/events/nytchead1.jpg" alt="">
                </div>
            </div>
            <label for="carousel-3" class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
            <label for="carousel-2" class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

            <!--Slide 2-->
            <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="">
            <div class="carousel-item absolute opacity-0 bg-cover bg-right" style="height:50vh;">
                <div class=" h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right">
                    <img src="/src/assets/img/events/nytchead2.jpg" alt="">
                </div>
            </div>
            <label for="carousel-1" class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
            <label for="carousel-3" class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

            <!--Slide 3-->
            <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="">
            <div class="carousel-item absolute opacity-0" style="height:50vh;">
                <div class=" h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-bottom">
                    <img src="/src/assets/img/events/nytchead3.jpg" alt="">
                </div>
            </div>
            <label for="carousel-2" class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
            <label for="carousel-1" class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

            <!-- Add additional indicators for each slide-->
            <ol class="carousel-indicators">
                <li class="inline-block mr-3">
                    <label for="carousel-1" class="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900">•</label>
                </li>
                <li class="inline-block mr-3">
                    <label for="carousel-2" class="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900">•</label>
                </li>
                <li class="inline-block mr-3">
                    <label for="carousel-3" class="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900">•</label>
                </li>
            </ol>

        </div>
    </div>

    <section id="aboutmabolista" class="text-gray-700 body-font border-t border-gray-200">
    <div class="container px-5 py-20 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
        <img
          alt="feature"
          class="object-cover object-center h-full w-full"
          src="/src/assets/img/NYTC Sawangan.jpg"
        />
      </div>
      <div
        class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center"
      >
        <div class="flex flex-col mb-10">
          <div class="flex-grow">
            <h2 class="text-3xl font-mabolistafont leading-8 text-gray-900">Keterangan</h2>
            <p class="leading-relaxed text-left">
                📆 : Sabtu, 19 Agustus 2023<br />
                    ⏰ : 15.30 - 18.00 WIB<br />
                    🏟 : BIG HAM DEPOK<br />
                    📸 : Fotographer<br />
                    📹 : Videographer<br />
                    🙅🏻‍♂ : Wasit Tengah 1<br />
                    💧 : Mineral Water<br />
                    👕 : Jersey Inventaris<br />
            </p>
            <button data-modal-target="defaultModal" data-modal-toggle="defaultModal" class="block mt-2 ml-1 bg-transparent hover:bg-yellow-500 text-black font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded" type="button">
            Join List
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="container mx-auto px-4">
    <div class="grid grid-cols-3 grid-rows-1 gap-4">
      <ul class="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
        <li class="font-bold">
            List Pemain
            <ol class="pl-5 mt-2 space-y-1 list-decimal list-inside">
                <li>Reza</li>
                <li>Azra</li>
                <li>test</li>
            </ol>
        </li>
        </ul>
        <ul class="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
        <li class="font-bold">
            List Kiper
            <ol class="pl-5 mt-2 space-y-1 list-decimal list-inside">
                <li>Reza</li>
                <li>Azra</li>
                <li>test</li>
            </ol>
        </li>
        </ul>
        <ul class="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
        <li class="font-bold">
            Waiting List
            <ol class="pl-5 mt-2 space-y-1 list-decimal list-inside">
                <li>Reza</li>
                <li>Azra</li>
                <li>test</li>
            </ol>
        </li>
        </ul>
    </div>
  </div>

    <section class="bg-white py-4">
        <div class="container py-8 px-6 mx-auto">
            <a class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8" href="#">
			Note
		    </a>
            <p class="mt-2 mb-8">JIKA ADA YG MERASA KURANG SEHAT MENJELANG MAIN ATAU ADA HALANGAN LAIN MAU CANCEL TOLONG KABARIN DI GRUP H-3 BUAT CANCEL SUPAYA GAMPANG CARI ORANG PENGGANTINYA, JIKA SUDAH LIST DAN TIDAK DATANG, WAJIB TF JIKA ENGGAK ADA PENGGANTINYA..DAN TETAP JAGA PROKES</p>
        </div>

    </section>
<!-- Main modal -->
<div id="defaultModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Keterangan List
                </h3>

                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-6 space-y-6">
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Pemain / Kiper</option>
                <option value="Pemain">Pemain</option>
                <option value="Kiper">Kiper</option>
                </select>
            </div>
            <!-- Modal footer -->
            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="defaultModal" type="button" class="bg-transparent hover:bg-yellow-500 text-black font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded">Join List</button>
                <button data-modal-hide="defaultModal" type="button" class="bg-red-500 hover:bg-red-700 text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">Cancel List</button>
                <button data-modal-hide="defaultModal" type="button" class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Waiting List</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>

.work-sans {
    font-family: 'Work Sans', sans-serif;
}
        
#menu-toggle:checked + #menu {
    display: block;
}

.hover\:grow {
    transition: all 0.3s;
    transform: scale(1);
}

.hover\:grow:hover {
    transform: scale(1.02);
}

.carousel-open:checked + .carousel-item {
    position: static;
    opacity: 100;
}

.carousel-item {
    -webkit-transition: opacity 0.6s ease-out;
    transition: opacity 0.6s ease-out;
}

#carousel-1:checked ~ .control-1,
#carousel-2:checked ~ .control-2,
#carousel-3:checked ~ .control-3 {
    display: block;
}

.carousel-indicators {
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: 2%;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 10;
}

#carousel-1:checked ~ .control-1 ~ .carousel-indicators li:nth-child(1) .carousel-bullet,
#carousel-2:checked ~ .control-2 ~ .carousel-indicators li:nth-child(2) .carousel-bullet,
#carousel-3:checked ~ .control-3 ~ .carousel-indicators li:nth-child(3) .carousel-bullet {
    color: #000;
    /*Set to match the Tailwind colour you want the active one to be */
}
</style>