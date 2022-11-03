import _ from 'lodash';

// const array = [{ name: 'John' }, { name: 'John' }, { name: 'John' }, { name: 'Ben' }];
// console.log(_.get(_.countBy(array, element => element.name), 'John'));

// const array2 = [{ name: 'John Smith' }, { name: 'Mary Kay' }, { name: 'Peter Pan' }, { name: 'Ben Franklin' }];
// const values = _.map(array2, element => element.name);
// console.log(((_.map(values, element => element.split(' ')[0]))));

// const array3 = [{ name: 'John Smith' }, { name: 'Mary Smith' }, { name: 'Peter Pan' }, { name: 'Ben Smith' }];
// const values = _.map(array3, element => element.name.split(' '));
// console.log(_.map(_.filter(values, element => _.last(element) === 'Smith'), element => _.head(element)));

// const array4 = [{ name: 'John Smith' }, { name: 'Mary Kay' }, { name: 'Peter Pan' }];
// const values = _.map(array4, element => _.reverse(element.name.split(' ')));

// _.forEach(array4, (element, index) => {
//   element.name = `${values[index][0]}, ${values[index][1]}`;
// });
// console.log(array4);

// const array5 = [{ name: 'John Smith', gender: 'm' },
//   { name: 'Mary Smith', gender: 'f' },
//   { name: 'Peter Pan', gender: 'm' },
//   { name: 'Ben Smith', gender: 'm' }];
// console.log(_.filter(array5, element => element.gender === 'f').length);

// const array6 = [{ name: 'John Smith', gender: 'm' },
//   { name: 'Mary Smith', gender: 'f' },
//   { name: 'Peter Pan', gender: 'm' },
//   { name: 'Ben Smith', gender: 'm' }];
// console.log(_.filter(array6, element => element.gender === 'm' && element.name.split(' ')[1] === 'Smith').length);

// const array7 = [{ name: 'John Smith', gender: 'm' },
//   { name: 'Mary Smith', gender: 'f' },
//   { name: 'Peter Pan', gender: 'm' },
//   { name: 'Ben Smith', gender: 'm' }];
// const mans = _.filter(array7, element => element.gender === 'm');
// const womans = _.difference(array7, mans);
// console.log(mans.length > womans.length);

// const array8 = [{ name: 'John Smith', gender: 'm' },
//   { name: 'Mary Smith', gender: 'f' },
//   { name: 'Peter Pan', gender: 'm' },
//   { name: 'Ben Smith', gender: 'm' }];
// const peter = _.find(array8, element => _.isEqual(element.name, 'Peter Pan'));
// console.log(_.values(peter)[1]);

// const array9 = [{ name: 'John Smith', age: 54 },
//   { name: 'Mary Smith', age: 42 },
//   { name: 'Peter Pan', age: 15 },
//   { name: 'Ben Smith', age: 35 }];
// console.log(_.every(array9, element => element.age < 60));

// const array10 = [{ name: 'John Smith', age: 54 },
//   { name: 'Mary Smith', age: 42 },
//   { name: 'Peter Pan', age: 15 },
//   { name: 'Ben Smith', age: 35 }];
// console.log(_.compact(_.map(array10, element => {
//   if (element.age < 18) {
//     return element;
//   }
//   return false;
// })));

// const array11 = [{ name: 'John Smith', age: 54, favorites: ['food', 'movies'] },
//   { name: 'Mary Smith', age: 42, favorites: ['food', 'travel'] },
//   { name: 'Peter Pan', age: 15, favorites: ['minecraft', 'pokemo'] },
//   { name: 'Ben Smith', age: 35, favorites: ['craft', 'food'] }];
// console.log(_.filter(array11, element => _.includes(element.favorites, 'food')));
// console.log(_.countBy(array11, element => _.includes(element.favorites, 'food')));

// const array12 = [{ name: 'John Smith', age: 54, favorites: ['food', 'movies'] },
//   { name: 'Mary Smith', age: 42, favorites: ['food', 'travel'] },
//   { name: 'Peter Pan', age: 15, favorites: ['minecraft', 'pokemo'] },
//   { name: 'Joe Johnson', age: 46, favorites: ['travel', 'movies'] },
//   { name: 'Ben Smith', age: 35, favorites: ['craft', 'food'] }];
// console.log(_.map(_.filter(array12, element => element.age > 40 && _.includes(element.favorites, 'travel')), element => element.name));

// const array13 = [{ name: 'John Smith', age: 54, favorites: ['food', 'movies'] },
//   { name: 'Mary Smith', age: 42, favorites: ['food', 'travel'] },
//   { name: 'Peter Pan', age: 15, favorites: ['minecraft', 'pokemo'] },
//   { name: 'Joe Johnson', age: 46, favorites: ['travel', 'movies'] },
//   { name: 'Ben Smith', age: 35, favorites: ['craft', 'food'] }];
// console.log(_.max(_.filter(array13, element => _.includes(element.favorites, 'food')), 'age').name);

const array14 = [{ name: 'John Smith', age: 54, favorites: ['food', 'movies'] },
  { name: 'Mary Smith', age: 42, favorites: ['food', 'travel'] },
  { name: 'Peter Pan', age: 15, favorites: ['minecraft', 'pokemo'] },
  { name: 'Joe Johnson', age: 46, favorites: ['travel', 'movies'] },
  { name: 'Ben Smith', age: 35, favorites: ['craft', 'food'] }];

const user = { name: 'sadsfdsf', age: 25 };
_.unset(user, 'age');
console.log(user);
