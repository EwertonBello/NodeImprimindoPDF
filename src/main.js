const ptp = require('pdf-to-printer');

function listPrinters() {
  function onSuccess(data) {
    console.log('Printers: ', data);
  }

  function onError(error) {
    console.log('Error: ', error);
  }

  ptp
    .getPrinters()
    .then(onSuccess)
    .catch(onError);
}

console.log('Iniciando');

console.log('Requisitando lista de impressoras...');

ptp
  .getPrinters()
  .then((data) => {
  	console.log('Printers: ', data);
  })
  .catch(( error ) => {
  	console.error('Erro ao requisitar impressoras: ', error);
  });

console.log('Requisitando impressora padrão...');

ptp
  .getDefaultPrinter()
  .then((data) => {
  	console.log('Impressora: ', data);
  })
  .catch(( error ) => {
  	console.error('Erro ao requisitar impressora: ', error);
  });

console.log('test');
listPrinters();

// console.log('Preparando para impressão...');

// ptp
//   .print("./src/assets/pdf_exemplo.pdf")
//   .then(console.log('Enviado para impressão'))
//   .catch(console.error("Não foi possível enviar para impressão"));
