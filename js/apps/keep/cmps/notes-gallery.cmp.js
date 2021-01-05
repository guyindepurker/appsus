import filterNotes from './filter-notes.cmp.js'
import notesList from './notes-list.cmp.js'

export default {
    name: 'notes-gallery',
    props: ['notes'],
    template: `
    <section class="notes-gallery">
        <filter-notes @setFilter="setFilter"/>  
        <h3 class="list-title"> Pinned notes</h3>
        <notes-list  :notes="pinnedNotes"/> 
        <h3 class="list-title"> Other notes</h3>
        <notes-list  :notes="unPinnedNotes"/>
    </section>
    `,

    data() {
        return {
            filterBy: null,
        };
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy;

        },

    },
    computed: {
        pinnedNotes() {
            return this.filteredNotes.filter(note => {
                if (note.isPinned) return note;
            })

        },
        unPinnedNotes() {
            return this.filteredNotes.filter(note => {
                if (!note.isPinned) return note;
            })
        },
        filteredNotes() {
            let notes = this.notes;
            if (!this.filterBy || (!this.filterBy.type && !this.filterBy.searchTerm)) return this.notes;
            if (this.filterBy.type) {
                notes = this.notes.filter(note => {
                    return note.type === this.filterBy.type
                })
            }
            if (this.filterBy.searchTerm) {
                notes = notes.filter(note => {
                    if (note.type === 'todoNote') {
                        var includes = note.info.todos.some(todo => todo.txt.toLowerCase().includes(this.filterBy.searchTerm.toLowerCase()))
                        if (includes) return note;
                    } else return note.info.txt.toLowerCase().includes(this.filterBy.searchTerm.toLowerCase())
                })
            }
            return notes;
        }

    },
    components: {
        filterNotes,
        notesList
    }
}