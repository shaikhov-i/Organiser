let table = document.getElementById('table')


init(table)

function init(table) {
    let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    let now = new Date()
    let date = new Date(now.getFullYear(), now.getMonth() + 1, 0)
    
    
    fillTable(table, days, date)


    function fillTable(table, days, date) {
        let daysRow = createDaysRow(table)
        let dayInMonth = range(1, date.getDate())
        createCols(daysRow, days.length)
        let row = createRows(table, 5)
        let col = createCols(row, days.length)
        fillDaysRow(daysRow[0].querySelectorAll('td'), days)
        fillDateRow(col, dayInMonth, days, date)
    }
    function fillDateRow(col, day, days, date) {
        for (let i = 0; i < col.length; i++) {
            
        }
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