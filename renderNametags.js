
function renderNametags(nametags) {

    let namesHtml = nametags.map(function(nametag) {

           return `
            <div class="nametag">
                <div class="nametag-header">Hello, my name is</div>
                <div class="nametag-body">
                <h3>${nametag}</h3>
                </div>
            </div>
            `;
            
      
    })

    return `
        <div class="text-center mt-5">
        ${namesHtml.join('')}
        </div>
    `
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}