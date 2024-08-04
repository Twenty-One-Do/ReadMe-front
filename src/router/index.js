import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import LoginPage from '@/components/auth/LoginPage.vue';
import RegisterPage from '@/components/auth/RegisterPage.vue';
import ProfilePage from '@/components/ProfilePage.vue';
import PortfolioPage from '@/components/portfolio/PortfolioPage.vue';
import PortfolioList from '@/components/portfolio/PortfolioList.vue';
import StatisticsPage from '@/components/StatisticsPage.vue';
import CommunityPage from '@/components/CommunityPage.vue';
import WritePage from '@/components/WritePage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage
  },
  {
    path: '/profile',
    name: 'ProfilePage',
    component: ProfilePage
  },
  {
    path: '/profile/portfolio',
    name: 'PortfolioPage',
    component: PortfolioPage
  },
  {
    path: '/portfoliolist',
    name: 'PortfolioList',
    component: PortfolioList
  },
  {
    path: '/statistic',
    name: 'StatisticsPage',
    component: StatisticsPage
  },
  {
    path: '/community',
    name: 'CommunityPage',
    component: CommunityPage
  },
  {
    path: '/community/write',
    name: 'WritePage',
    component: WritePage
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
