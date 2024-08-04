<template>
  <div class="profile" v-if="profile">
    <div class="info-container">
      <div class="profile-pic"></div>
      <div class="profile-details">
        <p><span class="label">이름:</span> <span class="value">{{ profile.name }}</span></p>
        <p><span class="label">생년월일:</span> <span class="value">{{ profile.birth_date || 'N/A' }}</span></p>
        <p><span class="label">이메일:</span> <span class="value">{{ profile.email }}</span></p>
        <p><span class="label">핸드폰 번호:</span> <span class="value">{{ profile.phone_number }}</span></p>
      </div>
      <div class="profile-buttons">
        <button class="change-password">비밀번호 변경</button>
        <button class="delete-account">회원 탈퇴</button>
      </div>
    </div>
    <hr />

    <ProjectList
      title="포트폴리오"
      link=""
      :items="profile.portfolios"
    />

    <LineList
      title="General Posts"
      link=""
      :items="profile.general_posts"
    />

    <LineList
      title="About Posts"
      link=""
      :items="profile.about_posts"
    />

    <LineList
      title="Certificates"
      link=""
      :items="profile.certificate_posts"
    />

    <LineList
      title="Awards"
      link=""
      :items="profile.award_posts"
    />

    <LineList
      title="Documents"
      link=""
      :items="profile.document_posts"
    />

  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
import LineList from '@/components/common/LineList.vue';
import ProjectList from '@/components/common/ProjectList.vue';

export default {
  name: 'ProfilePage',
  components: {
    LineList,
    ProjectList,
  },
  data() {
    return {
      profile: null, // 사용자 프로필 데이터를 저장할 객체
    };
  },
  methods: {
    async fetchProfile() {
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) {
        this.$router.push('/login');
        return;
      }

      try {
        const response = await this.$axios.get('/account/', {
          headers: {
            Authorization: `Bearer ${accessToken}`  // 요청 헤더에 토큰 포함
          }
        });
        this.profile = response.data;
      } catch (error) {
        console.error('Failed to fetch profile:', error.response ? error.response.data : error.message);
        alert('Failed to load profile data. Please try again.');
      }
    }
  },
  mounted() {
    this.fetchProfile();
  }
}
</script>

<style scoped>
.profile {
  padding: 40px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

hr {
  margin: 30px 5px;
}

.info-container {
  text-align: center;
  background-color: #fff;
}
.profile-pic {
  width: 150px;
  height: 150px;
  background-color: #ff4500;
  border-radius: 50%;
  margin: 0 auto 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.profile-details {
  margin-bottom: 20px;
}
.profile-details p {
  margin: 10px 0;
  font-size: 16px;
}
.label {
  font-weight: bold;
  color: #333;
}
.value {
  font-weight: normal;
  color: #555;
}
.profile-buttons {
  margin-top: 20px;
}
.profile-buttons button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;
}
.change-password {
  background-color: #f0f0f0;
  color: #000;
}
.delete-account {
  background-color: #ff4500;
  color: #fff;
}

.bookmark {
  width: 100%;
  height: 300px;
}
</style>
