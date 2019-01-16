<template>
  <div id="checkers-header" class="d-flex justify-content-between align-items-center px-4 py-2">
    <a href="https://www.checkers.co.za" target="_blank"><div class="checkers-header-logo"><img src="@/assets/checkers-logo.svg" class="img-fluid" alt="Checkers Home"></div></a>
    <div class="checkers-header-share d-flex">
      <a href="https://www.facebook.com/checkerssa" target="_blank"><div class="logo"><img src="@/assets/facebook.svg" class="img-fluid ml-1" alt="Facebook"></div></a>
      <a href="https://twitter.com/CheckersSA" target="_blank"><div class="logo"><img src="@/assets/twitter.svg" class="img-fluid ml-1 " alt="Twitter"></div></a>
      <a href="https://www.instagram.com/checkers_sa/?hl=en" target="_blank"><div class="logo"><img src="@/assets/instagram.svg" class="img-fluid ml-1 " alt="Instagram"></div></a>
      <a href="https://www.youtube.com/channel/UCAeS8K20Nf4PERaI51EdVnw" target="_blank"><div class="logo"><img src="@/assets/youtube.svg" class="img-fluid ml-1 " alt="YouTube"></div></a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CheckersHeader extends Vue {
  @Prop() private msg!: string;
}
</script>
<style scoped lang="less">
  @import '../css/variables';
  a {
    border-bottom: none !important;
    text-decoration: none !important;
    margin-left: 0.5rem;
    transform: scale(1);
    transition: transform @anim-speed;

    &:hover {
      transform: scale(1.3);
      transition: transform @anim-speed;
    }
  }
</style>
