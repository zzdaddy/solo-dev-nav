<script setup lang="ts">
const router = useRouter();

function goExplore() {
  router.push('/explore');
}
</script>

<template>
  <div class="mt-[-4rem] min-h-screen text-primary-content hero">
    <!--  <div class="hero min-h-screen from-primary to-secondary" style="background-image: url(https://img.js.design/assets/Resources/background/home-bg-2.png);"> -->
    <div
      class="place-items-center from-primary to-base-100 bg-gradient-to-bl hero-overlay"
    />
    <div class="text-center hero-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-4xl font-bold">
            站在巨人的肩膀上开发
        </h1>
        <p class="mb-5">
          快速选择<em>技术栈和版本合适的</em>开源免费仓库
        </p>
        <button class="btn btn-primary" @click="goExplore">
        开始独立开发
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
