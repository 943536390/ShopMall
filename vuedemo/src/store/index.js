import Vue from 'vue';
import Vuex from 'vuex';
import OrderList from './modules/orderList.js'

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		OrderList,
	}
});
