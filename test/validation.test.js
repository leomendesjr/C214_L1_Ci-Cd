const Constants = require('../src/utils/constants');
const Validation = require('../src/utils/validation');

it('Carro correto', () => {
    const result = Validation.create({
        marca: "VW",
        modelo: "Gol",
        placa: "gol1995",
        cor: "azul"
    });
    expect(result).toEqual(undefined);
});

it('Carro sem placa', () => {
    const result = Validation.create({
        marca: "VW",
        modelo: "Gol",
        cor: "azul"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});
