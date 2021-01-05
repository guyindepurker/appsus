export default {
  props: ["book"],
  template: `
   <router-link :to="'/book/' +book.id " exact>
    <li class="book-preview">
        <img :src="imgUrl" class="img-prev"/>
        <h3 class="prev-book-title">{{book.title}}</h3>
        <h4 class="prev-book-price">{{price}}</h4>
  </li>
  </router-link>
    `,
  computed: {
    price() {
      const currency = this.book.listPrice.currencyCode;
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
      return this.book.listPrice.amount + "" + txtCurrency;
    },
    imgUrl() {
      return this.book.thumbnail;
    },
  },
};


