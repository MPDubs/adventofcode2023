let { cards, sample_cards } = require("./data.js");

let all_winning_numbers = []
cards.forEach((c)=>{
    let our_winning_numbers = []
    c.winning_numbers.forEach((wn)=>{
        c.our_numbers.forEach((on)=>{
            if(wn == on) {
                our_winning_numbers.push(on)
            }
        })
    })
    our_winning_numbers.length > 0 ? all_winning_numbers.push(our_winning_numbers): null
})
let solution = 0;
//all_winning_numbers = [all_winning_numbers[0], all_winning_numbers[1]]
all_winning_numbers.forEach((wn)=>{
    let pts = 0;
    wn.length == 1 ? pts = 1 : null;
    if(wn.length > 1) {
        pts = Math.pow(2, wn.length-1)
    }else{
        pts = 1
    }
    solution = solution + pts;
})
//console.log(solution)





///solution 2
let array_of_card_ids = []
function star_two(cards_array) {
    let array_of_copied_cards = []
    cards_array.forEach((r)=>{
        array_of_card_ids.push(r.card_id)
    })
    let testcount = 0;
    cards_array.forEach((c, card_index)=>{
        testcount++
        let matching_numbers = []
        let array_of_indexes_for_number_of_matches = []
        c.winning_numbers.forEach((wn)=>{
            c.our_numbers.forEach((on)=>{
                if(wn == on) {
                    matching_numbers.push(on)
                }
            })
        })
        let counter = parseInt(c.card_id)
        matching_numbers.forEach((mn)=>{
            counter++
            array_of_indexes_for_number_of_matches.push(counter)
        })
        array_of_indexes_for_number_of_matches.forEach((aoifnom) => {
            cards.push(cards[aoifnom-1])
            array_of_copied_cards.push(cards[aoifnom-1])
        })
    })
    if(array_of_copied_cards.length > 0) {
        star_two(array_of_copied_cards)
    }
}
star_two(cards)

console.log(cards.length)
