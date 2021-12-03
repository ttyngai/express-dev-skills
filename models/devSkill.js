const devSkills = [
{id:1001, devSkill= 'Express', mastery: false },
{id:1002, devSkill= 'Javascript', mastery: false },
{id:1003, devSkill= 'HTML', mastery: false },
]

module.exports = {
getAll, getOne
}


function getAll(){
    return devSkills
}

function getOne(id){
    return devSkills.find(devSkill=> devSkill.id === id)
}