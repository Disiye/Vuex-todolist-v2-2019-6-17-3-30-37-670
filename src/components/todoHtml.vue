<template>
  <div class="todomvc">
    <section class="todoapp">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </section>
    <footer style="text-align:center;margin-top:120px;font:italic 700 16px">
      By <a href="https://github.com/Disiye" target="_blank">emilo@oocl.com</a>
    </footer>
  </div>
</template>

<script>
import Header from "@/components/header"
import Main from "@/components/main"
import Footer from "@/components/footer"
import axios from 'axios'
import VueAxios from 'vue-axios'
export default {
  name: 'todoHtml',
  components: {
    Header,
    Main,
    Footer
  },
  created(){
    this.getHttp()
  },
  methods: {
    async getHttp(){
      axios.get('http://localhost:8080/todo-mvcs')
        .then((response)=>{
          this.$store.commit('initDate', response.data)
        })
    },
    postHttp(item){
      this.$axios({
        method: 'post',
        url: 'http://localhost:8080/todo-mvcs',
        data: {
          "id": item.id,
          "test": item.test,
          "complete": item.complete
        }
      });
    }
  }
}
</script>

<style>

</style>
