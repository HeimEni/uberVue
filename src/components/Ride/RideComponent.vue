<script>
export default {
  setup(){
    async function createRide(ride) {
      const response = await fetch('http://127.0.0.1:8000/api/rides', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ride),
      });
      return await response.json();
    }

    async function getRide(id) {
      const response = await fetch(`http://127.0.0.1:8000/api/rides/${id}`);
      return await response.json();
    }

    async function getAllRides() {
      const response = await fetch('http://127.0.0.1:8000/api/rides');
      return await response.json();
    }

    async function updateRide(id, ride) {
      const response = await fetch(`http://127.0.0.1:8000/api/rides/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ride),
      });
      return await response.json();
    }

    async function deleteRide(id) {
      await fetch(`http://127.0.0.1:8000/api/rides/${id}`, {
        method: 'DELETE',
      });
    }
    return{
      createRide,
      getRide,
      getAllRides,
      updateRide,
      deleteRide
    }
  }
}
</script>

<template>
<h1>Ouai</h1>
</template>

<style scoped>

</style>