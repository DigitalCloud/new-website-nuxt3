<template>
  <div class="flex -mx-5 md:mx-0 md:flex-wrap">
    <div class="w-[60%] lg:w-1/2 px-5 md:px-0 md:w-full">
      <h2 class="font-bold text-3xl mt-2 md:mt-0 max-w-[550px] lg:text-2xl">
        {{ partner?.dec?.[$i18n.locale] }}
      </h2>
      <div class="mt-5 flex items-center">
        <img
          :src="partner?.user_img"
          class="w-16 h-16 rounded-full"
          alt="user image"
        />
        <div class="ml-4">
          <h3 class="font-bold text-xl font-bold">{{ partner?.name }}</h3>
          <p class="text-base text-[#6F6F73] font-medium">
            {{ partner?.position }}
          </p>
        </div>
      </div>
    </div>
    <div class="w-[40%] lg:w-1/2 px-5 md:px-0 md:w-full md:mt-5">
      <div class="bg-[#F0F0F0] rounded-3xl p-10 flex justify-center">
        <img
          :src="partner?.main_img"
          class="max-h-[500px] object-cover"
          alt="img"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PartnerCard",
  props: {
    partner: {
      type: Object,
      required: true,
      default: null,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
