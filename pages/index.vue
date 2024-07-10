<script setup lang="ts">

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

</script>

<template>
  <NuxtLayout name="default">
    <section class="mb-7">
      <h1 class="text-5xl text-center text-[#5E2B97]">Quem é a HWR Consult?</h1>
      <p class="mt-4 text-xl text-center text-[#4B4B4B]">
        A HWR Tech Consult é uma empresa séria, composta por profissionais com mais de 30 anos de experiência em software embarcado para empresas. Nosso compromisso é entender profundamente os problemas de nossos clientes e oferecer soluções personalizadas que atendam às necessidades específicas de cada negócio.
      </p>
    </section>
    <section class="mb-7">
      <h1 class="text-5xl text-center text-[#5E2B97]">
        O que fazemos?
      </h1>
      <div class="flex mt-7">
        <div class="flex">
          <div class="flex-1">
            <h2 class="text-2xl text-[#5E2B97]">Nossa abordagem: </h2>
          </div>
          <div class="flex-1">
            <div>
              <h2 class="text-xl my-3 text-[#5E2B97]">Entendimento Profundo dos Problemas dos Clientes:</h2>
              <p class="mt-3 text-[#4B4B4B]"> Antes de qualquer coisa, ouvimos e compreendemos as dificuldades e os objetivos dos nossos clientes. Acreditamos que uma solução eficaz começa com uma compreensão completa do problema.</p>
            </div>
            <div>
              <h2 class="text-xl my-3 text-[#5E2B97]">Soluções Personalizadas:</h2>
              <p class="mt-3 text-[#4B4B4B]"> Sabemos que cada negócio é único. Por isso, desenvolvemos soluções sob medida que atendem às necessidades específicas de cada cliente, garantindo assim maior eficiência e resultados mais satisfatórios.</p>
            </div>
            <div>
              <h2 class="text-xl my-3 text-[#5E2B97]">Experiência e Expertise:</h2>
              <p class="text-[#4B4B4B]">Com uma equipe altamente qualificada e experiente, acumulando mais de três décadas no setor, estamos preparados para enfrentar os desafios mais complexos do mercado.</p>
            </div>
            <div>
              <h2 class="text-xl my-3 text-[#5E2B97]">Tecnologia de Ponta:</h2>
              <p class="text-[#4B4B4B]">Utilizamos as tecnologias mais avançadas em software embarcado para garantir que nossos clientes tenham acesso às melhores ferramentas e soluções disponíveis.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex mt-6">
        <h2 class="text-2xl flex-1 text-[#5E2B97]">Nossos Serviços: </h2>
        <div class="flex-1">
          <div>
            <h2 class="text-xl my-3 text-[#5E2B97]"> Desenvolvimento de Software Embarcado: </h2>
            <p class="text-[#4B4B4B]"> Criamos sistemas robustos e eficientes que atendem às exigências específicas de cada projeto.</p>
          </div>
          <div>
            <h2 class="text-xl my-3 text-[#5E2B97]"> Consultoria Técnica:</h2>
            <p class="text-[#4B4B4B]">  Oferecemos orientação especializada para ajudar nossos clientes a tomar decisões informadas sobre tecnologia e implementação.</p>
          </div>
          <div>
            <h2 class="text-xl my-3 text-[#5E2B97]"> Suporte e Manutenção: </h2>
            <p class="text-[#4B4B4B]">Garantimos que as soluções implantadas continuem a funcionar perfeitamente, oferecendo suporte contínuo e serviços de manutenção.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="mb-4">
      <h1 class="text-5xl text-center text-[#5E2B97]">Entre em contato</h1>
      <div class="flex mt-7">
        <div class="flex-1 my-auto">
          <p class="text-2xl text-[#5E2B97] max-w-20rem">Diga como a HWR Consult pode te ajudar. Preencha o formulário abaixo e entraremos em contato o mais breve possível.</p>
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
    <section class="mb-4 mt-7">
      <h1 class="text-5xl text-center text-[#5E2B97]">Quem somos?</h1>
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
  </NuxtLayout>
</template>

<style scoped>
.custom-input {
  height: 49px !important;
  font-size: 1.125rem !important;
}
</style>
