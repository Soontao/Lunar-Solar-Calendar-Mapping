const moment = require("moment")
const solarLunar = require("solarlunar")

const startDate = moment('1970-01-01');
const endDate = moment('2050-12-31');
const { writeFileSync } = require("fs")


var mappingString = "Solar Date,Lunar Date,Is Leap\n"


for (var m = moment(startDate); m.isBefore(endDate); m.add(1, 'days')) {
    const result = solarLunar.solar2lunar(m.year(), m.month() + 1, m.date())
    mappingString += `${m.format("YYYY-MM-DD")},${result.lYear}-${result.lMonth}-${result.lDay},${result.isLeap ? "Yes" : "No"}\n`
}

writeFileSync("./bin/mapping.csv", mappingString, { encoding: "UTF-8" })