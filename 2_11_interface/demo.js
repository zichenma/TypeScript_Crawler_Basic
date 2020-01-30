var getPersonName = function(person) {
  console.log(person.name);
};
// 如果规定类型，则如果 person的某个属性是个 undefined 则不会报错，直到编译的时候
var setPersonName = function(person, name) {
  person.name = name;
};
var person = {
  name: 'dell',
  age: 18,
  sex: 'male',
  say: function() {
    return 'say hello';
  },
  teach: function() {
    return 'teach';
  }
};
// 如果直接传对象，则 TS 会进行强校验， 则会报错 （除非在接口中加上 [propName: string]: any;）
// 多了一个属性： SEX）：
// getPersonName({
//   name: 'dell',
//   age: 18,
//   sex: 'male'
// });
// 把对象存在一个变量里， 则不会触发强校验：
getPersonName(person);
setPersonName(person, 'lee');
var User = /** @class */ (function() {
  function User() {
    this.name = 'dell';
  }
  User.prototype.say = function() {
    return 'hello';
  };
  return User;
})();
var say = function(word) {
  return word;
};
