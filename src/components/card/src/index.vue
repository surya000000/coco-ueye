<template>
    <div class="card" :style="{ width }">
        <div class="card-header">
            <div class="card-image-text-wrapper">
              <img class="wrapper-image" :src="imageUrl" v-if="imageUrl"/>
              <p class="wrapper-text" v-else>{{ label.charAt(0) }}</p>
            </div>
            <a href="#">{{ label }}</a>
        </div>
        <div class="card-footer">
          <div class="footer-span-left">
            <div class="footer-span-content-wrapper" v-for="(item, i) in footerContent.leftSpan" :key="item.title">
              <p class="footer-item-title">{{ item.title }}</p>
              <p class="footer-item-value"> {{ item.value }}</p>
            </div>
          </div>
          <div class="footer-span-right">
            <div  class="footer-span-content-wrapper" v-for="(item, i) in footerContent.rightSpan" :key="item.title">
              <p class="footer-item-title">{{ item.title }}</p>
              <p class="footer-item-value"> {{ item.value }}</p>
            </div>
          </div>
        </div>
        <div v-html="desc" />
    </div>
</template>
<script>

export default {
    props: {
        width: {
            type: String,
        },
        imageUrl: {
            type: String,
            requird: true,
        },
        label: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            default: "",
        },
        footerContent: {
            type: Object,
            default: () => ({})
        }
    }
};
</script>
