<template>
    <div class="container">
        <FullCalendar>
            <template v-slot:header> This is header</template>
        </FullCalendar>
        <Card
            v-for="item in lists()"
            :key="item.value"
            :image-url="item.imageURL"
            :label="item.label"
            :desc="item.desc"
            :footer-content="item.footerContent"
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
                "value": "Sale Tasks",
                "label": "Sale Tasks",
                "footerContent": {
                  "leftSpan": [
                    {
                      "title": "FOS",
                      "value": 1
                    },
                    {
                      "title": "BITs",
                      "value": 1
                    }
                  ],
                  "rightSpan": [
                    {
                      "title": "RECORDS",
                      "value": 2
                    }
                  ]
                }
              }
            ];
        }
    }
};
</script>
<style lang="scss">
    @import "../src/styles/index.scss";
</style>
