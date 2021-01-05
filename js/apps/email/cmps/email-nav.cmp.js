import { utilService } from "../../../services/util.service.js";

export default {
  name: "nav-bar-email",
  template: `
 
    <section class="nav-bar-email">
    
    <div  class="container-controls-nav flex column wrap">
    <div @click="openCompose" class="compose-container mb-5 flex column  align-center"><span class="title-compose">Compose</span><img class="compos-icon ml-5" src="assets/imgs/compose.png"></div>
            <router-link  class="link-nav" @click="handleLinkClick" to="/email/inbox" exact><i class="nav-icon-header fas fa-inbox"></i><span class="ml-5">Inbox</span></router-link>
            <router-link  class="link-nav" @click="handleLinkClick" to="/email/all" exact><i class="nav-icon-header fas fa-envelope"></i><span class="ml-5">All Mails</span></router-link>
            <router-link  class="link-nav" @click="handleLinkClick" to="/email/starred" exact><i class="nav-icon-header fas fa-star"></i> <span class="ml-5">Starred</span></router-link>
            <router-link  class="link-nav" @click="handleLinkClick" to="/email/sent" exact><i class="nav-icon-header fas fa-share"></i> <span class="ml-5">Sent</span></router-link>
            <router-link  class="link-nav" @click="handleLinkClick" to="/email/trash" exact><i class="nav-icon-header fas fa-trash"></i> <span class="ml-5">Trash</span></router-link>
            <router-link  class="link-nav" @click="handleLinkClick" to="/email/drafts" exact><i class="nav-icon-header fas fa-file"></i> <span class="ml-5">Drafts</span></router-link>
    </div>
    </section>
    `,
  data() {
    return {
      isMobile: null,
    };
  },
  created() {
    this.isMobile = (window.innerWidth <800) ? true : false;

  },
  methods: {
    openCompose() {
      this.$emit("open-compose");
    },
    handleLinkClick() {
      if (this.isMobile) {
       this.$emit('toggleNavBar')
      }
    },
  },
};
