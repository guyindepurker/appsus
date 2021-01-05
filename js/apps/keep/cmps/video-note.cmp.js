export default {
    name: 'video-note',
    props: ['note', 'editNote'],
    template: `
    <li v-if="editNote" class="note video-note">
        <div class="note-container flex">
            <iframe width="100%" height="125" :src="formattedUrl"></iframe>
            <div @blur="editNote" :id="note.id" contenteditable class="txt"> {{note.info.txt}} </div>
            <slot></slot>
            <span class="fab fa-youtube note-type"></span>
        </div>
    </li>
    `,
    data() {
        return {
            url: "",
        };
    },
    computed: {
        formattedUrl() {
            let videoUrl = this.note.info.url;
            if (videoUrl.includes("embed")) {
                return videoUrl;
            }
            let url = new URL(this.note.info.url);
            let params = new URLSearchParams(url.search);
            const videoId = params.get("v");
            let embedUrl = `https://www.youtube.com/embed/${videoId}`;
            return embedUrl
        }
    }
}