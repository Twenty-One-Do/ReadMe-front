<template>
  <section class="skills">
    <div class="skills-header">
      <h1>Tech Stacks</h1>
      <button class="add-button" @click="openModal">Edit</button>
    </div>
    <div class="skill-categories">
      <SkillCategory v-for="(category, index) in categories" :key="index" :category="category" />
    </div>
    <SkillWrite
      :categories="categories"
      :isOpen="isModalOpen"
      @close="closeModal"
      @update-categories="updateCategories"
    />
  </section>
</template>

<script>
import SkillCategory from './SkillCategory.vue';
import SkillWrite from './SkillWrite.vue';

export default {
  components: {
    SkillCategory,
    SkillWrite
  },
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isModalOpen: false
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    updateCategories(updatedCategories) {
      this.$emit('update-categories', updatedCategories);
    }
  }
}
</script>

<style scoped>
.skills {
  margin-top: 30px;
}

.skills-header {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.skills h1 {
  text-align: center;
  font-size: 26px;
  margin: 0;
}

.add-button {
  position: absolute;
  border-radius: 5px;
  padding: 5px;
  right: 0;
  font-size: 20px;
  background: #333;
  color: white;
  border: none;
  cursor: pointer;
  text-align: center;
  margin-right: 20px;
}

.add-button:hover {
  background-color: #838383;
}

.add-button:link,
.add-button:visited {
  color: #fff;
  text-decoration: none;
}

.skill-categories {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
}
</style>
