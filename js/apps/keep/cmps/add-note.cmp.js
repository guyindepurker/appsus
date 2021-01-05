import { eventBus } from "../../../services/event-bus-service.js"

export default {
    name: 'add-note',
    template: `
    <section class= "add-note flex justify-center">
        <form class="add-note-container"  @keydown.enter.prevent="addNote">
            <input v-model="currNote.info.txt" type="text" :placeholder="getPlaceHolder">
                <input class="url-input" v-if="showSecondInput" v-model="currNote.info.url" type="text" placeholder="Enter url...">
            <div class="add-note-btns">
                <button @click.prevent="handleNoteType('textNote')"><i :class="markText" class="fas fa-font fa-icon"></i></button>
                <button @click.prevent="handleNoteType('todoNote')"><i :class="markTodo" class="fas fa-th-list fa-icon"></i></button>
                <button @click.prevent="handleNoteType('imgNote')"><i :class="markImg" class="far fa-image fa-icon"></i></button> 
                <button @click.prevent="handleNoteType('videoNote')"><i :class="markVideo" class="fab fa-youtube fa-icon"></i></button>
            </div>
        </form>  
    </section>
    `,
    data() {
        return {
            isEditing: false,
            currNote: {
                type: 'textNote',
                isPinned: false,
                info: { txt: '', url: '' }
            },
            placeHolders: {
                'textNote': `What's on your mind...`,
                'imgNote': `Enter img title...`,
                'todoNote': 'Enter comma separted list...',
                'videoNote': 'Enter video title...'
            }
        }
    },
    computed: {
        getPlaceHolder() {
            return this.placeHolders[this.currNote.type];
        },
        showSecondInput() {
            let type = this.currNote.type;
            if (type !== 'textNote' && type !== 'todoNote') return true;
            else return false;
        },
        markText() {
            if (this.currNote.type === 'textNote') return 'focus'
        },
        markImg() {
            if (this.currNote.type === 'imgNote') return 'focus'
        },
        markVideo() {
            if (this.currNote.type === 'videoNote') return 'focus'
        },
        markTodo() {
            if (this.currNote.type === 'todoNote') return 'focus'
        }
    },
    methods: {
        addNote() {
            let evType = this.isEditing ? 'updateNote' : 'addNote'
            this.$emit(evType, this.currNote)
            this.currNote = {
                type: 'textNote',
                isPinned: false,
                info: { txt: '', url: '' }
            }
            this.isEditing = false;
        },
        handleNoteType(type) {
            this.currNote.type = type;
        },
        editNote(note) {
            console.log('in editNote');
            this.isEditing = true;
            this.currNote = note;
        }
    },
    created() {
        eventBus.$on('editInsideNote', this.editNote)
    }
}