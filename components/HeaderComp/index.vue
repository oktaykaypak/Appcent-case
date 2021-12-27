<template>
  <header class="shadow bg-dark text-white">
    <div class="container">
      <div class="row" style="max-height: 100px">
        <div class="col-6 logo">
          <!-- Logo -->
          <nuxt-link class="" to="/">
            <img height="100" src="@/assets/img/logo.png" alt="" />
          </nuxt-link>
        </div>
        <div
          class="col-6 justify-content-end menu text-white d-flex align-items-center"
        >
          <!-- menu -->
          <nuxt-link class="menu-item" to="/">Home</nuxt-link>
          <nuxt-link class="menu-item" to="/about">About</nuxt-link>
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
