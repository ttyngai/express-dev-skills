const DevSkill = require('../models/devSkill');

module.exports = {
  index,
  show,
  new: newDevSkill,
  create,
  delete: deleteOne,
  editPage,
  update,
};

function index(req, res) {
  let devSkills = DevSkill.getAll();
  res.render('devSkills/index', {
    devSkills,
  });
}

function show(req, res) {
  let devSkill = DevSkill.getOne(req.params.id);
  res.render('devSkills/show', {
    devSkill,
  });
}

function create(req, res) {
  DevSkill.create(req.body);
  res.redirect('/devSkills');
}

function newDevSkill(req, res) {
  res.render('devSkills/new');
}
function deleteOne(req, res) {
  DevSkill.delete(req.params.id);
  res.redirect('/devSkills');
}
function editPage(req, res) {
  let devSkill = DevSkill.getOne(req.params.id);
  res.render(`devSkills/edit`, { devSkill });
}

function update(req, res) {
  DevSkill.update(req.params.id, req.body);

  res.redirect(`/devSkills/${req.params.id}`);
}
