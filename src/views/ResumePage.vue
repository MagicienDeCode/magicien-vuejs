<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useMeta } from '@/composables/useMeta'

useMeta({
  title: 'Resume - MagicienDeCode',
  description: 'Resume of LI Xiang - Full Stack Software Engineer',
})

const slimpayItems = [
  {
    key: '1',
    label: 'Since 2023, Tech Lead',
    children: `- Design and develop new open banking products, guiding team members, propose technical improvements.
- Integration with Trustly products, new version of SlimCollects (PIS/AIS)
- Webhook projects.
- Instant payment solution.`,
  },
  {
    key: '2',
    label: 'Since 2021, Full Stack Software Engineer',
    children: `- PIS team, design and develop new SlimCollect(PIS) ecosystem, springboot, axon framework CQRS, domain driven design, event sourcing.
- PaymentFactory team, 1.Resolve balance problems, 2.Help Financial team to prepare ACPR audit, 3.Develop a kotlin based project with SQL native (improve daily reconciliation of balance from 4 days to 1 hour average).`,
  },
  {
    key: '3',
    label: 'Since 2018, Junior Software Engineer',
    children: `- Innovation team, one of the pioneers for Kotlin and open-banking (PSD2) product.
- Proof of Concept with Kotlin, connect to sandbox of bank.
- ETL system with Kotlin(Extract-Transform-Load).`,
  },
]

const mbItems = [
  {
    key: '1',
    label: 'Full Stack Developer',
    children: `- Refactoring back office, participate in the development of new features.
- Learn and create microservices for delivery service, billing service.
- Participate in the design and development for the site monbanquet.fr.
- Monitoring and maintaining of all microservices using AWS Kubernetes.`,
  },
]

const educationP7Master = [
  {
    key: '1',
    label: 'Master of Computer Science',
    children: '- Major in Engineering, Algorithms, Distribution systems and Database.',
  },
]

const educationP7French = [
  {
    key: '1',
    label: 'French Language',
    children: '',
  },
]

const educationCJZF = [
  {
    key: '1',
    label: 'Bachelor of Information Management System',
    children: '- Major in Engineering, Information systems and Accounting.',
  },
]
</script>

