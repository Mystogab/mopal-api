const 
  bsas = require('../json/local_bsas.json'),
  caba = require('../json/local_caba.json'),
  jcp = require('../json/local_jcp.json');

const service = {};

service.fetchBsAs = () => bsas;
service.fetchCaba = () => caba;
service.fetchJcp = () => jcp;

module.exports = service;