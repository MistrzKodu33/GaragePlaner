
<template>
    <div class="container-fluid">
        <div class="row text-center">
            <h1>Garaż</h1>
        </div>
        <div class="row">
            <div :class="menuButtonContainerClass"><button class="btn btn-primary">Przycisk</button></div>
            <div :class="menuButtonContainerClass"><button class="btn btn-primary">Przycisk</button></div>
            <div :class="menuButtonContainerClass"><button class="btn btn-primary">Przycisk</button></div>
            <div :class="menuButtonContainerClass"><button class="btn btn-primary">Przycisk</button></div>
            <div :class="menuButtonContainerClass"><button class="btn btn-primary">Przycisk</button></div>
            <div :class="menuButtonContainerClass"><button class="btn btn-primary">Przycisk</button></div>
            <div :class="menuButtonContainerClass"><button class="btn btn-primary">Przycisk</button></div>
            <div :class="menuButtonContainerClass"><button class="btn btn-primary">Przycisk</button></div>
            <div :class="menuButtonContainerClass"><button class="btn btn-primary">Przycisk</button></div>
            <div :class="menuButtonContainerClass"><button class="btn btn-primary">Przycisk</button></div>
            <div :class="menuButtonContainerClass"><button class="btn btn-primary">Przycisk</button></div>
            <div :class="menuButtonContainerClass"><button class="btn btn-primary">Przycisk</button></div>
        </div>
        <div class="row">

            <div class="col-4">

                <div class="container-fluid border border-primary border-2 rounded-2 m-3 p-3">
                    <div class="row text-center mb-2"><h5>Ściany</h5></div>
                    <div class="input-group mb-2">
                        <span class="input-group-text bg-info input-span">Szerokość</span>
                        <input type="number" class="form-control" v-model="wall.width">
                    </div>
                    <div class="input-group mb-2">
                        <span class="input-group-text bg-info input-span">Długość</span>
                        <input type="number" class="form-control" v-model="wall.height">
                    </div>
                </div>


                <div class="container-fluid border border-primary border-2 rounded-2 m-3 p-3">
                    <div class="row text-center mb-2"><h5>Maszyna parametry</h5></div>
                    <div class="input-group mb-2">
                        <span class="input-group-text bg-info input-span">Nazwa</span>
                        <input type="text" class="form-control" v-model="selectedItem.name">
                    </div>
                    <div class="input-group mb-2">
                        <span class="input-group-text bg-info input-span">X</span>
                        <input type="number" class="form-control" v-model="selectedItem.x">
                    </div>
                    <div class="input-group mb-2">
                        <span class="input-group-text bg-info input-span">Y</span>
                        <input type="number" class="form-control" v-model="selectedItem.y">
                    </div>
                    <div class="input-group mb-2">
                        <span class="input-group-text bg-info input-span">Szerokość</span>
                        <input type="number" class="form-control" v-model="selectedItem.width">
                    </div>
                    <div class="input-group mb-2">
                        <span class="input-group-text bg-info input-span">Długość</span>
                        <input type="number" class="form-control" v-model="selectedItem.length">
                    </div>
                    <div class="input-group mb-2">
                        <span class="input-group-text bg-info input-span">Obrót</span>
                        <input type="number" class="form-control" v-model="selectedItem.rotation">
                    </div>
                    <div class="input-group mb-2">
                        <span class="input-group-text bg-info input-span">Kolor</span>
                        <input type="text" class="form-control" v-model="selectedItem.fill">
                    </div>
                </div>
            </div>

            <div class="col-8">
                <v-stage :config="stageConfig"  ref="stageRef">
                    <v-layer>
                        <v-rect :config="wallsConfig" />
                    </v-layer>
                    <v-layer>
                        <v-group v-for="item in items" :key="item.id" :config="createItemGroupConfig(item)"
                                @mousedown="handleStart(item)"
                                @touchstart="handleStart(item)"
                                @mouseup="handleEnd"
                                @touchend="handleEnd"
                                @pointermove="handlePointerMove"
                                @pointerout="handlePointerOut"
                            >
                            <v-rect :config="createItemRectConfig(item)" />
                        </v-group>
                    </v-layer>
                </v-stage>
            </div>

        </div>

    </div>
