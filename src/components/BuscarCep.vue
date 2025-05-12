<template>
	<div>
		<input v-model="cep" placeholder="Digite o CEP" />
		<button @click="buscarCep">Buscar</button>

		<div v-if="erro" style="color:red">{{ erro }}</div>

		<div v-if="endereco">
			<p><strong>CEP:</strong> {{ endereco.cep }}</p>
			<p><strong>Logradouro:</strong> {{ endereco.logradouro }}</p>
			<p><strong>Complemento:</strong> {{ endereco.complemento }}</p>
			<p><strong>Bairro:</strong> {{ endereco.bairro }}</p>
			<p><strong>Cidade:</strong> {{ endereco.localidade }}</p>
			<p><strong>UF:</strong> {{ endereco.uf }}</p>
			<p><strong>IBGE:</strong> {{ endereco.ibge }}</p>
			<p><strong>GIA:</strong> {{ endereco.gia }}</p>
			<p><strong>DDD:</strong> {{ endereco.ddd }}</p>
			<p><strong>SIAFI:</strong> {{ endereco.siafi }}</p>
		</div>

		<div v-else="endereco">
			<p><strong>CEP:</strong></p>
			<p><strong>Logradouro:</strong></p>
			<p><strong>Complemento:</strong></p>
			<p><strong>Bairro:</strong></p>
			<p><strong>Cidade:</strong></p>
			<p><strong>UF:</strong></p>
			<p><strong>IBGE:</strong></p>
			<p><strong>GIA:</strong></p>
			<p><strong>DDD:</strong></p>
			<p><strong>SIAFI:</strong></p>
		</div>
	</div>
</template>

<script>
	import { mapState, mapActions, mapMutations } from 'vuex';

	export default {
		computed: {
			...mapState(['endereco', 'erro']),

			cep: {
				get() {

					return this.$store.state.cep;
				},

				set(value) {
					this.setCep(value);
				}
			}
		},


		methods: {
		...mapActions(['buscarCep']),
		...mapMutations(['setCep'])
		}
	}
</script>
