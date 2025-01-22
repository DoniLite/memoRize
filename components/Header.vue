<script setup lang="ts">
import { useAppStore } from '~/stores/appStore';

const { isAuthenticated } = useAppStore();
const notShowRoutes = ['/login', '/signup', '/editor'];
</script>

<template>
    <header v-if="!notShowRoutes.includes($route.path)"
        class=" absolute top-0 bg-transparent flex w-full justify-between lg:p-4 p-2">
        <h1 class=" font-orbitron lg:text-2xl text-white font-bold">memoRize</h1>
        <div class="flex gap-4" v-if="!isAuthenticated">
            <NuxtLink to="/login"
                class="text-slate-950 px-8 py-1.5 rounded-lg bg-[#83DE31FF] font-bold font-space hover:bg-slate-950 hover:text-[#83DE31FF] transition-all">
                Login
            </NuxtLink>
            <NuxtLink to="/signup"
                class="text-[#83DE31FF] px-8 lg:inline hidden py-1.5 rounded-lg bg-slate-950 font-bold font-space hover:bg-[#83DE31FF] hover:text-slate-950 transition-all">
                Sign Up
            </NuxtLink>
        </div>
    </header>
</template>