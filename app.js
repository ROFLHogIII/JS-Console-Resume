var n = "Richard Garner";
var uN = n.toUpperCase();
console.log('Name: ' + uN);
console.log('Career: Intergalactic Warlord');
console.log('Description: WRITHE, PUNY APES, AND WITNESS MY MAJESTY');
console.log('')
console.log('My Interests:')
console.log('* Anime')
console.log('* Video Games')
console.log('* Magic: the Gathering')
console.log('* Universal Domination')
console.log('* Sleeping')
console.log('')
var amazon = {
    comp: "Amazon",
    job: "Packer",
    desc: "I touched other people's packages. ;)",
};
var costco = {
    comp: "Costco",
    job: "Food Court Slave",
    desc: "I bent myself to the will of entitled white people in order to get them food.",
};
var papa = {
    comp: "Papa Johns",
    job: "Delivery Boy",
    desc: "I delivered pizza to people who never tipped for a wage that should be illegal.",
};
var work = [amazon, costco, papa];
console.log('My Previous Experience:')
for (let i in work) {
    displayPosition(work[i].comp, work[i].job, work[i].desc)
};
console.log('')
var skill1 = {
    name: 'Tactical Genius',
    cool: 1,
};
var skill2 = {
    name: 'Expert video game player',
    cool: 1,
};
var skill3 = {
    name: 'Magic: the Gathering',
    cool: 0,
};
var skill4 = {
    name: 'Peerless warrior',
    cool: 0,
};
var skill5 = {
    name: 'Ruler of 1000 star systems',
    cool: 0,
};
var skill6 = {
    name: 'Can make a mean Fehttuchini Alfredo',
    cool: 1,
};
var skill7 = {
    name: 'Able to decimate armies with a single swing of my blade',
    cool: 1,
};
var skill8 = {
    name: 'D&D Dungeon Master',
    cool: 1,
};
var skill9 = {
    name: 'Plays a little piano',
    cool: 0,
};
var skill10 = {
    name: 'Basic js coding',
    cool: 1,
};
var skills = [skill1, skill2, skill3, skill4, skill5, skill6, skill7, skill8, skill9, skill10];
console.log('My Skills:')
for (let i in skills) {
    displaySkills(skills[i].name, skills[i].cool);
};

function displaySkills(name, cool) {
    if (cool === 1) {
        console.log('* BAM: ' + name)
    } else {
        console.log('* ' + name)
    }
};
function displayPosition(comp, job, desc) {
    console.log('* ' + job + ' at ' + comp + ' - ' + desc)
};

