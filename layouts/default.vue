<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useHead } from "nuxt/app";

export default {
  name: "default",
  components: { Header, Footer },

  // head( app ) {
  //   // const locale = vueApp.i18n.locale
  //   console.log(app)
  //   return {
  //     // htmlAttrs: {
  //     //   lang: locale,
  //     //   dir: locale === 'en' ? 'ltr' : 'rtl',
  //     // },
  //   }
  // },
  mounted() {
    // localStorage.setItem("langLocale", 'ar');
    let locale = localStorage.getItem("langLocale");
    console.log(locale);
    if (locale === null) {
      this.$i18n.locale = "en";
      locale = "en";
    } else {
      this.$i18n.locale = locale;
    }
    useHead({
      htmlAttrs: {
        lang: locale,
        dir: locale === "en" ? "ltr" : "rtl",
      },
    });
  },
};
</script>

<style scoped></style>
