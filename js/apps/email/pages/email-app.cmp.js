import { emailService } from "../../email/service/email-service.js";
import emailList from "../../email/cmps/email-list.cmp.js";
import filterEmail from "../cmps/email-filter.cmp.js";
import emailNav from "../cmps/email-nav.cmp.js"
import emailCompose from "../cmps/email-compose.cmp.js"
import { eventBus } from '../../../services/event-bus-service.js'
import keepService from '../../../apps/keep/services/keep-service.js'


export default {
  name: "email-app",
  template: `
        <section class="email-app mt-5">
        <filter-email @filtered="setFilter"></filter-email>
        <div class="flex justify-center">
        <i @click="toggleNavBar" class="btn-hamburger nav-hm fas fa-bars"></i>
        <email-nav  @toggleNavBar="toggleNavBar" @open-compose='isComposeOpen = true' :class="navClass"></email-nav>
        <router-view @mailRemove="loadMailsAfterRemove" :mails="emailsToshow"></router-view>
        <email-compose :mail="currentMail" v-if="isComposeOpen" @close-compose="isComposeOpen = false"></email-compose>
        </div>  
      </section>
    `,
  data() {
    return {
      mails: null,
      filterBy: null,
      mailsCategory: this.$route.params.mailsCategory,
      isComposeOpen: false,
      currentMail: null,
      isNavShow:null,
    };
  },
  methods: {
    checkWindowWidth(){
     this.isNavShow = (window.innerWidth >800) ? true : false;
     
    },
    toggleNavBar(){
      this.isNavShow = !this.isNavShow
  },
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
    filterByName(name) {
      if (!name) return;
      return this.mails.filter(
        (mail) =>
          mail.body.toLowerCase().includes(name.toLowerCase()) ||
          mail.sender.toLowerCase().includes(name.toLowerCase()) ||
          mail.subject.toLowerCase().includes(name.toLowerCase())
      );
    },
    loadMailsAfterRemove() {
      console.log('im here !');
      const mails = this.mails;
      const mailsAfterRemove = mails.filter(mail => !mail.isRemoved)
      this.mails = mailsAfterRemove;
    },
    setCurrentMail(mail) {
      this.currentMail = mail
      this.isComposeOpen = true;
    },
    convertEmbeddedNote(note) {
      const noteURL = (note.info.url) ? note.info.url : ''
      return {
        subject: '',
        senderMail: '',
        body: note.info.txt + ' ' + noteURL
      }
    },
    convertTodoNote(note) {
      let body = note.info.todos.map((todo, idx) => {
        return `${idx}. ${todo.txt}\n`
      }).join('');
      return {
        subject: '',
        senderMail: '',
        body
      }
    }
  },
  computed: {
    emailsToshow() {
      if (!this.filterBy) return this.mails;
      const { byName, byStatus } = this.filterBy;
      if (byStatus === "all") {
        if (byName) return this.filterByName(byName);
        else return this.mails.filter((mail) => mail);
      }
      if (byStatus === "read") {
        if (byName) return this.filterByName(byName);
        else return this.mails.filter((mail) => mail.isRead);
      }
      if (byStatus === "unread") {
        if (byName) return this.filterByName(byName);
        else return this.mails.filter((mail) => !mail.isRead);
      }
    },
    navClass(){
      if(this.isNavShow){
        return 'open-nav'
      } else{
        return 'hide-nav'
      }
      
    }
  },
  created() {
    this.checkWindowWidth()
    const noteId = this.$route.params.noteId
    if (this.mailsCategory) {
      emailService.getMails(this.mailsCategory).then((mails) => {
        this.mails = mails;
      });
    }
    if (noteId) {
      keepService.getNoteById(noteId)
        .then(currNote => {
          if (currNote.type === 'todoNote') {
            const mailedNote = this.convertTodoNote(currNote)
            this.setCurrentMail(mailedNote);
          } else {
            const mailedNote = this.convertEmbeddedNote(currNote)
            this.setCurrentMail(mailedNote);
          }
        })
    }
    eventBus.$on('editDraft', this.setCurrentMail)
  }, watch: {
    '$route.params.mailsCategory'() {
      this.mailsCategory = this.$route.params.mailsCategory
      emailService.getMails(this.mailsCategory).then((mails) => {
        this.mails = mails;
      })
    },
  },
  components: {
    emailService,
    emailList,
    filterEmail,
    emailNav,
    emailCompose,
  },
};
