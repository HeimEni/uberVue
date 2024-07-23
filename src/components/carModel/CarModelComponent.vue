<script>
import {ref} from "vue";

export  default {
  data(){
    return{
      carModels: ref([])
    }
  },
  async created() {
    await this.getAllCarModels();
  },
  methods: {
    createCarModel: async function(carModel) {
      const response = await fetch('http://127.0.0.1:8000/api/car_models', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(carModel),
      });
      return await response.json();
    },

   getCarModel:  async function(id) {
      const response = await fetch(`http://127.0.0.1:8000/api/car_models/${id}`);
      return await response.json();
    },

     getAllCarModels: async function() {
      const response = await fetch('http://127.0.0.1:8000/api/car_models');
      const carModels = await response.json();
      this.carModels = carModels['hydra:member'];
    },

    updateCarModel: async function(id, carModel) {
      const response = await fetch(`http://127.0.0.1:8000/api/car_models/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(carModel),
      });
      return await response.json();
    },

    deleteCarModel: async function(id) {
      await fetch(`http://127.0.0.1:8000/api/car_models/${id}`, {
        method: 'DELETE',
      });
    },
  }
}
</script>

<template>
  <div class="flex items-center justify-center w-screen h-screen font-medium">
    <div class="flex flex-grow items-center justify-center h-full text-gray-600 bg-gray-100">
      <div class="flex flex-grow items-center justify-center bg-gray-900 h-full">
        <div class="max-w-full p-8 bg-gray-800 rounded-lg shadow-lg w-96 text-gray-200">
          <div class="flex items-center mb-6">
            <svg class="h-8 w-8 text-indigo-500 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/>
            </svg>
            <h4 class="font-semibold ml-3 text-lg">Modèles de voitures</h4>
          </div>
          <div v-for="carModel in carModels" :key="carModel.id">
              <span class=" rounded-xl bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full "> <router-link
                  class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-3 bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] rounded-full"
                  to="/client">
                  {{ carModel.id }}
            </router-link>
                {{ carModel.brand }}
                {{ carModel.model }}
            </span>
            <br>
          </div>
          <button class="flex items-center w-full h-8 px-2 mt-2 text-sm font-medium rounded">
            <svg class="w-5 h-5 text-gray-400 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
            </svg>
            <input class="flex-grow h-8 ml-4 bg-transparent focus:outline-none font-medium" type="text"
                   placeholder="add a new task">
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>