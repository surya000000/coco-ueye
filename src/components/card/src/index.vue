<template>
    <div>
        <div class="card-grid">
            <img  :src="imageUrl" />
            <div>{{ label }}</div>
        </div>
        <div v-html="desc" />
    </div>
</template>
<script>

export default {
    props: {
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
