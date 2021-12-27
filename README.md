# Appcent Case - Yummovie

Projemiz bir Nuxt.JS projesidir. Themoviedb'den veri çekerek çalışır. Projemiz bootstrap css ile tasarlanmıştır. Özel alanlar için scss ile yeniden dizayn edilmiştir.

Simgeler scss ile bootstrap ile sisteme eklenir.

Fontlar Google Fonts üzerinden scss ile sisteme eklenir. Varsayılan yazı tipi Poppins tercih edilir.

Tüm istekler store→movie.js dosyasında tutulur ve bu alandan sayfalara aktarılır.

```jsx
async getPopular({ commit }, id) {
  const { data } = await this.$axios.get(`movie/popular`)
  commit('setPMovies', data.results)
},
```

Sistem Axios ile baglanmistir. Bağlantı themoviedb'den alınan API ile sağlanır. Token bilgileri nuxt-config içinde mevcuttur.

```json
env: {
    token:
      'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWU1MjM5NjQ0MWNhNzZhOTJhMzQ0MWRhMWQxZjIyMCIsInN1YiI6IjYxYzQyYTYyZWNhZWY1MDA4ZWFmZTFhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MZsBC8SxrKXRJIbn9Rt4acJcqjaSLx3jn-fScgU2y4g',
    imgPath: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2',
  },
```

Proje web ve mobil tabanlı olarak tasarlanmıştır. Canlı demoda görüntülenebilir.

---

## Live Demo

[https://appcent-case-oktaykaypak.vercel.app/](https://appcent-case-oktaykaypak.vercel.app/)

## Build Setup

```bash
# install dependencies
$ yarn

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

---

## Pages

### Home Page

Projenin ana sayfasıdır. Bu sayfada iki farklı API üzerinden veri alınmaktadır. Bu API’ler sırasıyla popüler ve trend olan filmleri getiriyor.

![Untitled](Appcent%20Case%20-%20Yummovie%20d5a8e04fc7b048c3b892301611b2e847/Untitled.png)

Sayfamızda tasarım bileşenleri olarak Bootstrap jumbotron ve swiper.js kullanılmaktadır. Jumbotron alanında projemizin adı ve sloganı yer almaktadır.

![Untitled](Appcent%20Case%20-%20Yummovie%20d5a8e04fc7b048c3b892301611b2e847/Untitled%201.png)

Swiper.js, sayfamızdaki popüler ve trend olan filmleri listelemek için kullanılır.

![Untitled](Appcent%20Case%20-%20Yummovie%20d5a8e04fc7b048c3b892301611b2e847/Untitled%202.png)

---

### Detail

Projemizin detay sayfasıdır. Filmlerin id bilgilerine göre Detail, Images, Cast, Video API'lerine istek gönderir. Gelen içerikler vuex yapısı üzerinden sayfaya aktarılır.

Sayfamız vue router ile entegre çalışmaktadır. URL'deki parametre ile filmlerin id bilgileri alınır.

Sayfamızda bootstrap carousel bileşeni ile arka planda kullanılmak üzere hazırlanmış slayt alanı bulunmaktadır.

![Untitled](Appcent%20Case%20-%20Yummovie%20d5a8e04fc7b048c3b892301611b2e847/Untitled%203.png)

Döküm ve Üretim alanları için hiçbir bileşen kullanılmaz. HTML/CSS ile oluşturuldu.

![Untitled](Appcent%20Case%20-%20Yummovie%20d5a8e04fc7b048c3b892301611b2e847/Untitled%204.png)

---

## Store

### Movie.js

Bu dosya API isteklerini içerir. Sayfalarda çağrılan fonksiyonlar burada saklanır.

Aynı şekilde gelen veriler düzenlenerek buradan sayfalara gönderilir.

---

## Components

### FooterComp

Projemizin footer alanı içerir.

### Header

Projemizin header alanı içerir.

---

## Layouts

### Default.vue

Projemizin iskeletini oluşturuyor. Header ve Footer bileşenleri bu alanda bulunur.

Ayrıca projemizde kullandığımız token sayfa açıldığında header alanına eklenir.

---

## Assets

Projemizde kullandığımız tüm görseller ve tasarım şablonları bu klasördedir.