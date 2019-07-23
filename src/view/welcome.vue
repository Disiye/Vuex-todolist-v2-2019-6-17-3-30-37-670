<template>
    <div class="welcome">
        <button @click="toHome">welcome</button>
        <br />
        <input type="text" v-model="name" />
    </div>
</template>

<script>
export default {
    computed: {
        name: {
            get() {
                return this.$store.state.name
            },
            set(newVal) {
                this.$store.commit("setName", newVal)
            }
        }
    },
    methods: {
        toHome() {
            this.$router.push('/home/todoHtml')
        }
    }
};
</script>

<style>
.welcome {
    text-align: center;
}
</style>