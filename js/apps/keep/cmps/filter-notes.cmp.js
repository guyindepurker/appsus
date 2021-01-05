export default {
    name: 'filter-notes',
    template: `
    <section class="filter-notes">
        <input type="search" placeholder="Search notes..." v-model="filterBy.searchTerm" @input="setFilter"/>
        <select @change="setFilter"  v-model="filterBy.type">
                <option value=""> Show all </option>
                <option value="textNote"> Text </option>
                <option value="imgNote"> Images </option>
                <option value="todoNote"> Todos </option>
                <option value="videoNote"> Video </option>
            </select>
    </section>     
    `,
    data() {
        return {
            filterBy: { searchTerm: '', type: '' }
        }
    },
    methods: {
        setFilter() {
            this.$emit('setFilter', this.filterBy)
        }
    },
}