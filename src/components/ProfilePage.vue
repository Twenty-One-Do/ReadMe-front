<template>
  <div class="profile">
    <div class="info-container">
        <div class="profile-pic"></div>
        <div class="profile-details">
            <p><span class="label">이름:</span> <span class="value">이원도</span></p>
            <p><span class="label">생년월일:</span> <span class="value">1999.10.05</span></p>
            <p><span class="label">이메일:</span> <span class="value">dnjseh8962@gmail.com</span></p>
            <p><span class="label">핸드폰 번호:</span> <span class="value">01089623212</span></p>
        </div>
        <div class="profile-buttons">
            <button class="change-password">비밀번호 변경</button>
            <button class="delete-account">회원 탈퇴</button>
        </div>
    </div>
    <hr/>
    <LineList
      title="내 포트폴리오"
      :link="'/profile/portfolio'"
      :items="portfolioItems"
    />
    <hr/>
    <div class="bookmark">
      준비중
    </div>
    <hr/>
    <div class="bookmark">
      준비중
    </div>
  </div>
</template>

<script>
import LineList from '@/components/common/LineList.vue';

export default {
  name: 'ProfilePage',
  components: {
    LineList,
  },
  data() {
    return {
      portfolioItems: [
        { id: 1, title: '포트폴리오 제목', period: '2023', preview:'asd' },
        { id: 2, title: '포트폴리오 제목', period: '2023', preview:'asd' }
      ],
      postItems: [
        { id: 1, content: '제목<br>사진<br>작성자' },
        { id: 2, content: '제목<br>사진<br>작성자' },
        { id: 3, content: '제목<br>사진<br>작성자' }
      ],
      paginationPages: [1, 2, 3, 4, 5]
    };
  },
  methods: {
    handlePageChange(page) {
      console.log(`Page changed to: ${page}`);
      // 페이지 변경 로직을 여기에 추가
    }
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
