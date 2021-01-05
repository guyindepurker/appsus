export default {
  name: "filter-mails",
  template: `
    <section class="email-filter">
    <form @submit.prevent="emitFilter" class="email-controls container flex justify-center wrap">
    <input type="text" id="search" class="search-mail" v-model.trim="filterBy.byName" @input="emitFilter" placeholder="Search mail">
    <select class="sort-msg" v-model="filterBy.byStatus" @change="emitFilter">
   <option value="all">All</option>
   <option value="read">Read</option>
  <option value="unread">Unread</option>
</select>
</form>
    </section>
    `,
  data() {
    return {
      filterBy: {
        byName: "",
        byStatus:"all",
      },
    };
  },
  methods: {
    emitFilter() {
      this.$emit("filtered", JSON.parse(JSON.stringify(this.filterBy)));
    },
  },
};
