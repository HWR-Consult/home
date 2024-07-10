<script setup lang="ts">

useHead({
  script: [{
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HWR Tech Consult",
    "url": "https://www.hwrconsult.com/",
    "logo": "https://www.hwrconsult.com/img/logo.png",
    "description": "HWR Tech Consult provides expert consulting in Vue.js, Nuxt.js, Node.js, and Spring Boot for customized technology solutions.",
    "sameAs": [
      "https://www.linkedin.com/company/hwr-tech-consult/"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-41-9845-7859",
      "contactType": "Customer Service",
      "areaServed": "BR"
    }
  },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "HWR Tech Consult",
      "url": "https://www.hwrconsult.com/",
      "logo": "https://www.hwrconsult.com/img/logo.png",
      "description": "A HWR Tech Consult oferece consultoria especializada em Vue.js, Nuxt.js, Node.js e Spring Boot para soluções tecnológicas personalizadas.",
      "sameAs": [
        "https://www.linkedin.com/company/hwr-tech-consult/"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+55-41-9845-7859",
        "contactType": "Atendimento ao Cliente",
        "areaServed": "BR"
      }
    }],
  __dangerouslyDisableSanitizers: ['script'],
})

const disableSave = computed(() => {
  return !contact.name || !contact.email || !contact.company || !contact.role || !contact.message || !contact.phone;
});

interface Contact {
  name: string;
  email: string;
  company: string;
  role: string;
  message: string;
  phone: string;
}

const contact = reactive<Contact>({
  name: '',
  email: '',
  company: '',
  role: '',
  message: '',
  phone: '',
});

const responsiveOptions = ref({
  breakpoint: '1250px',
  numVisible: 3,
  numScroll: 3,
});

const images = ref([
  { itemImageSrc: '/img/slide-02.jpg', alt: 'Description for Image 2', title: 'Title 2' },
  { itemImageSrc: '/img/slide-01.jpg', alt: 'Description for Image 1', title: 'Title 1' }
])

const products = ref([
  { itemImageSrc: '/img/clientes/01.jpg' },
  { itemImageSrc: '/img/clientes/02.jpg' },
  { itemImageSrc: '/img/clientes/03.jpg' },
  { itemImageSrc: '/img/clientes/04.jpg' },
  { itemImageSrc: '/img/clientes/05.jpg' },
  { itemImageSrc: '/img/clientes/06.jpg' },
  { itemImageSrc: '/img/clientes/07.jpg' },
  { itemImageSrc: '/img/clientes/08.jpg' },
  { itemImageSrc: '/img/clientes/09.jpg' },
  { itemImageSrc: '/img/clientes/10.jpg' },
  { itemImageSrc: '/img/clientes/11.jpg' },
  { itemImageSrc: '/img/clientes/12.jpg' }
])
</script>

