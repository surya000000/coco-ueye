<template>
    <div class="container">
        <Input />
        <FullCalendar />
    </div>
</template>
<script>
import { Input, FullCalendar } from 'cocoui';

export default {
    components: {
        Input,
        FullCalendar,
    }
}
</script>
<style lang="scss">
    @import "../src/styles/index.scss";
</style>
