let { final_directions, final_nodes } = require("./data2.js");

let start = "AAA"
let end = "ZZZ"

let array_of_nodes_a = []
final_nodes.forEach((fn)=>{
    if(fn.node.slice(-1) == "A") {
        array_of_nodes_a.push(fn.node)
    }
})


function getDirection(node, direction) {
    let i=0;
    for(i=0; i<final_nodes.length; i++) {
        if(final_nodes[i].node == node) {
            //we have the node, lets return based on our direction
            let r = null;
            direction == "R" ? r = final_nodes[i].right : r = final_nodes[i].left
            return r;
        }
    }
    
}
let moves_for_ghosts = []
array_of_nodes_a.forEach((a)=>{
    let node = a
    let counter = 0;
    let we_have_z = false
    let direction_index = 0;
    while(!we_have_z) {

        node = getDirection(node, final_directions[direction_index]);
        direction_index++
        counter++
        direction_index > final_directions.length-1 ? direction_index=0 : null;

        if(node.slice(-1) == "Z") {
            we_have_z = true
            console.log(counter)
            console.log(node)
            moves_for_ghosts.push(counter)
        }
    }
})

//https://stackoverflow.com/questions/47047682/least-common-multiple-of-an-array-values-using-euclidean-algorithm
const gcd = (a, b) => a ? gcd(b % a, a) : b;

const lcm = (a, b) => a * b / gcd(a, b);
console.log(moves_for_ghosts.reduce(lcm)); 

