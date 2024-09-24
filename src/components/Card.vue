<script setup>
    const props = defineProps({
        title:String,
    });
</script>
<template>
    <div class="text-red-900 bg-black">
        {{ title }}
        </div>

</template>

<style scoped>
    div{
        font-size:larger;
    }
   
</style>