let casual = require("casual");

// Generate random sentence
// You don't need function call operator here
// because most of generators use properties mechanism
let sentence = casual.sentence;

// Generate random city name
let city = casual.city;

console.log(`Hello my name is ${casual.first_name} ${casual.last_name}`);

let randomMonth = casual.integer((from = 1), (to = 12));
console.log(randomMonth);

console.log(`Dia del mes: ${casual.day_of_month}`); // 9
console.log(`Dia de la semana: ${casual.day_of_week}`); // 4
console.log(`Numero de mes: ${casual.month_number}`); // 9
console.log(`Mes del anio: ${casual.month_name}`); // 'March'

let dosDecimales = Math.round(casual.double((from = 1), (to = 2)) * 100) / 100;
console.log(dosDecimales);

const signosVitales = {
  peso: Math.round(casual.double((from = 60), (to = 230)) * 100) / 100,
  altura: Math.round(casual.double((from = 1), (to = 2)) * 100) / 100,
  temperatura: casual.integer((from = 20), (to = 45)),
  frecRespiratorio: casual.integer((from = 10), (to = 35)),
  spo2: casual.integer((from = 20), (to = 100)),
  frecCardiaca: casual.integer((from = 20), (to = 180)),
  presionArterial: `${casual.integer(
    (from = 100),
    (to = 150)
  )}/${casual.integer((from = 60), (to = 80))}`,
};

console.log(signosVitales);
