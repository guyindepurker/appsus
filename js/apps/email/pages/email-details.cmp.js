import { emailService } from '../service/email-service.js'
import { eventBus } from '../../../services/event-bus-service.js'
import emailNav from "../cmps/email-nav.cmp.js"



export default {
  name: "email-details",
  template: `
  <section class="main-container">
  <!-- <email-nav></email-nav> -->
  <!-- <h2>DETAILS -->
  </h2>
    <section v-if="mail" class="mail-details flex column wrap align-center ">
    <div class="flex row mt-5">
    <i @click="$router.go(-1)" class="btn-details fas fa-arrow-left mr-5"></i>
    <i @click="$router.go(-1)" class="btn-details fas fa-envelope mr-5"></i>
    <i @click="removeMail(mail.id)" class="btn-details fas fa-trash-alt mr-5"></i>
      </div>
    <div class="massage mt-5">
    <h3 class="mb-5">{{mail.subject}}</h3>
    <h4><strong class="mr-5 mt">{{mail.sender}}</strong><span class="mail-address">{{mailAdress}}</span></h4>
    <p class="mail-body mt-5">{{mail.body}}</p>
    </div>
    </section>
</section>
    `,
  data() {
    return {
      mail: null,
    };
  },
  methods: {
    loadMail() {
      const id = this.$route.params.mailId;
      emailService.getMailById(id).then(mail => {
        this.mail = mail;
        this.mail.isRead = true;
        console.log(this.mail)
      });
    },
    removeMail(id) {
      emailService.removeMail(id).then(() => {
        this.$router.go(-1)
        eventBus.$emit("show-msg", { txt: 'Your Message moved to trash!', type: 'alert-danger' })
      })

    }
  },
  computed: {
    mailAdress() {
      const mail = this.mail.senderMail.toLowerCase()
      return `<${mail}>`
    }
  },
  created() {
    this.loadMail();
  },
  components: {
    emailNav
  }
};
