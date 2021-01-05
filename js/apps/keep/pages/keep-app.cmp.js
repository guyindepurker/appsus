import addNote from "../cmps/add-note.cmp.js"
import notesGallery from "../cmps/notes-gallery.cmp.js"
import keepService from '../services/keep-service.js';
import { eventBus } from '../../../services/event-bus-service.js'


export default {
    name: 'keep-app',
    template: `
    <section class="keep">
        <add-note  @addNote="addNote" @updateNote="updateNote"/>
        <notes-gallery v-if="notes" :notes="notes"/>
    </section>

    `,
    data() {
        return {
            notes: null,
        }
    },
    methods: {
        addNote(note) {
            console.log('here');
            keepService.addNote(note)
                .then(() => eventBus.$emit("show-msg", { txt: 'Note is added!', type: 'alert-success' }));
        },

        editNote(ev) {
            console.log('id:', ev.target.id);
            let noteType = keepService.getNoteTypeById(ev.target.id)
            if (noteType === 'todoNote') {
                const todoIdx = ev.target.attributes.idxintodos.value;
                keepService.editNote(ev.target.id, ev.target.innerText, todoIdx)
            } else keepService.editNote(ev.target.id, ev.target.innerText)
        },
        updateNote(note) {
            keepService.updateNote(note)
                .then(() => eventBus.$emit("show-msg", { txt: 'Note is updated!', type: 'alert-success' }));

        }
    },
    created() {
        eventBus.$on('editNote', this.editNote)
        keepService.getNotes()
            .then(notes => {
                this.notes = notes;
            })

    },
    components: {
        addNote,
        notesGallery,
    },
}