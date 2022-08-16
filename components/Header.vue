<template>
  <header class="absolute top-0 left-0 right-0 w-full z-[500] bg-transparent">
    <!--    <img class="absolute ltr:left-0 rtl:right-0 top-0" src="assets/images/header-shape.svg" alt="shape">-->
    <div class="container-content flex items-center justify-between py-[32px]">
      <h1>
        <a href="./index.html">
          <nuxt-img src="images/white-logo.svg" alt="img"/>
        </a>
      </h1>
<!--      <div>-->
<!--        <button @click.prevent="changeLang">-->
<!--          عربي-->
<!--        </button>-->
<!--      </div>-->
      <main-link text-color="white" link="/" text="Become a Client" before-color="orange"/>
    </div>
  </header>
</template>

<script>
import MainLink from "./UI/MainLink";
import {useHead} from "nuxt/app";

export default {
  name: "Header",
  components: {MainLink},
  methods: {
    changeLang() {
      // this.$i18n.locale = 'ar';
      localStorage.setItem("langLocale", 'ar');
      this.$i18n.locale = localStorage.getItem("langLocale");
          useHead({
            htmlAttrs: {
              lang: this.$i18n.locale,
              dir: this.$i18n.locale === 'en' ? 'ltr' : 'rtl',
            },
          })
    }
  }
}
</script>

<style scoped>

</style>
