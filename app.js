var n = "Richard Garner";
var uN = n.toUpperCase();
console.log('Name: ' + uN);

var amazon = {
    comp: "Amazon",
    job: "Packer",
    desc: "I touch other people's packages",
};
var costco = {
    comp: "Costco",
    job: "Food Court Slave",
    desc: "I bent myself to the will of entitled white people in order to get them food.",
};
var papa = {
    comp: "Papa Johns",
    job: "Delivery Boy",
    desc: "I delivered pizza to people who never tipped for a wadge that should be illigal.",
};
var work = [amazon, costco, papa];
for (let i in work) {
        runfunction(work[i].comp, work[i].job, work[i].desc)
};
console.log(work)