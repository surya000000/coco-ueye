<template>
    <div class="container">
        <FullCalendar />
        <Card
            v-for="(item, i) in lists()" :key="item.value"
            :image-url="item.imageURL"
            :label="item.label"
            :desc="item.desc"
        />
    </div>
</template>
<script>
import { FullCalendar, Card } from 'cocoui';

export default {
    components: {
        FullCalendar,
        Card,
    },
    methods: {
        lists() {
            return [
                {
                    imageURL: "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Breathe_%28Web_series%29_poster.jpg/220px-Breathe_%28Web_series%29_poster.jpg",
                    label: "Sudhir Sapkota",
                    value: 20,
                    desc: "<ul><li>15 task pending</li><li>25 task Remaining</li></ul>",
                },
                {
                    imageURL: "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Breathe_%28Web_series%29_poster.jpg/220px-Breathe_%28Web_series%29_poster.jpg",
                    label: "Saman",
                    value: 20,
                    desc: "<ul><li>15 task pending</li><li>25 task Remaining</ul></ul>",
                }
            ]
        }
    }
}
</script>
<style lang="scss">
    @import "../src/styles/index.scss";
</style>
