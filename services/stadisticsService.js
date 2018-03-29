const Guest = require('../models/guest');

const service = {};

const amountOfGuest = async () => {
  const result = await Guest.count({});
  return {
    msg: 'Cantidad de Participantes: ',
    value: result
  };
};

const amountOfMaleGuest = async () => {
  const result = await Guest.count({sex: 'male'});
  return {
    msg: 'Cantidad de participantes hombres: ',
    value: result
  }
};

const amountOfFemaleGuest = async () => {
  const result = await Guest.count({sex: 'female'});
  return {
    msg: 'Cantidad de participantes mujeres: ',
    value: result
  }
};

const amountOfNewBrothers = async () => {
  const result = await Guest.count({
    walkIn: 'NONE',
    easterKind: { $in: ['Jovenes', 'Intermedia', 'Adultos'] } });
  return {
    msg: 'Cantidad de hermanos nuevos: ',
    value: result
  }
};

const amountOfChilds = async () => {
  const result = await Guest.count({easterKind: 'Niños'});
  return {
    msg: 'Cantidad de hermanos que hicieron pascua de Niños: ',
    value: result
  }
};

const amountOfGrow = async () => {
  const result = await Guest.count({easterKind: 'Crecimiento'});
  return {
    msg: 'Cantidad de hermanos que hicieron pascua de Crecimiento: ',
    value: result
  }
};

const amountOfFirstEaster = async () => {
  const result = await Guest.count({easters: 1});
  return {
    msg: 'Cantidad de hermanos que hicieron pascua de Por Primera vez: ',
    value: result
  }
};

service.getStadistics = () => {
  const amountOfGuestP = amountOfGuest();
  const amountOfMaleGuestP = amountOfMaleGuest();
  const amountOfFemaleGuestP = amountOfFemaleGuest();
  const amountOfNewBrothersP = amountOfNewBrothers();
  const amountOfFirstEasterP = amountOfFirstEaster();
  const amountOfChildsP = amountOfChilds();
  const amountOfGrowP = amountOfGrow();

  return Promise.all([
    amountOfGuestP,
    amountOfMaleGuestP,
    amountOfFemaleGuestP,
    amountOfNewBrothersP,
    amountOfFirstEasterP,
    amountOfChildsP,
    amountOfGrowP
  ]);
};

module.exports = service;