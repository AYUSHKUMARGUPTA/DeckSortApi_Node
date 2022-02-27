var specialCards = ["4T", "2T", "ST", "PT", "RT"];

//post sort for custom deck if data found
exports.sortDeck = function(req, res){
    if(req.body.deck !== undefined && req.body.deck !== ""){
        res.json(200, sortCard(req.body.deck));
    }else{
        res.json(404, "Data Not Found");
    }
    
}


var sortCard = function (inp) {
    let cards = inp;

    let filterspecialCard = [];
    let clubsCard = [];
    let diamondCard = [];
    let spadeCard = [];
    let heartCard = [];

    cards.forEach((e) => {
        let lastchar = e.split('')[e.split('').length - 1]
        if (specialCards.includes(e)) {
            filterspecialCard.push(e);
        } else if (lastchar == 'C') {
            clubsCard.push(e);
        } else if (lastchar == 'D') {
            diamondCard.push(e);
        } else if (lastchar == 'S') {
            spadeCard.push(e);
        } else if (lastchar == 'H') {
            heartCard.push(e);
        }
    })

    let sortedArr = [];
    sortedArr.push(sortSpecialCard(filterspecialCard));
    sortedArr.push(sortSuits(diamondCard));
    sortedArr.push(sortSuits(spadeCard));
    sortedArr.push(sortSuits(clubsCard));
    sortedArr.push(sortSuits(heartCard));
    return sortedArr.flat()

}
function sortSuits(cards) {
    const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    let finalArr = [];
    let index;
    values.forEach((order) => {
        index = cards.findIndex(element => element.includes(order))
        if (index !== -1) {
            finalArr.push(cards[index])
        }
    })
    return finalArr;
}
function sortSpecialCard(spCards) {
    return spCards.sort((a, b) => specialCards.indexOf(a) - specialCards.indexOf(b));
}


    

