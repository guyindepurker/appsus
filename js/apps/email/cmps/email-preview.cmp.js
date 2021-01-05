import { emailService } from '../../email/service/email-service.js';
import longText from '../../../cmps/long-text.cmp.js';
import { eventBus } from '../../../services/event-bus-service.js'
export default {
    props: ['mail'],
    template: `
        <section @click="mailClicked" class="email-preview flex" :class="sectionState">
            <section v-if="isSelected" class="email-buttons">
            <i @click.prevent.stop="onRemoveMail(mail.id)" class="fas fa-trash ml-5"></i>
            </section>
            <input @click.stop type="checkbox" v-model="isSelected"/>
            <i @click.prevent.stop="onStarClicked" class="star fas fa-star mr-5 ml-5 " :class="starClass"></i>
           <div class="email-sender" :class="readState">{{mail.sender}}</div>
           <div class="email-subject" :class="readState">{{mail.subject}} - </div>
           <div class="email-body">{{textToShow}}</div>
           <div class="email-date" :class="readState">{{dateToShow}}</div>
        </section>
    `,
    data() {
        return {
            isSelected: false,
            isStarred: false,
            mailsCategory: this.$route.params.mailsCategory
        }
    },
    methods: {
        onRemoveMail(mailId) {
            emailService.removeMail(mailId).then(() => {
                eventBus.$emit("show-msg", { txt: 'Your Message moved to trash!', type: 'alert-danger' })
                this.$emit('mailRemove')
            });
        },
        onStarClicked() {
            if (!this.mail.isStarred) {
                emailService.toggleMailStar(this.mail.id).then(() => eventBus.$emit("show-msg", { txt: `You have marked your message as star succesfuly!`, type: 'alert-success' }));
            } else {
                emailService.toggleMailStar(this.mail.id).then(() => eventBus.$emit("show-msg", { txt: `You have unmarked your message as star succesfuly!`, type: 'alert-success' }));
            }
        },
        mailClicked() {
            if (!this.mail.isDraft) {
                this.$router.push(`/email/${this.mailsCategory}/${this.mail.id}`)
            } else {
                eventBus.$emit('editDraft', this.mail)
            }
        },
    },
    computed: {
        starClass() {
            return { starred: (this.mail.isStarred) }
        },
        readState() {
            return { unreadedmail: (!this.mail.isRead) }
        },
        sectionState() {
            return { 'section-readed': (this.mail.isRead), 'section-marked': this.isSelected }
        },
        textToShow() {
            return this.mail.body.substring(0, 50) + '....'
        },
        dateToShow() {
            const currentDate = Date.now()
            const dayAgo = currentDate - (3600000 * 24)
            return (this.mail.sentAt <= dayAgo) ? new Date(this.mail.sentAt).toISOString().substr(0, 10) : new Date(this.mail.sentAt).toLocaleTimeString().substring(0, 5)
        },
    },

    components: {
        longText,
    }
}
