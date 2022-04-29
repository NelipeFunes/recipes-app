export const sendLocalStorage = (obj) => {
  localStorage.setItem('mealsToken', '1');
  localStorage.setItem('cocktailsToken', '1');
  localStorage.setItem('user', JSON.stringify(obj.email));
};

export const getLocalStorage = () => {
  const email = localStorage.getItem('user');
  const mealsToken = localStorage.getItem('mealsToken');
  const cocktailsToken = localStorage.getItem('cocktailsToken');
  return { email, mealsToken, cocktailsToken };
};

// function insertPhraseInDOM() {
//   const phrasesList = JSON.parse(sessionStorage.getItem('phrases'));
//   const listLength = phrasesList.length - 1;
//   const phraseText = phrasesList[listLength];
//   const phrase = document.createElement('li');
//   phrase.innerText = phraseText;
//   list.appendChild(phrase);
//   }
// * Precisamos transformar este objeto em uma string. Para isso, utilizamos a função `JSON.stringify()`.

// ? localStorage.setItem('myData', JSON.stringify(myObj));

// * Como dito anteriormente, o `localStorage` armazena dados no formato chave e valor, sendo os valores sempre string. Para isso, precisamos passar como primeiro parâmetro do método `setItem()` o nome da chave, passamos `myData` e como segundo parâmetro, a função `JSON.stringify()` com o objeto-valor que queremos armazenar na chave `myData`. Feito isso, teremos salvo no `localStorage` um objeto com a chave `myData` e o valor `{ "name": "Link", "age": 20 }`.

// *Agora, precisamos recuperar o objeto armazenado, mas queremos ele no formato original e não como uma string. Para isso, utilizaremos a função `JSON.parse()`.

// ? const recoveredObject = JSON.parse(localStorage.getItem('myData'));

// *Utilizamos a função `JSON.parse()` para transformar a string que está armazenada no `localStorage` de volta