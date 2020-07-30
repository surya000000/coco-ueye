<template>
    <div class="card-calendar-grid">
        <div>
            <img v-if="imageUrl" :src="imageUrl" />
            {{ label }}
        </div>
        <div v-html="desc" />
        <slot />
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
