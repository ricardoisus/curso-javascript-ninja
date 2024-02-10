/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myvar = ['carro', 2, true, null, undefined]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornaArray(a){
  if (a == undefined){
    return myvar
  }
  return myvar[a] 
}
// outra opção abaixo:
function retornaArray(a){
  return a == undefined ? myvar : myvar[a] 
}
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(retornaArray(1))
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function retornaParam(a,b){
  return a[b]
}
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array = ['Ricardo', null, 2, true, false]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(retornaParam(array,4))

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
  function book(nomeLivro){
    var livro = {
    livro1: { quantidadeDePaginas:10, autor: 'da2k', editora: 'ninja'} ,
    livro2: { quantidadeDePaginas:20, autor: 'Ricardo', editora: 'Jaraguá'},
    livro3: { quantidadeDePaginas:30, autor: 'Caroline', editora: 'Blumenau'}
    };
    return nomeLivro === undefined ? livro : livro[nomeLivro];
  }
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book())
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro ' + book('livro1') + ' tem ' + book('livro1').quantidadeDePaginas + ' páginas!')

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro ' + book('livro1') + ' é ' + book('livro1').autor + '.')


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' + book('livro1') + ' foi publicado pela editora ' + book('livro1').editora + '.')
