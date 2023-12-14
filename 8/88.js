let { final_directions, final_nodes } = require("./data2.js");

let start = "AAA"
let end = "ZZZ"

function convertMsToTime(milliseconds) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    seconds = seconds % 60;
    minutes = minutes % 60;

    // Padding each value with a zero if it's less than 10
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return `${hours}:${minutes}:${seconds}`;
}

function getDirection(nodes, direction) {
    let array_of_returned_nodes = []
    let h=0;
    for(h=0;h<nodes.length;h++) {
        let i=0;
        for(i=0; i<final_nodes.length; i++) {
            if(final_nodes[i].node == nodes[h]) {
                //we have the node, lets return based on our direction
                let r = null;
                direction == "R" ? r = final_nodes[i].right : r = final_nodes[i].left
                array_of_returned_nodes.push(r);
                i=final_nodes.length;
            }
        }
    }
    return array_of_returned_nodes;
    
}
let array_of_nodes_a = []
final_nodes.forEach((fn)=>{
    if(fn.node.slice(-1) == "A") {
        array_of_nodes_a.push(fn.node)
    }
})
let nodes = array_of_nodes_a
let counter = 0;
let direction_index = 0;
let we_have_z = false
let time_start = Date.now();
while(!we_have_z) {
    nodes = getDirection(nodes, final_directions[direction_index]);
    direction_index++
    counter++
    direction_index > final_directions.length-1 ? direction_index=0 : null;
    console.log(nodes)
    let p=0;
    for(p=0; p<nodes.length; p++){
        if(nodes[p].slice(-1) == "Z"){
            we_have_z = true
            console.log("WE HAVE A Z " + nodes[p])
        }else{
            we_have_z = false
            p = nodes.length
        }
    }
    if(counter % 100000 == 0) {
        let now = Date.now();
        let time_passed = now - time_start;
        console.log(convertMsToTime(time_passed))

    }
}
console.log(counter)