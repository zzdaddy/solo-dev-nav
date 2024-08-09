<template>
    <div class="tooltip" :data-tip="tip">
        <UnoCSSIconButton icon="i-mdi-signal-cellular-3" :color="color" :size="size"></UnoCSSIconButton>
    </div>
</template>
<script lang="ts" setup>
const props = withDefaults(
    defineProps<{ level: number, size?: string, content?: string }>(),
    {
        level: 0,
        size: '4',
        content: ''
    },
);

const color = computed(() => {
    switch (props.level) {
        case 0:
            return 'gray';
        case 1:
            return 'red';
        case 2:
            return 'orange';
        case 3:
            return 'green';
        default:
            return 'gray';
    }
})

const tip = computed(() => {
    let tip_text = ''
    switch (props.level) {
        case 0:
            tip_text = '更新情况未确定';
        case 1:
            tip_text = '最近半年内未更新';
        case 2:
            tip_text = '最近三个月内未更新';
        case 3:
            tip_text = '经常更新';
        default:
            tip_text = '更新情况未确定';
    }

    return  props.content || tip_text 
})
</script>
<style lang="less" scoped></style>