import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);
const url_api = "https://www.girona.cat/shared/feeds/modern_mural.php"
export default new Vuex.Store({
  state: {
    loading: true,
    info: [],
    activeInfo: 0
  },
  mutations: {
    setLoading(state, loading) {
      state.loading = loading;
    },
    setActiveInfo(state) {
      state.activeInfo++;
    },
    setInfo(state, info) {
      state.info = info;
    },
  },
  actions: {
    fetchAllData({ dispatch, commit, state }) {
      commit("setLoading", true);
      console.log("Loading before", state.loading);
      let days = dispatch("fetchInfo");

      return Promise.all([
        days,


      ]).then(() => {
        // Both done
        commit("setLoading", false);
        console.log("Loading after", state.loading)
      });
    },
    fetchInfo({ state, commit }) {
      console.log("Fetch Info");
      return new Promise((resolve) => {
        const url = url_api + "/info"
        // https://docs.nativescript.org/http.html
        axios.get(url).then(res => {
          console.log(res.data)
          commit("setInfo", res.data);
          resolve(state.info);
        })
          .catch(err => console.log('error', err))
      });
    },


  },
  getters: {
    loading(state) {
      return state.loading;
    },
    info(state) {
      return state.info;
    },
    activeInfo(state) {
      return state.activeInfo;
    },
  },
  modules: {},
});
