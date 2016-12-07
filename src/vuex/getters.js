import firebase from 'firebase'

const getters = {
  getNewObject(state) {
    return state.newObject;
  },
  getUpdatedObject(state) {
    return state.updateObject;
  },
  allUsers(state) {
    return state.busers;
  },
  refUsers(state) {
    return state.refs.busers;
  },

  allManagers(state) {
    return state.bmanagers;
  },
  refManagers(state) {
    return state.refs.bmanagers;
  },

  allEmployees(state) {
    return state.bemployees;
  },
  refEmployees(state) {
    return state.refs.bemployees;
  },

  allCustomers(state) {
    return state.bcustomers;
  },
  refCustomers(state) {
    return state.refs.bcustomers;
  },

  allStores(state) {
    return state.bstores;
  },
  refStores(state) {
    return state.refs.bstores;
  },

  allItems(state) {
    return state.bitems;
  },
  refItems(state) {
    return state.refs.bitems;
  },

  allTransactions(state) {
    return state.btransactions;
  },
  refTransactions(state) {
    return state.refs.btransactions;
  },

  allTags(state) {
    return state.btags;
  },
  refTags(state) {
    return state.refs.btags;
  },

  serverTime(state) {
    return state.server_time = firebase.database.ServerValue.TIMESTAMP;
  },
  routeParams(state) {
    return state.route.params;
  },
  routeQuery(state) {
    return state.route.query;
  },
};

export default getters;
