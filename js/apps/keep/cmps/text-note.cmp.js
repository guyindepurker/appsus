export default {
    name: 'text-note',
    props: ['note', 'editNote'],
    template: `

  <li v-if="editNote" class="note text-note">
  <div class="note-container">
  <h3 class="txt" @blur="editNote" :id="note.id" contenteditable> {{note.info.txt}} </h3>
      <slot></slot>
      <span class="fas fa-font note-type"></span>
    </div>
    </li>
    `,
}