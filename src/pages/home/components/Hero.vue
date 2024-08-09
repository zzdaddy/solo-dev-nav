<script setup lang="ts">
const router = useRouter();

function goExplore() {
  router.push('/explore');
}
</script>

<template>
  <div class="mt-[-4rem] min-h-screen text-primary-content hero">
     <!-- <div class="hero min-h-screen from-primary to-secondary" style="background-image: url(https://img.js.design/assets/Resources/background/home-bg-2.png);"/> -->
    <div
      class="place-items-center from-base-100 to-neutral bg-gradient-to-bl hero-overlay"
    />
    <div class="text-center hero-content">
      <div class="max-w-xl">
        <h1 class="mb-5 text-4xl font-bold">
            站在巨人的肩膀上开发
        </h1>
        <p>前端工程日益繁琐，仅靠基础的框架不足以快速开始项目</p>
        <p>本站会收录一些开源免费的模板（并标注依赖版本）</p>
        <p class="mb-5">
          帮助前端开发者快速选择技术栈和版本合适的开发模板
        </p>
        <button class="btn btn-neutral" @click="goExplore">
        开始探索
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
