// Importe os módulos e bibliotecas necessários
const fs = require('fs');
const path = require('path');

// Defina o caminho para o arquivo de relatório
const reportPath = path.join(__dirname, 'report.txt');

// Crie o conteúdo do relatório
const reportContent = 'Este é o conteúdo do relatório.';

// Escreva o conteúdo do relatório no arquivo
fs.writeFileSync(reportPath, reportContent);

// Exiba uma mensagem de sucesso
console.log('Relatório gerado com sucesso!');
