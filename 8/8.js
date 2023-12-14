let { final_directions, final_nodes } = require("./data.js");

let start = "AAA"
let end = "ZZZ"


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
let node = start
let counter = 0;
let direction_index = 0;
let we_have_z = false
while(!we_have_z) {

    node = getDirection(node, final_directions[direction_index]);
    direction_index++
    counter++
    direction_index > final_directions.length-1 ? direction_index=0 : null;

    if(node == end) {
        we_have_z = true
        console.log(counter)
    }
}