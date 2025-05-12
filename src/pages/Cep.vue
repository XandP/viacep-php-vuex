<template>
	<div class="container">
		<h1>Digite seu cep abaixo</h1>
		<buscarCep />
		<router-view />
	</div>

	<br>
	<br>
	<br>

	<router-link to='/'>Voltar para Home</router-link>
</template>

<script>
	import buscarCep from '../components/buscarCep.vue'

	export default {
		components: { buscarCep }
	}
</script>