<template>
  <div class="w-full max-w-4xl mx-auto py-8 px-4">

    <div class="flex flex-col sm:flex-row md:items-center mb-20">
      <div class="md:w-3/5">
        <div class="mb-5">
          <span class="text-sm font-bold text-teal-600 font-sf">Hello, I am</span>
          <h1 class="text-4xl my-4 text-gray-800 font-bold">Jonas Kaninda</h1>
          <p class="text-sm text-gray-700 font-sf">DevOps Engineer | Certified Kubernetes Administrator | GitOps Certified | Certified Istio expert | Linux System Administrator.</p>
        </div>
        <div class="text-sm leading-loose text-justify font-medium text-gray-700 pr-4">
          I'm a software engineer with +5 years of professional experience in Software development and years of experience in Kotlin, Laravel, MySQL, Postgres, Spring Boot, Linux SysAdmin, DevOps, Docker, and Kubernetes. Passionate about OpenSource and containerizing applications, my current focus is in the areas of Microservices, API Frameworks, Cloud Native Architecture, Kubernetes, DevOps, and GitOps practices.
        </div> 
        <p class="font-sf text-sm my-3 text-gray-600">Lubumbashi &boxh; DRC</p>
        <h3 class="text-3xl my-4 text-gray-800 font-bold">Summary</h3>
        <div class="text-sm leading-loose text-justify font-medium text-gray-700 pr-4">
          Experienced Software Developer with expertise in design, installation, testing, continuous deployment, and maintenance of software systems. Equipped with a diverse and promising skill set. Proficient in various platforms, languages, frameworks, DevOps, and embedded systems. Experienced with cutting-edge development tools and procedures. Able to effectively self-manage during independent projects, as well as collaborate as part of a productive team.
        </div>
      </div>
      <div class="flex sm:justify-end w-full sm:px-0 mt-6 sm:mt-0 md:w-2/5 relative group">
        <div class="absolute h-full sm:w-52 sm:h-56 right-0 left-32 sm:left-auto sm:-right-2 top-0 sm:top-2 rounded-l-3xl sm:rounded-l-none transition ease-in-out delay-100 group-hover:-right-1 group-hover:top-1 bg-teal-300 sm:bg-teal-400"></div>
        <div class="w-64 h-64 shadow sm:shadow-none rounded-full bg-gray-100 sm:rounded-none sm:w-52 sm:h-56 z-10 relative overflow-hidden">
          <img src="@/assets/img/me.jpeg" class="w-full h-full object-cover z-10 relative rounded" alt="">
        </div>
      </div>
    </div>


    <div class="flex flex-col space-y-10">
      <div>
        <BaseTitle number="01" title="Front-end"/>
        <BaseTech :languages="frontLanguages" :frameworks="frontFramework" />
      </div>

      <div>
        <BaseTitle number="02" title="Back-end"/>
        <BaseTech :languages="backLanguages" :frameworks="backFrameworks" />
      </div>
      <div>
        <BaseTitle number="03" title="Mobile"/>
        <BaseTech :languages="mobiles" />
      </div>

      <div>
        <BaseTitle number="04" title="Data bases"/>
        <BaseTech :languages="databases" />
      </div>

      <div>
        <BaseTitle number="05" title="CMS"/>
        <BaseTech :languages="cms" />
      </div>

      <div>
        <BaseTitle number="06" title="Version control & Collaboration "/>
        <BaseTech :languages="management" />
      </div>

      <div>
        <BaseTitle number="07" title="Servers, container & container Orchestrators"/>
        <BaseTech :languages="deployments" />
      </div>
      <div>
        <BaseTitle number="08" title="Tools"/>
        <BaseTech :languages="devOpsTools" />
      </div>
      <div>
        <BaseTitle number="09" title="Monitoring"/>
        <BaseTech :languages="monitorings" />
      </div>
      <div>
        <BaseTitle number="10" title="Virtualization"/>
        <BaseTech :languages="virtualisations" />
      </div>

      <div>
        <BaseTitle number="11" title="Operating Systems"/>
        <BaseTech :languages="systems" />
      </div>
      <div>
        <BaseTitle number="12" title="CI/CD-GitOps"/>
        <BaseTech :languages="cicd" />
      </div>
      <div>
        <BaseTitle number="13" title="Event/Messaging"/>
        <BaseTech :languages="messaging" />
      </div>
      <div>
        <BaseTitle number="14" title="Public cloud"/>
        <BaseTech :languages="cloud" />
      </div>
      <div>
        <BaseTitle number="15" title="IaC/CM"/>
        <BaseTech :languages="iac" />
      </div>
      <div>
        <BaseTitle number="16" title="Plus"/>
        <BaseTech :languages="plus" />
      </div>
    </div>

    <div class="my-20 flex flex-col items-center justify-center">
      <span class="font-sf font-semibold text-teal-600 text-sm">17. What is the next step ?</span>
      <div class="text-center mb-4">
        <h4 class="text-2xl font-bold mt-4 mb-2 capitalize">Contact</h4>
        <p class="text-sm font-medium text-gray-700">If you want to work with me or have any questions.</p>
      </div>
        <a
           href="mailto:jonaskaninda@gmail.com"
           class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 my-4 border-teal-600 text-teal-600 inline-block px-3 py-2 border-2 rounded-md text-sm font-sf font-semibold hover:bg-teal-500 hover:bg-opacity-10">
          Hire me
        </a>
    </div>


    <div class="">
      <ul class="flex space-x-6 w-full justify-center lg:hidden">
        <li>
          <a href="//github.com/jkaninda" class="" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" class="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 w-6 h-6 fill-gray-700 hover:fill-teal-600"><g data-name="Layer 2"><rect width="24" height="24" opacity="0"/><path d="M16.24 22a1 1 0 0 1-1-1v-2.6a2.15 2.15 0 0 0-.54-1.66 1 1 0 0 1 .61-1.67C17.75 14.78 20 14 20 9.77a4 4 0 0 0-.67-2.22 2.75 2.75 0 0 1-.41-2.06 3.71 3.71 0 0 0 0-1.41 7.65 7.65 0 0 0-2.09 1.09 1 1 0 0 1-.84.15 10.15 10.15 0 0 0-5.52 0 1 1 0 0 1-.84-.15 7.4 7.4 0 0 0-2.11-1.09 3.52 3.52 0 0 0 0 1.41 2.84 2.84 0 0 1-.43 2.08 4.07 4.07 0 0 0-.67 2.23c0 3.89 1.88 4.93 4.7 5.29a1 1 0 0 1 .82.66 1 1 0 0 1-.21 1 2.06 2.06 0 0 0-.55 1.56V21a1 1 0 0 1-2 0v-.57a6 6 0 0 1-5.27-2.09 3.9 3.9 0 0 0-1.16-.88 1 1 0 1 1 .5-1.94 4.93 4.93 0 0 1 2 1.36c1 1 2 1.88 3.9 1.52a3.89 3.89 0 0 1 .23-1.58c-2.06-.52-5-2-5-7a6 6 0 0 1 1-3.33.85.85 0 0 0 .13-.62 5.69 5.69 0 0 1 .33-3.21 1 1 0 0 1 .63-.57c.34-.1 1.56-.3 3.87 1.2a12.16 12.16 0 0 1 5.69 0c2.31-1.5 3.53-1.31 3.86-1.2a1 1 0 0 1 .63.57 5.71 5.71 0 0 1 .33 3.22.75.75 0 0 0 .11.57 6 6 0 0 1 1 3.34c0 5.07-2.92 6.54-5 7a4.28 4.28 0 0 1 .22 1.67V21a1 1 0 0 1-.94 1z"/></g></svg>
          </a>
        </li>
        <li>
          <a href="//twitter.com/jonaskaninda" class="" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" class="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 w-6 h-6 fill-gray-700 hover:fill-teal-600"><g data-name="Layer 2"><g data-name="twitter"><polyline points="0 0 24 0 24 24 0 24" opacity="0"/><path d="M8.51 20h-.08a10.87 10.87 0 0 1-4.65-1.09A1.38 1.38 0 0 1 3 17.47a1.41 1.41 0 0 1 1.16-1.18 6.63 6.63 0 0 0 2.54-.89 9.49 9.49 0 0 1-3.51-9.07 1.41 1.41 0 0 1 1-1.15 1.35 1.35 0 0 1 1.43.41 7.09 7.09 0 0 0 4.88 2.75 4.5 4.5 0 0 1 1.41-3.1 4.47 4.47 0 0 1 6.37.19.7.7 0 0 0 .78.1A1.39 1.39 0 0 1 21 7.13a6.66 6.66 0 0 1-1.28 2.6A10.79 10.79 0 0 1 8.51 20zm0-2h.08a8.79 8.79 0 0 0 9.09-8.59 1.32 1.32 0 0 1 .37-.85 5.19 5.19 0 0 0 .62-1 2.56 2.56 0 0 1-1.91-.85A2.45 2.45 0 0 0 15 6a2.5 2.5 0 0 0-1.79.69 2.53 2.53 0 0 0-.72 2.42l.26 1.14-1.17.08a8.3 8.3 0 0 1-6.54-2.4 7.12 7.12 0 0 0 3.73 6.46l.95.54-.63.9a5.62 5.62 0 0 1-2.68 1.92A8.34 8.34 0 0 0 8.5 18zM19 6.65z"/></g></g></svg>
          </a>
        </li>
        <li>
          <a href="//linkedin.com/in/jonaskaninda" class="" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" class="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 w-6 h-6 fill-gray-700 hover:fill-teal-600"><g data-name="Layer 2"><g data-name="linkedin"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M20 22h-1.67a2 2 0 0 1-2-2v-5.37a.92.92 0 0 0-.69-.93.84.84 0 0 0-.67.19.85.85 0 0 0-.3.65V20a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2v-5.46a6.5 6.5 0 1 1 13 0V20a2 2 0 0 1-2 2zm-4.5-10.31a3.73 3.73 0 0 1 .47 0 2.91 2.91 0 0 1 2.36 2.9V20H20v-5.46a4.5 4.5 0 1 0-9 0V20h1.67v-5.46a2.85 2.85 0 0 1 2.83-2.85z"/><path d="M6 22H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2zM4 10v10h2V10z"/><path d="M5 7a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1z"/></g></g></svg>
          </a>
        </li>
      </ul>

      <div class=" text-center font-sf text-xs mt-4 lg:mt-0">
       -
      </div>
    </div>


  </div>
