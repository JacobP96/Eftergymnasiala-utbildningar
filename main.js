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
}

      findData()