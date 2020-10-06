let table = document.getElementById('table')


init(table)

function init(table) {
    let activities = []
    let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    let now = new Date()
    let date = new Date(now.getFullYear(), now.getMonth() + 3, 0)
    let parentField = document.querySelector('.parent')
    fillTable(table, days, date)


    function fillTable(table, days, date) {
        let daysRow = createDaysRow(table)
        let dayInMonth = range(1, date.getDate())
        createCols(daysRow, days.length)
        let row = createRows(table, 5)
        let col = createCols(row, days.length)
        fillDaysRow(daysRow[0].querySelectorAll('td'), days)
        fillDateRow(col, dayInMonth, days, date, now)
    }

    function fillDateRow(col, day, days, date, now) {
        let activities = {}
        let count = 1

        let workingCols = sortByDay(col, count, date)


        for (let i = 0; i < workingCols.length; i++) {
            workingCols[i].classList.add('active')
            workingCols[i].addEventListener('click', function () {
                let data
                if (!activities[workingCols[i].innerHTML]) {
                    data = activities[workingCols[i].innerHTML] = []
                } else {
                    data = activities[workingCols[i].innerHTML]
                }

                parentField.innerHTML = `
                <p>${i + 1}</p>
                <div id="field"></div>
                <div id="create-list">
                    <input type="text" id="input">
                    <button id="btn">Добавить</button>
                    <button id="close-btn">Закрыть</button>
                </div>
                `

                let field = parentField.querySelector('#field')
                if (activities[workingCols[i].innerHTML].length != 0) {
                    for (let i = 0; i < data.length; i++) {
                        createElement(field, data[i], i)
                    }
                }
                let input = parentField.querySelector('#input')
                let btn = parentField.querySelector('#btn')
                let closeBtn = parentField.querySelector('#close-btn')

                function createElement(field, data, i) {
                    let p = document.createElement('p')
                    p.innerHTML = i + 1 + '. ' + data
                    field.appendChild(p)
                }
                btn.addEventListener('click', function () {
                    let p = document.createElement('p')
                    if(input.value != '') {
                        p.innerHTML = data.length + 1 + '. ' + input.value
                        data.push(input.value)
                        input.value = ''
                        field.appendChild(p)
                    } else {
                        alert('You should enter something to add!')
                    }
                    console.log(activities[workingCols[i].innerHTML])
                })
                closeBtn.addEventListener('click', function () {
                    parentField.innerHTML = ''
                })
            })
        }
    }



    function sortByDay(col, count, date) {
        let cols = []
        let firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
        let d = firstDay.getDay()
        if (d == 0) {
            d = 7
        }
        for (let i = 0; i < col.length; i++) {
            if (i < d - 1) {
                col[i].innerHTML = ''
            } else {
                if (count > date.getDate()) {} else {
                    col[i].innerHTML = count
                    cols.push(col[i])
                    count++
                }
            }
        }
        return cols
    }

    function fillDaysRow(rowArr, days) {
        for (let i = 0; i < rowArr.length; i++) {
            rowArr[i].innerHTML = days[i]
        }
    }

    function createDaysRow(table) {
        let tr = createRows(table, 1)
        return tr
    }

    function createRows(table, count) {
        let rows = []
        for (let i = 0; i < count; i++) {
            let tr = document.createElement('tr')
            rows.push(tr)
            table.appendChild(tr)
        }
        return rows
    }

    function createCols(rowArr, count) {
        let cols = []
        for (let i = 0; i < rowArr.length; i++) {
            for (let j = 0; j < count; j++) {
                let td = document.createElement('td')
                cols.push(td)
                rowArr[i].appendChild(td)
            }
        }
        return cols
    }

    function range(min, max) {
        let result = []
        for (let i = min; i <= max; i++) {
            result.push(i)
        }
        return result
    }
}