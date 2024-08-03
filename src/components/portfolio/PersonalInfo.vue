<template>
  <section class="personal-info">
    <h2>내 정보</h2>
    <div class="info-grid">
      <p><strong>name:</strong> 이원도</p>
      <p><strong>birth:</strong> 1999.10.05</p>
      <p><strong>phone:</strong> 010-8962-3*5*</p>
      <p><strong>email:</strong> dnjseh962@gmail.com</p>
    </div>
  </section>
</template>

<style scoped>
.personal-info {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}
</style>
<script setup lang="ts">
</script>