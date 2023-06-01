import '@testing-library/jest-dom';
import 'jest-extended';

module.exports = {
  setupFilesAfterEnv: ['./setupTests.js'],
  // outras configurações do Jest
};


// Importe o expect do Jest
global.expect = require('jest').expect;
