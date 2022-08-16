<template>
  <div class="bg-[#FAF8F7] py-20 relative md:py-16">
    <nuxt-img alt="icon1"
         class="absolute top-[10%] ltr:-right-0 transform translate-x-1/2 xl:max-w-[400px] lg:max-w-[350px]" src="images/blog-orange-shape.svg"/>
    <div class="container-content">
      <div class="section-title">
        <h2>Our Blog</h2>
        <main-link before-color="orange" class="md:hidden flex" link="/" text="View More" text-color="black"/>
      </div><!-- section-title -->
      <section class="flex relative -mx-3 md:flex-wrap">
          <article v-for="(item, index) in blogs" :key="index" class="w-1/2 px-3 md:w-full md:mb-5">
            <div class="blog-box">
              <div class="img-handler mb-4">
                <nuxt-img :src="item?.img" alt="images" class="w-full"/>
              </div>
              <p class="text-sm capitalize block mb-3">{{ item?.type?.en }}</p>
              <h3 class="font-bold text-3xl leading-relaxed capitalize lg:text-2xl">
                {{ item?.title?.en }}
              </h3>
            </div>
          </article>
      </section>
      <main-link before-color="orange" class="md:flex hidden mt-4" link="/" text="View More" text-color="black"/>
    </div>
  </div>
</template>

<script>
import MainLink from "../UI/MainLink";
// import {useFetch} from "nuxt/app";

export default {
  name: "OurBlog",
  components: {MainLink},
  data() {
    return {
      blogs: [
        {
          id: 1,
          img: "images/blog1.png",
          title: {
            en: "The Largest And Oldest Quotations Page On The Web With About 30 Categories",
            ar: "مولد النصوص العربية والإنجليزية والألمانية والألكترونية والأجنبية والأسواق الأخرى"
          },
          type: {
            en: "Web Development",
            ar: "تطوير الويب"
          },
        },
        {
          id: 2,
          img: "images/blog1.png",
          title: {
            en: "The Largest And Oldest Quotations Page On The Web With About 30 Categories",
            ar: "مولد النصوص العربية والإنجليزية والألمانية والألكترونية والأجنبية والأسواق الأخرى"
          },
          type: {
            en: "Web Development",
            ar: "تطوير الويب"
          },
        },
      ]
    };
  },
  // async setup() {
  //     const {data: blogs} = await useFetch('/api/blogs')
  //     return { blogs: blogs?.value?.blogs || [] };
  // }
}
</script>

<style scoped>

</style>
