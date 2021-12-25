<template>
  <div class="">
    <div class="position-relative">
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000; height: 600px"
        fade
      >
        <b-carousel-slide
          img-src="https://www.themoviedb.org/t/p/original/dK12GIdhGP6NPGFssK2Fh265jyr.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          img-src="https://www.themoviedb.org/t/p/original/oFzuAmn9cy352cLLYqoeH6YB9Xn.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          img-src="https://www.themoviedb.org/t/p/original/2xfXMRcNIeBE935PrzHNuIjHrso.jpg"
        ></b-carousel-slide>
      </b-carousel>
      <div class="bg-shadow"></div>

      <section class="container py-5 a">
        <div class="row">
          <div class="col-12">
            <div class="row">
              <div class="col-sm-4">
                <!-- Afis -->
                <img
                  :src="
                    'https://www.themoviedb.org/t/p/w300_and_h450_bestv2' +
                    data.poster_path
                  "
                  alt=""
                  class="shadow-lg w-100"
                />
              </div>
              <div class="col-sm-8 text-white pl-5">
                <!-- data -->
                <div class="row">
                  <div class="col-12 h1">
                    <b>{{ data.original_title }}</b>
                    <small> {year} </small>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">{treaser}</div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <i>{{ data.vote_average * 10 }}</i> -
                    {{ $moment(data.release_date).format('DD/MM/YYYY') }} *
                    {{ data.genres }}
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">{{ data.overview }}</div>
                </div>
                <div class="row">
                  <div class="col-12">{{ data.keywords }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section class="mt-3 container">
      <div class="row"><div class="col-12 h3">Cast</div></div>
      <div class="row">
        <div class="col-12">{cast} slider olacak</div>
      </div>
    </section>
    <section class="mt-3 container">
      <div class="row">
        <div class="col-12 h3">Production</div>
      </div>
      <div class="row">
        <div class="col-12">{production_companies} slider olacak</div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MovieDetail',
  layout: 'default',
  data() {
    return { data: {} }
  },
  async beforeMount() {
    const { id } = this.$route.params
    console.log('📌 - beforeMount - id', id)
    const { data } = await this.$axios.get(
      `movie/${id}?api_key=0ae52396441ca76a92a3441da1d1f220&language=tr`
    )
    this.data = data
  },
}
</script>

<style>
.a {
  position: absolute;
  top: 0;
  z-index: 99999;
  display: flex;
  justify-content: center;
  left: 13%;
}
.carousel-inner {
  height: 600px !important;
}
.bg-shadow {
  background: linear-gradient(
    132deg,
    rgba(2, 0, 36, 0.7) 0%,
    rgba(0, 200, 255, 0.3) 100%
  );

  z-index: 99;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
