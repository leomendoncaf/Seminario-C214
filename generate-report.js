const Mocha = require('mocha');
const fs = require('fs');
const path = require('path');
const mochawesome = require('mochawesome');

// Crie uma instância do Mocha
const mocha = new Mocha();

// Adicione os arquivos de teste que você deseja executar
mocha.addFile(path.resolve(__dirname, '../Seminario-C214/src/components/TestStack.test.js'));

// Execute os testes
mocha.run((failures) => {
  // Crie um objeto de relatório mochawesome com os resultados dos testes
  const reportOptions = {
    reportDir: path.resolve(__dirname, 'reports'),
    reportFilename: 'report',
    reportTitle: 'Relatório de Testes',
    inlineAssets: true
  };

  const runner = mochawesome.getRunner();
  const reporter = new mochawesome(runner, reportOptions);
  reporter.run(failures, () => {
    // Leitura do arquivo de relatório gerado
    const reportFilePath = path.resolve(__dirname, 'reports', 'report.json');
    fs.readFile(reportFilePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Erro ao ler o arquivo de relatório:', err);
        process.exit(1);
      }

      // Salve o conteúdo do relatório em um arquivo de texto
      const outputFilePath = path.resolve(__dirname, 'reports', 'report.txt');
      fs.writeFile(outputFilePath, data, (err) => {
        if (err) {
          console.error('Erro ao salvar o relatório em um arquivo de texto:', err);
          process.exit(1);
        }
        console.log('Relatório salvo em:', outputFilePath);
        process.exit(0);
      });
    });
  });
});
