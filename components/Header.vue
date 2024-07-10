<script setup lang="ts">

</script>

<template>
  <Toolbar style="border: 0">
    <template #start>
      <img src="/img/logo.png" width="200" height="50">
<!--      <Button icon="pi pi-plus" class="mr-2" severity="secondary" text />-->
<!--      <Button icon="pi pi-print" class="mr-2" severity="secondary" text />-->
<!--      <Button icon="pi pi-upload" severity="secondary" text />-->
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
      <Button label="Quem somos" link />
      <Button label="Como trabalhamos" link />
      <Button label="Treinamento" link />
      <Button label="Contato" link />
    </template>
  </Toolbar>
</template>

<style scoped>

</style>
