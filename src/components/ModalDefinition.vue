<template>
    <div class="modal" tabindex="-1" :class="{ meShowModal: isShow }">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">{{ title }}</h5>
            </div>
            <div class="modal-body">
                <p>{{content}}</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" @click="noClick">Nie</button>
                <button type="button" class="btn btn-primary" @click="yesClick">Tak</button>
            </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useModalStore } from '@/stores/modalStore.js'
import { storeToRefs } from "pinia";

const { isShow, triggerYesClick, triggerNoClick, title, content } = storeToRefs(useModalStore());

function yesClick(){
    triggerYesClick.value++;
}

function noClick(){
    triggerNoClick.value++;
}
</script>

<style lang="css" scoped>
.meShowModal{
    display: block !important;
}
</style>