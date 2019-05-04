import Vue from "vue";
import * as Vuex from "vuex";
import { FontStyleModule } from "./fontstyle";
import { GlobalState } from "./state-types";

Vue.use(Vuex);

const store = new Vuex.Store<GlobalState>({
  modules: {
    FontStyleModule,
  },
});

export default store;
