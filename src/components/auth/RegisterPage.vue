<template>
  <div class="auth-container">
    <div class="auth-form">
      <h1>Register</h1>
      <form @submit.prevent="handleRegister">
        <div class="input-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="name" required />
        </div>
        <div class="input-group">
          <label for="username">Username</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="input-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="input-group">
          <label for="phone_number">Phone Number</label>
          <input type="text" id="phone_number" v-model="phoneNumber" required />
        </div>
        <div class="input-group">
          <label for="birth_date">Birth Date</label>
          <input type="date" id="birth_date" v-model="birthDate" required />
        </div>
        <div class="input-group">
          <label for="gender">Gender</label>
          <select id="gender" v-model="gender" required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <div class="input-group">
          <label for="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" required />
        </div>
        <button type="submit" class="auth-button">Register</button>
      </form>
      <router-link to="/login" class="switch-auth-link">Already have an account? Login</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage',
  data() {
    return {
      name: '',
      username: '',
      email: '',
      phoneNumber: '',
      birthDate: '',
      gender: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    async handleRegister() {
      if (this.password !== this.confirmPassword) {
        alert('Passwords do not match');
        return;
      }

      try {
        const response = await this.$axios.post('/account/', {
          name: this.name,
          username: this.username,
          email: this.email,
          phone_number: this.phoneNumber,
          birth_date: this.birthDate,
          gender: this.gender,
          password: this.password,
          password2: this.confirmPassword
        });

        console.log('Registration successful:', response.data);
        alert('Registration successful. Please login.');

        // 회원가입 성공 후 로그인 페이지로 이동
        this.$router.push('/login');
      } catch (error) {
        console.error('Registration error:', error.response ? error.response.data : error.message);
        alert('Registration failed. Please try again.');
      }
    }
  }
};
</script>

<style scoped>
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

input,
select {
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
