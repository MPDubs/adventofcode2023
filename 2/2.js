// Import the variable from the source file
const final_data = require('./data.js');
let red = 12
let blue = 14
let green = 13
let solution = 0;
let solution_2 = 0;

final_data.forEach((e)=>{
    let should_we_add_the_id = true;
    let largest_red = 0;
    let largest_green = 0;
    let largest_blue = 0;
    let game_power = 0;


    e.pulls.forEach((b)=>{
        console.log(b)
        b.red > red ? should_we_add_the_id = false : null;
        b.blue > blue ? should_we_add_the_id = false : null;
        b.green > green ? should_we_add_the_id = false : null;
        console.log(should_we_add_the_id)

        b.red > largest_red ? largest_red = b.red : null;
        b.blue > largest_blue ? largest_blue = b.blue : null;
        b.green > largest_green ? largest_green = b.green : null;

    })
    game_power = largest_red * largest_blue * largest_green;
    solution_2 = solution_2 + game_power
    if(should_we_add_the_id) {
        solution = solution + e.id
    }
})

console.log(solution)
console.log(solution_2)