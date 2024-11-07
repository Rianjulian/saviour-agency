export const state = () => ({
  lang: "ID",
});

export const getters = {
  getLang(state) {
    return state.lang;
  },
};

export const mutations = {
  SET_LANG(state, val) {
    state.lang = val;
  },
};

export const actions = {
  setLang({ commit }, val) {
    commit("SET_LANG", val);
  },
};
