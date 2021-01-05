import notePreview from './note-preview.cmp.js'
import { eventBus } from '../../../services/event-bus-service.js';

export default {
    props: ['notes'],
    template: `
    <section v-if="notes.length" class="notes-list-container">
        <ul class="notes-list clean-list ">
            <note-preview 
                v-for="note in notes"
                :key="note.id"  
                :note="note"
                :editNote="editNote">
            </note-preview>
        </ul>        

    </section>`,
    methods: {
        editNote(data) {
            eventBus.$emit('editNote', data)
        }
    },
    components: {
        notePreview
    },
}