<template>
  <div class="auth-container">
    <div class="auth-form">
      <h1>Login</h1>
      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <label for="username">Username</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit" class="auth-button">Login</button>
      </form>
      <router-link to="/register" class="switch-auth-link">Don't have an account? Register</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await this.$axios.post('/account/login/', { // 토큰 요청 경로
          username: this.username,
          password: this.password,
        });

        // 로그인 성공 시 토큰 저장
        const accessToken = response.data.access;
        console.log('Access Token:', accessToken);

        // 토큰을 로컬 스토리지에 저장
        localStorage.setItem('accessToken', accessToken);

        // 대시보드로 이동
        this.$router.push('/profile');
      } catch (error) {
        console.error('Login error:', error.response ? error.response.data : error.message);
        alert('Login failed. Please check your credentials.');
      }
    }
  }
};
</script>

<style scoped>
/* 이전에 제공한 스타일 사용 */
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 20px;
  background-color: #f9f9f9;
}

.auth-form {
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

h1 {
  margin-bottom: 20px;
  color: #333;
}

.input-group {
  margin-bottom: 20px;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: #666;
}

input {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 16px;
}

.auth-button {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: none;
  background-color: #333;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.auth-button:hover {
  background-color: #555;
}

.switch-auth-link {
  display: block;
  margin-top: 20px;
  color: #333;
  text-decoration: none;
  font-size: 14px;
}

.switch-auth-link:hover {
  text-decoration: underline;
}
</style>
