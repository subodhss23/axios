const axios = require('axios');

function performGetRequest1(){
  var resultElement = document.getElementById('getResult1');
  resultElement.innerHTML = " ";

axios.get('http://jsonplaceholder.typicode.com/todos')
  .then((response) => resultElement.innerHTML = generateSucessHTMLOutput(response))
  .catch((error) => resultElement.innterHTML = generateErrorHTMLOutput(error));
}

function generateSucessHTMLOutput(response){
  return '<h4>Result</h4>' + 
          '<h5>Status:</h5> ' + 
          '<pre>' + response.status + ' ' + response.statusText + '</pre>' +
          '<h5>Headers:</h5>' + 
          '<pre>' + JSON.stringify(response.headers, null, '\t') + '</pre>' + 
          '<h5>Data:</h5>' + 
          '<pre>' + JSON.stringify(response.data, null, '\t') + '</pre>'; 
}

function generateErrorHTMLOutput(error){
  return  '<h4>Result</h4>' + 
          '<h5>Message:</h5> ' + 
          '<pre>' + error.message + '</pre>' +
          '<h5>Status:</h5> ' + 
          '<pre>' + error.response.status + ' ' + error.response.statusText + '</pre>' +
          '<h5>Headers:</h5>' + 
          '<pre>' + JSON.stringify(error.response.headers, null, '\t') + '</pre>' + 
          '<h5>Data:</h5>' + 
          '<pre>' + JSON.stringify(error.response.data, null, '\t') + '</pre>'; 
}

function performGetRequest2(){
  var resultElement = document.getElementById('getResult2');
  var todoId = document.getElementById('todoId').nodeValue;
  resultElement.innerHTML = " ";

  axios.get('http://jsonplaceholder.typicode.com/todos', {
    params: {
      id: todoId
    }
  })
  .then((response) => {
    console.log(response);
    resultElement.innterHTML = generateSucessHTMLOutput(response);
  })
  .catch((error) => resultElement.innterHTML = generateErrorHTMLOutput(error));
}

document.getElementById('todoInputForm').addEventListener('submit', performPostRequest)

function performPostRequest(e){
  var resultElement = doucment.getElementById('postResult');
  var todoTitile = doucment.getElementById('todoTitle').value;
  resultElement.innerHTML=' ';

  axios.post('http://jsonplaceholder.typicode.com/todos', {
    userId: '1',
    title: todoTitile,
    completed: false
  })
  .then((response) => {
    resultElement.innterHTML = denterateSucressHTMLOutput(response);
  })
  .catch((error) => resultElement.innterHTML = generateErrorHTMLOutput(error)
    
  );
  e.preventDefault();
}
