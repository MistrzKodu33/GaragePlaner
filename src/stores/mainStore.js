import { reactive } from 'vue';

const store = reactive({
  activeLink: "",
  setLink(linkParam) {
    this.activeLink = linkParam
  }
});

export default store;