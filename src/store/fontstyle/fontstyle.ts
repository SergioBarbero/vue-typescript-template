import { ActionContext, Store } from "vuex";
import { getStoreAccessors } from "vuex-typescript";
import { GlobalState } from "../state-types";

export interface IFontStyleState {
  iteration: number;
}

type FontStyleContext = ActionContext<IFontStyleState, GlobalState>;

export const FontStyleModule = {
  state: {
    iteration: 1,
  },
  getters: {
    getFontIndex(state: IFontStyleState) {
      return (state.iteration % 5 ) + 1;
    },
  },
  mutations: {
    changeFont(state: IFontStyleState) {
      state.iteration += 1;
    },
  },
  actions: {},
};

const { commit, read, dispatch } = getStoreAccessors<IFontStyleState, GlobalState>("");

const FontStyleAccessor = {
  getFontIndex: read(FontStyleModule.getters.getFontIndex),
  changeFont: commit(FontStyleModule.mutations.changeFont),
};

export default FontStyleAccessor;
