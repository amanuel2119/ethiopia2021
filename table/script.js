const nameList = [
    {name: "aman", gender: "male", age: 23},
    {name: "kirubel", gender: "Male", age: 26},
    {name: "hilina", gender: "female", age: 22},

]

const mytable = document.querySelector("#nametable");

for (let index = 0; index < nameList.length; index++) {
    const element = nameList[index];

    const tr = document.createElement("tr");

    const nameTd = document.createElement("td");

    nameTd.innerHTML = element.name;

    const genderTd = document.createElement("td");

    genderTd.innerHTML = element.gender;

    const ageTd = document.createElement("td");

    ageTd.innerHTML = element.age;


    tr.appendChild(nameTd);
    tr.appendChild(genderTd);
    tr.appendChild(ageTd);

    mytable.appendChild(tr);
}
    