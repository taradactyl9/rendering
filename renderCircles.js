
function renderCircles(circles) {
    // HINT: You probably need to write a for loop!
    //       Or, if you're feeling fancy, use .map() 
   
   let circlesArray = [];
   for (i = 0; i < circles.length; i++) {
       circlesArray.push(`<div style="border-radius:${circles[i].radius}px;background-color:${circles[i].color};height:${circles[i].radius}px;width:${circles[i].radius}px;"></div>`);
   }

   //console.log(circlesArray);
   circlesHtml = circlesArray.join('');

   //console.log(circlesHtml);
   
    return `
        <div class="text-center mt-5">
            ${circlesHtml}
        </div>
    `
}

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}