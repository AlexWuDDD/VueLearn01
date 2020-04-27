const app = new Vue({
  el: '#app',
  data:{
    books:[
      {
        id: 1,
        name: "《算法导论》",
        date: "2006-9",
        price: 65.00,
        count: 1
      },
      {
        id: 2,
        name: "《UNIX编程艺术》",
        date: "2006-2",
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: "《编程珠玑》",
        date: "2008-10",
        price: 39.00,
        count: 1
      },
      {
        id: 4,
        name: "《代码大全》",
        date: "2006-3",
        price: 128.00,
        count: 1
      },
    ],
  },
  computed:{
    totalPrice(){
      //1.普通的for循环
      // let totalPrice = 0;
      // for(let i = 0; i < this.books.length; ++i){
      //   totalPrice += this.books[i].price * this.books[i].count;
      // }
      // return totalPrice;

      //2. for(let i in this.books)
      // let totalPrice = 0;
      // for(let i in this.books){
      //   totalPrice += this.books[i].price * this.books[i].count;
      // }
      // return totalPrice;

      //3. for(let item of this.books)
      // let totalPrice = 0;
      // for(let book of this.books){
      //   totalPrice += book.count * book.price;
      // }
      // return totalPrice;

      //reduce
      // return this.books.reduce(function (preValue, book) {
      //   return preValue += book.count * book.price;
      // }, 0);

      return this.books.reduce((prev, book)=> prev += book.count* book.price, 0);




      // let totalPrice = 0.0;
      // this.books.forEach((book)=> totalPrice += book.count * book.price);
      // return totalPrice;
    },
  },
  methods:{
    // getFinalPrice(price){
    //   return '￥' + price.toFixed(2);
    // }
    increment(index){
      this.books[index].count++;
    },
    decrement(index){
      this.books[index].count--;
    },
    removeHandler(index){
      this.books.splice(index, 1);
    }
  },
  filters:{
    showPrice(price){
      return '￥' + price.toFixed(2);
    }
  },
});

//编程范式： 命令式编程/声明式编程
//编程范式： 面向对象编程（第一公民：对象）/函数式编程（第一公民：函数）
//filter/map/reduce

//filter总的回调函数有一个要求：必须返回一个boolean值
//true:当返回true时，函数内部会自动将这次回调的n加入新的数组中
//false:当返回false时，函数内部会过滤掉这次的n
const nums = [10,20, 111, 222, 444, 40, 50]

let newNums1 = nums.filter(function (n) {
  return n < 100;
});

let newNums2 = nums.map(function (n) {
  return n * 2;
})

//reduce对数组中所有的内容进行汇总
//preValue 上次返回的值
let total = nums.reduce(function (preValue,n) {
    return preValue + n;
}, 0);


let t = nums.filter(function (n) {
  return n < 100;
}).map(function (n) {
  return n * 2;
}).reduce(function (preValue, n) {
  return preValue + n;
},0);

let t1 = nums.filter(n => n < 100).map(n => n*2).reduce((pre,n)=>pre +n);