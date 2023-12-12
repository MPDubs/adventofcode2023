let { sample_races, races } = require("./data.js");

let number_of_ways_to_win_array = []
races.forEach((r)=>{
    let i;
    let number_of_ways_to_win = 0;
    for(i=0;i<r.t;i++) {
        let distance_traveled = 0
        distance_traveled = i * (r.t-i)
        if(distance_traveled > r.d) {
            number_of_ways_to_win++
        }
    }
    number_of_ways_to_win_array.push(number_of_ways_to_win)
})
console.log(number_of_ways_to_win_array)
let solution = 1;
number_of_ways_to_win_array.forEach((wtw)=>{
    solution = solution * wtw
})
console.log(solution)


//part 2
const sample_race_p2 = [
    {
        t: 71530,
        d: 940200
    }
]
const race_p2 = [
    {
        t: 58819676,
        d: 434104122191218
    }
]

race_p2.forEach((r)=>{
    let i;
    let number_of_ways_to_win = 0;
    for(i=0;i<r.t;i++) {
        let distance_traveled = 0
        distance_traveled = i * (r.t-i)
        if(distance_traveled > r.d) {
            number_of_ways_to_win++
        }
    }
    console.log(number_of_ways_to_win)
})


