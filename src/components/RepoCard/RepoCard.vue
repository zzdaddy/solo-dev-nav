import UnoCSSIconButton from '~/components/Icon/UnoCSSIconButton.vue';
<template>
    <div class="app-card">
        <div v-if="!!!props.repoInfo" class="flex w-52 flex-col gap-4">
            <div class="skeleton h-32 w-full"></div>
            <div class="skeleton h-4 w-28"></div>
            <div class="skeleton h-4 w-full"></div>
            <div class="skeleton h-4 w-full"></div>
        </div>
        <div v-else class="inner">
            <div class="card bg-base-200 text-base-content w-full hover:bg-base-300 shadow-xl">
                <div class="card-body">
                    <div class="card-title">
                        <div>{{ repoInfo.repoName || 'Boot-Vue' }}</div>
                        <div class="text-sm flex items-center">
                            <UnoCSSIconButton icon="i-mdi-star-outline"></UnoCSSIconButton>12123
                        </div>
                    </div>
                    <p>{{ repoInfo.repoDesc || 'Boot Vue is a lightning fast Vue 3 template with strongly typed TypeScript, UnoCSS, DaisyUI, Vue Router, Pinia, and Netlify support.' }}</p>

                    <div class="languages flex justify-around flex-wrap gap-1">
                        <div class="badge badge-outline badge-sm">TypeScript@1.0</div>
                        <div class="badge badge-outline badge-sm">Vue@3.0</div>
                        <div class="badge badge-outline badge-sm">JavaScript</div>
                        <div class="badge badge-outline badge-sm">TypeScript@1.0</div>
                        <div class="badge badge-outline badge-sm">Vue@3.0</div>
                        <div class="badge badge-outline badge-sm">JavaScript</div>
                    </div>
                    <div class="card-actions justify-end">
                        <a class="link link-base-100" target="_blank">预览地址</a>
                        <UnoCSSIconButton icon="i-mdi-github"></UnoCSSIconButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
const props = defineProps({
    repoInfo: {
        type: Object || null,
        default: null
    }
});

console.log(`props`, props.repoInfo)
</script>
<style lang="less" scoped></style>