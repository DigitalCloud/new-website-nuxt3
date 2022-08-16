<template>
  <div class="bg-[#FAF8F7] relative">
    <div class="container-content md:w-full">
      <div class="bg-white-900 rounded-3xl md:rounded-none py-10">
        <div class="ltr:pl-10 rtl:pr-10">
          <ClientOnly>
            <swiper key="allSlide"
                    :spaceBetween="15"
                    :watchSlidesProgress="true"
                    class="work-swiper free-mode-swiper"
                    slides-per-view="auto"
            >
              <swiper-slide v-for="(item, index) in partnerLogo" :key="index">
                <button
                    :class="{active:item.id === activePartnerLogo }"
                    class="bg-gray-300 p-font text-lg font-bold px-5 py-2 rounded-md flex justify-center items-center h-[60px] lg:h-[50px]  partner-btn sm:h-[40px] sm:px-3" @click="activePartnerLogo = item.id">
                  <nuxt-img :src="item.img" alt="partner Logo" class="max-h-[90%] max-w-[8rem]"/>
                </button>
              </swiper-slide>
            </swiper>
          </ClientOnly>
        </div>
        <div class="p-10 sm:pt-5">
          <partner-card :partner="activePartner"></partner-card>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import 'swiper/css';
import "swiper/css/navigation"
import "swiper/css/thumbs"
import {Swiper, SwiperSlide} from "swiper/vue";
import PartnerCard from "./PartnerCard.vue";
import {useFetch} from "nuxt/app";


export default {
  components: {
    Swiper, SwiperSlide, PartnerCard
  },
  name: "OurPartner",
  data() {
    return {
      activePartnerLogo: 1,
      partnerLogo: [
        {
          id: 1,
          img: 'images/partner/1.svg',
        },
        {
          id: 2,
          img: 'images/partner/2.svg',
        },
        {
          id: 3,
          img: 'images/partner/3.svg',
        },
        {
          id: 4,
          img: 'images/partner/4.svg',
        },
        {
          id: 5,
          img: 'images/partner/1.svg',
        },
        {
          id: 6,
          img: 'images/partner/2.svg',
        },
        {
          id: 7,
          img: 'images/partner/3.svg',
        },
        {
          id: 8,
          img: 'images/partner/4.svg',
        }
      ],
      partnerData: [],
    }
  },
  created() {
    const gitData = async () => {
      const {data: api} = await useFetch('/api/partners')
      this.partnerData = api;
    };
    gitData();
  },
  computed: {
    activePartner() {
      return this.partnerData?.partner?.find(item => item.id === this.activePartnerLogo) || {};
    }
  }
}
</script>

<style scoped>

</style>
