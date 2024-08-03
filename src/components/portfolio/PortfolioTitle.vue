<template>
  <header>
    <div class="circle"></div>
    <div class="moto">
      <h1>경험을 중시하는 개발자 이원도입니다!</h1>
      <p>안녕하세요! 경험을 중시하는 개발자 이원도입니다!</p>
      <p>저는 경험을 중시하고 어제의 저보다</p>
      <p>한걸음 발전하려합니다!</p>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}
.circle {
  min-width: 300px;
  min-height: 300px;
  background-color: #ff6347;
  border-radius: 50%;
  margin: 0 40px;
  transition: all 0.3s ease-in-out;
}
.moto {
  min-width: 700px;
  transition: all 0.3s ease-in-out;
}
h1 {
  color: #333;
  font-size: 35px;
}
p {
  color: #666;
  font-size: 25px;
  margin: 5px 0;
}

@media (max-width: 1024px) {
  .circle {
    min-width: 200px;
    min-height: 200px;
    margin: 0 30px;
  }
  .moto {
    min-width: 500px;
  }
  h1 {
    font-size: 25px;
  }
  p {
    font-size: 15px;
  }
}

@media (max-width: 768px) {
  header {
    flex-direction: column;
  }
  .circle {
    min-width: 180px;
    min-height: 180px;
    margin: 20px 0;
  }
  .moto {
    min-width: 360px;
    text-align: center;
  }
  h1 {
    font-size: 20px;
  }
  p {
    font-size: 10px;
  }
}

@media (max-width: 480px) {
  header {
    flex-direction: column;
  }
  .circle {
    min-width: 160px;
    min-height: 160px;
  }
  h1 {
    font-size: 15px;
  }
  p {
    font-size: 10px;
  }
}
</style>

<script setup lang="ts">
</script>
