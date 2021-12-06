var express = require('express');
var router = express.Router();

// todo CRUD functions
const devSkillsCtrl = require('../controllers/devSkills');

/* GET users listing. */
router.get('/', devSkillsCtrl.index);
router.get('/new', devSkillsCtrl.new);
router.get('/:id', devSkillsCtrl.show);
router.post('/', devSkillsCtrl.create);
router.get('/:id/edit', devSkillsCtrl.editPage);
router.put('/:id', devSkillsCtrl.update);
router.delete('/:id', devSkillsCtrl.delete);

module.exports = router;
