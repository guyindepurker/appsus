import {bookService} from '../service/book-service.js'
import bookPreview from '../cmp/book-preview.cmp.js';
import bookList from "../cmp/book-list.cmp.js";
import { eventBus } from "../../../services/event-bus-service.js";

export default {
    name:'add-book',
    template: `
    <section class="add-book container">
        <div class="flex column justify-center align-center">               
    <h1>Add Book</h1>
    <label for="search-book">Search:</label>
    <input type="search" name="search" v-model="inputSearch" id="search-book" placeholder="Search Book">
    <div>
        <button @click="onSearchBook" class="mr-5">search</button>
    </div>
    </div>
    <div v-if="bookResults" class="results mr-5 flex column justify-center align-center">
        <ul class="clean-list results-container  flex column wrap ">
            <li class="results mr-5" v-for="result in bookResults" :key="result.id">
            {{result.title.substring(0,20)}} <button style="margin-left:10px;"  @click="addBook(result)">+</button>
            </li>
        </ul>
    </div>
    </section>

    `,
    data(){
        return {
            inputSearch:'',
            bookResults:null,
        }
    },
    methods:{
        onSearchBook(){
            bookService.searchBook(this.inputSearch)
            .then(books=>{
               const newBooks = bookService.convertBooks(books)
                this.bookResults = newBooks;
                
            } 
             )
        },
        addBook(googleBook){
            bookService.addGoogleBook(googleBook)
            .then(()=> {
                eventBus.$emit("show-msg", {txt: 'Add successfully saved!', type:'alert-success'}) 
                })
            .catch(err=>eventBus.$emit("show-msg", {txt: `${err} not add the book!!`, type:'alert-wrong'}))
        }
    },
    components:{
        bookPreview,
        bookList
    }
}