<template>
  <NuxtLayout name="default">
    <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" containerStyle="border:0;"
    :showItemNavigators="true" :showThumbnails="false">
      <template #item="slotProps">
          <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
      </template>
      <template #thumbnail="slotProps">
          <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
      </template>
  </Galleria>

    <Container class="bg-[--p-toolbar-background] py-10">
    <section>
      <h1 class="text-5xl text-center text-[#7c35ce]">Quem é a HWR Consult?</h1>
      <p class="mt-4 text-xl text-center">
        A HWR Tech Consult é uma empresa séria, composta por profissionais com mais de 30 anos de experiência em software para empresas. Nosso compromisso é entender profundamente os problemas de nossos clientes e oferecer soluções personalizadas que atendam às necessidades específicas de cada negócio.
      </p>
    </section>
  </Container>
  <Container class="py-10">
    <section class="mb-7">
      <h1 class="text-5xl text-center text-[#7c35ce]">
        O que fazemos?
      </h1>
      <div class="flex mt-7">
        <div class="flex gap-4">
          <div class="flex-1">
            <div>
              <h2 class="text-xl my-3 text-[#7c35ce]">Entendimento Profundo dos Problemas dos Clientes</h2>
              <p class="mt-3"> Antes de qualquer coisa, ouvimos e compreendemos as dificuldades e os objetivos dos nossos clientes. Acreditamos que uma solução eficaz começa com uma compreensão completa do problema.</p>
            </div>
            <div>
              <h2 class="text-xl my-3 text-[#7c35ce]">Soluções Personalizadas</h2>
              <p class="mt-3"> Sabemos que cada negócio é único. Por isso, desenvolvemos soluções sob medida que atendem às necessidades específicas de cada cliente, garantindo assim maior eficiência e resultados mais satisfatórios.</p>
            </div>
          </div>
          <div class="flex-1">
            <div>
              <h2 class="text-xl my-3 text-[#7c35ce]">Experiência e Expertise</h2>
              <p class="">Com uma equipe altamente qualificada e experiente, acumulando mais de três décadas no setor, estamos preparados para enfrentar os desafios mais complexos do mercado.</p>
            </div>
            <div>
              <h2 class="text-xl my-3 text-[#7c35ce]">Tecnologia de Ponta</h2>
              <p class="">Utilizamos as tecnologias mais avançadas em software para garantir que nossos clientes tenham acesso às melhores ferramentas e soluções disponíveis.</p>
            </div>
          </div>
        </div>
      </div>
      <h1 class="text-5xl text-center text-[#7c35ce] mt-7">
        Nossos Serviços:
      </h1>
      <div class="flex mt-6 gap-4 text-center">
          <div class="flex-1">
            <img src="/img/about-01.jpg" alt="Desenvolvimento de Software" class="mx-auto rounded-full">
            <h2 class="text-xl my-3 text-[#7c35ce]"> Desenvolvimento de Software </h2>
            <p class=""> Criamos sistemas robustos e eficientes que atendem às exigências específicas de cada projeto.</p>
          </div>
          <div class="flex-1">
            <img src="/img/about-02.jpg" alt="Consultoria Técnica" class="mx-auto rounded-full">
            <h2 class="text-xl my-3 text-[#7c35ce]"> Consultoria Técnica</h2>
            <p class="">  Oferecemos orientação especializada para ajudar nossos clientes a tomar decisões informadas sobre tecnologia e implementação.</p>
          </div>
          <div class="flex-1">
            <img src="/img/about-03.jpg" alt="Suporte e Manutenção" class="mx-auto rounded-full">
            <h2 class="text-xl my-3 text-[#7c35ce]"> Suporte e Manutenção</h2>
            <p class="">Garantimos que as soluções implantadas continuem a funcionar perfeitamente, oferecendo suporte contínuo e serviços de manutenção.</p>
          </div>
      </div>
    </section>
  </Container>
    <Container class="bg-[--p-toolbar-background] py-10">
      <section class="mb-4">
      <h1 class="text-5xl text-center text-[#7c35ce]">Entre em contato</h1>
      <div class="flex mt-7">
        <div class="flex-1 my-auto">
          <p class="text-2xl text-[#7c35ce] max-w-20rem">Diga como a HWR Consult pode te ajudar. Preencha o formulário abaixo e entraremos em contato o mais breve possível.</p>
        </div>
        <div class="flex-1">
          <InputText class="w-full mb-3" v-model="contact.name" type="text" size="large" placeholder="Nome" />
          <InputText class="w-full mb-3" v-model="contact.email" type="text" size="large" placeholder="E-mail" />
          <div class="flex justify-between mb-3">
            <InputText class="w-[49%]" v-model="contact.company" type="text" size="large" placeholder="Empresa" />
            <InputText class="w-[49%]" v-model="contact.role" type="text" size="large" placeholder="Cargo" />
          </div>
          <InputText class="w-full mb-3" v-model="contact.message" type="text" size="large" placeholder="Como a HWR pode te ajudar?" />
          <InputMask mask="(99) 99999-9999" class="w-full mb-6 custom-input" v-model="contact.phone" type="text" size="large" placeholder="Telefone para contato" />
          <Button :disabled="disableSave" icon="pi pi-send" class="bg-red" label="Enviar" severity="help" />
        </div>
      </div>
    </section>
    </Container>
    <Container class="py-10">
      <section class="py-10">
      <h1 class="text-5xl text-center text-[#7c35ce] pb-10">Clientes</h1>
      <Carousel :value="products" :numVisible="10" :numScroll="3" class="py-5">
          <template #item="slotProps">
              <img :src="slotProps.data.itemImageSrc" alt="">
          </template>
      </Carousel>
    </section>

  </Container>
    <Container class="py-10">
      <section class="py-10">
      <h1 class="text-5xl text-center text-[#7c35ce]">Quem somos?</h1>
      <div class="flex mt-7">
        <div class="flex-1 flex flex-col items-center">
          <Avatar image="/img/hamilton.jpeg" class="mr-2" size="xlarge" shape="circle" />
          <p class="text-xl font-bold mt-4">Hamilton Pinheiro</p>
          <p>Engenheiro/Arquiteto Front-end</p>
          <Button class="mt-2" as="a" href="https://www.linkedin.com/in/hamilton-gabriel/" target="_blank" rel="noopener" icon="pi pi-linkedin" aria-label="linkedin" severity="info" />
        </div>
        <div class="flex-1 flex flex-col items-center">
          <Avatar image="/img/ruan.jpeg" class="mr-2" size="xlarge" shape="circle" />
          <p class="text-xl font-bold mt-4">Ruan Felssner</p>
          <p>Eng. de Software e
            Analista de Requisitos</p>
          <Button class="mt-2" as="a" href="https://www.linkedin.com/in/ruanfelssner/" target="_blank" rel="noopener" icon="pi pi-linkedin" aria-label="linkedin" severity="info" />
        </div>
        <div class="flex-1 flex flex-col items-center">
          <Avatar image="/img/wender.jpeg" class="mr-2" size="xlarge" shape="circle" />
          <p class="text-xl font-bold mt-4">Wender Galan</p>
          <p>Engenheiro/Arquiteto Back-end</p>
          <Button class="mt-2" as="a" href="https://www.linkedin.com/in/wendergalan/" target="_blank" rel="noopener" icon="pi pi-linkedin" aria-label="linkedin" severity="info" />
        </div>
        <div class="flex-1 flex flex-col items-center">
          <Avatar image="/img/sergio.jpeg" class="mr-2" size="xlarge" shape="circle" />
          <p class="text-xl font-bold mt-4">Sergio Souza</p>
          <p>Especialista Logística e Professor de Dados</p>
          <Button class="mt-2" as="a" href="https://www.linkedin.com/in/sergio-souza-85375022/" target="_blank" rel="noopener" icon="pi pi-linkedin" aria-label="linkedin" severity="info" />
        </div>
      </div>
    </section>

  </Container>
  </NuxtLayout>
</template>

<style scoped>
.custom-input {
  height: 49px !important;
  font-size: 1.125rem !important;
}
</style>
