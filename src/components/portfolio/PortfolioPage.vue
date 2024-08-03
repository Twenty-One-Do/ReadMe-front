<template>
  <div class="portfolio">
    <PortfolioTitle />
    <hr>
    <Skills :categories="categories" />
    <hr>
    <ProjectList
      title="Projects"
      :link="'/profile/portfolio'"
      :items="portfolioItems"
    />
    <hr>
    <LineList
      title="Certifications"
      :link="'/profile/portfolio'"
      :items="portfolioItems"
    />
    <hr>
    <LineList
      title="Awards"
      :link="'/profile/portfolio'"
      :items="portfolioItems"
    />
    <hr>
    <LineList
      title="Documents"
      :link="'/profile/portfolio'"
      :items="portfolioItems"
    />

  </div>
</template>

<script>
import PortfolioTitle from '@/components/portfolio/PortfolioTitle.vue'
import Skills from '@/components/portfolio/SkillList.vue'
import ProjectList from '@/components/common/ProjectList.vue'
import LineList from '@/components/common/LineList.vue'

export default {
  name: 'PortfolioPage',
  data() {
    return {
      portfolioItems: [
        { id: 1, title: '포트폴리오 제목', period: '2023', preview:'asd' },
        { id: 2, title: '포트폴리오 제목', period: '2023', preview:'asd' }
      ],
      categories: [
        {
          name: '언어',
          skills: ['Python', 'OpenCV', 'PyTorch', 'Java', 'JavaScript', 'C++', 'Csharp', 'Ruby', 'Go', 'Swift']
        },
        {
          name: '협업',
          skills: ['GitHub', 'Slack']
        }
      ]
    }
  },
  components: {
    PortfolioTitle,
    Skills,
    ProjectList,
    LineList,
  }
}
</script>

<style>
.portfolio {
  padding: 40px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

hr {
  margin: 40px 0;
}
</style>