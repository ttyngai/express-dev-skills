const devSkills = [
  { id: 1001, devSkill: 'Express', mastery: 'Hyper Novice' },
  { id: 1002, devSkill: 'Javascript', mastery: 'Novice' },
  { id: 1003, devSkill: 'HTML', mastery: 'Novice' },
];

module.exports = {
  getAll,
  getOne,
  create,
  delete: deleteOne,
};

function getAll() {
  return devSkills;
}

function getOne(id) {
  return devSkills.find((devSkill) => devSkill.id == id);
}

function create(devSkillObj) {
  devSkillObj.id = Math.floor(Math.random() * 1000);
  devSkillObj.mastery = false;
  devSkills.push(devSkillObj);
}

function deleteOne(id) {
  const devSkillIdx = devSkills.findIndex((devSkill) => devSkill.id == id);
  devSkills.splice(devSkillIdx, 1);
}
