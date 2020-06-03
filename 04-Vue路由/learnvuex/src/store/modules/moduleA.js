export default {
  state:{
    name:'moduleA',
  },
  mutations:{
    updateNameA(state){
      state.name = "AAAA";
    }
  },
  actions:{
    aUpdateName(context){
      setTimeout(()=>{
        context.commit('updateNameA');
      },1000);
    }
  },
  getters:{
    fullName(state){
      return state.name + '11111';
    },
    fullName2(state, getters){
      return getters.fullName + "22222";
    },
    fullName3(state, getters, rootState){
      return getters.fullName2 + rootState.counter;
    }

  }
};
