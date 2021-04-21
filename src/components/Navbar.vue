<template>
    <nav class="navbar">
        <router-link to="/" class="navbar__link">Home</router-link>
        <router-link to="/cube" class="navbar__link">Cube</router-link>
        <router-link to="/earth" class="navbar__link">Earth</router-link>
        <router-link to="/cylinder" class="navbar__link">Cylinder</router-link>
    </nav>
</template>
<script>
export default{
    name: 'Navbar',
} 
</script>
<style lang="scss">
    .navbar{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100px;
        background: lightgreen;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &__link{
            font-size: 80px;
            line-height: 1;
            color: black;
            margin-left: 30px;
            margin-right: 30px;
            text-decoration: none;
            &:first-child{
                color: white;
                margin-right: auto;
            }
            &:hover{
                text-decoration: underline;
            }
        }
    }
</style>