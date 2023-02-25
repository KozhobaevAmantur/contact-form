const caseInput = document.querySelector('#case')
const vBtn = document.querySelector('.filter')
const saveBtn = document.querySelector('.keep')

//let arr = []
vBtn.addEventListener('click',(e) => {
    e.preventDefault()
    const direct = {
        name: caseInput.value
    }
    console.log(direct)
})
//saveBtn.addEventListener('click',(e) => {
//    e.preventDefault()
//   const direct2 = {
//        name: caseInput.value
//    }
//    console.log(direct2)
//})
saveBtn.addEventListener('click',(e) => {
    e.preventDefault()
    let name = document.querySelector('.keep')
    name = name.value;
    localStorage.setItem('name','name');
    JSON.stringify((name))

})

