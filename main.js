const axios = require('axios');

function performGetRequest1(){
  var resultElement = document.getElementById('getResult1');
  resultElement.innerHTML = " ";

axios.get('http://jsonplaceholder.typicode.com/todos')
  .then((response) => resultElement.innerHTLM = generateSucessHTMLOutput(response))
  .catch((error) => resultElement.innterHTLM = generateErrorHTMLOutput(error));
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