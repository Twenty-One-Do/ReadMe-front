<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-spacer"></div>
      <router-link to="/" class="navbar-logo">README</router-link>
      <div class="navbar-profile" ref="dropdownRef">
        <div class="profile-image" @click="toggleDropdown">
          <img :src="userImage" alt="프로필" />
        </div>
        <div v-if="isDropdownOpen" class="dropdown-menu">
          <router-link to="/profile" class="dropdown-item">내 정보</router-link>
          <router-link to="/login" class="dropdown-item">로그인</router-link>
          <router-link to="/community/write" class="dropdown-item">글 쓰기</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import userImage from '@/assets/proto.jpg';

export default {
  name: 'NavBar',
  data() {
    return {
      isDropdownOpen: false,
      userImage: userImage
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    handleClickOutside(event) {
      if (this.$refs.dropdownRef && !this.$refs.dropdownRef.contains(event.target)) {
        this.isDropdownOpen = false;
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }
}
</script>

<style scoped>
.navbar {
  background-color: #333;
  padding: 1rem;
}

.navbar-container {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-spacer {
  width: 2.5rem;
}

.navbar-logo {
  font-size: 1.25rem;
  font-weight: bold;
  color: #ffffff;
}

.navbar-profile {
  position: relative;
}

.profile-image {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid black; /* 검은색 테두리 추가 */
}

.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.dropdown-menu {
  position: absolute;
  right: 0;
  margin-top: 0.5rem;
  width: 12rem;
  background-color: white;
  border-radius: 0.375rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.dropdown-item {
  display: block;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: #333;
  text-decoration: none;
}

.dropdown-item:hover {
  background-color: #f3f4f6;
}
</style>