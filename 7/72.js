let { final_hands } = require("./data2.js");

//5 of a kind: 7
//4 of a kind: 6
//Full House: 5
//3 of a kind: 4
//2 pair: 3
//1 pair: 2
//high card: 1


final_hands.forEach((h, index)=>{
    let dbl = false;
    let two_pair = 0;
    let three_pair = 0;
    let trpl = false;
    let qdrpl = false;
    let five = false;
    let total_matches = 0
    let jokers = h.hand.filter((card)=>card==1)
    h.hand.forEach((hh)=>{
        let n = h.hand.filter((card)=>card==hh)
        if(hh != 1){
            total_matches = n.length + jokers.length
        }else{
            total_matches = n.length;
        }
        total_matches == 2 ? dbl = true : null
        total_matches == 2 ? two_pair++ : null
        total_matches == 3 ? trpl = true : null
        total_matches == 3 ? three_pair++ : null
        total_matches == 4 ? qdrpl = true : null
        total_matches == 5 ? five = true : null
    })
    if(!dbl && !trpl && !qdrpl && !five){
        // we have one of a kind
        h.type = 1
    }
    if(dbl && two_pair==2) {
        // we have one pair
        h.type = 2
    }
    if(dbl && two_pair==4) {
        // we have two pair
        h.type = 3
    }
    if(dbl && two_pair==4 && jokers.length == 1) {
        // we have one pair
        h.type = 2
    }
    if(trpl) {
        // we have three of a kind
        h.type = 4
    }
    if(trpl && three_pair==4) {
        // we have a full house
        h.type = 5
    }
    if(dbl && trpl && jokers.length == 0) {
        // we have full house
        h.type = 5
    }
    if(qdrpl) {
        // we have four of a kind
        h.type = 6
    }
    if(five) {
        // we have five of a kind
        h.type = 7
    }
    h.id = index;
})
let ranked_hands = []
let number_of_hands = final_hands.length
function findTopCard(remaining_hands) {
    let t=0;
    let final_remaining_hands = null;
    for(t=0;t<remaining_hands.length;t++){
        let y=0;
        let top_card = true;
        for(y=0; y< remaining_hands.length; y++) {
            if(remaining_hands[t].id == remaining_hands[y].id) {
                //do nothing
            }else{
                //compare the hands
                if(remaining_hands[t].type >= remaining_hands[y].type) {
                    //our hand is a higher type or equal
                    if(remaining_hands[t].type == remaining_hands[y].type){ //hand is the same type
                        //loop through the cards to find a difference
                        let b=0;
                        for(b=0; b<remaining_hands[t].hand.length; b++){
                            //compare cards at index
                            if(remaining_hands[t].hand[b] < remaining_hands[y].hand[b]) {
                                top_card = false
                            }else if(remaining_hands[t].hand[b] == remaining_hands[y].hand[b]){
                                //same card. do nothing.
                            }else{
                                //this card is higher than the comparison. stop the loop
                                b=remaining_hands[t].hand.length
                            }
                        }
                    }
                }else{
                    //hand is lower type
                    top_card = false;
                }
            }
            if(top_card == false){
                y=remaining_hands.length //break the loop
            }
            if(y==remaining_hands.length-1 && top_card) {
                //we have gone through all hands and top card is still true. push to new array
                ranked_hands.push(remaining_hands[t])
                final_remaining_hands = remaining_hands.slice(0, t).concat(remaining_hands.slice(t+1))
            }
        }
    }
    if(number_of_hands != ranked_hands.length) {
        findTopCard(final_remaining_hands)
    }
}

findTopCard(final_hands)


let solution = 0;
// i did it backwards... lowest strength hand should be index 0
let b;
let rank = 1;
for(b=ranked_hands.length-1; b>=0; b--){
    solution = solution + ranked_hands[b].bid*rank
    rank++
}

 console.log(solution)