</template>

<script setup>

  import {reactive} from "vue";
  import BaseTitle from '../components/BaseTitle'
  import BaseTech from '../components/BaseTech'

  const frontLanguages = reactive([
    {
      name: "Hmtl",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },
    {
      name: "Css",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    },
    {
      name: "JavaScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
  ])

  const frontFramework = reactive([
    {
      name: "VueJs",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
    },
    {
      name: "Bootstrap",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
    },
    {
      name: "Alpine.js",
      src: "img/alpine_long.svg"
    },
    {
      name: "Livewire",
      src: "img/underwater_jelly.svg"
    },
    {
      name: "Inertia",
      src: "img/inertia.svg"
    }
  ])

  const backLanguages = reactive([
    {
      name: "Php",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
    },
    {
      name: "Java",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
    },
    {
      name: "Kotlin",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg"
    },
  ])

  const backFrameworks = reactive([
    {
      name: "Laravel",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg"
    },
    {
      name: "Spring boot",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
    },
  ])
  const devOpsTools = reactive([
    {
      name: "Portainer",
      src: "img/portainer-wordmark-1.svg"
    },
    {
      name: "Teleport",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
    },
    {
      name: "Duplicati",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
    },
  ])

  const databases = reactive([
    {
      name: "PostgreSQL",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
    },
    {
      name: "MySQL",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
    },
    {
      name: "SQLlite",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"
    },
    {
      name: "ETCD",
      src: "img/etcd.svg"
    },
    {
      name: "Redis",
      src: "img/redis.png"
    },
  ])

  const management = reactive([
    {
      name: "Git",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    },
    {
      name: "Github",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    },
    {
      name: "Gitlab",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg"
    },
    {
      name: "Bitbucket",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg"
    },
  ])

  const monitorings = reactive([
    {
      name: "Grafana",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg"
    },
    {
      name: "Prometheus",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg"
    }
  ])
  const cms = reactive([
    {
      name: "Wordpress",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg"
    },
    {
      name: "Joomla",
      src: "img/joomla-logo-png-transparent.png"
    }
  ])

  const deployments = reactive([
  
    {
      name: "Nginx",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg"
    },
    {
      name: "Apache",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg"
    },
    {
      name: "Tomcat",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tomcat/tomcat-original.svg"
    },
    {
      name: "Docker",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
    },
    {
      name: "Podman",
      src: "img/podman_510269_full.png"
    },
    {
      name: "Docker Swarm",
      src: "img/docker-swarm.webp"
    },
    {
      name: "Kubernetes",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
    },
  ])
  const virtualisations = reactive([
  
    {
      name: "Vmware",
      src: "img/Vmware.svg.png"
    },
    {
      name: "Proxmox",
      src: "img/Proxmox-logo-860.png"
    },
    {
      name: "VirtualBox",
      src: "img/virtualbox-icon.svg"
    },
    
  ])

  const systems = reactive([
  {
      name: "Ubuntu Linux",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
    },
  {
      name: "Centos",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
    },
  {
      name: "macOS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg"
    }, 
  ])
  const plus = reactive([
  {
      name: "Nginx proxy manager",
      src: "img/nginx-proxy.png"
    },
  {
      name: "Treafik/ Ingress controller",
      src: "img/Traefik.logo.png"
    },
  
  {
      name: "NGINX Ingress",
      src: "img/ingress.png"
    }, 
  {
      name: "Istio",
      src: "img/istio.png"
    }, 
  ])
  const mobiles = reactive([
  {
      name: "Android Kotlin",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg"
    }
  
  ])
  const cicd = reactive([
  {
      name: "Jenkins",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg"
    },
    {
      name: "ArgoCd",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg"
    },
    {
      name: "FluxCd",
      src: "/img/flux.jpg"
    },
    {
      name: "Weaveworks",
      src: "/img/Weaveworks-colour-logo-stacked.jpg"
    },
    {
      name: "Github action",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    },
    {
      name: "GitLab CI/CD",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg"
    },
  
  ])
  const messaging = reactive([
  {
      name: "Apache Kafka",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg"
    },
    
  
  ])
  const cloud = reactive([
  {
      name: "AWS",
      src: "img/AWS-Logo.jpg"
    },
  {
      name: "Google Cloud",
      src: "img/Google-Cloud-Logo-1068x601.jpg"
    },
  {
      name: "Digital Ocean",
      src: "img/DigitalOcean-Logo.wine.png"
    },
  ])
  const iac = reactive([
  {
      name: "Terraform",
      src: "img/terraform.png"
    },
  {
      name: "Ansible",
      src: "img/Ansible_logo.svg.png"
    },
  ])

</script>
<script> export default { name: 'WelcomePage' }</script>
