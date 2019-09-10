module.exports = function (year) {
    var date = new Date()
    var fullYear = date.getFullYear()
    var difference = fullYear - year

    return difference;
}