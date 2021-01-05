import emailPreview from './email-preview.cmp.js'
export default {
    name: 'email-list',
    props: ['mails'],
    template: `
    <section class="email-list flex column">
        <ul class="clean-list">
        <li v-for="currMail in mails" :key="currMail.id" >
           <email-preview @mailRemove="load" :mail="currMail"/>
        </li>
    </ul>
    </section>`,
    data() {
        return {
        }
    },
    methods: {
        load() {
            this.$emit('mailRemove')
        },
    },
    components: {
        emailPreview,
    },

}
