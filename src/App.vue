<template>
  <div id="app">
    <div class="card-container">
      <ProjectCard v-for="project in projects" :key="project.name" v-bind="project" />
    </div>
  </div>
</template>

<script>
import ProjectCard from './components/ProjectCard.vue';
import ProjectsData from './proyectos.json';

export default {
  name: 'App',
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: []
    }
  },
  created() {
    // Ordena los proyectos por disponibilidad.
    this.projects = ProjectsData.sort((a, b) => {
      if (a.isAvailable && !b.isAvailable) return -1;
      if (!a.isAvailable && b.isAvailable) return 1;
      return 0;
    });
  }
};

</script>

<style scoped>
#app {
}

.card-container {
  display: flex;
  flex-wrap: wrap;  
  justify-content: space-around; 
  align-items: stretch;  
}
</style>
