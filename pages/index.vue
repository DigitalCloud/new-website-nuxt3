<template>
  <div>
    <section class="main-section mb-16">
      <div class="main-content relative pt-24">
        <div class="pb-28 pt-10 sm:pb-16 relative">
          <div class="relative">
            <div class="container-content">
              <div class="w-11/12 2xl:w-full mx-auto">
                <div class="flex justify-between -mx-6">
                  <div class="w-[70%] px-6 lg:w-full">
                    <h2 class="font-black text-8xl 2xl:text-6xl md:text-5xl sm:text-4xl mb-3.5 text-white-900 line-through text-gsap-1">
                    <span class="line h-24 mb-4 2xl:h-16 md:h-14 sm:h-10">
                      <span>Make Your Leap!</span>
                    </span>
                      <span class="line h-24 2xl:h-16 md:h-14 sm:h-10">
                      <span>Extraordinary!!</span>
                    </span>

                    </h2>
                    <p class="text-lg mb-8 text-white-900 max-w-[62%] md:max-w-full xl:text-lg sm:text-base text-2xl opacity-0 text-gsap-2 transform translate-y-3.5">
                      We are an experienced
                      digital agency of skilled team that builds strategies for the success of your business.</p>
                    <main-link text-color="white" link="/" text="Become a Client" before-color="orange" class="link-tl1 opacity-0 inline-flex"/>
                  </div>
                </div>
              </div>
              <nuxt-img class="absolute top-[10%] ltr:-right-0 transform translate-x-1/2 img-gsap-1 opacity-0 sm:w-2/3 sm:h-auto"
                   src="images/home-top-right-icon.svg" alt="icon1"/>
            </div>
            <player
                class="mt-24 lg:mt-16 sm:mt-10 relative z-10 v-tm1 opacity-0 transform translate-y-10 "
                poster="images/playr-bg.jpg"
                url="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"/>

          </div>
          <div class="container-content">
            <services/>
          </div>

          <!--        <img class="absolute bottom-[30px] ltr:right-0 rtl:left-0 max-w-[11%]" src="assets/images/hero-right-shape.svg"-->
          <!--             alt="shape">-->


        </div>
      </div>
    </section>
    <div class="main-content relative">
      <our-work/>
      <!--   our Team Section   -->
      <our-team/>
      <!--    our partner section    -->
      <our-partner/>
      <!--   Our Blog section   -->
      <our-blog/>
    </div>
  </div>
</template>
<script>
import Player from "../components/player";
import {gsap} from "gsap";


// Import Swiper styles

import WorkSlide from "../components/WorkSlide";
import Services from "../components/Home/Services";
import OurBlog from "../components/Home/OurBlog";
import OurPartner from "../components/Home/OurPartner";
import OurTeam from "../components/Home/OurTeam";
import OurWork from "../components/Home/OurWork";
import MainLink from "../components/UI/MainLink";

export default {
  components: {MainLink, OurWork, OurTeam, OurPartner, OurBlog, Services, WorkSlide, Player},
  layout: 'default',
  data() {
    return {
      // thumbsSwiper:null,
    }
  },
  methods: {
    icon1Gsap() {
      let t2 = gsap.timeline();
      t2.to(".img-gsap-1", {duration: 3, alpha: 0.1, opacity: 0.1, ease: "power3.out"});
      let t1 = gsap.timeline({repeat: -1});
      t1.to(".img-gsap-1", {duration: 20, rotation: 360, ease: "linear"});
    },
    textGsap() {
      let arr1 = [0, 0, 100, 0, 100, 100, 0, 100];
      let t1 = gsap.timeline();
      t1.to(".line span", {duration: 0.3, alpha: 1, opacity: 1, ease: "power3.out"});
      t1.from(".line span", 1.5, {
        y: 150,
        ease: "power4.out",
        delay: 0.3,
        skewY: 7,
        stagger: {
          amount: 0.3
        }
      })
      t1.to(".text-gsap-2", 1.2, {
        y: 0,
        delay: -0.5,
        ease: "power4.out",
        opacity: 1,
        skewY: 0,
      })
      t1.to(".link-tl1", 1.2, {
        y: 0,
        delay: -0.5,
        ease: "power4.out",
        opacity: 1,
        skewY: 0,
      })
      t1.to('.v-tm1', {
        webkitClipPath: 'polygon(' + arr1[0] + '%' + arr1[1] + '%,' + arr1[2] + '%' + arr1[3] + '%,' + arr1[4] + '%' + arr1[5] + '%,' + arr1[6] + '%' + arr1[7] + '%)',
        duration: 1.2,
        opacity: 1,
        delay: -0.8,
        y: 0,
        ease: 'power4.out',
      });
      t1.eventCallback("onComplete", () => {
        this.icon1Gsap()
      });

    },
    // setThumbsSwiper (swiper)  {
    //   this.thumbsSwiper = swiper;
    // },
    // onSlideChange(swiper) {
    //   console.log("jj");
    // },
  },
  mounted() {
    // this.icon1Gsap();
    this.textGsap();
  },
}

</script>
