<template>
    <div class="home-container">
        <button class="back-button">return</button>
        <span style="float:right;">{{$store.state.name}}</span>
        <router-link to="/home/todoHtml">TodoHtml</router-link><br>
        <router-link to="/home/name">myself</router-link>
        <router-view/>
    </div>
</template>

<script>
export default {
    
};
</script>

<style>
</style>

