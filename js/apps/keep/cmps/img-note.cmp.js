export default {
    name: 'img-note',
    props: ['note', 'editNote'],
    template: `
    <li v-if="editNote" class="note img-note">
        <div class="note-container">
            <img  :src="note.info.url" alt="img">
            <div class="txt" @blur="editNote" :id="note.id" contenteditable> {{note.info.txt}} </div>
            <slot></slot>
            <span class="far fa-image note-type"></span>
        </div>
    </li>
    `
}