import keepService from '../services/keep-service.js'
import colorsMenu from './colors-menu.cmp.js'
import { eventBus } from '../../../services/event-bus-service.js'


export default {
    name: 'note-control',
    props: ['note', 'isShowen'],
    template: `
    <transition name="fade">
        <section v-show="isShowen" class="note-controls">
            <colors-menu v-if="showColorsMenu" @setBgc="setBgc"></colors-menu>
            <button @click="deleteNote"><i class="fas fa-trash"></i></button>
            <button @click="togglePinned"> <i class="fas fa-thumbtack"></i></button> 
            <button @click="toggleColorsMenu"><i class="fas fa-palette"></i></button> 
            <button @click="copyNote"> <i class="fas fa-clone"></i></button> 
            <button v-if="showEditBtn" @click="editNote"> <i class="fas fa-edit"></i></button>  
            <button @click="sendToMail"><i class="fas fa-at"></i></button> 
        </section>
    </transition>
    `,
    data() {
        return {
            showColorsMenu: false
        }
    },
    computed: {
        showEditBtn() {
            if (this.note.type === 'imgNote' || this.note.type === 'videoNote') return true;
            else return false;
        }
    },
    methods: {
        deleteNote() {
            console.log(this.note.id);
            keepService.deleteNote(this.note.id);
            eventBus.$emit("show-msg", { txt: 'Your note is deleted!', type: 'alert-danger' })
        },
        togglePinned() {
            keepService.updateNoteProp(this.note.id, 'isPinned', !this.note.isPinned);
            if (this.note.isPinned) eventBus.$emit("show-msg", { txt: 'Note pined!', type: 'alert-success' });
            else eventBus.$emit("show-msg", { txt: 'Note unPined', type: 'alert-danger' });
        },
        toggleColorsMenu() {
            return this.showColorsMenu = !this.showColorsMenu;
        },
        setBgc(color) {
            keepService.updateNoteProp(this.note.id, 'bgc', color);
        },
        copyNote() {
            keepService.cloneNote(this.note);
            eventBus.$emit("show-msg", { txt: 'Note copied!', type: 'alert-success' });
        },
        editNote() {
            console.log('before bus');
            eventBus.$emit('editInsideNote', this.note);
        },
        sendToMail() {
            this.$router.push(`/email/compose/${this.note.id}`);
        },
    },
    components: {
        colorsMenu
    }
}