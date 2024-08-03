<template>
  <div class="main-content">
    <div class="main-image"></div>
    <div class="features">
      <router-link to="/portfoliolist" class="feature">
        <h3>Portfolios()</h3>
        <p>다른 사람들의 환상적인 포트폴리오를 보며 영감을 얻어보세요!</p>
      </router-link>
      <router-link to="/statistic" class="feature">
        <h3>Statistics()</h3>
        <p>다른 사람들은 어떤 기술 스택을 가졌을까요?</p>
      </router-link>
      <router-link to="/community" class="feature">
        <h3>Community()</h3>
        <p>다른 사람들과 정보를 공유해보세요!</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
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
  position: relative;
  transition: all 0.3s ease;
  text-decoration: none; /* 추가: 링크 스타일 제거 */
}

.feature:hover {
  background-color: white;
  color: black;
  height: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.feature .icon {
  display: none;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
}

.feature:hover .icon {
  display: block;
}
</style>
