import noteControls from './note-controls.cmp.js';
import textNote from './text-note.cmp.js'
import imgNote from './img-note.cmp.js'
import todoNote from './todo-note.cmp.js';
import videoNote from './video-note.cmp.js';

export default {
    name: 'note-preview',
    props: ['note', 'editNote'],
    template: `
    <section class="note-preview"  @mouseenter="isHovering = true" @mouseleave="isHovering = false">
        <component  
        :is="note.type"
        :style="{backgroundColor:note.bgc}"
        :key="note.id" 
        :note="note"
        :editNote="editNote">
        <note-controls :note="note" :isShowen="isHovering"></note-controls>
        </component>
    </section>
    `,
    data() {
        return {
            isHovering: false
        }
    },
    components: {
        noteControls,
        textNote,
        imgNote,
        todoNote,
        videoNote,
    }
}