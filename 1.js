//https://andreassujono.medium.com/top-10-tricky-javascript-questions-often-asked-by-interviewers-45c7dd90495e
//Q7
const length = 4;
const fns = [];
const fns2 = [];
for (var i = 0; i < length; i++) {
	fns.push(() => console.log(i));
}
for (let i = 0; i < length; i++) {
//	fns2.push(() => console.log(i));
    fns2.push(function(){console.log(i)})
}
fns.forEach(fn => fn()); // => 4 4 4 4
fns2.forEach(fn => fn()); // => 0 1 2 3

//Q11
const obj = {
  name: "test",
  prop: {
      name: "prop name",
      print: function(){console.log(this.name)},
  },
  print: function(){ console.log(this.name) },
  print2: () => console.log(this.name, this),
}
obj.print() //ans: test
obj.prop.print() //ans: prop name
obj.print2() //ans: undefined, window global object
