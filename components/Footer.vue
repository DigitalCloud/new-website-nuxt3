<template>
  <footer>
    <div class="bg-[#18181B] -mt-36 pt-36">
      <div class="container-content py-16">
        <div class="flex items-center pb-8 mb-8 border-b border-b-[1px] border-b-[rgba(255,255,255,0.1)] justify-between">
          <h2 class="text-7xl	font-bold text-white-900 ltr:pr-3 rtl:pl:3">
            Ready to win the Competition
          </h2>
          <main-link text-color="white" link="/" text="Become a Client" before-color="orange"/>
        </div>
        <div class="flex justify-between -mx-4">
          <div class="w-1/4 px-4">
            <p class="text-white-900 mb-6 font-bold text-base">Company</p>
            <ul>
              <li class="mb-6">
                <a href="#" class="text-white-900 text-sm">
                  About
                </a>
              </li>
              <li class="mb-6">
                <a href="#" class="text-white-900 text-sm">
                  Features
                </a>
              </li>
              <li class="mb-6">
                <a href="#" class="text-white-900 text-sm">
                  Works

                </a>
              </li>
              <li class="mb-6">
                <a href="#" class="text-white-900 text-sm">
                  Career
                </a>
              </li>
            </ul>
          </div>
          <div class="w-1/4 px-4">
            <p class="text-white-900 mb-6 font-bold text-base">Help</p>
            <ul>
              <li class="mb-6">
                <a href="#" class="text-white-900 text-sm">
                  Customer Support
                </a>
              </li>
              <li class="mb-6">
                <a href="#" class="text-white-900 text-sm">
                  Delivery Details
                </a>
              </li>
              <li class="mb-6">
                <a href="#" class="text-white-900 text-sm">
                  Terms & Conditions

                </a>
              </li>
              <li class="mb-6">
                <a href="#" class="text-white-900 text-sm">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div class="w-1/4 px-4">
            <p class="text-white-900 mb-6 font-bold text-base">Resources</p>
            <ul>
              <li class="mb-6">
                <a href="#" class="text-white-900 text-sm">
                  Free eBooks
                </a>
              </li>
              <li class="mb-6">
                <a href="#" class="text-white-900 text-sm">
                  Development Tutorial
                </a>
              </li>
              <li class="mb-6">
                <a href="#" class="text-white-900 text-sm">
                  How to - Blog

                </a>
              </li>
              <li class="mb-6">
                <a href="#" class="text-white-900 text-sm">
                  Youtube Playlist
                </a>
              </li>
            </ul>
          </div>
          <div class="w-1/4 px-4">
            <p class="text-white-900 mb-6 font-bold text-base">Links</p>
            <ul>
              <li class="mb-6">
                <a href="#" class="text-white-900 text-sm">
                  Free eBooks
                </a>
              </li>
              <li class="mb-6">
                <a href="#" class="text-white-900 text-sm">
                  Development Tutorial
                </a>
              </li>
              <li class="mb-6">
                <a href="#" class="text-white-900 text-sm">
                  How to - Blog
                </a>
              </li>
              <li class="mb-6">
                <a href="#" class="text-white-900 text-sm">
                  Youtube Playlist
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import MainLink from "./UI/MainLink";
export default {
  name: "Footer",
  components: {MainLink}
}
</script>

<style scoped>

</style>
