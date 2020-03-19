const state = {
  flag: false
};

const getters = {
  getFlag(state) {
    return state.flag;
  }
};

const actions = {};

const mutations = {
  setFlag(state, flag) {
    state.flag = flag;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
