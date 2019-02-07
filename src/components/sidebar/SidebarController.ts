import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import ActionButton from '../ActionButton.vue';
import {EventBus} from '../EventBus';
import {EVENTS} from '../Constants';
// @ts-ignore
import {disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks} from 'body-scroll-lock';
import $ from 'jquery';

@Component({
  components: {
    ActionButton
  },
})
export default class SidebarController extends Vue {

  @Prop() config!: any;
  @Prop() isOpen: boolean = false;
  @Prop() card!: any;

  public hasVideo!: boolean;
  public sideBarWidth: number = 0;
  public videoHeight: number = 300;
  public videoVisible: boolean = false;
  public imageLoaded: boolean = false;
  public cachedProduct: any = {};

  mounted(): void {
    //@ts-ignore
    this.sideBarWidth = $('.sidebar').width();
    this.videoHeight = this.sideBarWidth * (9 / 16);
  }

  public showVideo(): void {
    this.videoVisible = !this.videoVisible;
  }

  private openSidebar(_event: any): void {
    this.imageLoaded = this.card.id === this.cachedProduct.id;
  }

  private closeSidebar(_event: any): void {
    this.videoVisible = false;
    EventBus.$emit('button-clicked', {buttonAction: 'close-sidebar'});
  }

  private imgLoaded(_any: any): void {
    this.imageLoaded = true;
  }

  @Watch('isOpen') onOpen(_newValue, _oldValue) {
    if (_newValue) {
      this.imageLoaded = false;
      this.imageLoaded = this.card.id === this.cachedProduct.id;
    }
    if (_oldValue) {
      this.cachedProduct = this.card;
    }
  }

  get currentVideoId(): string {
    return this.$store.getters.videoId;
  }
}
