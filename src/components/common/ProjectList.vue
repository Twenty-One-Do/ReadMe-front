<template>
  <div class="line-list-container">
    <div class="line-header">
      <h1>{{ title }}</h1>
      <router-link :to="link" class="add-button">Edit</router-link>
    </div>

    <ProjectBlock v-for="item in items" :key="item.id"
      :title="item.title"
      :date="item.period"
      :imageSrc="item.img"
      :textContent="item.preview"
    />
  </div>
</template>


<script>
import ProjectBlock from '@/components/common/ProjectBlock.vue';

export default {
  name: 'LineList',
  props: {
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  components: {
    ProjectBlock
  }
}
</script>


<style scoped>
.line-list-container {
  text-align: left;
}
.line-list-container h1 {
  text-align: center;
  font-size: 26px;
  margin-bottom: 25px;
}
.line-header {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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
</style>
