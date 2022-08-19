/**
 * Date filter
 * @param value
 * @returns {string}
 */
const dateFilter = value => {
    const datetime = new Date(value).toLocaleString('en-CA', {
        timeZone: 'Asia/Ho_Chi_Minh',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    })

    let str = ''
    if (datetime.substr(4, 1) === '-') {
        str = datetime.substr(0, 10)
    } else {
        const day = datetime.substr(3, 2)
        const month = datetime.substr(0, 2)
        const year = datetime.substr(6, 4)
        str = `${year}${month}${day}`
    }

    return str
}

export default dateFilter
