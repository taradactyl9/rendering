
function renderPokerHand(pokerHand) {
    // HINT: You can use <img /> tags that point to the card images in the /cards folder
    let pokerHtml = pokerHand.map(function(poker) {
        
        return ` 
    
         <div class="pokerhand"></div>
            <img src="rendering/cards/${poker}" />
        `;
    })
    
    return `
    <div class="text-center mt-5">
    ${pokerHtml.join('')}
    </div>
    `
}

function pokerHand() {
    var content = document.getElementById('content');

    var pokerHandAbstraction = [
        {
            value: "K",
            suit: "C"
        },
        {
            value: "K",
            suit: "D"
        },
        {
            value: "9",
            suit: "S"
        },
        {
            value: "2",
            suit: "H"
        },
        {
            value: "9",
            suit: "H"
        }
    ];

    content.innerHTML = renderPokerHand(pokerHandAbstraction);

}