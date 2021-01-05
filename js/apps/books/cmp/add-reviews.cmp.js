import {bookService} from '../service/book-service.js'
import { eventBus } from "../../../services/event-bus-service.js";

export default {
  props: ["book"],
  template: `
    <section class="reviews mr-5">
      <button @click="isAddReview = !isAddReview">{{buttonTxt}}</button>
      <form v-show="isAddReview" @submit.prevent="add(book.id,userReview)">
        <div class="name">
        <label for="full-name">full name</label>
        <input ref="fullNameInput" type="text" name="full-name" id="full-name" placeholder="Enter full name" v-model="userReview.fullName" required>
        </div>
        <div class="rates">
          <label for="rates">
            Rates:  
          </label>
            <select name="rates" id="rates-user" v-model="userReview.rates">
            <option value="1">1</option>
            <option value="2">2</option>
           <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            </select> 
        </div>
        <div class="date">
          <label for="date">Date</label>
          <input type="date" id="date-read-at" name="date-read-at" v-model="userReview.readAt">
        </div>
        <div class="comment-review">
          <label for="review-text">Tell us about your reading experience:</label>
        </div>
        <textarea id="review-text" name="review-text"
          rows="5" cols="33" v-model="userReview.reviewTxt">
          </textarea>
          <div>
            <button>Send</button>
          </div>
      </form>
    </section>
    `,
  data() {
    return {
      userReview: {
        fullName: "Books Reader",
        rates: 1,
        readAt: new Date().toISOString().substr(0, 10),
        reviewTxt: "",
      },
      isAddReview:true,
    }
  },
  methods: {
    add(id,review) {
      if(!this.userReview.reviewTxt) return  eventBus.$emit("show-msg", {txt: 'Must to write a comment!!', type:'wrong'});
      bookService.addReview(id,JSON.parse(JSON.stringify(review))).then(()=>{
        eventBus.$emit('show-msg',{txt: 'The Review Added successfully!', type:'success',link:this.book.id})
        this.getEmptyReview()
      })
    },
    getEmptyReview(){
      this.userReview =  {
        fullName: "Books Reader",
        rates: 1,
        readAt: new Date().toISOString().substr(0, 10),
        reviewTxt: "",
      }
    }
  },
  computed:{
    buttonTxt(){
      if(!this.isAddReview){
        return 'Add New Review'
      }else return 'Close Review'
    },
  },
  mounted(){
this.$refs.fullNameInput.focus() 
  }
};
