module.exports = function (reg, city) {
    return reg.endsWith(city) || reg.startsWith(city);
}