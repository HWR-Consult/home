<script setup lang="ts">

</script>

<template>
  <Container class="bg-[--p-toolbar-background]">
    <Toolbar style="border: 0">
    <template #start>
      <img src="/img/logo.png" width="200" height="50">
    </template>

    <template #center>
<!--      <IconField>-->
<!--        <InputIcon>-->
<!--          <i class="pi pi-search" />-->
<!--        </InputIcon>-->
<!--        <InputText placeholder="Search" />-->
<!--      </IconField>-->
    </template>

    <template #end>
      <Button icon="pi pi-whatsapp" as="a" label="Entrar em contato" href="https://api.whatsapp.com/send?phone=5541998457859" target="_blank" />
      <!-- <Button class="header-buttons" label="Quem somos" link />
      <Button class="header-buttons" label="Como trabalhamos" link />
      <Button class="header-buttons" label="Treinamento" link />
      <Button class="header-buttons" label="Contato" link /> -->
    </template>
  </Toolbar>
  </Container>
  
</template>
