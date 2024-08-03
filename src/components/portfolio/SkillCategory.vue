<template>
  <div class="skill-category">
    <h3>{{ category.name }}</h3>
    <div class="skills-grid">
      <div v-for="(skill, skillIndex) in category.skills" :key="skillIndex" class="skill-item">
        <img :src="getImagePath(skill)" :alt="skill" />
        <p class="skill-name">{{ skill }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillCategory',
  props: {
    category: {
      type: Object,
      required: true
    }
  },
  methods: {
    getImagePath(skill) {
      return require(`@/assets/techicons/${skill}.svg`);
    }
  }
}
</script>

<style scoped>
.skill-category {
  min-width: 200px;
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  flex: 1 1 calc(25% - 20px);
  margin: 10px;
  overflow: hidden;
}
.skills-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}
.skill-item {
  flex: 0 1 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.skill-item img {
  width: 50px; /* Set a fixed width */
  height: 50px; /* Set a fixed height */
  display: block;
}
.skill-name {
  margin-top: 5px;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  word-wrap: break-word; /* Ensure long words break to fit the container */
}
</style>
