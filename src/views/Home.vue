<template>
    <div class="home">
        <h1>Изучаю WebGL</h1>
    </div>
</template>
<script>
export default{
    name: 'Home',
} 
</script>
<style scoped lang="scss">
    .home{
        & h1{
            font-size: 60px;
            color: white;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

</style>