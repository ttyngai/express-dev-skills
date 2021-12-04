const DevSkill = require('../models/devSkill');

module.exports = {
  index,
  show,
};

function index(req, res) {
  let devSkills = DevSkill.getAll();
  res.render('devSkills/index', {
    devSkills,
  });
}

function show(req, res) {
  let devSkill = DevSkill.getOne(req.params.id);
  res.render('devSkills/show', { devSkill });
}
