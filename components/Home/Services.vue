<template>
  <div class="home-service-section mt-20 sm:mt-14">
    <div class="section-title white-title">
      <h2>Our Services</h2>
    </div>
    <div class="grid grid-cols-3 xl:grid-cols-2 lg:grid-cols-1  gap-6 lg:gap-4 mt-8">
      <div
          class="service-item col-span-1 row-span-2 s-i-1 bg-[#391484] relative border-[4px] border-white-900 border-solid px-8 pt-20 pb-9 overflow-hidden">
        <nuxt-img src="images/s1.png" class="absolute top-0 ltr:right-0 rtl:left-0" alt="img"/>
        <p class="title-line text-white-900 before:ltr:left-0 before:rtl:right-0 font-semibold">
          Media Production
        </p>
        <p class="text-white-900 text-3xl md:text-2xl font-semibold py-8 leading-normal">
          We are an experienced digital
          agency
          of skilled team
        </p>
        <div class="flex items-center justify-between">
          <p class="font-bold text-sm uppercase text-white-900">
            statement for Cta
          </p>
          <NuxtLink
              class="w-12 h-12 bg-black-900 flex items-center justify-center cursor-pointer group relative">
            <svg class="relative z-10" width="16" height="16" viewBox="0 0 16 16" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M15.4142 9.41421L9.41421 15.4142C8.63316 16.1953 7.36683 16.1953 6.58578 15.4142C5.80474 14.6332 5.80474 13.3668 6.58578 12.5858L9.17157 10H2C0.895432 10 0 9.10457 0 8C0 6.89543 0.895432 6 2 6H9.17157L6.58578 3.41421C5.80474 2.63317 5.80474 1.36684 6.58578 0.585787C7.36683 -0.195262 8.63316 -0.195262 9.41421 0.585786L15.4142 6.58579C15.7893 6.96086 16 7.46957 16 8C16 8.53043 15.7893 9.03914 15.4142 9.41421Z"
                  fill="white"/>
            </svg>
            <svg
                class="absolute opacity-0 transition-all ease-in-out duration-300 group-hover:-translate-x-1 group-hover:opacity-100 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
                width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M15.4142 9.41421L9.41421 15.4142C8.63316 16.1953 7.36683 16.1953 6.58578 15.4142C5.80474 14.6332 5.80474 13.3668 6.58578 12.5858L9.17157 10H2C0.895432 10 0 9.10457 0 8C0 6.89543 0.895432 6 2 6H9.17157L6.58578 3.41421C5.80474 2.63317 5.80474 1.36684 6.58578 0.585787C7.36683 -0.195262 8.63316 -0.195262 9.41421 0.585786L15.4142 6.58579C15.7893 6.96086 16 7.46957 16 8C16 8.53043 15.7893 9.03914 15.4142 9.41421Z"
                  fill="#FF6739"/>
            </svg>

          </NuxtLink>
        </div>
      </div>
      <div
          class="service-item col-span-1 row-span-2 s-i-1 bg-[#FFD99E] relative px-8 pt-20 pb-9 overflow-hidden">
        <nuxt-img src="images/s2.svg" class="absolute top-0 ltr:right-0 rtl:left-0" alt="img"/>
        <p class="title-line text-black-600 before:ltr:left-0 before:rtl:right-0 font-semibold before:bg-orange-700">
          Branding & Creative
        </p>
        <p class="text-black-800 text-3xl font-semibold py-8 leading-normal md:text-2xl">
          We are an experienced digital
          agency
          of skilled team
        </p>
        <div class="flex items-center justify-between">
          <p class="font-bold text-sm uppercase text-black-600">
            statement for Cta
          </p>
          <NuxtLink
              class="w-12 h-12 bg-black-900 flex items-center justify-center cursor-pointer group relative">
            <svg class="relative z-10" width="16" height="16" viewBox="0 0 16 16" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M15.4142 9.41421L9.41421 15.4142C8.63316 16.1953 7.36683 16.1953 6.58578 15.4142C5.80474 14.6332 5.80474 13.3668 6.58578 12.5858L9.17157 10H2C0.895432 10 0 9.10457 0 8C0 6.89543 0.895432 6 2 6H9.17157L6.58578 3.41421C5.80474 2.63317 5.80474 1.36684 6.58578 0.585787C7.36683 -0.195262 8.63316 -0.195262 9.41421 0.585786L15.4142 6.58579C15.7893 6.96086 16 7.46957 16 8C16 8.53043 15.7893 9.03914 15.4142 9.41421Z"
                  fill="white"/>
            </svg>
            <svg
                class="absolute opacity-0 transition-all ease-in-out duration-300 group-hover:-translate-x-1 group-hover:opacity-100 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
                width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M15.4142 9.41421L9.41421 15.4142C8.63316 16.1953 7.36683 16.1953 6.58578 15.4142C5.80474 14.6332 5.80474 13.3668 6.58578 12.5858L9.17157 10H2C0.895432 10 0 9.10457 0 8C0 6.89543 0.895432 6 2 6H9.17157L6.58578 3.41421C5.80474 2.63317 5.80474 1.36684 6.58578 0.585787C7.36683 -0.195262 8.63316 -0.195262 9.41421 0.585786L15.4142 6.58579C15.7893 6.96086 16 7.46957 16 8C16 8.53043 15.7893 9.03914 15.4142 9.41421Z"
                  fill="#FF6739"/>
            </svg>

          </NuxtLink>
        </div>
      </div>
      <div
          class="row-span-3 col-span-1 service-item s-i-1 bg-[#213237] relative px-8 pt-20 pb-9 overflow-hidden">
        <div class="relative">
          <div class="w-44 h-20 absolute ltr:right-0 rtl:left-0 -top-10 z-40">
                        <span class="w-full h-full bg-[#35464B] block">

                        </span>
            <nuxt-img src="images/statistics.svg" class="absolute -top-1/3 ltr:right-5 rtl:left-5"
                 alt="img"/>
            <nuxt-img src="images/Icon.svg"
                 class="absolute ltr:-right-[19px] rtl:-left-[19px] -top-6 -z-10" alt="img"/>
          </div>
          <p class="title-line text-white-900 before:ltr:left-0 font-semibold z-50">
            Growth & Digital Marketing
          </p>
        </div>

        <p class="text-white-900 text-3xl md:text-2xl font-semibold py-8 leading-normal">
          We are an experienced digital
          agency
          of skilled team
        </p>
        <div class="bg-[#35464B] py-8 px-6 mb-14 relative xl:hidden">
          <div class="w-[49px] h-[55px] bg-white-900 opacity-10 -bottom-5 ltr:-right-6 absolute"></div>
          <ul class="list-none dm-list">
            <li class="flex items-center">
              <nuxt-img src="images/Icon2.svg" class="opacity-30 " alt="img"/>
              <p class="text-white-900">
                Laoreet eu velit
              </p>
            </li>
            <li class="flex items-center">
              <nuxt-img src="images/Icon2.svg" class="opacity-30 " alt="img"/>
              <p class="text-white-900">
                Laoreet eu velit
              </p>
            </li>
            <li class="flex items-center">
              <nuxt-img src="images/Icon2.svg" class="opacity-30 " alt="img"/>
              <p class="text-white-900">
                Laoreet eu velit
              </p>
            </li>
            <li class="flex items-center">
              <nuxt-img src="images/Icon2.svg" class="opacity-30 " alt="img"/>
              <p class="text-white-900">
                Laoreet eu velit
              </p>
            </li>
            <li class="flex items-center">
              <nuxt-img src="images/Icon2.svg" class="opacity-30 " alt="img"/>
              <p class="text-white-900">
                Laoreet eu velit
              </p>
            </li>
            <li class="flex items-center">
              <nuxt-img src="images/Icon2.svg" class="opacity-30 " alt="img"/>
              <p class="text-white-900">
                Laoreet eu velit
              </p>
            </li>

          </ul>
        </div>
        <div class="flex items-center justify-between">
          <p class="font-bold text-sm uppercase text-white-900">
            statement for Cta
          </p>
          <NuxtLink
              class="w-12 h-12 bg-black-900 flex items-center justify-center cursor-pointer group relative">
            <svg class="relative z-10" width="16" height="16" viewBox="0 0 16 16" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M15.4142 9.41421L9.41421 15.4142C8.63316 16.1953 7.36683 16.1953 6.58578 15.4142C5.80474 14.6332 5.80474 13.3668 6.58578 12.5858L9.17157 10H2C0.895432 10 0 9.10457 0 8C0 6.89543 0.895432 6 2 6H9.17157L6.58578 3.41421C5.80474 2.63317 5.80474 1.36684 6.58578 0.585787C7.36683 -0.195262 8.63316 -0.195262 9.41421 0.585786L15.4142 6.58579C15.7893 6.96086 16 7.46957 16 8C16 8.53043 15.7893 9.03914 15.4142 9.41421Z"
                  fill="white"/>
            </svg>
            <svg
                class="absolute opacity-0 transition-all ease-in-out duration-300 group-hover:-translate-x-1 group-hover:opacity-100 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
                width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M15.4142 9.41421L9.41421 15.4142C8.63316 16.1953 7.36683 16.1953 6.58578 15.4142C5.80474 14.6332 5.80474 13.3668 6.58578 12.5858L9.17157 10H2C0.895432 10 0 9.10457 0 8C0 6.89543 0.895432 6 2 6H9.17157L6.58578 3.41421C5.80474 2.63317 5.80474 1.36684 6.58578 0.585787C7.36683 -0.195262 8.63316 -0.195262 9.41421 0.585786L15.4142 6.58579C15.7893 6.96086 16 7.46957 16 8C16 8.53043 15.7893 9.03914 15.4142 9.41421Z"
                  fill="#FF6739"/>
            </svg>

          </NuxtLink>
        </div>
      </div>
      <div
          class="row-span-1 col-span-2 xl:col-span-1 xl:row-span-3 service-item s-i-1 bg-[#FFDF62] relative px-8 pt-20 pb-9 overflow-hidden">
        <nuxt-img src="images/qr-code.svg" class="absolute top-0 ltr:right-0 rtl:left-0 xl:w-20 h-auto" alt="img"/>
        <div class="relative z-10">
          <p class="title-line text-black-800 before:ltr:left-0 font-semibold before:bg-black-800 xl:mt-">
            Software Development & Digitalisation
          </p>
          <p class="text-3xl md:text-2xl font-semibold py-8 leading-normal text-black-800 ltr:pr-32 ltr:xl:pr-0">
            We are an experienced digital agency of skilled Web Development
          </p>
          <div class="flex items-center justify-between max-w-[45%] xl:max-w-full">
            <p class="font-bold text-sm uppercase text-black-800">
              statement for Cta
            </p>
            <NuxtLink
                class="w-12 h-12 bg-black-900 flex items-center justify-center cursor-pointer group relative">
              <svg class="relative z-10" width="16" height="16" viewBox="0 0 16 16" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M15.4142 9.41421L9.41421 15.4142C8.63316 16.1953 7.36683 16.1953 6.58578 15.4142C5.80474 14.6332 5.80474 13.3668 6.58578 12.5858L9.17157 10H2C0.895432 10 0 9.10457 0 8C0 6.89543 0.895432 6 2 6H9.17157L6.58578 3.41421C5.80474 2.63317 5.80474 1.36684 6.58578 0.585787C7.36683 -0.195262 8.63316 -0.195262 9.41421 0.585786L15.4142 6.58579C15.7893 6.96086 16 7.46957 16 8C16 8.53043 15.7893 9.03914 15.4142 9.41421Z"
                    fill="white"/>
              </svg>
              <svg
                  class="absolute opacity-0 transition-all ease-in-out duration-300 group-hover:-translate-x-1 group-hover:opacity-100 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
                  width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M15.4142 9.41421L9.41421 15.4142C8.63316 16.1953 7.36683 16.1953 6.58578 15.4142C5.80474 14.6332 5.80474 13.3668 6.58578 12.5858L9.17157 10H2C0.895432 10 0 9.10457 0 8C0 6.89543 0.895432 6 2 6H9.17157L6.58578 3.41421C5.80474 2.63317 5.80474 1.36684 6.58578 0.585787C7.36683 -0.195262 8.63316 -0.195262 9.41421 0.585786L15.4142 6.58579C15.7893 6.96086 16 7.46957 16 8C16 8.53043 15.7893 9.03914 15.4142 9.41421Z"
                    fill="#FF6739"/>
              </svg>

            </NuxtLink>
          </div>
        </div>
        <div class="w-72 h-44 absolute bottom-0 ltr:right-0 rtl:left-0 sm:w-56">
          <nuxt-img src="images/sd1.svg"
               class="absolute -top-4 ltr:-right-1/2 rtl:left-1/2  h-auto max-w-[120%]" alt="img"/>
          <nuxt-img src="images/sd2.svg"
               class="absolute top-8 ltr:-right-1/4 rtl:left-0  h-auto max-w-[120%]" alt="img"/>
          <nuxt-img src="images/sd3.svg"
               class="absolute top-20 ltr:-right-0 rtl:left-0  h-auto max-w-[120%]" alt="img"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Services"
}
</script>

<style scoped>

</style>
