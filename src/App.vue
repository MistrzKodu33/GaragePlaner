<script setup>
import { RouterLink, RouterView } from 'vue-router'
import mainStore from './stores/mainStore'
import { onMounted } from 'vue'
import ModalDefinition from './components/ModalDefinition.vue'

onMounted(() => {
  mainStore.setLink(location.pathname)
})
</script>

<template>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <RouterLink to="/" class="navbar-brand">Dom Hrk</RouterLink>
        <!-- <a class="navbar-brand" href="#">Navbar</a> -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink to="/garage" class="nav-link active">Garaż</RouterLink>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
    <RouterView />
    <ModalDefinition />

</template>

<style scoped>

</style>
