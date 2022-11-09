import {
  TipoIDRandom,
  SexoRandom,
  monthsRandom,
  dayRandom,
  EstadoRandom,
  NacionalidadRandom,
  DepartamentoRandom,
  CiudadRandom,
  DireccionRandom,
  TipoSanreRandom,
} from "../../helpers/administracion/crearPersona";

import { randomBeetwenInteger } from "../../helpers/random/fechasYNumeros";

const { faker } = require("@faker-js/faker");
const nombres = faker.name.firstName() + " " + faker.name.firstName();
const apellidos = faker.name.lastName() + " " + faker.name.lastName();
const anioNacimiento = randomBeetwenInteger(1920, 2022)
const identidades = faker.phone.number(
  `9999${anioNacimiento}#####`
);
const mesNacimiento = randomBeetwenInteger(1, 12)

if(mesNacimiento == 1 || mesNacimiento == 3 || mesNacimiento == 5 || mesNacimiento == 7 || mesNacimiento == 8 || mesNacimiento == 10 || mesNacimiento ==)



const AseguradosCrearPersona = [
  { tipoIdentidad: TipoIDRandom },
  { identidad: identidades },
  { nombre: nombres },
  { apellidos: apellidos },
  { sexo: SexoRandom },
  { months: monthsRandom },
  { day: dayRandom },
  { estado: EstadoRandom },
  { nacionalidad: NacionalidadRandom },
  { departamento: DepartamentoRandom },
  { ciudad: CiudadRandom },
  { direccion: DireccionRandom },
  { ocupacion: faker.name.jobArea() },
  { telefono: faker.phone.number("22##2###") },
  { celular: faker.phone.number("9#######") },
  {
    correo: nombres.split(" ").join("").toLocaleLowerCase() + "@gmail.com",
  },
  { tipoSangre: TipoSanreRandom },
];

export { AseguradosCrearPersona };
