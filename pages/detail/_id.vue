<template>
  <div class="">
    <div class="position-relative">
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000; height: 600px"
        fade
      >
        <b-carousel-slide
          v-for="item in bgPosters"
          :key="item.file_path"
          :img-src="'https://www.themoviedb.org/t/p/original' + item.file_path"
        />
      </b-carousel>
      <div class="bg-shadow"></div>

      <section class="container py-5 a">
        <div class="row">
          <div class="col-12">
            <div class="row">
              <div class="col-sm-4">
                <!-- Afis -->
                <img
                  :src="imgPath + data.poster_path"
                  alt=""
                  class="shadow-lg w-100"
                />
              </div>
              <div class="col-sm-8 text-white pl-5">
                <!-- data -->
                <div class="row">
                  <div class="col-12 h1">
                    <b>{{ data.title }}</b>
                    <small v-if="data.release_date">
                      ({{ $moment(data.release_date).format('YYYY') }})
                    </small>
                  </div>
                </div>

                <div v-if="data.tagline" class="row mt-1">
                  <div class="col-12 d-flex">
                    {{ data.tagline }}
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="points-content">
                      <div
                        class="per-bg"
                        :style="{ height: data.vote_average * 10 + '%' }"
                      ></div>
                      <i class="points-text">{{ data.vote_average * 10 }}</i>
                    </div>
                  </div>
                </div>
                <div v-if="data.release_date" class="row">
                  <div class="col-12">
                    <div
                      class="badge badge-info"
                      style="font-size: 15px !important; font-weight: 400"
                    >
                      <i class="bi bi-calendar-date"></i>
                      {{ $moment(data.release_date).format('DD/MM/YYYY') }}
                    </div>
                  </div>
                </div>
                <div v-if="data.genres" class="row mt-1">
                  <div class="col-12">
                    <span
                      v-for="item in data.genres"
                      :key="item.id"
                      class="badge badge-secondary mr-1"
                    >
                      {{ item.name }}
                    </span>
                  </div>
                </div>

                <div v-if="data.overview" class="row mt-3">
                  <div class="col-12">{{ data.overview }}</div>
                </div>
                <div v-if="data.keywords" class="row mt-1">
                  <div class="col-12">{{ data.keywords }}</div>
                </div>
                <div v-if="video" class="row mt-3">
                  <div class="col-12">
                    <a class="btn btn-primary" :href="video.link">
                      <i class="bi bi-film"></i> Teaser</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section v-if="cast.length > 0" class="mt-3 container">
      <div class="row"><div class="col-12 h3">Cast</div></div>
      <div class="row">
        <div class="col-12">
          <div class="content">
            <div class="slide-area">
              <div v-for="item in cast" :key="item.id" class="item m-2">
                <img
                  :src="
                    item.profile_path !== null
                      ? imgPath + item.profile_path
                      : require(`@/assets/img/null.jpeg`)
                  "
                  alt=""
                  class="w-100"
                />
                <small class="mt-3">
                  {{ item.name }} <br />
                  <small> {{ item.character }} </small>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <h4 v-else class="text-danger text-center mt-5">No Any Cast Data</h4>
    <section v-if="pLength > 0" class="mt-3 container">
      <div class="row">
        <div class="col-12 h3">Production</div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="content">
            <div class="slide-area">
              <div
                v-for="item in data.production_companies"
                :key="item.id"
                class="item m-2"
              >
                <img
                  :src="
                    item.logo_path !== null
                      ? imgPath + item.logo_path
                      : require(`@/assets/img/null.jpeg`)
                  "
                  alt=""
                  class="w-100"
                />
                <small>
                  {{ item.name }}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <h4 v-else class="text-danger text-center mt-5">No Any Production Data</h4>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'MovieDetail',
  layout: 'default',
  data() {
    return { imgPath: process.env.imgPath }
  },
  computed: {
    pLength() {
      return this.data.production_companies
        ? this.data.production_companies.length
        : 0
    },
    ...mapState({
      data: (state) => state.movie.detail,
      cast: (state) => state.movie.cast,
      video: (state) => state.movie.video,
      bgPosters: (state) => state.movie.bgPosters,
    }),
  },
  async beforeMount() {
    const { id } = this.$route.params
    await this.getDetail(id)
    await this.getCast(id)
    await this.getVideo(id)
    await this.getImages(id)
  },
  methods: {
    ...mapActions({
      getDetail: 'movie/getDetail',
      getCast: 'movie/getCast',
      getVideo: 'movie/getVideo',
      getImages: 'movie/getImages',
    }),
  },
}
</script>

<style lang="scss"></style>
