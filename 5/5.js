let { sample_seeds, sample_map, seeds, map } = require("./data.js");


function getCooresponding(source_values, source) {
    let cooresponding_values = []
    source_values.forEach((start_seed)=>{
        map.forEach((m) => {
            let cooresponding_value = null;
            if(source == m.source) {
                m.maps.forEach((u)=>{
                    //see if the start_seed exists within the maps
                    let do_we_have_start_seed = false;
                    if(start_seed >= u.source_start && start_seed < u.source_start+u.length){
                        //start_seed exists within the given map
                        do_we_have_start_seed = true;
                    }
                    if(do_we_have_start_seed) {
                        //we have start seed within this map. Lets get the cooresponding number
                        let difference = null
                        u.source_start > u.destination_start ? difference = u.source_start-u.destination_start : difference = u.destination_start-u.source_start
                        u.source_start > u.destination_start ? cooresponding_value = start_seed - difference : cooresponding_value = difference + start_seed;
                    
                    }
                })
                if(cooresponding_value==null) {
                    cooresponding_value = start_seed
                }
                cooresponding_values.push(cooresponding_value);
            }
        })
    })   
    return cooresponding_values;
}

let y;
let input = seeds;
let matches = []
for(y=0; y < map.length; y++) {
    let numbers = getCooresponding(input, map[y].source)
    input = numbers;
    matches.push({
        source:map[y].source,
        destination:map[y].destination,
        match: numbers
    })
}

//solution
let solution = matches[matches.length-1].match[0];
matches.forEach((m)=>{
    if(m.destination == "location") {
        m.match.forEach((y)=>{
            y < solution ? solution = y : null
        })
    }
})
//console.log(solution)
function msToTime(ms) {
    let seconds = (ms / 1000).toFixed(1);
    let minutes = (ms / (1000 * 60)).toFixed(1);
    let hours = (ms / (1000 * 60 * 60)).toFixed(1);
    let days = (ms / (1000 * 60 * 60 * 24)).toFixed(1);
    if (seconds < 60) return seconds + " Sec";
    else if (minutes < 60) return minutes + " Min";
    else if (hours < 24) return hours + " Hrs";
    else return days + " Days"
  }
//part two
//get the seeds data into a better form
//number % 2 === 0
let part_two_seeds = []
seeds.forEach((t, index)=>{
    if(index % 2 === 0) {
        part_two_seeds.push({
            start: parseInt(t),
            end: (parseInt(t)+ parseInt(seeds[index+1])),
            additional_seeds: parseInt(seeds[index+1])
        })
    }
})
console.log(part_two_seeds)
let solution2 = 100000000000000
//part_two_seeds = [part_two_seeds[0], part_two_seeds[1], part_two_seeds[2], part_two_seeds[3]]
let total_number_of_loops = 0;
part_two_seeds.forEach((pts)=>{
    let test = total_number_of_loops
    total_number_of_loops = total_number_of_loops + (pts.end - pts.start)
    console.log(total_number_of_loops)
    console.log(total_number_of_loops - test)
})
console.log(total_number_of_loops + "total_number_of_loops")
let total_number_of_loops_that_have_passed = 0;
part_two_seeds.forEach((pts)=>{
    let y2;
    let input2 = [pts.start];
    let h;
    let number_of_loops = 0
    number_of_loops = pts.end - pts.start
    console.log("number_of_loops: " + number_of_loops)
    let time_it_takes = null;
    let now = Date.now()
    for(h=0;h < number_of_loops;h++){
        total_number_of_loops_that_have_passed++
        for(y2=0; y2 < sample_map.length; y2++) {
            let numbers = getCooresponding(input2, sample_map[y2].source)
            input2 = numbers
            if(sample_map[y2].destination == "location"){
                //console.log(numbers[0])
                solution2 > numbers[0] ? solution2 = numbers[0] : null;
            }
        }
        input2 = [pts.start+h]
        if (h % 1000000 === 0) {
            time_it_takes = (Date.now() - now)
            let progress = (total_number_of_loops_that_have_passed/total_number_of_loops*100)
            let multiplier = 1/progress
            console.log("progress:" + progress)
            let estimated_time_left =  ((total_number_of_loops-total_number_of_loops_that_have_passed)/1000000)*time_it_takes
            console.log("estimated time left: " + msToTime(estimated_time_left))
            time_it_takes = null;
            now = Date.now()
        }
    }

})
console.log(solution2)

// let matches2 = []
// let locations = []
// let solution2 = null
// for(y2=0; y2 < map.length; y2++) {
//     let numbers = getCooresponding(input2, map[y2].source)
//     input2 = numbers;
//     if(map[y2].destination == "location") {
//         numbers.forEach((y)=>{
//             y < solution2 ? solution2 = y : null
//         })
//     }
//     // matches2.push({
//     //     source:map[y2].source,
//     //     destination:map[y2].destination,
//     //     match: numbers
//     // })
// }
