<template>
  <header class="shadow bg-dark text-white">
    <div class="container">
      <div class="row py-5">
        <div class="col-sm-6">
          <!-- Logo -->
          logo
        </div>
        <div class="col-sm-6 text-right">
          <!-- menu -->
         <nuxt-link to="/">Home</nuxt-link>
         <nuxt-link to="/about">About</nuxt-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComp',
}
</script>

<style></style>
