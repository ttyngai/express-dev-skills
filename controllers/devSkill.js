const devSkill = require('../models/todo');

module.export = {
  index,
  show,
};

function index(req, res) {
  let devSkills = devSkill.getAll();
  res.render('devSkills/index', {
    devSkills,
  });
}

function show(req, res) {
  let devSkill = devSkill.getOne(req.params.id);
  res.render('todos/show', { devSkill });
}
