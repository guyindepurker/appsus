import { eventBus } from '../services/event-bus-service.js'

export default {
    template: `
    
        <section v-if="msg" class="alert flex column justify-center align-center" :class="msg.type">
            <p>{{msg.txt}}</p>
            <div>
            <button :class="msg.type" @click="msg=null">X</button>
            </div>

        </section>
    `,
    data() {
        return {
            msg: null,
        }
    },
    created() {
        eventBus.$on('show-msg', msg => {
            this.msg = msg
            setTimeout(() => {
                this.msg = null;
            }, 1000)
        })
    }
}