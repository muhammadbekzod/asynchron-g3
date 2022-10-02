
const students = [
    { name: 'Azizbek', lastname: 'Egamov' },
    { name: 'Davronbek', lastname: 'Lutfullaev' },
    { name: 'Jasurbek', lastname: 'Yuldashev' },
    { name: 'Tohirbek', lastname: ' Ochildiev' }
]
const teachers = [
    { name: 'Kim', lastname: 'Edward' },
    { name: 'Park', lastname: 'Li' },
    { name: 'Tom', lastname: 'Edothon' },
    { name: 'John', lastname: ' Adams' }
]

function getStudent() {
    setTimeout(() => {
        let result = ''
        students.forEach((student) => {
            result += `<div> ${student.name} ${student.lastname}</div>`
        })
        document.body.innerHTML = result
    }, 1000)

}
function addStudent(student, callback) {
    setTimeout(() => {
        students.push(student)
        callback()
    }, 2000)
}

addStudent({ name: 'Mirzo', lastname: 'Bakiev' }, getStudent)
