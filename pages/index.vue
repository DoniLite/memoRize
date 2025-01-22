<script setup lang="ts">
import Accordion from '~/components/Accordion.vue';

useSeoMeta({
    title: 'MemoRize',
    ogTitle: 'MemoRize',
    description: 'Create, Edit and share memos or tasks. Add your collaboration team to track updates and get a powerful workflow.',
    ogDescription: 'Create, Edit and share memos or tasks. Add your collaboration team to track updates and get a powerful workflow.',
    ogImage: 'https://memo-rize.vercel.app/preview.png',
    twitterCard: 'summary_large_image',
})

</script>

<template>
    <div class="body-bg w-full h-screen flex justify-center items-center">
        <div class=" flex items-center flex-col gap-2 lg:p-0 p-2">
            <h1 class="lg:text-6xl text-3xl text-gradient-2 font-space font-bold text-center lg:w-[50%] w-full  mx-auto">An Unique tool for all
                your memos</h1>
            <p class="text-center lg:w-[50%] w-full mx-auto font-space text-white font-bold">
                Create, Edit and share memos or tasks. Add your collaboration team to track updates and get a powerful
                workflow
            </p>
        </div>
    </div>
    <div class=" lg:w-[80%] w-full pt-8 mx-auto lg:p-0 p-3">
        <Accordion />
    </div>
</template>