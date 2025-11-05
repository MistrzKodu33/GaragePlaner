<script setup>
import { useGarageStore } from '@/stores/garageStore'
import { storeToRefs } from "pinia";
import ModalShow from './ModalShow.vue';

const garageStore = useGarageStore()
const { garages } = storeToRefs(garageStore);

function clickDetails(){

}

function clickDelete(){

}

function clickTmp(text){
  console.log(text);
}
    
</script>

<template>
    <div class="container-fluid">
      <div class="row">
        <h1>Garaże</h1>
        <ModalShow text="Modal" @YesClick="clickTmp('YES')" @NoClick="clickTmp('No')" />
      </div>
      <div class="row">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Nr</th>
              <th scope="col">Nazwa</th>
              <th scope="col">Akcje</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="garage in garages">
              <td>{{ garage.id }}</td>
              <td>{{ garage.name }}</td>
              <td>
                <button class="btn btn-primary">
                  Szczegóły
                </button>
                <button class="btn btn-danger">
                  Usuń
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<style scoped>

</style>
