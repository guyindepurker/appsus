import { bookService } from "../service/book-service.js";
import { eventBus } from "../../../services/event-bus-service.js";

export default {
  props: ["reviews","bookId"],
  template: `
    <section v-if="reviews[0] !== undefined " class="show-reviews mr-5">
        <h2>Reviews</h2>
      <div class="flex wrap mr-5 justify-center align-center">
      <div class="rates-container" v-for="review in reviews" :key="review.id">
      <h4><strong>Name:</strong>{{review.fullName}}</h4>
      <h4><strong>rates:</strong>{{reviewsStar.repeat(review.rates)}}</h4>
      <h4><strong>readAt:</strong>{{review.readAt}}</h4>
      <h4><strong>review:</strong></h4>
      <p class="review-comment">{{review.reviewTxt}}</p>
      <button class="btn-book" @click="removeReview(bookId,review.id)">x</button>
    </div>
    </div>
    </section>
    `,
  methods: {
    removeReview(bookId, reviewId) {
      bookService.removeReview(bookId, reviewId)
      .then(()=>eventBus.$emit("show-msg", {txt: 'Remove successfully saved!', type:'alert-success'})
        )
    },
  },
  computed:{
    reviewsStar(){
      return '🌟'
    },
    txtReview(){
      this.reviews.length
    }
    
  },
  created() {
    this.$emit('reviews')
  },
};
