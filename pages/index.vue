<template>
  <div class="container mt-5">
    <section>
      <b-jumbotron
        header="BootstrapVue"
        lead="Bootstrap v4 Components for Vue.js 2"
      >
        <p>For more information visit website</p>
        <b-button variant="primary" href="#">More Info</b-button>
      </b-jumbotron>
    </section>
    <section class="mt-3">
      <div class="row">
        <div class="col-12">
          <h2>Popular Movies</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide
              ><nuxt-link :to="'/detail'">aşsdşlasd</nuxt-link></swiper-slide
            >
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
            <swiper-slide>Slide 4</swiper-slide>
            <swiper-slide>Slide 5</swiper-slide>
            <swiper-slide>Slide 6</swiper-slide>
            <swiper-slide>Slide 7</swiper-slide>
            <swiper-slide>Slide 8</swiper-slide>
            <swiper-slide>Slide 9</swiper-slide>
            <swiper-slide>Slide 10</swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
      </div>
    </section>
    <section class="mt-3">
      <div class="row">
        <div class="col-12">
          <h2>Trend Movies</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
            <swiper-slide>Slide 4</swiper-slide>
            <swiper-slide>Slide 5</swiper-slide>
            <swiper-slide>Slide 6</swiper-slide>
            <swiper-slide>Slide 7</swiper-slide>
            <swiper-slide>Slide 8</swiper-slide>
            <swiper-slide>Slide 9</swiper-slide>
            <swiper-slide>Slide 10</swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'IndexPage',
  components: {
    Swiper,
    SwiperSlide,
  },
  layout: 'default',
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
    }
  },
}
</script>
<style scoped>
.swiper {
  height: 300px;
  width: 100%;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  font-size: 12px;
  background-color: #fafafa;
}
</style>
