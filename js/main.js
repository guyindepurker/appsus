import { myRouter } from './routes.js'
import appHeader from "./cmps/app-header.js";
import appFooter from "./cmps/app-footer.js";
import userMsg from "./cmps/user-msg.js"

const options = {
    el: "#app",
    router: myRouter,
    template: `
    <section class="main-content flex column">
    <app-header />
    <user-msg></user-msg>
      <router-view class="grow"></router-view>
    </main>
    <app-footer />
    </section>
    `,
    components: {
        appHeader,
        appFooter,
        userMsg
    }
};

const app = new Vue(options);
