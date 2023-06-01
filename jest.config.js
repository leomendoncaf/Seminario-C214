module.exports = {
  testEnvironment: 'node', // Define o ambiente de teste para Node.js
  roots: ['../Seminario-C214/src'], // Define o diretório raiz dos arquivos de teste
  testMatch: ['**/src/**/*test.js'], // Define o padrão de nomenclatura dos arquivos de teste
  moduleFileExtensions: ['js'], // Define as extensões de arquivo suportadas
  setupFilesAfterEnv: ['../Seminario-C214/setupTests.js'], // Define o arquivo de configuração do ambiente de teste
};
