<template>
  <div class="mb-16">
    <div class="container-content">
      <div class="section-title !mb-0">
        <h2>Our Work</h2>
      </div><!-- section-title -->
    </div><!-- container-content -->
    <div class="flow-container-mobile">
      <div class="flex flex-nowrap items-center -mx-4 md:mx-0">
        <ClientOnly>
          <swiper :spaceBetween="10"
                  :watchSlidesProgress="true"
                  class="work-title-swiper free-mode-swiper !px-4 md:!px-0"
                  slides-per-view="auto">
            >
            <swiper-slide>
              <button :class="{active: activeWorkClass === 'all'}"
                      class="bg-gray-300 p-font text-lg sm:text-sm	font-bold p-2.5 rounded-md changeWorkSlideBtn" @click="activeWorkSlide('all')">
                All Projects
              </button>
            </swiper-slide>
            <swiper-slide>
              <button :class="{active: activeWorkClass === 'web'}"
                      class="bg-gray-300 p-font text-lg sm:text-sm	font-bold p-2.5 rounded-md changeWorkSlideBtn" @click="activeWorkSlide('web')">
                Web Development
              </button>
            </swiper-slide>
            <swiper-slide>
              <button :class="{active: activeWorkClass === 'mobile'}"
                      class="bg-gray-300 p-font text-lg sm:text-sm	font-bold p-2.5 rounded-md changeWorkSlideBtn" @click="activeWorkSlide('mobile')">
                Mobile Development
              </button>
            </swiper-slide>
            <swiper-slide>
              <button :class="{active: activeWorkClass === 'marketing'}"
                      class="bg-gray-300 p-font text-lg sm:text-sm	font-bold p-2.5 rounded-md changeWorkSlideBtn" @click="activeWorkSlide('marketing')">
                Digital Marketing
              </button>
            </swiper-slide>
          </swiper>
        </ClientOnly>
        <div class="px-4 md:hidden">
          <main-link before-color="orange" link="/" text="View More" text-color="black"/>
        </div>
      </div>
    </div>

    <div class="flow-container mt-8 md:mt-6">
      <ClientOnly>
        <swiper v-if="activeWorkClass === 'all'"
                key="allSlide"
                :spaceBetween="10"
                :watchSlidesProgress="true"
                class="work-swiper free-mode-swiper"
                slides-per-view="auto"
        >
          <swiper-slide v-for="(item, index) in workSliderContent" :key="index">
            <work-slide :img="item.img" :newProject="item.newProject" :title="item.title"
                        :year="item.year"></work-slide>
          </swiper-slide>
        </swiper>
        <swiper v-if="activeWorkClass === 'web'"
                key="webSlide"
                :spaceBetween="10"
                :watchSlidesProgress="true"
                class="work-swiper free-mode-swiper"
                slides-per-view="auto"
        >
          <template v-for="(item, index) in workSliderContent" :key="index">
            <swiper-slide v-if="item.type === 'web'">
              <work-slide :img="item.img" :newProject="item.newProject" :title="item.title" :year="item.year"
              ></work-slide>
            </swiper-slide>
          </template>

        </swiper>
        <swiper v-if="activeWorkClass === 'marketing'"
                key="marketingSlide"
                :spaceBetween="10"
                :watchSlidesProgress="true"
                class="work-swiper free-mode-swiper"
                slides-per-view="auto"
        >
          <template v-for="(item, index) in workSliderContent" :key="index">
            <swiper-slide v-if="item.type === 'marketing'">
              <work-slide :img="item.img" :newProject="item.newProject" :title="item.title" :year="item.year"
              ></work-slide>
            </swiper-slide>
          </template>
        </swiper>
        <swiper v-if="activeWorkClass === 'mobile'"
                key="mobileSlide"
                :spaceBetween="10"
                :watchSlidesProgress="true"
                class="work-swiper free-mode-swiper"
                slides-per-view="auto"
        >
          <template v-for="(item, index) in workSliderContent" :key="index">
            <swiper-slide v-if="item.type === 'mobile'">
              <work-slide :img="item.img" :newProject="item.newProject" :title="item.title" :year="item.year"
              ></work-slide>
            </swiper-slide>
          </template>
        </swiper>
      </ClientOnly>
    </div>
    <div class="container-content hidden md:block mt-7">
      <main-link before-color="orange" link="/" text="View More" text-color="black"/>
    </div>
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import "swiper/css/navigation"
import "swiper/css/thumbs"
import MainLink from "../UI/MainLink";
import WorkSlide from "../WorkSlide";

export default {
  components: {
    WorkSlide,
    MainLink,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      activeWorkClass: 'all',
      teamCardActive: 'first',
      workSliderContent: [
        {
          img: 'images/works/w-1.webp',
          title: 'Théophile LeClerc',
          year: '2021',
          newProject: true,
          type: 'mobile',
        },
        {
          img: 'images/works/w-2.webp',
          year: '2021',
          title: 'EviDenS de Beauté',
          newProject: true,
          type: 'marketing',
        },
        {
          img: 'images/works/w-3.webp',
          year: '2021',
          title: 'title3',
          newProject: false,
          type: 'web',
        },
        {
          img: 'images/works/w-1.webp',
          title: 'Théophile LeClerc',
          year: '2021',
          newProject: true,
          type: 'mobile',
        },
        {
          img: 'images/works/w-2.webp',
          year: '2021',
          title: 'EviDenS de Beauté',
          newProject: true,
          type: 'marketing',
        },
        {
          img: 'images/works/w-3.webp',
          year: '2021',
          title: 'title3',
          newProject: false,
          type: 'web',
        },
        {
          img: 'images/works/w-1.webp',
          title: 'Théophile LeClerc',
          year: '2021',
          newProject: true,
          type: 'mobile',
        },
        {
          img: 'images/works/w-2.webp',
          year: '2021',
          title: 'EviDenS de Beauté',
          newProject: true,
          type: 'marketing',
        },
        {
          img: 'images/works/w-3.webp',
          year: '2021',
          title: 'title3',
          newProject: false,
          type: 'web',
        },
        {
          img: 'images/works/w-1.webp',
          title: 'Théophile LeClerc',
          year: '2021',
          newProject: true,
          type: 'mobile',
        },
        {
          img: 'images/works/w-2.webp',
          year: '2021',
          title: 'EviDenS de Beauté',
          newProject: true,
          type: 'marketing',
        },
        {
          img: 'images/works/w-3.webp',
          year: '2021',
          title: 'title3',
          newProject: false,
          type: 'web',
        },
        {
          img: 'images/works/w-1.webp',
          title: 'Théophile LeClerc',
          year: '2021',
          newProject: true,
          type: 'mobile',
        },
        {
          img: 'images/works/w-2.webp',
          year: '2021',
          title: 'EviDenS de Beauté',
          newProject: true,
          type: 'marketing',
        },
        {
          img: 'images/works/w-3.webp',
          year: '2021',
          title: 'title3',
          newProject: false,
          type: 'web',
        },
        {
          img: 'images/works/w-1.webp',
          title: 'Théophile LeClerc',
          year: '2021',
          newProject: true,
          type: 'mobile',
        },
        {
          img: 'images/works/w-2.webp',
          year: '2021',
          title: 'EviDenS de Beauté',
          newProject: true,
          type: 'marketing',
        },
        {
          img: 'images/works/w-3.webp',
          year: '2021',
          title: 'title3',
          newProject: false,
          type: 'web',
        },
      ],
    }
  },
  methods: {
    activeWorkSlide(active) {
      this.activeWorkClass = active;
    },
  },
  name: "OurWork"
}
</script>

<style scoped>

</style>
