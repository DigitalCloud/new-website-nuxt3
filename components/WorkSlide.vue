<template>
  <div class="work-slide relative">
    <nuxt-img :src="img" class="h-[600px] w-auto xl:h-[500px] rounded-xl md:h-[450px]" alt="img"/>
    <div class="work-slide-content absolute left-0 right-0 bottom-0 p-8">
      <span
          v-if="newProject"
          class="bg-orange-700 text-white-900 border-solid border-white-900 border-2 p-font px-3 py-2 rounded-full absolute -top-[40px] font-bold transform -rotate-12 text-md xl:text-sm">
        New Project
      </span>
        <p>
          <span class="text-xl font-semibold text-white-900 p-font xl:text-lg">{{ year }}</span>
        </p>
        <h2 class="text-5xl font-semibold text-white-900 text-ellipsis overflow-hidden whitespace-nowrap xl:text-3xl">
          {{ title }}
        </h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: false
    },
    year: {
      type: String,
      required: false
    },
    newProject: {
      type: Boolean,
      required: true
    }
  },
  name: "WorkSlide"
}
</script>

<style scoped>

</style>
