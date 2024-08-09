<template>
    <!-- Open the modal using ID.showModal() method -->
    <span onclick="my_modal_2.showModal()">
        <slot name="btn"></slot>
    </span>
    <dialog id="my_modal_2" class="modal">
        <div class="modal-box borde-box">
            <div class="text-2xl font-bold mb-4 p-2 text-primary">{{ repoInfo.repoName }}</div>
            <div class="mb-2 stats lg:stats-horizontal md:stats-horizontal sm:stats-vertical shadow">
                <div class="stat">
                    <div class="stat-title">Github Star</div>
                    <div class="stat-value">{{ repoInfo.star }}</div>
                    <div class="stat-desc">最近更新：2个月前</div>
                </div>
                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <div class="avatar online">
                            <div class="w-16 rounded-full">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                    </div>
                    <div class="stat-title">author</div>
                    <div class="stat-value">{{ repoInfo.author }}</div>
                    <div class="stat-desc text-secondary">some desc ...</div>
                </div>
            </div>
            <div role="alert" class="alert">
                <p class="p-2">{{  repoInfo.repoDesc }}</p>
            </div>
            <div class="title font-bold text-xl my-2">依赖列表</div>
            <div class="title font-bold text-xl my-2">相关产品</div>
            <div class="title font-bold text-xl my-2">相关文章</div>
        </div>
        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>
</template>
<script lang="ts" setup>
const props = defineProps({
    repoInfo: {
        type: Object,
        default: () => ({})
    }
})


</script>
<style lang="less" scoped></style>