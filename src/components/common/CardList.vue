<template>
  <div class="card-list-container">
    <h1>{{ title }}</h1>
    <div class="card-grid">
      <div v-for="card in cards" :key="card.id" class="card-item">
        {{ card.content }}
      </div>
    </div>
    <div class="pagination">
      <span v-for="page in pages" :key="page" class="page-number" @click="goToPage(page)">
        {{ page }}
      </span>
    </div>
  </div>
</template>


<script>
export default {
  name: 'CardList',
  props: {
    title: {
      type: String,
      required: true
    },
    cards: {
      type: Array,
      required: true
    },
    pages: {
      type: Array,
      required: true
    }
  },
  methods: {
    goToPage(page) {
      this.$emit('page-changed', page);
    }
  }
}
</script>


<style scoped>
.card-list-container {
  text-align: left;
}
.card-list-container h1 {
  text-align: center;
  font-size: 23px;
  margin-bottom: 20px;
}
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.card-item {
  background-color: #ff6347;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-size: 16px;
}
.pagination {
  margin-top: 20px;
}
.page-number {
  margin: 0 5px;
  cursor: pointer;
  font-size: 14px;
  color: #000000;
}
.page-number:hover {
  font-size: 16px;
}
</style>
