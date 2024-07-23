<script>
import { ref} from "vue";

export default {
  data() {
    return {
      taxis: ref([]),
      test: ref([])
    }
  },
  async created() {
    await this.getAllTaxis();
  },
  methods: {
     getTaxi: async function(id) {
      const response = await fetch(`http://127.0.0.1:8000/api/taxis/${id}`);
      return await response.json();
    },

     getAllTaxis: async function() {
      const response = await fetch('http://127.0.0.1:8000/api/taxis');
      const taxis = await response.json();
      this.taxis =  taxis['hydra:member'];

       const response2 = await fetch("http://127.0.0.1:8000/api/taxis/1");
       const test = await response2.json();
       this.test = test['hydra:member'];
       console.log(test)
    },

     updateTaxi: async function(id, taxi) {
      const response = await fetch(`http://127.0.0.1:8000/api/taxis/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taxi),
      });
      return await response.json();
    },

     deleteTaxi: async function(id) {
      await fetch(`http://127.0.0.1:8000/api/taxis/${id}`, {
        method: 'DELETE',
      });
    },
     createTaxi: async function(taxi) {
      const response = await fetch('http://127.0.0.1:8000/api/taxis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taxi),
      });
      return await response.json();
    }
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
            <h4 class="font-semibold ml-3 text-lg">Liste des taxis</h4>
          </div>
          <div v-for="taxi in taxis" :key="taxi.id">
              <span class=" rounded-xl bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full ">
                <router-link
                  class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-3 bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] rounded-full"
                  to="/client">
                  {{ taxi.id }}
            </router-link>
                {{ test }}
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