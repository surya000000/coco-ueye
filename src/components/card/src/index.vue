<template>
    <div class="card" :style="{ width }">
        <div class="card-header">
            <img :src="imageUrl" />
            <a href="#">{{ label }}</a>
        </div>
        <div v-html="desc" />
    </div>
</template>
<script>

export default {
    props: {
        width: {
            type: String,
            required: true,
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
        }
    }
};
</script>
