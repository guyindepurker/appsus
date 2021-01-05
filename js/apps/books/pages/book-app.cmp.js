import { bookService } from "../service/book-service.js";
import bookFilter from "../cmp/book-filter.cmp.js";
import bookList from "../cmp/book-list.cmp.js";
export default  {
  template: `
    <section class="book-app">
        <book-filter  @filtered="setFilter"></book-filter>
        <book-list :books="booksToShow" :title="title"></book-list>
    </section>
    `,
  data() {
    return {
      filterBy: null,
      books: null,
      title:'Our library'
  
    };
  },
  methods: {
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
  },
  computed: {
    booksToShow() {
      if (!this.filterBy) return this.books;
      const { byName, fromPrice, toPrice } = this.filterBy
      return this.books.filter(
        (book) =>
          book.title.toLowerCase().includes(byName.toLowerCase()) &&
          book.listPrice.amount >= fromPrice &&
          book.listPrice.amount <= toPrice
      );
    },
  },
  created(){
    bookService.getBooks()
      .then(books => this.books = books)
  },
  components:{
    bookFilter,
    bookList,
  
  }
};


