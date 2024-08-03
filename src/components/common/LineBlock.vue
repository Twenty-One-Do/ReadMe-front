<template>
  <div class="line-block">
    <div class="header">
      <h1>{{ title }}</h1>
      <span class="date">{{ date }}</span>
    </div>
    <div class="content">
      <p>{{ textContent }}</p>
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
  padding-top: 10px;
}
.content p {
  font-size: 16px;
}

@media (max-width: 1024px) {
  .line-block {
    min-width: 600px;
  }
}

@media (max-width: 768px) {
  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }
  .header h1 {
    font-size: 20px;
    margin: 0;
  }
  .header .date {
    margin-top: 20px;
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
}

@media (max-width: 480px) {
  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }
  .header h1 {
    font-size: 16px;
    margin: 0;
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
}
</style>
