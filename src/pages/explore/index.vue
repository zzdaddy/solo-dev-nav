<script lang="ts" setup>

const AppTypes = [
    {
        name: 'Web',
        showName: 'Web',
        id: 1
    },
    {
        name: 'Mobile',
        showName: '移动端',
        id: 2
    },
    {
        name: 'Desktop',
        showName: '桌面端',
        id: 3
    },
    {
        name: 'wx',
        showName: '微信小程序',
        id: 4
    },
    {
        name: 'plugin',
        showName: '插件类',
        id: 5
    },
    {
        name: 'cli',
        showName: '命令行工具',
        id: 6
    },
    {
        name: 'server',
        showName: '后端服务',
        id: 7
    },
]

const curAppId = ref(AppTypes[0].id)

onMounted( () => {
})
</script>
<template>
    <div class="w-full h-full explore-page">
        <div class="nav-bar sticky top-0 z-30 w-full flex justify-center text-base-content opacity-90 backdrop-blur transition-all duration-100">
            <ul class="w-full menu menu-horizontal bg-base-200 rounded-box">
                <li v-for="item in AppTypes" :key="item.id" @click="curAppId = item.id" class="leading-normal">
                    <a :class="[curAppId === item.id ? 'active' : '']">{{ item.showName }}</a>
                </li>
            </ul>
        </div>
        <div class="app-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4" >
            <template v-for="item in 20">
                <div class="repo-wrap">
                    <RepoCard :repo-info="{ id: item,}"></RepoCard>
                </div>
            </template>
        
        </div>
    </div>
</template>
