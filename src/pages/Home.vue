<template>
    <div class="container">
        <h1>Home</h1>
        <p>Este é um pequeno projeto, unificando PHP, Vue e consumo de APIs através do PhP</p>
        <b>Vue.js Logo:</b> <img :src="vue_logo" alt="vue_logo" style="width: 50px" />
        <b>PHP Logo:</b> <img :src="php_logo" alt="php_logo" style="width: 50px" />
    </div>

    <br>
    <br>
    <br>

	<router-link to="/Cep">Prosseguir para CEP</router-link>
</template>

<script>
    import vue_logo from '../assets/vue_logo.png'
    import php_logo from '../assets/php_logo.png'

    export default {
        data() {
            return {
                vue_logo,
                php_logo
            }
        }
    }
</script>