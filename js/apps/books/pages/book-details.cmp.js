import longText from "../../../cmps/long-text.cmp.js";
import { bookService } from "../service/book-service.js";
import addReviews from '../cmp/add-reviews.cmp.js'
import showReviews from '../cmp/show-reviews.cmp.js'
export default {
  name:'book-details',
  template: `
    <section v-if="book" class="book-details"> 
      <section class="book-details-container flex space-around">
      <section class="book-content-container flex column wrap">
      <h3 class="mr-5"><span class="title-details">title:</span>{{book.title}}</h3>
      <h3><span class="title-details">subtitle:</span>{{book.subtitle}}</h3>
      <h4><span class="title-details">price:</span><span :class="priceClass">{{price}}</span></h4>
      <h4><span class="title-details">authors:</span>{{authors}}</h4>
      <h4><span class="title-details">catagories:</span>{{catagories}}</h4>
      <h4><span class="title-details">language:</span>{{book.language}}</h4>
      <h4><span class="title-details">pages:</span>{{pageCount}}</h4>
      <h4><span class="title-details">published:</span>{{published}}</h4>
      <long-text :txt="book.description"></long-text>
      </section>
      <img :src="imgUrl" class="img-book-details"/> 
      </section>
      <img v-if="isSale" src="assets/imgs/sale.png" class="sale-desc-img"> 
      <show-reviews  @reviews='loadBook' :reviews="book.reviews" :bookId="book.id"></show-reviews>
      <add-reviews  :book="book"> </add-reviews>
      <button @click="goBack" class="btn-close mr-5">Go Back</button>
      <div class="container flex space-between">
        <button @click="goPrevBook"><i class="fas fa-long-arrow-alt-left"></i>Previous Book</button>
        <button @click="goNextBook">Next Book <i class="fas fa-long-arrow-alt-right"></i></button>
      </div>
  </section>
    `,
  data() {
    return {
      book: null,
    }
  },
  methods: {
    goBack() {
      this.$router.push('/book')
    },
    loadBook() {
      const id = this.$route.params.bookId
      bookService.getBookById(id)
        .then(book => this.book = book)
    },
    goNextBook(){
      bookService.getNextBookById(this.book.id)
      .then(id=>this.$router.push(id))
      .catch(err=>console.log('err',err))
    },
    goPrevBook(){
      bookService.getPrevBookById(this.book.id)
      .then(id=>this.$router.push(id))
      .catch(err=>console.log('err',err))
    }
  },
  computed: {
    imgUrl() {
      return this.book.thumbnail;
    },
    price() {
      const currency = this.book.listPrice.currencyCode;
      console.log(currency);
      var txtCurrency = "";
      switch (currency) {
        case "ILS":
          txtCurrency = "₪";
          break;
        case "EUR":
          txtCurrency = "€";
          break;
        case "USD":
          txtCurrency = "$";
          break;
      }
      return this.book.listPrice.amount + " " + txtCurrency;
    },
    authors() {
      return this.book.authors.join("");
    },
    catagories() {
      return this.book.categories.join(",");
    },
    pageCount() {
      const pageCount = this.book.pageCount;
      let txt = "";
      if (pageCount >= 500) {
        txt = "Long reading";
      } else if (pageCount >= 200) {
        txt = "Decent reading";
      } else {
        txt = "light reading";
      }
      return pageCount + " - " + txt;
    },
    published() {
      const currYear = new Date().getFullYear();
      const published = this.book.publishedDate;
      const res = currYear - published;
      let txt = "";
      if (res === 1) {
        txt = "New!";
      } else {
        txt = "Veteran Book";
      }
      return published + " - " + txt;
    },
    isSale() {
      const sale = this.book.listPrice.isOnSale;
      return sale;
    },
    priceClass() {
      const priceBook = this.book.listPrice.amount;
      return { red: priceBook > 150, green: priceBook < 120 };
    },
  },
  created() {
    this.loadBook();
  },
  watch: {
    '$route.params.bookId'() {
      this.loadBook();
    }
  },
  components: {
    longText,
    addReviews,
    showReviews,
  }
};


