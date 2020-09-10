let jim
let bob = ["a", "b", "c"];
jim = bob

console.log(bob);// "a", "b", "c"
console.log(jim);// "a", "b", "c"

bob[3] = "d"

console.log(bob);// "a", "b", "c", "d"
console.log(jim);// ?

/*
What is happening?!


["a", "b", "c"] (Box containing ["a", "b", "c"])
      /\
      ||                                                     
     [bob] (let bob = ["a", "b", "c"];)        

(undefined)
   [jim]  (let jim;)

    (Box containing ["a", "b", "c"])
    +-----> ["a", "b", "c"] <-----+
    |                             |
    |                             |
  [bob]      (jim = bob;)       [jim]

 bob[3] = "d"
 


*/