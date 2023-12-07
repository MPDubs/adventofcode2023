let string = "4 red, 3 blue; 6 blue, 16 green; 9 blue, 13 green, 1 red; 10 green, 4 red, 6 blue";
string = string.split(";")
let trim_string = string.map((x)=>x.trim())
trim_string = string.map((x)=>x.split(", "))
let new_array = [];
trim_string.forEach((x)=>{
    new_array.push(x.map((y)=>y.trim()))
})
let newer_array = []
new_array.forEach((c)=>{
    let red = 0;
    let green = 0;
    let blue = 0;
    c.forEach((d)=>{
        if(d.includes("red")) {
            let g;
            g = d.split(" ");
            red = g[0]
        }
        if(d.includes("blue")) {
            let g;
            g = d.split(" ");
            blue = g[0]
        }
        if(d.includes("green")) {
            let g;
            g = d.split(" ");
            green = g[0]
        }
    })
    newer_array.push({
        red: parseInt(red),
        blue: parseInt(blue),
        green: parseInt(green)
    })
})
console.log(newer_array)