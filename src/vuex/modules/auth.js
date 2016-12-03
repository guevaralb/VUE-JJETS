const state = {
  uid: null,
  auth: null,
};

const getters = {
  authUID(state) {
    return state.uid;
  },
  authUser(state,getters) {
    return state.auth =  _.find(getters.allUsers,['uid',getters.authUID]);;
  },
  authManager(state,getters,rootState) {
    return _.find(getters.allManagers,['.key',getters.authUser.username])
  },
  authManagerStores(state, getters) {
    return _.filter(getters.allStores, ['manager', getters.authManager['.key']]);
  },
  authManagerItems(state, getters) {
    return _.filter(getters.allItems, ['created_by', getters.authManager['.key']]);
  },
  authEmployee(state,getters) {
    return _.find(getters.allEmployees,['.key',getters.authUser.username])
  },
  authEmployeeStores(state, getters) {
    return _.filter(getters.allStores, ['employee', getters.authEmployee['.key']]);
  },
};

const mutations = {
  ['SET_UID'](state, uid) {
    state.uid = uid;
  },
  ['SET_AUTH'](state,auth) {
    state.auth = auth;
  },
};

const actions = {
  setAuth({commit,getters}) {
    commit('SET_AUTH',_.find(getters.allUsers,['uid',getters.authUID]));
  },
  setUID({commit},uid) {
    commit('SET_UID',uid);
  },
  setAuthUserStatus({getters},status) {
    let user = getters.authUser;
    if(user) {
      getters.refUsers.child(user['.key']).update(status);
    }
  }
};

//called by this.$store.dispatch('addUser')
export default {
  state,
  getters,
  mutations,
  actions,
}