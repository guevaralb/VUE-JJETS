const state = {

};

const getters = {
  currentStore(state,getters) {
    if(!getters.routeParams.store) return null;
    return _.find(getters.allStores,['.key',getters.routeParams.store]);
  },
  currentStoreItems(state,getters) {
    if(!getters.currentStore) return;
    return _.map(getters.currentStore.items,(value,key) => {
      return _.assign(_.clone(value),_.clone(_.find(getters.allItems,['.key',key])));
    })
  },
  currentStoreTransactions(state,getters) {
    if(!getters.currentStore) return;
    return _.filter(getters.allTransactions,['store',getters.currentStore['.key']]);
  },
};

const mutations = {

};

const actions = {
  addStore({getters,dispatch},store) {
    if(!store) return;
    let key = `${store.manager}_${store.name}`.replace(/\s/g, "").toLowerCase();
    dispatch('newObject',store);
    getters.refStores.child(key).set(getters.getNewObject);
  },
  deleteStore({getters,dispatch},store) {
    if(!store) return;
    console.log(store);
    getters.refStores.child(store['.key']).remove();
  },
  updateStoreItem({getters,dispatch},storeItem) {
    if(!storeItem) return;
    getters.refStores.child(storeItem.store).child('items').child(storeItem.item).update(storeItem);
  },
  updateStore({getters,dispatch,commit},store) {
    if(!store) return;
    dispatch('updatedObject',store);
    getters.refStores.child(store['.key']).update(getters.getUpdatedObject);
  },

};
//called by this.$store.dispatch('addUser')
export default {
  state,
  getters,
  mutations,
  actions
}
