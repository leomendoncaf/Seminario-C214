const fs = require('fs');
const path = require('path');
const { runCLI } = require('jest');

(async () => {
  try {
    // Opções de configuração para o relatório mochawesome
    const reportDir = path.resolve(__dirname, 'reports');
    const reportOptions = {
      reportDir: reportDir,
      reportFilename: 'report',
      reportTitle: 'Relatório de Testes',
      inlineAssets: true,
    };

    // Opções de configuração para o Jest
    const jestConfig = {
      testMatch: ['../Seminario-C214/src/components/TestStack.test.js'],
      reporters: [[require.resolve('mochawesome'), reportOptions]],
    };

    // Executa os testes com o Jest
    const { results } = await runCLI(jestConfig, [process.cwd()]);

    // Verifica se houve falhas nos testes
    const failures = results.numFailedTests;
    if (failures > 0) {
      console.error(`Houve ${failures} falha(s) nos testes.`);
      process.exit(1);
    }

    // Leitura do arquivo de relatório gerado
    const reportFilePath = path.join(reportDir, 'report.json');
    const data = fs.readFileSync(reportFilePath, 'utf8');

    // Salva o conteúdo do relatório em um arquivo de texto
    const outputFilePath = path.join(reportDir, 'report.txt');
    fs.writeFileSync(outputFilePath, data);

    console.log('Relatório salvo em:', outputFilePath);
    process.exit(0);
  } catch (error) {
    console.error('Erro ao executar os testes:', error);
    process.exit(1);
  }
})();
