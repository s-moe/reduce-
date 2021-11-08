const array = [1, 2, 3]
console.log(
  array.reduce((acc, item, index)=> {
    acc[item] = index
    return acc
  }, {})




)