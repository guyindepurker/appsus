export default {
    name: 'colors-menu',
    template: `
    <section  class="colors-menu">
        <ul class="colors-container clean-list flex">
            <li class="color" v-for="(color, idx) in colors" :key="idx" :style="{backgroundColor:color}" @click="setBgc(color)"></li>
        </ul>
    </section>`,

    data() {
        return {
            colors: ['#f28b82', '#fbbc04', '#fff475', '#ccff90', '#cbf0f8', '#aecbfa', '#d7aefb', '#fdcfe8', '#e6c9a8', '#e8eaed']
        }
    },
    methods: {
        setBgc(color) {
            this.$emit('setBgc', color);
        }
    },
}