//----------------------------------------------------------------------------------------------
//Prueba para testear sistema Administrativo. Caso: Generar pago de cita version Web
//----------------------------------------------------------------------------------------------

//Variables de prueba
let url = "https://admin-dev.medicatel.red/login";

//variables para localStorage
let pacNombre = "Luis Moises";
let pacIdentidad = "0801199112284";
let pacCorreo = "hluis@gmail.com";

let nombrePacienteLocal = [];

describe("Prueba generar pago de cita", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

  before(() => {
    /*  cy.setLocalStorage(pacienteNombre, pacNombre);
    cy.setLocalStorage(pacienteIdentidad, pacIdentidad);
    cy.setLocalStorage(pacienteCorreo, pacCorreo);
    nombrePacienteLocal = cy.getLocalStorage(pacienteNombre); */
  });

  //Generar pago
  it("Confirmar cita", () => {
    cy.setLocalStorage("pacienteNombre", pacNombre);
    cy.setLocalStorage("pacienteIdentidad", pacIdentidad);
    cy.setLocalStorage("pacienteCorreo", pacCorreo);
    //nombrePacienteLocal = localStorage.getItem("pacienteNombre");
    nombrePacienteLocal = cy
      .getLocalStorage("pacienteNombre")
      .should("equal", pacNombre);
    console.log("nombre", nombrePacienteLocal);

    cy.visit(url);
    cy.get("#email").type(
      cy.getLocalStorage(spectWindow).should("equal", pacCorreo)
    );
  });
});
