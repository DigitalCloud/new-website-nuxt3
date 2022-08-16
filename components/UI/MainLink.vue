<template>
  <nuxt-link :to="link" class="flex items-center text-lg font-semibold px-4 circle-link justify-start md:justify-center"
             :class="['before:bg-'+ beforeColorHandler ,{'white-link': textColor === 'white'}]">
    <template v-if="textColor === 'white'">
      <svg class="relative z-[2]" width="10" height="11" viewBox="0 0 10 11" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path
            d="M9.63388 6.38388L5.88388 10.1339C5.39573 10.622 4.60427 10.622 4.11612 10.1339C3.62796 9.64573 3.62796 8.85427 4.11612 8.36612L5.73223 6.75H1.25C0.559645 6.75 0 6.19036 0 5.5C0 4.80964 0.559645 4.25 1.25 4.25H5.73223L4.11612 2.63388C3.62796 2.14573 3.62796 1.35427 4.11612 0.866117C4.60427 0.377961 5.39573 0.377961 5.88388 0.866116L9.63388 4.61612C9.8683 4.85054 10 5.16848 10 5.5C10 5.83152 9.8683 6.14946 9.63388 6.38388Z"
            fill="white"/>
      </svg>
    </template>
    <template v-else>
      <svg class="relative z-[2]" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M9.63388 6.38388L5.88388 10.1339C5.39573 10.622 4.60427 10.622 4.11612 10.1339C3.62796 9.64573 3.62796 8.85427 4.11612 8.36612L5.73223 6.75H1.25C0.559645 6.75 0 6.19036 0 5.5C0 4.80964 0.559645 4.25 1.25 4.25H5.73223L4.11612 2.63388C3.62796 2.14573 3.62796 1.35427 4.11612 0.866117C4.60427 0.377961 5.39573 0.377961 5.88388 0.866116L9.63388 4.61612C9.8683 4.85054 10 5.16848 10 5.5C10 5.83152 9.8683 6.14946 9.63388 6.38388Z"
            fill="#1E2532"></path>
      </svg>
    </template>

    <span class="text-lg font-semibold tracking-[1px] ltr:pl-2 whitespace-nowrap lg:text-base">{{ text }}</span>
  </nuxt-link>
</template>

<script>
export default {
  name: "MainLink",
  props: {
    beforeColor: {
      type: String,
      default: 'orange'
    },
    link: {
      type: String,
      default: '/'
    },
    text: {
      type: String,
      default: 'Become a Client'
    },
    textColor: {
      type: String,
      default: 'white'
    }
  },
  computed: {
    beforeColorHandler() {
      if (this.beforeColor === 'orange') {
        return 'orange-700'
      }  else if (this.beforeColor === 'white') {
        return 'white-900'
      }
    }
  }

}
</script>

<style scoped>

</style>
