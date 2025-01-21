<script setup lang="ts">
import { useAppStore } from '~/stores/appStore';

const { isAuthenticated, updateShow } = useAppStore();
const notShowRoutes = ['/login', '/signup', '/editor']
</script>

<template>
    <header v-if="!notShowRoutes.includes($route.path)" class=" absolute top-0 bg-transparent flex w-full justify-between lg:p-4">
        <h1 class=" font-orbitron lg:text-2xl text-white font-bold">memoRize</h1>
        <div class="flex gap-4" v-if="!isAuthenticated">
            <NuxtLink to="/login"
                class="text-white lg:px-8 lg:py-1.5 rounded-lg bg-green-500 font-bold font-space hover:bg-[#374151] transition-all"
                @click="() => updateShow(false)"
            >
                Login
            </NuxtLink>
            <NuxtLink to="/signup"
                class="text-white px-8 py-1.5 rounded-lg bg-green-700 font-bold font-space hover:bg-gray-500 transition-all">
                Sign Up
            </NuxtLink>
        </div>
    </header>
</template>