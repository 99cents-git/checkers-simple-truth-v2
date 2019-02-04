import {Component, Prop, Vue} from 'vue-property-decorator';
import ActionButton from '../ActionButton.vue';
import {EventBus} from '../EventBus';
import {EVENTS} from '../Constants';
// @ts-ignore
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import $ from 'jquery';

@Component({
  components: {
    ActionButton
  },
})
export default class SidebarController extends Vue {

  @Prop() config!:any;

  public hasVideo!: boolean;
  public isOpen: boolean = false;
  public sideBarWidth: number = 0;
  public videoHeight: number = 300;
  public videoVisible: boolean = false;
  public imageLoaded: boolean = false;
  public cachedProduct: any = {};

  mounted(): void {
    //@ts-ignore
    this.sideBarWidth = $('.sidebar').width();
    this.videoHeight = this.sideBarWidth * (9 / 16);
    EventBus.$on(EVENTS.UIEVENTS.SIDEBAR_SHOW, this.openSidebar);
    EventBus.$on(EVENTS.UIEVENTS.SIDEBAR_HIDE, this.closeSidebar);
    EventBus.$on(EVENTS.UIEVENTS.SIDEBAR_TOGGLE, (_emitterEvent: any) => {
      this.isOpen ? this.closeSidebar(_emitterEvent) : this.openSidebar(_emitterEvent)
    });
    
  }

  public showVideo(): void {
    this.videoVisible = !this.videoVisible;
  }

  private openSidebar(_event: any): void {
    this.imageLoaded = this.currentSidebarItem.id === this.cachedProduct.id;
    this.isOpen = true;
    document.body.classList.add('no-scroll')
  }

  private closeSidebar(_event: any): void {
    this.isOpen = false;
    this.videoVisible = false;
    this.cachedProduct = this.currentSidebarItem;
    window.setTimeout(() => {
      document.body.classList.remove('no-scroll')
    }, 500);
  }

  private imgLoaded(_any:any):void {
    this.imageLoaded = true;
  }

  get currentSidebarItem(): any {
    return this.$store.getters.sideDrawerCard;
  }

  get currentVideoId(): string {
    return this.$store.getters.videoId;
  }
}