</template>

<script setup>

    import { ref, reactive, computed, onMounted } from 'vue'
    import { useGarageStore } from '@/stores/garageStore'
    import { storeToRefs } from "pinia";

    //const garageStore = useGarageStore()
    const { wall, items, itemParameters } = storeToRefs(useGarageStore());
    //const itemParam = reactive([]);
    // const test = ref(500);
    // console.log("wallStore", wall.value);
    const menuButtonContainerClass = "col-1";
    const stageRef = ref(null);
    const isMoveFlag = ref(false);
    
console.log("items", items);
// name: "Ściana",
//         width: 800,
//         height: 800,
//         fill: "gray",
//         stroke: "black",
//         strokeWidth: 3,
    
    const selectedItem = ref({
        id: null,
        name: "",
        x: null,
        y: null,
        width: null,
        length: null,
        rotation: null,
        fill: ""
    });

    const stageConfig = reactive({
        width: window.innerWidth,
        height: window.innerHeight
    });


    const wallsConfig = computed(() => {
        // console.log("test", test);
        return {
            x: 0,
            y: 0,
            width: wall.value.width,
            height: wall.value.height,
            fill: 'gray',
        }
    });

// console.log("wallsConfig", wallsConfig);
    // console.log(wall.value);
    // const wallsConfig = reactive({
    //     x: 20,
    //     y: 20,
    //     width: test.value,
    //     height: test.value,
    // })

    // const floorConfig = {
    //     x: 20,
    //     y: 20,
    //     width: test,
    //     height: test,
    //     fill: 'gray',
    // };

    // const rectConfig = {
    //     x: 20,
    //     y: 20,
    //     width: 100,
    //     height: 50,
    //     fill: 'green',
    //     draggable: true
    // };


/*
    onMounted(() => {
             for(var i = 0; i < items.value.length; i++){
                var com = computed(() => {
                    console.log("items", items);
                    var item = items.value[i];
                    console.log("item", this, i);
                    return {
                        index: i,
                        x: item.x,
                        y: item.y,
                        width: item.x.width,
                        height: item.length,
                        rotation: 0,
                        fill: item.fill,
                        draggable: true,
                        stroke: item.stroke,
                        strokeWidth: item.strokeWidth,
                    }
                });
                itemsConfigs.value.push(com);
             }
        });
        */

        function createItemGroupConfig(itemParam){
            return {
                        x: itemParam.x,
                        y: itemParam.y,
                        width: itemParam.width,
                        height: itemParam.length,
                        draggable: true,
                        rotation: itemParam.rotation,
                    }
        }

        function createItemRectConfig(itemParam) {
            
            return {
                        x: 0,
                        y: 0,
                        width: itemParam.width,
                        height: itemParam.length,
                        fill: itemParam.fill,
                    }
        }

        function itemClick(item){
            
        }

        const handleStart = (item) => {
            selectedItem.value = item;
            isMoveFlag.value = true;
            console.log('Mousedown or touchstart', item.id);
        };

        const handleEnd = ($event) => {
            console.log('Mouseup or touchend');
            if(isMoveFlag.value){
                selectedItem.value.x = $event.target.parent.attrs.x;
                selectedItem.value.y = $event.target.parent.attrs.y;
            }
            
            isMoveFlag.value = false;
        };

        const handlePointerMove = ($event) => {
            if(isMoveFlag.value){
                //const pos = stageRef.value.getNode().getPointerPosition();
                
                // console.log(pos.x, "   ", pos.y);
                console.log("this", $event.target);
                // selectedItem.value.x = $event.target.attrs.x;
                // selectedItem.value.y = $event.target.attrs.y;
            }  
        };

        const handlePointerOut = ($event) => {
            if(isMoveFlag.value){
                // const pos = stageRef.value.getNode().getPointerPosition();
                // selectedItem.value.x = pos.x;
                // selectedItem.value.y = pos.y;
                // selectedItem.value.x = $event.target.attrs.x;
                // selectedItem.value.y = $event.target.attrs.y;
            
            }
            isMoveFlag.value = false;
        };

</script>

<style scoped>

.input-span{
    width: 110px;
}

</style>