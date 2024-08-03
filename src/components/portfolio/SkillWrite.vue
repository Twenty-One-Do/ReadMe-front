<template>
  <div class="modal" v-if="isOpen">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <h2>Edit Skills</h2>

      <div v-for="(category, categoryIndex) in localCategories" :key="categoryIndex" class="skill-category">
        <div class="category-header">
          <h3>
            <input v-model="localCategories[categoryIndex].name" placeholder="Category Name" />
          </h3>
          <button @click="removeCategory(categoryIndex)">Remove Category</button>
        </div>

        <ul>
          <li v-for="(skill, skillIndex) in category.skills" :key="skillIndex">
            <input v-model="localCategories[categoryIndex].skills[skillIndex]" placeholder="Skill" />
            <button @click="removeSkill(categoryIndex, skillIndex)">Remove Skill</button>
          </li>
        </ul>
        <input v-model="newSkill" placeholder="New Skill" />
        <button @click="addSkill(categoryIndex)">Add Skill</button>
      </div>

      <div class="add-category">
        <input v-model="newCategoryName" placeholder="New Category Name" />
        <button @click="addCategory">Add Category</button>
      </div>

      <button @click="saveChanges">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillWrite',
  props: {
    categories: {
      type: Array,
      required: true
    },
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      localCategories: JSON.parse(JSON.stringify(this.categories)), // 깊은 복사하여 로컬 데이터로 사용
      newSkill: '',
      newCategoryName: ''
    };
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    addSkill(categoryIndex) {
      if (this.newSkill.trim()) {
        this.localCategories[categoryIndex].skills.push(this.newSkill.trim());
        this.newSkill = '';
      }
    },
    removeSkill(categoryIndex, skillIndex) {
      this.localCategories[categoryIndex].skills.splice(skillIndex, 1);
    },
    addCategory() {
      if (this.newCategoryName.trim()) {
        this.localCategories.push({
          name: this.newCategoryName.trim(),
          skills: []
        });
        this.newCategoryName = '';
      }
    },
    removeCategory(categoryIndex) {
      this.localCategories.splice(categoryIndex, 1);
    },
    saveChanges() {
      this.$emit('update-categories', this.localCategories);
      this.closeModal();
    }
  }
}
</script>

<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 500px;
  border-radius: 8px;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.skill-category {
  margin-bottom: 20px;
}

.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

input {
  margin-right: 10px;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: #333;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #555;
}

.add-category {
  margin-top: 20px;
}
</style>
