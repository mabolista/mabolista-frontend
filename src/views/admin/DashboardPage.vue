<script setup>
import SidebarPanel from '../../components/admin/SidebarPanel.vue'
</script>

<template>
  <div>
    <SidebarPanel />
  </div>
</template>

<script>
document.addEventListener('DOMContentLoaded', function () {
  const opcionesConDesplegable = document.querySelectorAll('.opcion-con-desplegable')

  opcionesConDesplegable.forEach(function (opcion) {
    opcion.addEventListener('click', function () {
      const desplegable = opcion.querySelector('.desplegable')

      desplegable.classList.toggle('hidden')
    })
  })
})
</script>
