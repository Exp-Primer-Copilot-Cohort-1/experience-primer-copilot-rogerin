function skillsMember() {
    var member = {
        name: "John",
        age: 30,
        skills: ["JavaScript", "HTML", "CSS"],
        salary: 4000,
        address: {
            city: "New York",
            country: "USA"
        },
        getSalary: function () {
            return this.salary;
        },
        setSalary: function (newSalary) {
            this.salary = newSalary;
        },
        getSkills: function () {
            return this.skills;
        },
        setSkills: function (newSkills) {
            this.skills = newSkills;
        }
    };
    console.log(member.getSalary());
    member.setSalary(6000);
    console.log(member.getSalary());
    console.log(member.getSkills());
    member.setSkills(["Java", "SQL", "Python"]);
    console.log(member.getSkills());
}