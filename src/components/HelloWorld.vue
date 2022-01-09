<script setup>
import { ref } from 'vue'
import {sayhello} from "../api/hello";



const count = ref(0 ) // ref ???
const message = ref("一力音乐盒后台")

const hi = () =>{
  sayhello().then(res=>{
    message.value = res.data
  })

}


</script>

<template>
  <h1>{{ message }}</h1>
  <div class="button-container">
    <q-btn color="primary" label="Primary" @click="count++"> click times :{{ count }}</q-btn>
    <br>
    <br>
    <q-btn color="primary" label="Primary" @click="hi"> 请求接口</q-btn>
  </div>


</template>

<style scoped>
a {
  color: #42b983;
}

/*.button-container{*/
/*  display: flex;*/
/*  flex-direction: row;*/
/*  width: 50%;*/
/*}*/
</style>
