import {DECREMENT, INCREMENT} from "./mutations-types";
import Vue from "vue";

export default {
  //同步操作
  [INCREMENT](state){
    state.counter++;
  },
  [DECREMENT](state){
    state.counter--;
  },
  incrementCount(state, payload){
    state.counter += payload.count;
  },
  addStudent(state,stu) {
    state.students.push(stu);
  },
  updateInfo(state){
    // state.info.name = "alex";
    // Vue.set(state.info, "address", "洛杉机");
    Vue.delete(state.info, "age");
  }
};
