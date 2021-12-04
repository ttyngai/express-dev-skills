const devSkills = [
  { id: 1001, devSkill: 'Express', mastery: 'Hyper Novice' },
  { id: 1002, devSkill: 'Javascript', mastery: 'Novice' },
  { id: 1003, devSkill: 'HTML', mastery: 'Novice' },
];

module.exports = {
  getAll,
  getOne,
};

function getAll() {
  return devSkills;
}

function getOne(id) {
  return devSkills.find((devSkill) => devSkill.id == id);
}
