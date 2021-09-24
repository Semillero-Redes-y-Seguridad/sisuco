<template>
<div class="nav">
    <div class="conten-name">
        <h6>{{info}}</h6>
    </div>
    <div class="conten-image">
        <img src="../assets/img/human-6638563_640.jpg" alt="photo-profile">
    </div>
</div>
<div class="container">
    <h4>Consulta de notas</h4>
    <div class="table">
        {{info}}
    </div>
</div>
</template>

<script>
import '../assets/styles.css'
import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('http://localhost:8000/')
      .then(response => (this.info = response.data))
  }
}
</script>

<style lang="css" scoped>
.nav {
    padding: 0 30px;
    background-color: #C4C4C4;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100vw;
    height: 90px;
}

.conten-name h4 {
    font-weight: bold;
}

.conten-image {
    margin-left:20px;
    width: 64px;
    height: 64px;
}

.conten-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100%;
}
.container {
    background-color: #D4D4D4;
    width: 85%;
    margin: 4rem auto;
    padding: 1rem;
    display: flex;
}

</style>
