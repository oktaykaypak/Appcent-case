<template>
  <div>
    <HeaderComp />
    <nuxt />
    <FooterComp />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  beforeMount() {
    this.$axios.setToken(process.env.token, 'Bearer')
  },
}
</script>

<style></style>
