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
                    <div class="card-title justify-between">
                        <div>
                            <span class="text-xl">{{ repoInfo.repoName || 'Boot-Vue' }} </span>
                        </div>
                        <div>
                            <UnoCSSIconButton icon="i-mdi-language-typescript"></UnoCSSIconButton>
                            <RepoActive :level="3" size="5" :content="`最近更新：2个月前`"></RepoActive>
                        </div>
                    </div>
                    <p>{{ repoInfo.repoDesc || 'Boot Vue is a lightning fast Vue 3 template with strongly typed TypeScript, UnoCSS, DaisyUI, Vue Router, Pinia, and Netlify support.' }}</p>
                    <!-- <p class=""><UnoCSSIconButton icon="i-mdi-star-outline" size="3"></UnoCSSIconButton>
                        <span class="text-sm">{{ repoInfo.star }}</span></p> -->
                    <div class="languages flex flex-wrap gap-1">
                        <div class="badge badge-neutral badge-base" v-for="frame in repoInfo.frames">{{ frame.name }}:{{
                            frame.version }}</div>
                    </div>
                    <div class="card-actions justify-end">
                        <a>
                            <RepoInfoDrawer :repo-info="repoInfo">
                            <template #btn>
                                <div class="tooltip tooltip-bottom" data-tip="更多信息">
                                <UnoCSSIconButton icon="i-mdi-information-variant-circle"></UnoCSSIconButton>
                            </div>
                            </template>
                            </RepoInfoDrawer>
                        </a>
                        
                        <a class="link link-base-100" :href="repoInfo.repoViewUrl" target="_blank">
                            <div class="tooltip tooltip-bottom" data-tip="预览">
                                <UnoCSSIconButton icon="i-mdi-monitor-eye"></UnoCSSIconButton>
                            </div>
                        </a>
                        <a class="link" :href="repoInfo.repoUrl" target="_blank">
                            <div class="tooltip tooltip-bottom" :data-tip="`Github( ${repoInfo.star} star )`">
                            <UnoCSSIconButton icon="i-mdi-github"></UnoCSSIconButton>
                        </div>
                        </a>
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