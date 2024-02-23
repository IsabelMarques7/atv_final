// let card = document.querySelector('.shopping-cart');: Esta linha de código seleciona o primeiro elemento HTML que possui a classe shopping-cart e o armazena em uma variável chamada card. O método document.querySelector() é usado para encontrar o primeiro elemento que corresponde ao seletor especificado, neste caso, um elemento com a classe shopping-cart.
let cart = document.querySelector('.shopping-cart');

// document.querySelector('#cart').onclick = () => { ... }: Esta linha de código seleciona o primeiro elemento HTML com o ID cart e define uma função de retorno de chamada (callback) para ser executada quando o elemento é clicado pelo usuário. O onclick é um evento de clique que ocorre quando o elemento é clicado.
// cart.classList.toggle('active');: Dentro da função de retorno de chamada, há uma instrução para alternar a classe active no elemento cart. O método classList.toggle() alterna a presença da classe especificada. Se a classe active estiver presente no elemento cart, ela será removida; se não estiver presente, será adicionada.
document.querySelector('#cart').onclick = () =>{
    cart.classList.toggle('active');
}

