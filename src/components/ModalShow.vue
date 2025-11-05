<template>
    <button class="btn btn-primary" @click="showClick()">
        {{ text }}
    </button>
</template>

<script setup>
import { watch } from 'vue'
import { useModalStore } from '@/stores/modalStore.js'
import { storeToRefs } from "pinia";

const props = defineProps(['textButton, title, content'])
const emit = defineEmits(["YesClick", "NoClick"]);

const store = useModalStore();
const { isShow, triggerYesClick, triggerNoClick, title, content } = storeToRefs(store);

function showClick(){
    store.show(true);
}

watch(triggerYesClick, (newValue) => {
    emit('YesClick')
    store.show(false);
})

watch(triggerNoClick, (newValue) => {
    emit('NoClick')
    store.show(false);
})
</script>