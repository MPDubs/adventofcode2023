// Import the variable from the source file
const problem_input = require('./array.js');

let array_of_numbers_to_add = []

problem_input.forEach(problem_string => {
    let array_of_numbers_in_the_string = []
    let number_to_add = null;
    let t = 0;
    for(t=0; t < problem_string.length; t++) {
    
        if(problem_string[t] == "o") { //one
            if(problem_string[t+1] == "n")   {
                if(problem_string[t+2] == "e") {
                    array_of_numbers_in_the_string.push("1")
                }
            }    
        }
        if(problem_string[t] == "t") { //two
            if(problem_string[t+1] == "w")   {
                if(problem_string[t+2] == "o") {
                    array_of_numbers_in_the_string.push("2")
                }
            }    
        }
        if(problem_string[t] == "t") { //three
            if(problem_string[t+1] == "h")   {
                if(problem_string[t+2] == "r") {
                    if(problem_string[t+3] == "e") {
                        if(problem_string[t+4] == "e") {
                            array_of_numbers_in_the_string.push("3")
                        }
                    }
                }
            }    
        }
        if(problem_string[t] == "f") { //four
            if(problem_string[t+1] == "o")   {
                if(problem_string[t+2] == "u") {
                    if(problem_string[t+3] == "r") {
                        array_of_numbers_in_the_string.push("4")
                    }
                }
            }    
        }
        if(problem_string[t] == "f") { //five
            if(problem_string[t+1] == "i")   {
                if(problem_string[t+2] == "v") {
                    if(problem_string[t+3] == "e") {
                        array_of_numbers_in_the_string.push("5")
                    }
                }
            }    
        }
        if(problem_string[t] == "s") { //six
            if(problem_string[t+1] == "i")   {
                if(problem_string[t+2] == "x") {
                    array_of_numbers_in_the_string.push("6")
                }
            }    
        }
        if(problem_string[t] == "s") { //seven
            if(problem_string[t+1] == "e")   {
                if(problem_string[t+2] == "v") {
                    if(problem_string[t+3] == "e") {
                        if(problem_string[t+4] == "n") {
                            array_of_numbers_in_the_string.push("7")
                        }
                    }
                }
            }    
        }
        if(problem_string[t] == "e") { //eight
            if(problem_string[t+1] == "i")   {
                if(problem_string[t+2] == "g") {
                    if(problem_string[t+3] == "h") {
                        if(problem_string[t+4] == "t") {
                            array_of_numbers_in_the_string.push("8")
                        }
                    }
                }
            }    
        }
        if(problem_string[t] == "n") { //nine
            if(problem_string[t+1] == "i")   {
                if(problem_string[t+2] == "n") {
                    if(problem_string[t+3] == "e") {
                        array_of_numbers_in_the_string.push("9")
                    }
                }
            }    
        }

        switch (problem_string[t]) {
            case '1':
                array_of_numbers_in_the_string.push("1")
              break;
              case '2':
                array_of_numbers_in_the_string.push("2")
              break;
              case '3':
                array_of_numbers_in_the_string.push("3")
              break;
              case '4':
                array_of_numbers_in_the_string.push("4")
              break;
              case '5':
                array_of_numbers_in_the_string.push("5")
              break;
              case '6':
                array_of_numbers_in_the_string.push("6")
              break;
              case '7':
                array_of_numbers_in_the_string.push("7")
              break;
              case '8':
                array_of_numbers_in_the_string.push("8")
              break;
              case '9':
                array_of_numbers_in_the_string.push("9")
              break;
              case '0':
                array_of_numbers_in_the_string.push("0")
              break;
            default:
               null;
          }

        
        if(array_of_numbers_in_the_string.length > 0){
            let first_number = array_of_numbers_in_the_string[0];
            let second_number = array_of_numbers_in_the_string[array_of_numbers_in_the_string.length-1];
            if(first_number != null && array_of_numbers_in_the_string.length > 1){
                number_to_add = first_number + second_number
            }else if(first_number != null) {
                number_to_add = first_number + first_number
            }else{
                number_to_add = "0";
            }
        }else{
            number_to_add = "0";
        }
    }
        array_of_numbers_to_add.push(parseInt(number_to_add))
})

console.log(array_of_numbers_to_add)

let total2 = 0;
let i;
for(i=0; i < array_of_numbers_to_add.length; i++) {
    total2 = total2 + array_of_numbers_to_add[i];
}
console.log(total2)

