<template>
  <navbar></navbar>
  <router-view></router-view>
</template>

<script>
import Navbar from "@/components/NavbarComponent.vue";

export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>

<style>

</style>
