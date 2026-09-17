// ================= MOBILE MENU =================

function toggleMenu() {

    const nav = document.querySelector("nav");

    nav.classList.toggle("active");

}


// Close menu when clicking a link

document.querySelectorAll("nav a").forEach(function(link) {

    link.addEventListener("click", function() {

        document.querySelector("nav").classList.remove("active");

    });

});


// ================= STUDENT STORAGE =================

let students = JSON.parse(
    localStorage.getItem("iyungaStudents")
) || [];


// ================= ADD STUDENT =================

const studentForm = document.getElementById("studentForm");

studentForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const student = {

        id: document.getElementById("studentId").value,

        name: document.getElementById("studentName").value,

        gender: document.getElementById("studentGender").value,

        className: document.getElementById("studentClass").value,

        age: document.getElementById("studentAge").value,

        parent: document.getElementById("studentParent").value

    };


    students.push(student);


    localStorage.setItem(
        "iyungaStudents",
        JSON.stringify(students)
    );


    alert("Student added successfully!");


    studentForm.reset();


    displayStudents();

});


// ================= DISPLAY STUDENTS =================

function displayStudents(studentList = students) {

    const tableBody =
        document.getElementById("studentTableBody");

    const emptyMessage =
        document.getElementById("emptyMessage");


    tableBody.innerHTML = "";


    if (studentList.length === 0) {

        emptyMessage.style.display = "block";

        return;

    }


    emptyMessage.style.display = "none";


    studentList.forEach(function(student, index) {

        const row = document.createElement("tr");


        row.innerHTML = `

            <td>${index + 1}</td>

            <td>${student.id}</td>

            <td>${student.name}</td>

            <td>${student.gender}</td>

            <td>${student.className}</td>

            <td>${student.age}</td>

            <td>${student.parent}</td>

            <td>

                <button
                    class="delete-btn"
                    onclick="deleteStudent(${index})"
                >
                    Delete
                </button>

            </td>

        `;


        tableBody.appendChild(row);

    });

}


// ================= DELETE STUDENT =================

function deleteStudent(index) {

    const confirmDelete =
        confirm("Are you sure you want to delete this student?");


    if (confirmDelete) {

        students.splice(index, 1);


        localStorage.setItem(
            "iyungaStudents",
            JSON.stringify(students)
        );


        displayStudents();

    }

}


// ================= SEARCH STUDENT =================

const searchStudent =
    document.getElementById("searchStudent");


searchStudent.addEventListener("input", function() {

    const searchValue =
        searchStudent.value.toLowerCase();


    const filteredStudents =
        students.filter(function(student) {

            return (

                student.name
                    .toLowerCase()
                    .includes(searchValue)

                ||

                student.id
                    .toLowerCase()
                    .includes(searchValue)

                ||

                student.className
                    .toLowerCase()
                    .includes(searchValue)

            );

        });


    displayStudents(filteredStudents);

});


// ================= REGISTRATION =================

const registrationForm  = document.getElementById("registrationForm");

if (registrationForm) {
    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const student = {
            id: document.getElementById("studentId").value,
            name: document.getElementById("studentName").value,
            gender: document.getElementById("gender").value,
            studentClass: document.getElementById("studentClass").value,
            age: document.getElementById("age").value,
            guardian: document.getElementById("guardian").value
        };

        students.push(student);

        localStorage.setItem("students", JSON.stringify(students));

        alert("Student registered successfully!");

        registrationForm.reset();

        displayStudents();
    });
}

    registrationForm.reset();

});


// ================= INITIAL DISPLAY =================

displayStudents();
// ===============================
// STUDENT REGISTRATION
// ===============================

let students = JSON.parse(localStorage.getItem("students")) || [];

const registrationForm = document.getElementById("registrationForm");

if (registrationForm) {

    registrationForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const student = {
            id: document.getElementById("studentId").value,
            name: document.getElementById("studentName").value,
            gender: document.getElementById("gender").value,
            studentClass: document.getElementById("studentClass").value,
            age: document.getElementById("age").value,
            guardian: document.getElementById("guardian").value
        };

        students.push(student);

        localStorage.setItem("students", JSON.stringify(students));

        alert("Student registered successfully!");

        registrationForm.reset();

        displayStudents();
    });
}
// ===============================
// DISPLAY STUDENTS
// ===============================

function displayStudents() {

    const tableBody = document.getElementById("studentsTableBody");

    if (!tableBody) return;

    tableBody.innerHTML = "";

    if (students.length === 0) {

        tableBody.innerHTML = `
            <tr>
                <td colspan="7">
                    No students registered yet.
                </td>
            </tr>
        `;

        return;
    }

    students.forEach(function(student, index) {

        const row = `
            <tr>

                <td>${index + 1}</td>

                <td>${student.id}</td>

                <td>${student.name}</td>

                <td>${student.gender}</td>

                <td>${student.studentClass}</td>

                <td>${student.age}</td>

                <td>${student.guardian}</td>

                <td>
                    <button onclick="editStudent(${index})">
                        Edit
                    </button>

                    <button onclick="deleteStudent(${index})">
                        Delete
                    </button>
                </td>

            </tr>
        `;

        tableBody.innerHTML += row;
    });
}
function deleteStudent(index) {

    if (confirm("Are you sure you want to delete this student?")) {

        students.splice(index, 1);

        localStorage.setItem("students", JSON.stringify(students));

        displayStudents();
    }
}