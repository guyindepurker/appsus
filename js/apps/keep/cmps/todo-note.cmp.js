export default {
    name: 'todo-note',
    props: ['note', 'editNote'],
    template: ` 
    <li v-if="editNote" class="note todo-note">
        <div class="note-container">
            <ul class="todo-list clean-list">
                <li :class="{'todo':true, 'done': todo.isDone}" v-for="(todo,idx) in note.info.todos" :idxInTodos="idx" @blur="editNote" :id="note.id" contenteditable  :key="todo.id">
                    {{todo.txt}}
                    <input type="checkbox" v-model="todo.isDone">
                </li>
            </ul>
            <slot></slot>
            <span class="fas fa-list note-type"></span> 
        </div>
    </li>
    `,
}