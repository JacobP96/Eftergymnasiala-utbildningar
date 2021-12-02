let getData = async (URL) => {
    let response = await fetch(URL);
    let data = await response.json();
    return data;
  };
  async function findData() {
    let students = await getData("https://api.mocki.io/v2/01047e91/students");
    let school = await getData("https://api.mocki.io/v2/01047e91/schools");
   
  
    students.forEach((student) => {
      let li = document.createElement("li");
      li.textContent = `${student.firstName} ${student.lastName}`
      document.querySelector("#userList").appendChild(li);
    });
    let button = document.querySelector("#showProgram");
let radioBtn = document.querySelectorAll("input[name='program']");
let studentList = document.querySelector("#userList");

button.addEventListener("click", () => {
    let program;
    studentList.innerHTML = "";
    radioBtn.forEach((input) => {
      if (input.checked) {
        program = input.value;
      } 
    });

    let filter = students.filter(
      (students) => students.programme === program
    );
    filter.forEach((student) => {
      let studentName = document.createElement("li");
      studentName.textContent = `${student.firstName} ${student.lastName}`
      let ProgramHeader = document.querySelector("#Header")
      ProgramHeader.textContent = ` Eleverna går utbildningen ${student.programme}`
      let studentList = document.querySelector("#userList");
      studentList.appendChild(studentName);
    });
  });
  // filtrerar listan efter ålder, yngst först i listan
  let ageButton = document.querySelector("#showAge");

  ageButton.addEventListener("click", () => {
    studentList.innerHTML = "";
    let sortByAge = students.sort((age1, age2) => age1.age - age2.age);
    sortByAge.forEach((studentAge) => {
      let studentAgeName = document.createElement("li");
      studentAgeName.textContent = `${studentAge.firstName} ${studentAge.lastName}, ${studentAge.age} years of age`;
      let ProgramAgeHeader = document.querySelector("#Header");
      ProgramAgeHeader.textContent = ` Eleverna är sorterade efter ålder `;
      let studentAgeList = document.querySelector("#userList");
      studentAgeList.appendChild(studentAgeName);
    });
  });
  // sortera efter förnamn, bokstavsordning
  let firstNameButton = document.querySelector("#showfirstName");

  firstNameButton.addEventListener("click", () => {
    studentList.innerHTML = "";

    // function för att sortera förnamn
    function compareFirstNames(a, b) {
      if (a.firstName < b.firstName) {
        return -1;
      }
      if (a.firstName > b.firstName) {
        return 1;
      }
      return 0;
    }
    // skriver ut eleverna i bokstavsordning baserat på förnamnet
    let checkFirstName = students.sort(compareFirstNames);
    checkFirstName.forEach((studentName) => {
      let studentfirstName = document.createElement("li");
      studentfirstName.textContent = `${studentName.firstName} ${studentName.lastName}`;
      let ProgramNameHeader = document.querySelector("#Header");
      ProgramNameHeader.textContent = ` Eleverna har sorterats i bokstavsordning baserat på förnamn `;
      let studentNameList = document.querySelector("#userList");
      studentNameList.appendChild(studentfirstName);
    });
  });
  let lastNameButton = document.querySelector("#showlastName");
  lastNameButton.addEventListener("click", () => {
    studentList.innerHTML = "";

    // function för att sortera förnamn
    function compareLastNames(a, b) {
      if (a.lastName < b.lastName) {
        return -1;
      }
      if (a.lastName > b.lastName) {
        return 1;
      }
      return 0;
    }
    // skriver ut eleverna i bokstavsordning baserat på förnamnet
    let checkLastName = students.sort(compareLastNames);
    checkLastName.forEach((studentName) => {
      let studentlastName = document.createElement("li");
      studentlastName.textContent = `${studentName.firstName} ${studentName.lastName}`;
      let ProgramlastNameHeader = document.querySelector("#Header");
      ProgramlastNameHeader.textContent = ` Eleverna har sorterats i bokstavsordning baserat på efternamn `;
      let studentLastNameList = document.querySelector("#userList");
      studentLastNameList.appendChild(studentlastName);
    });
  });
}

      findData()