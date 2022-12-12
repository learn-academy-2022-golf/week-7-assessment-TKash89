// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest



// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

//PSUEDOCODE:______________
//      INPUT:const people = [
    //     //   { name: "ford prefect", occupation: "a hitchhiker" },
    //     //   { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    //     //   { name: "arthur dent", occupation: "a radio employee" }
    //     // ]
//      OUTPUT:["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

            //The first step I begin setting up a test in Jest with the provided INPUT and OUTPUT. I get a solid Fail: stating that my variable |sentance| is 'undefined'. I proceed in creating my function, sentence, and I use the MAP method to iterate over the array. My output using console log is the name/occupation. This problem requires some string interpolation between these two keys. I set this up and throw a string of "is" in order to get a complete sentence in the output. I return the keys to get the correct output, and complete sentence of an array. The last step is to Capitalize the 'name' key. I utilize toUpperCase method to capitalize the 'name' keys. The correct answer requires only the beginning names to be capitalized. I have worked this far and have been trying to implement the 'substring' method, highlighting the first element. This should allow only the first letter to be Capitalized. The string interpolation makes it difficult to place this piece of code.
            

// a) Create a test with an expect statement using the variable provided.
    describe("sentence",() => {
      it("returns an array with a sentence about each person with their name capitalized",() => {
        const people = [
          { name: "ford prefect", occupation: "a hitchhiker" },
          { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
          { name: "arthur dent", occupation: "a radio employee" }
        ]
        
        expect(sentence(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
      })
    })
    //       //TEST RESULTS: FAIL ----->   ReferenceError: sentance is not defined
    //       // Test Suites: 1 failed, 1 total
    //       // Tests:       1 failed, 1 total
          



// b) Create the function that makes the test pass.

            const sentence = (array) => {
             return array.map((value) => {
              return `${value.name.toUpperCase()} is ${value.occupation}` 
             })
           }

           
           

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

//PSUEDOCODE:______________
//      INPUT:   const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false] 
//               const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
//     OUTPUT:[ 2, 0, -1, 0 ]   [ 2, 1, -1 ]

                 // Setting up the testing criteria, I obtain the good Fail: the created variable 'mix' is 'not defined. I copy down the results and begin writing the function. I need to iterate over these arrays, returning only remainders divided by three. I use the higher order function 'filter' to move forward. This will allow a shortened array, outputing only if conditions are met. The condition I set is typeof only 'numbers', thus eliminating the strings and boolean values. The other condition is the modulo three which will output the remainders of the array divided by three. This is not working all the way after moving the equation around. It seems like this should provide the correct output, but it only shows what can be divided by three.


// a) Create a test with an expect statement using the variables provided.
describe("mix",() => {
  it("returns an array of only the REMAINDERS of the numbers when divided by 3.",() => {

    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]

    expect(mix(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(mix(hodgepodge2)).toEqual([ 2, 1, -1 ])
        
  })
})



//TEST RESULTS: FAIL ----->   ReferenceError: mix is not defined
          // Test Suites: 1 failed, 1 total
          // Tests:       2 failed, 2 total

// b) Create the function that makes the test pass.

const mix = (array) => {
  return array.filter(value => typeof value === "number" && value % 3 === 0 )
  }
 



// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

//PSUEDOCODE:______________
//     INPUT: cubeAndSum1 = [2, 3, 4] & const cubeAndSum2 = [0, 5, 10]
//    OUTPUT: 99 & 1125

                        //My initial results setting up the test in Jest were a good Fail, with an outcome of: 'cubed is not defined'. My created variable 'cubed' is used to write the function. The second and successful approach to this problem is using the classic for loop that, writing in a variable 'add' assigned to zero, will iterate the elements of the arrays. I use 'add' in my function to signify zero and an addition assignment operator that adds from right to left. This gives the result of the added array. 9 & 15. The next step is to cube or multiply these to the third power. I place the exponent operator with 3 on line 129 to execute after the addition. This results in the correct answer as well as the passing test in jest.


//a) Create a test with an expect statement using the variables provided.
describe("cubed",() => {
  it("returns the sum of all the numbers cubed.",() => {
    const cubeAndSum1 = [2, 3, 4]
    const cubeAndSum2 = [0, 5, 10]

    expect(cubed(cubeAndSum1)).toEqual(99)
    expect(cubed(cubeAndSum2)).toEqual(1125)
        
  })
})





//TEST RESULTS: FAIL ----->   ReferenceError: cubed is not defined
          // Test Suites: 1 failed, 1 total
          // Tests:       3 failed, 3 total
// b) Create the function that makes the test pass.

const cubed = (array) => {
  let add = 0
    for (let i = 0; i < array.length; i++) 
      add +=  array[i] ** 3;
      return add ;
    }  
    
    //TEST RESULTS: PASS (for Q#3) ----->
         // Test Suites: 1 failed, 1 total
         //Tests:        2 failed, 1 passed, 3 total
//                                    |^|
//                                    | |                                   