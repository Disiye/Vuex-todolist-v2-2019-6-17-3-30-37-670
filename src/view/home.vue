<template>
    <div class="home-container">
        <button class="back-button" @click="returnWelcome">return</button>
        <span style="float:right;">{{$store.state.name}}</span>
        <router-link to="/home/todoHtml">TodoHtml</router-link><br>
        <router-link to="/home/name">myself</router-link>
        <router-view/>
    </div>
</template>

<script>
export default {
     methods: {
        returnWelcome(){
            confirm("sure return")?this.$router.push('/welcome'):''
        }
    },
};
</script>

<style>
</style>

