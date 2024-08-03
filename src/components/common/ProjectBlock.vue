<template>
  <div class="line-block">
    <div class="header">
      <h1>{{ title }}</h1>
      <span class="date">{{ date }}</span>
    </div>
    <div class="content">
      <div class="image-container">
        <img :src="imageSrc" alt="Content Image" class="content-image" />
      </div>
      <div class="text-area">
        {{ textContent }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LineBlock',
  props: {
    title: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    imageSrc: {
      type: String,
      required: true
    },
    textContent: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.line-block {
  border: 2px solid #333;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  min-width: 900px;
  width: 80%;
  height: auto;
  margin: 10px auto;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #333;
  padding-bottom: 10px;
  margin-bottom: 20px;
}
.header h1 {
  font-size: 24px;
  margin: 0;
}
.header .date {
  font-size: 16px;
  color: #000000;
}
.content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.image-container {
  min-width: 550px;
  height: 450px;
  background-color: #777;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
}
.content-image {
  max-width: 100%;
  max-height: 100%;
}
.text-area {
  width: 100%;
  flex-grow: 1;
  margin-left: 40px;
}

@media (max-width: 1024px) {
  .image-container {
    min-width: 350px;
    height: 250px;
  }
  .line-block {
    min-width: 600px;
  }
}

@media (max-width: 768px) {
  .image-container {
    min-width: 300px;
    height: 200px;
  }
  .line-block{
    min-width: 300px;
  }
  .content {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .text-area {
    flex-grow: 1;
    margin: 20px;
  }
}

@media (max-width: 480px) {
  .image-container {
    min-width: 250px;
    height: 150px;
  }
  .line-block{
    min-width: 200px;
  }
  .content {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .text-area {
    flex-grow: 1;
    margin: 20px;
  }
}
</style>
