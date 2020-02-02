var qs = require('qs')
var result = qs.parse("person[name]=bobby&person[age]=3")
console.log(result) // { person: { name: 'bobby', age: '3' } }


var queryString = require('query-string')
var result = queryString.parse("person[name]=bobby&person[age]=3")
console.log(result) // { 'person[age]': '3', 'person[name]': 'bobby' }





// qs
var result = qs.parse("?a=b")
console.log(result) // { '?a': 'b' }



// queryString
var result = queryString.parse("?a=b")
console.log(result) // { a: 'b' }