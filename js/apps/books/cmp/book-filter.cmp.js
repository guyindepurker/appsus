export default {
  template: `
    <section class="book-filter">
        <form @submit.prevent="emitFilter" class="book-controls container flex justify-center wrap">

          <input type="text" id="search" v-model="filterBy.byName" placeholder="Search Book">
          <label class="flex column wrap justify-center align-center">
            From Price:
            <input type="range" name="price" min="0" max="200" value="0" v-model.number="filterBy.fromPrice" > {{filterBy.fromPrice}}
          </label>
          <label class="flex column wrap justify-center align-center">
            To Price:
            <input type="range" max="200" name="price-to" value="Infinity" v-model.number="filterBy.toPrice" >{{txtToPrice}}
          </label>
          <button>Apply Changes</button>
          <button @click.stop="addBook" type="add-book">Add New book</button>
        </form>
</section>
    `,
  data() {
    return {
      filterBy: {
        byName: "",
        fromPrice: 0,
        toPrice: 1000
      },
    };
  },
  methods: {
    emitFilter() {
      this.$emit("filtered", JSON.parse(JSON.stringify(this.filterBy)));
    },
    addBook(){
      this.$router.push('book/add')
    }
  },
  computed: {
    txtToPrice() {
      if (this.filterBy.toPrice !== Infinity) {
        return this.filterBy.toPrice;
      } else {
        return 0;
      }
    },
  },
}


