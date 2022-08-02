/*

OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o próximo cartão da lista
    - passo 1 - dar um jeito de pegar o elemento html da seta avançar
    - passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
    - passo 3 - fazer aparecer o próximo cartão da lista
    - passo 4 - buscar o cartão que está selecionado e esconder

OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão anterior da lista
    - passo 1 - dar um jeito de pegar o elemento html da seta voltar
    - passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
    - passo 3 - fazer aparecer o cartão anterior da lista
    - passo 4 - buscar o cartão que está selecionado e esconder

*/



/*

OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o próximo cartão da lista
    - passo 1 - dar um jeito de pegar o elemento html da seta avançar
    - passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
    - passo 3 - fazer aparecer o próximo cartão da lista
    - passo 4 - buscar o cartão que está selecionado e esconder
*/

/*- passo 1 - dar um jeito de pegar o elemento html da seta avançar
*/
const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cards = document.querySelectorAll('.card');
let cardAtual = 0;

function esconderCardSelect(){
    const cardSelect = document.querySelector('.select');
    cardSelect.classList.remove('select');
}

function mostarCard(indiceCard){
    cards[indiceCard].classList.add('select');
}

/* - passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
*/
btnAvancar.addEventListener('click', function () {
    
    console.log("card atual", cardAtual);
    console.log("cards", cards.length - 1);
    if(cardAtual === cards.length - 1){return;}
    
    esconderCardSelect();

    
    cardAtual++;
    
    mostarCard(cardAtual)
    
 
    
})

btnVoltar.addEventListener('click', function () {
    if(cardAtual === 0) return
    
    esconderCardSelect();
    
    cardAtual--;
    
    mostarCard(cardAtual);
    

    
    
})



