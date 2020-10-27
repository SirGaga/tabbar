import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const moduleA = {
  state: () => ({
    name: '张三'
  }),
  mutations: {
    updateName(state,payload) {
      state.name = payload
    }
  },
  actions: {},
  getters: {
    fullName(state) {
      return '真·' + state.name;
    },
    // 这里传入的是整个getter对象，不止是模块中可用，根store的getters中也可以这么定义函数
    fullName2(state,getter){
      return '真~' + getter.fullName;
    },
    fullName3(state,getter,rootState){
      return '真@' + getter.fullName2 + rootState.info.name
    }
  }
}

const store = new Vuex.Store({
  state: {
    counter: 0,
    students: [
      {
        name: 'a',
        age: 18
      },
      {
        name: 'b',
        age: 20
      },
      {
        name: 'c',
        age: 22
      },
      {
        name: 'd',
        age: 24
      }
    ],
    info: {
      name: 'kobe',
      age: 18,
      height: 1.98
    }
  },
  mutations: {
    // 同步方法 只能通过commit方法来更新store的状态
    // 这里定义的函数可以看做两个部分
    // 字符串的事件类型(type)
    // 一个回调函数(handler)，该回调函数的第一个参数就是state
    increment(state){
      state.counter++;
    },
    decrement(state){
      state.counter--;
    },
    incrementCount(state,count) {
      state.counter += count;
    },
    updateInfo(state){
      state.info.name = 'coder';
      // 这样的修改不能做到响应式
      // state.info['address'] = 'LosAngeles';
      // 这种修改能做到响应式
      // Vue.set(state.info,'address','LosAngeles')
      // 删除对象中的某一个属性，但是在Vuex中不能做到响应式
      // delete state.info.name;
      // 这种做法能够做到响应式
      // Vue.delete(state.info,'name')
    }
  },
  // 类似于单个组件中定义的computed方法
  getters: {
    powerCounter(state) {
      return state.counter * state.counter;
    },
    olderThan20(state){
      return state.students.filter(e => e.age > 20);
    },
    // 如果调用方法想带有自定义传入参数的时候可以使用这种写法
    // 可以传递一个参数或者多个参数
    // 这里代表的是return一个函数，传入的参数会带入到返回的函数中去执行
    olderThanAge(state) {
      return age => state.students.filter(e => e.age >age);
    }

  },
  actions: {
    // 异步方法，方法中的默认提供参数是上下文context
    // asyncUpdateInfo(context, payload) {
    //   setTimeout(() => {
    //     context.commit('updateInfo');
    //     console.log(payload);
    //   },1000)
    // }
    async aUpdateInfo(context,payload){
      await context.commit('updateInfo');
      console.log(payload);
    }
  },
  modules: {
    a: moduleA
  }

})

export default store;