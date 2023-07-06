<template>
  <div class="card" v-bind:class="{ 'not-available': !isAvailable }">
    <div class="img-container">
      <img :src="img" alt="Imagen del Proyecto" class="card-img-top">
      <div class="availability" v-bind:class="{ 'not-available': !isAvailable }" v-if="isAvailable">Disponible</div>
      <div class="availability not-available" v-else>No Disponible</div>
    </div>
    <div class="card-body">
      <div class="basicInfo">
        <p class="card-description">{{ description }}</p>
        <!-- <div class="loc">
          <img src="../imgs/location.svg" alt="">
          <p class="card-location"><small class="text-muted">{{ location }}</small></p>
        </div> -->
      </div>
      <h5 class="card-title">{{ name }}</h5>
      <div class="loc">
          <img src="../imgs/location.svg" alt="">
          <p class="card-location"><small class="text-muted">{{ location }}</small></p>
        </div>
        <!-- <br> -->
      <div class="desdeX">
        <!-- <p class="desde">Desde</p> -->
        <p class="cost"> <span class="costnum">$1,940,000 MXN</span></p>
      </div>
      <!-- <p class="card-isAvail">Disponibilidad: {{ isAvailable ? 'Disponible' : 'No disponible' }}</p> -->
    </div>
      <div class="Carac">
        <div class="caracteristica">
          <img src="../imgs/area.svg" alt="">
          <p class="chaar">Area total <br> <span class="charac"> {{ totalArea }} m²</span></p>
        </div>
        <div class="caracteristica">
          <img src="../imgs/terrace.svg" alt="">
          <p class="chaar">Terraza <br> <span class="charac"> {{ terrace }} m²</span></p>
        </div>
        <div class="caracteristica">
          <img src="../imgs/bed-fill.svg" alt="">
          <p class="chaar">Habitaciones <br> <span class="charac"> {{ rooms }}</span></p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: ['name', 'description', 'location', 'totalArea', 'img', 'terrace', 'rooms', 'isAvailable'],
};
</script>

<style scoped>

.card {
  box-sizing: border-box;
  height: auto;
  width: 90vw;
  max-width: 400px;
  margin: 30px auto;
  box-shadow: 0 0 7px rgba(162, 162, 162, 0.8);
  border-radius: 17px;
  transition: 0.3s;
  cursor: pointer;
  overflow: hidden;
}

.card:hover {
  background-size: 120%;
    box-shadow: 0 0 10px #01a8c6b4;
}
.card:hover .card-img-top {
  transform: scale(1.05); 
  transition: transform 0.3s ease-in-out; 
}

.card-img-top {
  height:250px;
  position: relative;
  width: 100%;
  transition: transform 0.3s ease-in-out;
  border-radius: 17px 17px 0 0;
  overflow: hidden;
  object-fit: cover;
  background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.img-container {
  position: relative;
}

.availability {
font-family: 'Open Sans', sans-serif;
  position: absolute;
  top: 20px; 
  left: 20px; 
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
}

.availability.not-available {
  background-color: rgba(184, 0, 0, 0.631);
}

.card-body {
  width: 90%;
  padding: 10px 20px;
font-family: 'Open Sans', sans-serif;
}

.card-title {
  font-weight: 800;
  margin: 0;
  font-size: 20px;
}
h5 {
  margin: 0;
}
p{
  margin: 0;
}

.card-description {
  font-size: 12px;
  margin: 0;
  font-weight: 650;
  color: rgb(101, 101, 101);
}

.basicInfo {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.loc {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
}

.loc img {
  height: 12px;
}

.card-location {
  font-size: 12px;
  margin: 0;
  font-weight: 450;
  color: rgb(101, 101, 101);
}

.Carac {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(237, 237, 237);
  
  width: 90%;
  padding: 20px;
font-family: 'Open Sans', sans-serif;
}

.cost {
  font-size: 12px;
  margin: 0;
  font-weight: 450;
  color: rgb(101, 101, 101);
  margin-top: 10px;
}

.costnum {
  font-size: 20px;
  font-weight: 650;
  color: #01A7C6;
}

.Carac {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin: 0;
}

.caracteristica {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;
}

.Carac img {
  height: 35px;
  margin-right: 8px;
}

.chaar {
  font-size: 10px;
  margin: 0;
  font-weight: 550;
  color: rgb(101, 101, 101);
}

.charac {
  font-size: 15px;
  font-weight: 750;;
}

@media (min-width: 600px) {
  .card {
    width: 400px; 
    margin: 30px; 
  }

}


.not-available {
}
</style>
