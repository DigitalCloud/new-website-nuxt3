<template>
  <div class="container-content sm:w-full sm:max-w-full">
    <div class="w-11/12 2xl:w-full mx-auto">
      <div class="rounded-xl overflow-hidden sm:rounded-none">
        <video id="player" ref="player" playsinline controls :poster="poster" crossorigin="">
          <source
              :src="url"
              type="video/mp4"
          />
        </video>
      </div>
    </div>
  </div>
</template>

<script>
import {onMounted} from "vue";

export default {
  props: {
    url: String,
    poster: String
  },
  setup() {
    onMounted(async () => {
      const Plyr = await import("plyr");
      const newPlayer = new Plyr.default("#player");
    })
  }
}
</script>

<style lang="scss">
:root {
  --plyr-color-main: #0D3535;
}

.plyr__control--overlaid {
  background-color: #0D3535;
}

.plyr__control svg {
  width: 25px;
  height: 25px;
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
}

.plyr__control--overlaid {
  padding: calc(var(--plyr-control-spacing, 20px) * 1.5);
  @media (max-width: 768px) {
    padding: calc(var(--plyr-control-spacing, 7px) * 2.5);
  }
}
</style>
