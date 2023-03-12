<template>
  <nav id="nav-bar">
    <div id="links">
      <router-link :class="['link',  linksClass.people]" to="/personagens"> Personagens </router-link>
      <router-link :class="['link', linksClass.planets ]" to="/planetas"> Planetas </router-link>
      <router-link :class="['link', linksClass.species ]" to="/especies"> Espécies </router-link>
    </div>
    <div id="search"></div>
  </nav>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {computed} from "vue";

const route = useRoute()

const currentRouteName = computed(() => {
  return route.name
})

const linksClass = computed(() => {
  return {
    people: currentRouteName.value === 'people' ? 'active' : '',
    planets: currentRouteName.value === 'planets' ? 'active' : '',
    species: currentRouteName.value === 'species' ? 'active' : '',
  }
})

</script>

<style scoped>
#nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #212121;
  position: absolute;
  top: 0;
  width: 100%;
  padding: 1rem 3rem;
}

#links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 350px;
}

.link{
  text-decoration: none;
  color: #434A52;
  font-size: 1rem;
  font-weight: 600;
  transition: 0.3s;
}

.link:hover{
  color: #E3E3E3;
}

.active{
  color: #FFFEFE;
}

.active::after{
  content: '';
  display: block;
  width: 100%;
  height: 2px;
  background-color: #CA9E77;
  margin-top: 0.5rem;
  border-radius: 10px;
}


</style>