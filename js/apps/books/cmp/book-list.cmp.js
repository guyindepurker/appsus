import bookPreview from "./book-preview.cmp.js";

export default {
  props: ["books",'title'],
  template: `
    <section class="book-list">
        <div class="container flex justify-center mr-5 wrap">
          <h2 class="title-book-list">{{title}}</h2>
          <ul class="list-books-container flex space-around align-center mr-5 wrap">
         <book-preview v-for="currBook in books" class="mr-5" :key="currBook.id" :book="currBook" ></book-preview>
        </ul>
      </div>
  </section>
    `,
  components:{
    bookPreview,
  }
}


