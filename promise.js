
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
function addStudent(student) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            students.push(student)
            const error = true
            if (!error) {
                resolve()
            }
            else {
                reject("student ma'lumot qo'shishda xatolik bor!")
            }

        }, 2000)
    })
}

addStudent({ name: 'Mirzo', lastname: 'Bakiev' })
    .then(getStudent)
    .catch(err => console.log(err))
