<script setup lang="ts">
 const layout = "default";
</script>

<template>
  <Head>
    <Link rel="icon" href="/icon.svg"></Link>
  </Head>
  <div>
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
