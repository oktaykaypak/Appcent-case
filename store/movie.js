const price = {
  namespaced: true,
  state: {
    popularMovies: [],
    trendMovies:[],
    detail: {},
    cast: [],
    bgPosters: [],
    video: '',
  },

  mutations: {
    setPMovies(state, payload) {
      state.popularMovies = payload
    },
    setTMovies(state, payload) {
      state.trendMovies = payload
    },
    setDetail(state, payload) {
      state.detail = payload
    },
    setCast(state, payload) {
      state.cast = payload
    },
    setVideo(state, payload) {
      state.video = payload
    },
    setImages(state, payload) {
      state.bgPosters = payload
    },
  },
  actions: {
    async getPopular({ commit }, id) {
      const { data } = await this.$axios.get(`movie/popular`)
      commit('setPMovies', data.results)
    },
    async getTop({ commit }, id) {
      const { data } = await this.$axios.get(`movie/top_rated`)
      commit('setTMovies', data.results)
    },
    async getDetail({ commit }, id) {
      const { data } = await this.$axios.get(`movie/${id}`)
      commit('setDetail', data)
    },
    async getCast({ commit }, id) {
      const { data } = await this.$axios.get(`movie/${id}/credits`)
      commit('setCast', data.cast)
    },
    async getImages({ commit }, id) {
      const { data } = await this.$axios.get(`movie/${id}/images`)
      commit('setImages', data.backdrops)
    },
    async getVideo({ commit }, id) {
      const { data } = await this.$axios.get(`movie/${id}/videos`)
      const teaser = await data.results.find(
        (x) => x.type === 'Teaser' || 'Trailer'
      )
      if (teaser) {
        const youtube = 'https://youtu.be/' + teaser.key
        commit('setVideo', { link: youtube, name: teaser.name })
      } else commit('setVideo', null)
    },
  },
}

export default price
