const defaultitems = [
    {
      id: 0,
      name: "Rozrzutnik",
      x: 20,
      y: 20,
      width: 55,
      length: 800,
      rotation: 0,
      fill: "green"
    },
    {
      id: 1,
      name: "Opryskiwacz",
      x: 20,
      y: 20,
      width: 230,
      length: 100,
      rotation: 0,
      fill: "yellow"
    },
    {
      id: 2,
      name: "Talerzówka",
      x: 20,
      y: 20,
      width: 290,
      length: 360,
      rotation: 0,
      fill: "red"
    },
    {
      id: 3,
      name: "Zetor",
      x: 20,
      y: 20,
      width: 210,
      length: 420,
      rotation: 0,
      fill: "brown"
    },
    {
      id: 4,
      name: "60",
      x: 20,
      y: 20,
      width: 190,
      length: 370,
      rotation: 0,
      fill: "white"
    },
    {
      id: 5,
      name: "Rotacyjna",
      x: 20,
      y: 20,
      width: 100,
      length: 300,
      rotation: 0,
      fill: "purple"
    },
    {
      id: 6,
      name: "Kombajn",
      x: 20,
      y: 20,
      width: 278,
      length: 858,
      rotation: 0,
      fill: "blue"
    },
  ];

const defaultWalls = {
  name: "Ściana",
  width: 800,
  height: 800,
  fill: "gray",
  stroke: "black",
  strokeWidth: 3,
}


import { defineStore } from 'pinia'

export const useGarageStore = defineStore('garage', {
  state: () => {
    return { 
      wall: {
        name: "Ściana",
        width: 800,
        height: 800,
        fill: "gray",
        stroke: "black",
        strokeWidth: 3,
      },
      // itemParameters: {
      //   stroke: "black",
      //   strokeWidth: 1,
      // },
      items: defaultitems,

      garages: [],
    }
  },
  actions: {
    createGarage(parameters){
      let newGarage = {
        id: this.garages.length +1,
        name: parameters.name,
        walls: defaultWalls,
        items: [],
      };
      if(parameters.isDefaultItems){
        newGarage.items = defaultitems;
      }
      this.garages.push(newGarage);
      localStorage.setItem("garages", JSON.stringify(this.garages));
    },
    loadGarages(){
      this.garages = JSON.parse(localStorage.getItem("garages"))
    },
    deleteGarage(index){
      this.garages = this.garages.slice(index, 1);
    },
    setWall(wallParam) {
      this.wall.width = wallParam.width;
    },
  },
})