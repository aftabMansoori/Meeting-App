<template>
    <div class="alert alert-width" :class="themeClass" role="alert">
        <div class="fw-bold">
            <slot name="title"></slot>
        </div>
        <slot name="msg"></slot>
    </div>
</template>

<script>
import ThemeMixin from '@/components/mixins/ThemeMixin'

export default {
    name: "AppAlert",
    mixins: [ThemeMixin],
    computed: {
        themeClass() {
            return `alert-${this.theme}`
        }
    }
}
</script>

<style scoped>
.alert-width {
    width: 400px;
}
</style>