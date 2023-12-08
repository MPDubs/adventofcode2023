const data = require('./data.js');
let array = [];
    data.forEach((g=>{
        array.push(g.split(""))
    }))
const arraied_data = array;

//lets first get the numbers if each element and their index
let a_new_number = ''
let new_indicies = []
let numbers_and_indicies = []
let number_id = 0;
data.forEach((t, index_parent)=>{
    let array = t.split("")
    array.forEach((e, index)=>{
        if(e == "0" || e == "1" || e == "2" || e == "3" || e == "4" || e == "5" || e == "6" || e == "7" || e == "8" || e == "9") {
            a_new_number = a_new_number + e
            new_indicies.push(index)
            if(index == array.length-1){ //get the last number if its literally the last
                number_id++
                numbers_and_indicies.push({
                    number: a_new_number,
                    indicies: new_indicies,
                    index_parent,
                    number_id,
                    gear: null
                })
                a_new_number = '';
                new_indicies = [];
            }
        }else{
            if(a_new_number != null && new_indicies.length > 0) {
                number_id++
                numbers_and_indicies.push({
                    number: a_new_number,
                    indicies: new_indicies,
                    index_parent,
                    number_id,
                    gear: null
                })
            }
            a_new_number = '';
            new_indicies = [];
        }
    })
})
let numbers_to_add = []
//we have the number and their indicies. we need to check them against the previous element, the next element, and the indicies beside them.
numbers_and_indicies.forEach((r, index_numbers_and_indicies)=>{
    let lowest_index = r.indicies[0]
    let largest_index = r.indicies[r.indicies.length-1]
    let index_to_the_left = lowest_index - 1
    let index_to_the_right = largest_index + 1
    let do_we_add = false;
    //check the parent index below and see if there are any symbols at the indicies
    if(arraied_data[r.index_parent+1] != null){
     
        let k = arraied_data[r.index_parent+1]
        let x
        // console.log(r.index_parent+1)
        for(x=0; x < k.length; x++) {
            let u =  k[x]
            //check left
            if(x == index_to_the_left) {
                if(u != "0" && u != "1" && u != "2" && u != "3" && u != "4" && u != "5" && u != "6" && u != "7" && u != "8" && u != "9" && u != ".") {
                    //if u is a symbol count the number and stop the loop
                    // console.log("ADD " + r.number + "INDEX TO THE LEFT")
                    //check if its a gear
                    if(u == "*") {
                        numbers_and_indicies[index_numbers_and_indicies].gear = {
                            parent_index: r.index_parent+1,
                            index: index_to_the_left
                        }
                    }
                    //console.log(numbers_and_indicies[index_numbers_and_indicies])
                    do_we_add = true;
                    break
                }
            }
            //check right above/below
            let g;
            for(g=0; g < r.indicies.length; g++) {
                if(x == r.indicies[g]) {
                    if(u != "0" && u != "1" && u != "2" && u != "3" && u != "4" && u != "5" && u != "6" && u != "7" && u != "8" && u != "9" && u != ".") {
                        //if k is a symbol count the number and stop the loop
                        // console.log("ADD " + r.number + "INDEX BELOW/ABOVE")
                        if(u == "*") {
                            numbers_and_indicies[index_numbers_and_indicies].gear = {
                                parent_index: r.index_parent+1,
                                index: r.indicies[g]
                            }
                        }
                        do_we_add = true;
                        
                    }
                }
            }
            //check right
            if(x == index_to_the_right) {
                //if k is a symbol count the number and stop the loop
                if(u != "0" && u != "1" && u != "2" && u != "3" && u != "4" && u != "5" && u != "6" && u != "7" && u != "8" && u != "9" && u != ".") {
                    //if k is a symbol count the number and stop the loop
                    // console.log("ADD " + r.number + "INDEX TO THE RIGHT")
                    if(u == "*") {
                        numbers_and_indicies[index_numbers_and_indicies].gear = {
                            parent_index: r.index_parent+1,
                            index: index_to_the_right
                        }
                    }
                    do_we_add = true;
                }
            }
        }
      
    }
    //check the parent index above and see if there are any symbols at the indicies
    if(arraied_data[r.index_parent-1] != null){
    
        let k = arraied_data[r.index_parent-1]
        let x
        // console.log(r.index_parent+1)
        for(x=0; x < k.length; x++) {
            let u =  k[x]
            //check left
            if(x == index_to_the_left) {
                if(u != "0" && u != "1" && u != "2" && u != "3" && u != "4" && u != "5" && u != "6" && u != "7" && u != "8" && u != "9" && u != ".") {
                    //if u is a symbol count the number and stop the loop
                    // console.log("ADD " + r.number + "INDEX TO THE LEFT")
                    if(u == "*") {
                        numbers_and_indicies[index_numbers_and_indicies].gear = {
                            parent_index: r.index_parent-1,
                            index: index_to_the_left
                        }
                    }
                    do_we_add = true;

                }
            }
            //check right above/below
            let g;
            for(g=0; g < r.indicies.length; g++) {
                if(x == r.indicies[g]) {
                    if(u != "0" && u != "1" && u != "2" && u != "3" && u != "4" && u != "5" && u != "6" && u != "7" && u != "8" && u != "9" && u != ".") {
                        //if k is a symbol count the number and stop the loop
                        // console.log("ADD " + r.number + "INDEX BELOW/ABOVE")
                        if(u == "*") {
                            numbers_and_indicies[index_numbers_and_indicies].gear = {
                                parent_index: r.index_parent-1,
                                index: r.indicies[g]
                            }
                        }
                        do_we_add = true;
    
                    }
                }
            }
            //check right
            if(x == index_to_the_right) {
                //if k is a symbol count the number and stop the loop
                if(u != "0" && u != "1" && u != "2" && u != "3" && u != "4" && u != "5" && u != "6" && u != "7" && u != "8" && u != "9" && u != ".") {
                    //if k is a symbol count the number and stop the loop
                    // console.log("ADD " + r.number + "INDEX TO THE RIGHT")
                    if(u == "*") {
                        numbers_and_indicies[index_numbers_and_indicies].gear = {
                            parent_index: r.index_parent-1,
                            index: index_to_the_right
                        }
                    }
                    do_we_add = true;
     
                }
            }
        }
        
    }
    //check the parent index inline and see if there are any symbols at the indicies
    if(arraied_data[r.index_parent] != null){
        let k = arraied_data[r.index_parent]
        let x
        // console.log(r.index_parent+1)
        for(x=0; x < k.length; x++) {
            let u =  k[x]
            //check left
            if(x == index_to_the_left) {
                if(u != "0" && u != "1" && u != "2" && u != "3" && u != "4" && u != "5" && u != "6" && u != "7" && u != "8" && u != "9" && u != ".") {
                    //if u is a symbol count the number and stop the loop
                    // console.log("ADD " + r.number + "INDEX TO THE LEFT")
                    if(u == "*") {
                        numbers_and_indicies[index_numbers_and_indicies].gear = {
                            parent_index: r.index_parent,
                            index: index_to_the_left
                        }
                    }
                    do_we_add = true;
           
                }
            }
            //check right
            if(x == index_to_the_right) {
                //if k is a symbol count the number and stop the loop
                if(u != "0" && u != "1" && u != "2" && u != "3" && u != "4" && u != "5" && u != "6" && u != "7" && u != "8" && u != "9" && u != ".") {
                    //if k is a symbol count the number and stop the loop
                    // console.log("ADD " + r.number + "INDEX TO THE RIGHT")
                    if(u == "*") {
                        numbers_and_indicies[index_numbers_and_indicies].gear = {
                            parent_index: r.index_parent,
                            index: index_to_the_right
                        }
                    }
                    do_we_add = true;
              
                }
            }
        }
        
    }
    do_we_add == true ? numbers_to_add.push({n: r.number, id: r.number_id}) : null
})

let solution = 0;
numbers_to_add.forEach((f)=>{
    solution = solution + parseInt(f.n)
})
console.log("solution: " + solution)

let array_of_ratios = []
numbers_and_indicies.forEach((y, index)=>{
    if (y.gear!=null) {
        let g;
        for(g=0; g < numbers_and_indicies.length; g++) {
            if(JSON.stringify(y.gear) == JSON.stringify(numbers_and_indicies[g].gear) && index != g) {
                let okay_to_add = true;
                if(array_of_ratios.length > 0) {
                    array_of_ratios.forEach((x)=>{
                        JSON.stringify(x.gear) == JSON.stringify(numbers_and_indicies[g].gear) ? okay_to_add=false : null;
                    })
                }
                if(okay_to_add==true) {
                    array_of_ratios.push({
                        n1: y.number,
                        n2: numbers_and_indicies[g].number,
                        gear: numbers_and_indicies[g].gear
                    })
                }
            }
        }
    }
})

let solution2 = 0;
array_of_ratios.forEach((m)=>{
    solution2 = solution2 + m.n1 * m.n2
})
console.log("solution2: " + solution2)

