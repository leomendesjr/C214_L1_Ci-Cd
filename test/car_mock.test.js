const { CarModel } = require('../src/infrastructure/database');
const car = require('../src/port/car_repository');

describe('create', () => {
    it('Valid Car', async () => {
        CarModel.prototype.save = jest.fn().mockImplementation(() => ({
            toObject: () => ({
                id: 1,
                marca: "Mercedes",
                modelo: "A350",
                placa: "mer2022",
                cor: "cromada"
            }),
        }));

        expect(await car.create({
            id: 1,
            marca: "Mercedes",
            modelo: "A350",
            placa: "mer2022",
            cor: "cromada"
        })).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                marca: expect.any(String),
                modelo: expect.any(String),
                cor: expect.any(String),
                placa: expect.any(String),
            }),
        );
    });
});