<template>
  <div class="page-container">
    <a-breadcrumb separator=">" class="breads">
      <a-breadcrumb-item>
        <RouterLink to="/" class="decoration-none">Home</RouterLink>
      </a-breadcrumb-item>
      <a-breadcrumb-item>Resume</a-breadcrumb-item>
    </a-breadcrumb>

    <div class="page-content">
      <aside class="page-sidebar">
        <a-timeline class="pages-timeline">
              <a-timeline-item color="grey">
                <template #dot>
                  <a-badge>
                    <a-avatar src="/icon_resume.png" :size="20" />
                  </a-badge>
                </template>
                <a href="#basic-info" class="decoration-none">
                  <span class="pages-line-text">RESUME</span>
                </a>
              </a-timeline-item>
              <a-timeline-item color="grey">
                <template #dot>
                  <a-badge>
                    <a-avatar src="/tools.png" :size="20" />
                  </a-badge>
                </template>
                <a href="#skills" class="decoration-none">
                  <span class="pages-line-text">SKILLS</span>
                </a>
              </a-timeline-item>
              <a-timeline-item color="grey">
                <template #dot>
                  <a-badge>
                    <a-avatar src="/exp.png" :size="20" />
                  </a-badge>
                </template>
                <a href="#experience" class="decoration-none">
                  <span class="pages-line-text">EXPERIENCE</span>
                </a>
              </a-timeline-item>
              <a-timeline-item color="grey">
                <template #dot>
                  <a-badge>
                    <a-avatar src="/education.png" :size="20" />
                  </a-badge>
                </template>
                <a href="#education" class="decoration-none">
                  <span class="pages-line-text">EDUCATION</span>
                </a>
              </a-timeline-item>
        </a-timeline>
      </aside>

      <main class="page-main">
        <!-- Basic Info -->
          <div>
            <h2 id="basic-info">Resume</h2>
            <a-row>
              <a-col :flex="4" class="resume-info-col">
                <h2>LI Xiang</h2>
                <h3>Full Stack Software Engineer</h3>
                <h3>Tech Lead</h3>
                <h3>Looking for part time job</h3>
              </a-col>
              <a-col :flex="1" class="basic-info-left-col">
                <RouterLink to="/" class="decoration-none">
                  <a-badge>
                    <a-avatar src="/xiang2.jpg" class="pages-xiang-avatar" />
                  </a-badge>
                </RouterLink>
              </a-col>
            </a-row>
          </div>

          <!-- Skills -->
          <div>
            <h2 id="skills">SKILLS</h2>
            <div class="text-size">
              <p>
                This section includes all my skills. I am first and foremost a
                Full Stack Software Engineer but I also have a strong
                background in machine learning and AI. This combination of
                skills is what makes me unique and allows me to work on a wide
                range of <RouterLink to="/projects">projects</RouterLink>.
              </p>
            </div>

            <a-divider>Language</a-divider>
            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
              <a-col class="gutter-row" :xs="12" :sm="12" :md="8" :lg="8">
                <a-flex align="center" gap="small">
                  <a-badge class="skill-badge">
                    <a-avatar src="/java.png" />
                  </a-badge>
                  <span class="skill-title">Java</span>
                </a-flex>
              </a-col>
              <a-col class="gutter-row" :xs="12" :sm="12" :md="8" :lg="8">
                <a-flex align="center" gap="small">
                  <a-badge class="skill-badge">
                    <a-avatar src="/kotlin.png" />
                  </a-badge>
                  <span class="skill-title">Kotlin</span>
                </a-flex>
              </a-col>
              <a-col class="gutter-row" :xs="12" :sm="12" :md="8" :lg="8">
                <a-flex align="center" gap="small">
                  <a-badge class="skill-badge">
                    <a-avatar src="/python.png" />
                  </a-badge>
                  <span class="skill-title">Python</span>
                </a-flex>
              </a-col>
            </a-row>

            <a-divider>Framework / Tool</a-divider>
            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
              <a-col class="gutter-row" :xs="12" :sm="12" :md="8" :lg="8">
                <a-flex align="center" gap="small">
                  <a-badge class="skill-badge">
                    <a-avatar src="/spring-boot.png" />
                  </a-badge>
                  <span class="skill-title">SpringBoot</span>
                </a-flex>
              </a-col>
              <a-col class="gutter-row" :xs="12" :sm="12" :md="8" :lg="8">
                <a-flex align="center" gap="small">
                  <a-badge class="skill-badge">
                    <a-avatar src="/axon.png" />
                  </a-badge>
                  <span class="skill-title">Axon CQRS</span>
                </a-flex>
              </a-col>
              <a-col class="gutter-row" :xs="12" :sm="12" :md="8" :lg="8">
                <a-flex align="center" gap="small">
                  <a-badge class="skill-badge">
                    <a-avatar src="/Kafka.png" />
                  </a-badge>
                  <span class="skill-title">Kafka</span>
                </a-flex>
              </a-col>
            </a-row>
            <br />
            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
              <a-col class="gutter-row" :xs="12" :sm="12" :md="8" :lg="8">
                <a-flex align="center" gap="small">
                  <a-badge class="skill-badge">
                    <a-avatar src="/gatsbyjs.png" />
                  </a-badge>
                  <span class="skill-title">GatsbyJs</span>
                </a-flex>
              </a-col>
              <a-col class="gutter-row" :xs="12" :sm="12" :md="8" :lg="8">
                <a-flex align="center" gap="small">
                  <a-badge class="skill-badge">
                    <a-avatar src="/angular2.png" />
                  </a-badge>
                  <span class="skill-title">Angular</span>
                </a-flex>
              </a-col>
              <a-col class="gutter-row" :xs="12" :sm="12" :md="8" :lg="8">
                <a-flex align="center" gap="small">
                  <a-badge class="skill-badge">
                    <a-avatar src="/react.png" />
                  </a-badge>
                  <span class="skill-title">React</span>
                </a-flex>
              </a-col>
            </a-row>
            <br />
            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
              <a-col class="gutter-row" :xs="12" :sm="12" :md="8" :lg="8">
                <a-flex align="center" gap="small">
                  <a-badge class="skill-badge">
                    <a-avatar src="/gradlekts.png" />
                  </a-badge>
                  <span class="skill-title">Gradle</span>
                </a-flex>
              </a-col>
              <a-col class="gutter-row" :xs="12" :sm="12" :md="8" :lg="8">
                <a-flex align="center" gap="small">
                  <a-badge class="skill-badge">
                    <a-avatar src="/maven.png" />
                  </a-badge>
                  <span class="skill-title">Maven</span>
                </a-flex>
              </a-col>
              <a-col class="gutter-row" :xs="12" :sm="12" :md="8" :lg="8">
                <a-flex align="center" gap="small">
                  <a-badge class="skill-badge">
                    <a-avatar src="/docker.png" />
                  </a-badge>
                  <span class="skill-title">Docker</span>
                </a-flex>
              </a-col>
            </a-row>

            <a-divider>Database</a-divider>
            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
              <a-col class="gutter-row" :xs="12" :sm="12" :md="8" :lg="8">
                <a-flex align="center" gap="small">
                  <a-badge class="skill-badge">
                    <a-avatar src="/PostgreSQL.png" />
                  </a-badge>
                  <span class="skill-title">MySQL / PostgreSQL</span>
                </a-flex>
              </a-col>
              <a-col class="gutter-row" :xs="12" :sm="12" :md="8" :lg="8">
                <a-flex align="center" gap="small">
                  <a-badge class="skill-badge">
                    <a-avatar src="/dynamodb.png" />
                  </a-badge>
                  <span class="skill-title">Dynamo DB</span>
                </a-flex>
              </a-col>
              <a-col class="gutter-row" :xs="12" :sm="12" :md="8" :lg="8">
                <a-flex align="center" gap="small">
                  <a-badge class="skill-badge">
                    <a-avatar src="/mongodb.png" />
                  </a-badge>
                  <span class="skill-title">Mongo DB</span>
                </a-flex>
              </a-col>
            </a-row>

            <a-divider>Knowledge</a-divider>
            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
              <a-col class="gutter-row" :xs="12" :sm="12" :md="8" :lg="8">
                <a-flex align="center" gap="small">
                  <a-badge class="skill-badge">
                    <a-avatar src="/bank.png" />
                  </a-badge>
                  <span class="skill-title">Open banking PIS/AIS</span>
                </a-flex>
              </a-col>
              <a-col class="gutter-row" :xs="12" :sm="12" :md="8" :lg="8">
                <a-flex align="center" gap="small">
                  <a-badge class="skill-badge">
                    <a-avatar src="/european.png" />
                  </a-badge>
                  <span class="skill-title">SEPA SDD/SCT (instant)</span>
                </a-flex>
              </a-col>
              <a-col class="gutter-row" :xs="12" :sm="12" :md="8" :lg="8">
                <a-flex align="center" gap="small">
                  <a-badge class="skill-badge">
                    <a-avatar src="/Euro.png" />
                  </a-badge>
                  <span class="skill-title">Balance</span>
                </a-flex>
              </a-col>
            </a-row>
            <br />
            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
              <a-col class="gutter-row" :xs="12" :sm="12" :md="8" :lg="8">
                <a-flex align="center" gap="small">
                  <a-badge class="skill-badge">
                    <a-avatar src="/ml.png" />
                  </a-badge>
                  <span class="skill-title">Machine Learning</span>
                </a-flex>
              </a-col>
              <a-col class="gutter-row" :xs="12" :sm="12" :md="8" :lg="8">
                <a-flex align="center" gap="small">
                  <a-badge class="skill-badge">
                    <a-avatar src="/leetcode.png" />
                  </a-badge>
                  <span class="skill-title">Algorithm</span>
                </a-flex>
              </a-col>
              <a-col class="gutter-row" :xs="12" :sm="12" :md="8" :lg="8">
                <a-flex align="center" gap="small">
                  <a-badge class="skill-badge">
                    <a-avatar src="/kaggle.png" />
                  </a-badge>
                  <span class="skill-title">Kaggle</span>
                </a-flex>
              </a-col>
            </a-row>
            <br />
          </div>

          <!-- Experience -->
          <div>
            <h2 id="experience">EXPERIENCE</h2>
            <a-divider orientation="left">
              <div class="exp-head">
                <img alt="slimpay" class="company-icon" src="/slimpay.jpg" />
                <a target="_blank" href="https://www.slimpay.com/">
                  <span class="text-link">Slimpay</span>
                </a>
                <span class="time-text display-none">
                  October 2018 - now (~ 6years)
                </span>
                <span class="time-text display-only-mobile">
                  until now (~ 6years)
                </span>
              </div>
            </a-divider>
            <a-collapse :default-active-key="['1', '2', '3']" ghost>
              <a-collapse-panel
                v-for="item in slimpayItems"
                :key="item.key"
                :header="item.label"
              >
                <div class="black" style="white-space: pre-line">
                  {{ item.children }}
                </div>
              </a-collapse-panel>
            </a-collapse>
            <div class="text-size">
              <p>
                <span class="key-word">Key Words: </span>SpringBoot, Kotlin,
                Java, Domain Driven Design, Event Sourcing, CQRS,
                AxonFramework, Kafka, DynamoDB, PostgreSQL, Docker
              </p>
            </div>
            <br />

            <a-divider orientation="left">
              <div class="exp-head">
                <img alt="monbanquet.fr" class="company-icon" src="/mb.jpg" />
                <a target="_blank" href="https://monbanquet.fr/">
                  <span class="text-link">Monbanque.fr</span>
                </a>
                <span class="time-text display-none">
                  Apr. - Sep. 2018 (6 months)
                </span>
                <span class="time-text display-only-mobile">
                  Intern (6 months)
                </span>
              </div>
            </a-divider>
            <a-collapse ghost>
              <a-collapse-panel
                v-for="item in mbItems"
                :key="item.key"
                :header="item.label"
              >
                <div class="black" style="white-space: pre-line">
                  {{ item.children }}
                </div>
              </a-collapse-panel>
            </a-collapse>
            <div class="text-size">
              <p>
                <span class="key-word">Key Words: </span>Java, SpringBoot,
                MongoDB, Kubernetes, React, Angular, Kafka
              </p>
            </div>
          </div>
          <br />

          <!-- Education -->
          <div>
            <h2 id="education">EDUCATION</h2>
            <a-divider orientation="left" class="divider-black">
              <div class="exp-head">
                <img alt="paris-diderot" class="company-icon-p7" src="/p72.png" />
                <span class="text-link display-none">
                  University of Paris-Diderot
                </span>
                <span class="time-text">2016-2018 (France)</span>
              </div>
            </a-divider>
            <a-collapse ghost>
              <a-collapse-panel
                v-for="item in educationP7Master"
                :key="item.key"
                :header="item.label"
              >
                <div class="black">{{ item.children }}</div>
              </a-collapse-panel>
            </a-collapse>
            <br />

            <a-divider orientation="left">
              <div class="exp-head">
                <img alt="paris-diderot" class="company-icon-p7" src="/p72.png" />
                <span class="text-link display-none">
                  University of Paris-Diderot
                </span>
                <span class="time-text">2015-2016 (France)</span>
              </div>
            </a-divider>
            <a-collapse ghost>
              <a-collapse-panel
                v-for="item in educationP7French"
                :key="item.key"
                :header="item.label"
              >
                <div class="black">{{ item.children }}</div>
              </a-collapse-panel>
            </a-collapse>
            <br />

            <a-divider orientation="left">
              <div class="exp-head">
                <img
                  alt="henancaijingzhengfa"
                  class="company-icon"
                  src="/cjzf.png"
                />
                <span class="text-link display-none">
                  Henan University of Economics and Law
                </span>
                <span class="time-text">2011-2015 (China)</span>
              </div>
            </a-divider>
            <a-collapse ghost>
              <a-collapse-panel
                v-for="item in educationCJZF"
                :key="item.key"
                :header="item.label"
              >
                <div class="black">{{ item.children }}</div>
              </a-collapse-panel>
            </a-collapse>
            <br />
          </div>
        </main>
      </div>
      <a-back-top />
    </div>
</template>

<style lang="less" scoped>
@import '@/assets/styles/pages/resume.less';
</style>
