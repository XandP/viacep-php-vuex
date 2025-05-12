import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
	state: {
		cep: '',
		endereco: null,
		erro: null,
	},


	mutations: {
		setEndereco(state, payload) {
			state.endereco = payload;
		},

		setErro(state, payload) {
			state.erro = payload;
		},

		setCep(state, payload) {
			state.cep = payload;
		}
	},


	actions: {
		async buscarCep({ state, commit }) {
			const regex = /[^0-9]/gm;
			try {
				if(state.cep.replace(regex, '').length != '8') {
					commit('setErro', 'CEP deve conter 8 números');
					commit('setEndereco', null);

					return;
				}

				const response = await axios.get(`http://localhost/viacep-php-vuex/src/api/viaCep.php?cep=${state.cep}`);

				if (response.data.errorCode == 1) {
					commit('setErro', 'CEP deve conter 8 números');
					commit('setEndereco', null);
					return;
				}

				if (response.data.errorCode) {
					commit('setErro', 'CEP não encontrado');
					commit('setEndereco', null);
				}

				else {
					commit('setEndereco', response.data);
					commit('setErro', null);
				}

			}

			catch (error) {
				commit('setErro', 'Ocorreu um erro ao Tentar encontrar o cep');
				commit('setEndereco', null);
			}
		}
	},


	getters: {
		cep: state => state.cep,
		endereco: state => state.endereco,
		erro: state => state.erro,
	}
});