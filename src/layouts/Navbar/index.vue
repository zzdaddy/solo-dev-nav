<script setup lang="ts">
import ThemeChange from "./components/ThemeChange/index.vue";
import LocalesChange from "./components/LocalesChange/index.vue";
import UnoCSSIconButton from "~/components/Icon/UnoCSSIconButton.vue";
defineOptions({
    name: "Navbar",
});
const router = useRouter()
const routeTo = (path: string) => {
    router.push(path)
}
</script>

<template>
    <div
        class="z-30 h-16 w-full flex justify-center text-base-content opacity-90 backdrop-blur transition-all duration-100">
        <nav class="w-full navbar">
            <div class="flex flex-1 lg:gap-2 md:gap-1">
                <RouterLink to="/" aria-current="page" aria-label="Homepage" class="px-2">
                    <div class="inline-flex text-lg transition-all duration-200 md:text-3xl">
                        <div class="text-md">
                            SoloDevNav
                        </div>
                    </div>
                </RouterLink>
            </div>
            <div>
                <ul class="menu menu-horizontal px-1">
                    <li @click="routeTo('/')"><a>主页</a></li>
                    <li @click="routeTo('/explore')">
                        <a>探索</a>
                    </li>
                </ul>
                <ThemeChange />
        <!-- <LocalesChange /> -->
                <!-- <span class="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]" data-tip="GitHub">
                    <span class="flex-none items-center">
                        <a aria-label="Github" target="_blank" href="https://github.com/kirklin/boot-vue"
                            class="drawer-button normal-case btn btn-square btn-ghost">
                            <UnoCSSIconButton icon="i-mdi-github" />
                        </a>
                    </span>
                </span> -->
            </div>
        </nav>
    </div>
</template>
