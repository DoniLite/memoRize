<script setup lang="ts">
import Car from './icons/Car.vue';
import Check from './icons/Check.vue';
import Document from './icons/Document.vue';
import Notes from './icons/Notes.vue';
import Team from './icons/Team.vue';

</script>

<template>
    <div class=" p-2 flex flex-col gap-8 w-full">
        <div class=" w-full flex lg:flex-row flex-col lg:gap-4 gap-2">
            <div class=" lg:w-[50%] w-full flex justify-center flex-col">
                <h1 class=" text-white font-bold font-space text-3xl mb-3 text-[#83DE31FF]">A modern Notes tool</h1>
                <p class=" text-white font-bold font-space text-lg">Create, organize and share your notes or your memos
                    in one app. Supports markdown syntax. Boost your productivity with more features for management and
                    collaboration</p>
            </div>
            <div class=" lg:w-[40%] w-full h-full flex justify-center items-center">
                <div class=" p-4 rounded-full">
                    <Notes class=" w-[8rem] h-[8rem]" />
                </div>
            </div>
        </div>

        <div class=" w-full flex lg:flex-row flex-col-reverse lg:gap-4 gap-2">
            <div class=" lg:w-[40%] w-full h-full flex justify-center items-center">
                <div class=" p-4 rounded-full">
                    <Check class=" w-[8rem] h-[8rem]" />
                </div>
            </div>
            <div class=" lg:w-[50%] w-full flex justify-center flex-col">
                <h1 class=" text-white font-bold font-space text-3xl mb-3 text-[#83DE31FF]">Organize your workflow</h1>
                <p class=" text-white font-bold font-space text-lg">Track all the progress on what you're on with your
                    team and what every teammate is doing on the project</p>
            </div>
        </div>

        <div class=" w-full flex lg:flex-row flex-col lg:gap-4 gap-2">
            <div class=" lg:w-[50%] w-full flex justify-center flex-col">
                <h1 class=" text-white font-bold font-space text-3xl mb-3 text-[#83DE31FF]">Documented tasks</h1>
                <p class=" text-white font-bold font-space text-lg">Add resource to your memos like url, images or
                    comment. When you're collaborating with your team every member can add suggestion like comment or
                    modify the global task map if you permit them </p>
            </div>
            <div class=" lg:w-[40%] w-full h-full flex justify-center items-center">
                <div class=" p-4 rounded-full">
                    <Document class=" w-[8rem] h-[8rem]" />
                </div>
            </div>
        </div>
    </div>

    <div class=" mt-20 lg:w-[60%] w-full mx-auto flex flex-col justify-center gap-6 p-2">
        <h1 class=" text-white font-bold font-space text-3xl mb-3 text-[#83DE31FF] text-center">Begin the journey</h1>
        <Car class="w-[8rem] h-[8rem] mx-auto" />
        <p class="text-white font-bold font-space text-lg text-center">Create your
            account and create a new task or memo
            and share it with who you want</p>
        <a href="/signup"
            class=" bg-[#83DE31FF] text-slate-950 font-bold font-space p-2 rounded-lg w-[60%] text-center mx-auto">Get
            started</a>
    </div>

    <div class=" mt-20 lg:w-[60%] w-full mx-auto flex flex-col justify-center gap-6 p-2">
        <h1 class=" text-white font-bold font-space text-3xl mb-3 text-[#83DE31FF] text-center">Create a collaboration
            team</h1>
        <Team class="w-[8rem] h-[8rem] mx-auto" />
        <p class="text-white font-bold font-space text-lg text-center">Begin with a modern way to organize your work
            create a team and invite your collaborators to join you</p>
        <a href="/signup"
            class=" bg-[#83DE31FF] text-slate-950 font-bold font-space p-2 rounded-lg w-[60%] text-center mx-auto">Create
            your workspace</a>
    </div>
</template>