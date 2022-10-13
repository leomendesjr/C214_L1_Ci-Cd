const create = {
    marca: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    modelo: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    cor: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    placa: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const update = {
    cor: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    placa: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const get = {
    placa: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const deleteBy = {
    placa: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

module.exports = {
    update,
    create,
    get,
    deleteBy,
};