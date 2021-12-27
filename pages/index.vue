<template>
  <div class="container mt-5">
    <section>
      <b-jumbotron header-level="4">
        <template #header>Yummovie</template>

        <template #lead> Best in the web </template>
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
              v-for="item in popular"
              :key="item.id"
              class="swp-slide-item"
              ><nuxt-link :to="'/detail/' + item.id">
                <img
                  :src="
                    item.poster_path !== null
                      ? imgPath + item.poster_path
                      : require(`@/assets/img/null.jpeg`)
                  "
                  alt=""
                  class="w-100 swp-slide-item-img"
                />
                <h6 class="py-3 swp-slide-item-title">
                  {{ item.title }}
                </h6>
                <div class="row">
                  <div class="col-12">
                    <small>
                      {{ $moment(item.release_date).format('DD/MM/YYYY') }}
                    </small>
                  </div>
                </div>
                <div class="slider-vote">
                  <div class="points-bar-content">
                    <div
                      class="per-bg-bar"
                      :style="{ height: item.vote_average * 10 + '%' }"
                    ></div>
                    <i class="points-bar-text">{{ item.vote_average * 10 }}</i>
                  </div>
                </div>
              </nuxt-link>
            </swiper-slide>

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
            <swiper-slide
              v-for="item in trend"
              :key="item.id"
              class="swp-slide-item"
              ><nuxt-link :to="'/detail/' + item.id">
                <img
                  :src="
                    item.poster_path !== null
                      ? imgPath + item.poster_path
                      : require(`@/assets/img/null.jpeg`)
                  "
                  alt=""
                  class="w-100 swp-slide-item-img"
                />
                <h6 class="py-3 swp-slide-item-title">
                  {{ item.title }}
                </h6>
                <div class="row">
                  <div class="col-12">
                    <small>
                      {{ $moment(item.release_date).format('DD/MM/YYYY') }}
                    </small>
                  </div>
                </div>
                <div class="slider-vote">
                  <div class="points-bar-content">
                    <div
                      class="per-bg-bar"
                      :style="{ height: item.vote_average * 10 + '%' }"
                    ></div>
                    <i class="points-bar-text">{{ item.vote_average * 10 }}</i>
                  </div>
                </div>
              </nuxt-link>
            </swiper-slide>

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
import { mapState, mapActions } from 'vuex'

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
        mousewheel: true,
        spaceBetween: 30,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
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
      imgPath: process.env.imgPath,
    }
  },
  computed: {
    ...mapState({
      popular: (state) => state.movie.popularMovies,
      trend: (state) => state.movie.trendMovies,
    }),
  },
  beforeMount() {
    this.$axios.setToken(process.env.token, 'Bearer')
    this.getPopular()
    this.getTop()
  },
  methods: {
    ...mapActions({
      getPopular: 'movie/getPopular',
      getTop: 'movie/getTop',
    }),
  },
}
</script>
<style scoped lang="scss"></style>
