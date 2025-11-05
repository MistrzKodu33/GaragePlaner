import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
  state: () => {
    return { 
        isShow: false,
        triggerYesClick: 0,
        triggerNoClick: 0,
        title: "Tytuł",
        content: "Kontent",
    }
  },
  actions: {
    show(isShow){
        this.isShow = isShow;
    }
  },
})