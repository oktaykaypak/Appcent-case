<template>
  <header class="shadow bg-dark text-white">
    <div class="container">
      <div class="row " style="max-height:100px">
        <div class="col-sm-6">
          <!-- Logo -->
          <img height="100" src="@/assets/img/logo.png" alt="" />
        </div>
        <div class="col-sm-6 text-right py-4">
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
