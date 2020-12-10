const ptp = require('pdf-to-printer');

function getListPrinters() {
	// Retorna a lista de impressoras

	function onSuccess(data) {
		console.log('Printers: ', data);
		return data;
	}

	function onError(error) {
		console.log('Error: ', error);
	}

	ptp
	 .getPrinters()
	 .then(onSuccess)
	 .catch(onError);
}

function getDefaultPrinter() {
	// Retorna a impressora padrão

	function onSuccess(data) {
		console.log('Printer Default: ', data);
		return data;
	}

	function onError(error) {
		console.log('Error: ', error);
	}

	ptp
	 .getDefaultPrinter()
	 .then(onSuccess)
	 .catch(onError);
}

function sendToPrinter(file, printerName="") {
	// Envia para fila de impressão, na impressora padrão ou em outra especificada

	function onSuccess(data) {
		console.log('Documento enviado para impressão!', data);
	}

	function onError(error) {
		console.log('Error: ', error);
	}

	const options = printerName.length > 0 ? {printer: printerName}: {};

	ptp
	 .print(file, options)
	 .then(onSuccess)
	 .catch(onError);
}

console.log('Iniciando');

console.log('Requisitando lista de impressoras...');

let impressoras = getListPrinters();

console.log('Requisitando impressora padrão...');

let impressoraPadrao = getDefaultPrinter();

console.log('Preparando para impressão...');

sendToPrinter("./src/assets/pdf_exemplo.pdf", "Deskjet Series 1234");

console.log(impressoras);
console.log(impressoraPadrao);

// ptp
//   .print("./src/assets/pdf_exemplo.pdf")
//   .then(console.log('Enviado para impressão'))
//   .catch(console.error("Não foi possível enviar para impressão"));
