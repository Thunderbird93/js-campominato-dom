const play = document.querySelector(`.play`);

const grid = document.querySelector(`.s-grid`);

const celle = 100;


function generaCella(x) {
    const cella = document.createElement('div')
    cella.className = "cell";
    cella.innerText = x;
    return cella
}


play.addEventListener('click', function(){
    generaCampo(celle, grid);
    function generaCampo(max, element) {
        for (let i = 1; i <= celle; i++) {
            const cella = generaCella(i);

            element.insertAdjacentElement(`beforeend`, cella);

            cella.addEventListener('click', function(){
                
                this.classList.toggle("active");
                console.log(this);

            }
            )
            