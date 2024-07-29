<template>
  <div id="app">
    <SiteNavBar />
    <div class="main-content">
      <div class="main-image"></div>
      <div class="features">
        <div class="feature">
          <h3>Portfolios():</h3>
          <p>다른 사람들의 환상적인 포트폴리오를 보며 영감을 얻어보세요!</p>
        </div>
        <div class="feature">
          <h3>Statistics():</h3>
          <p>다른 사람들은 어떤 기술 스택을 가졌을까요?</p>
        </div>
        <div class="feature">
          <h3>Community():</h3>
          <p>다른 사람들과 정보를 공유해보세요!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SiteNavBar from './components/common/Header.vue'

export default {
  name: 'App',
  components: {
    SiteNavBar
  },
  methods: {
    my_Info() {
      // Add your function logic here
    },
    move_Option() {
      // Add your function logic here
    },
    move_Login() {
      // Add your function logic here
    },
    write() {
      // Add your function logic here
    }
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main-content {
  display: block;
  height: 1000px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
}

.main-image {
  width: 100%;
  height: 300px;
  background-image: url('@/assets/readme_main.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.features {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.feature {
  width: 20%;
  min-width: 10%;
  background-color: #333;
  padding: 20px;
  margin: 0 10px;
  color: white;
  border-radius: 8px;
}
</style>
