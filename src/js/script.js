// Selecionando elemento ul do HTML
const lista = document.querySelector('ul');
const listaDoCarrinho = lista.querySelector('.containerCarrinho ul');
const output = document.getElementById('precoTotal');
output.value = '';

const ul = document.querySelector('.containerListaProdutos ul');

const montarListaProdutos = (listaProdutos) => {
    ul.innerHTML = '';

    listaProdutos.forEach((produto) => {
        const { nome, preco, secao, img, componentes, id } = produto
        const li = document.createElement('li');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const span = document.createElement('span');
        const ol = document.createElement('ol');
        const button = document.createElement('button');

        componentes.forEach((value) => {
            const li = document.createElement('li');
            li.innerText = value

            ol.appendChild(li);
        });
        button.setAttribute('data-id', id)

        // Adicionando dados do produto aos elementos
        img.src = produto.img;
        img.alt = produto.nome;
        h3.innerText = produto.nome;
        p.innerText = produto.preco;
        span.innerText = produto.secao;
        button.innerText = 'Adicionar ao carrinho'

        // Adicionando o elementos para o li
        li.appendChild(img);
        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(span);
        li.appendChild(ol);
        li.appendChild(button)

        // Adicionando li ao HTML
        ul.appendChild(li);
    });

    const button = document.querySelectorAll('.containerListaProdutos ul li button');

    addButton(button);
}



function addButton(buttons) {
    buttons.forEach((produto) => {
        produto.addEventListener('click', (event) => {
            const id = event.target.getAttribute('data-id');
            addCar(id)
        })
    });
}
let somaTotal = []

function addCar(ident) {
    let addProduto = {}
    produtos.forEach((produto) => {
        const { id } = produto;
        if (id == ident) {
            addProduto = { ...produto }
        }
    });
}
const { img, nome, preco, secao } = addProduto;
const itemadd = document.createElement('li');
const image = document.createElement('img');
const name = document.createElement('p');
const price = document.createElement('p');
const section = document.createElement('p');

price.setAttribute('class', 'price')

image.src = img;
nome.innerText = nome;
price.innerText = preco;
section.innerText = secao;

itemadd.appendChild(image);
itemadd.appendChild(nome);
itemadd.appendChild(price);
itemadd.appendChild(section);

listaDoCarrinho.appendChild(itemadd);


const value = Number(preco);
somaTotal.push(value)
const result = somaTotal.reduce((a, b) => a + b)

output.innerHTML = result + '.00'


const mostrarTodos = () => {

    return montarListaProdutos(produtos);
}

// Selecionando botao em nosso HTML
const botaoMostrarTodos = document.querySelector('.estiloGeralBotoes--mostrarTodos');

// Adicionando event listener de clique, e executando a função de filtro
botaoMostrarTodos.addEventListener('click', mostrarTodos);

const filtrarPorHortifruti = () => {

    const listaHortifruti = produtos.filter((produto) => {
            const { secao } = produto;
        if (secao === 'Hortifruti') {
            return produto
        }
    });

    montarListaProdutos(listaHortifruti);

}

// Selecionando botao em nosso HTML
const botaoMostrarHortifruti = document.querySelector('.estiloGeralBotoes--filtrarHortifruti');

// Adicionando event listener de clique, e executando a função de filtro
botaoMostrarHortifruti.addEventListener('click', filtrarPorHortifruti);

const input = document.querySelector(".campoBuscaPorNome")

const campoBuscaPorNome = () => {
    const valorInput = input.value.toLowerCase();
    const buscaPorNome = produtos.filter((produto) => {
        const { nome, secao } = produto;
        if(nome.toLowerCase() === valorInput || secao.toLowerCase() === valorInput) {
            return produto
        }

    });

    montarListaProdutos(buscaPorNome);
    
}

// Selecionando botao em nosso HTML
const botaoBuscaPorNome = document.querySelector('.estiloGeralBotoes--botaoBuscaPorNome')

// Adicionando event listener de clique, e executando a função de filtro
botaoBuscaPorNome.addEventListener('click', campoBuscaPorNome)