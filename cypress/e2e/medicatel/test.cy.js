describe("Agendar cita en informativo", () => {
  let numMedico = Math.floor(Math.random() * 4 + 1);

  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

  //Variables de prueba
  let medico = "vania";

  let mesDeCita = "Oct";
  let diaDeCita = "29";
  let horaCita = "11:00";
  let horaCitaF = "10:20";

  let idPaciente = "0801199112280";
  let fechaNacimientoPaciente = "1991-06-25";

  const nombreDelDiaSegunFecha = (fecha) =>
    ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][new Date(fecha).getDay()];

  let day = nombreDelDiaSegunFecha(`2022-${mesDeCita}-${diaDeCita} 17:00:00`);

  it("Crear cita desde medicatel informativo", () => {
    //Acceder a la pagina informativo medicatel
    cy.visit("https://informativo-dev.medicatel.red");

    //Seleccionar medico, se filtra en busqueda
    cy.get("[href='/agenda'] > .btn").click();
    cy.get(".form-control").type(medico);
    cy.get(
      ":nth-child(1) > :nth-child(5) > .caja-btnAgda > .d-web > .btn"
    ).click();

    //Seleccionar servicio
    cy.get(".caja-servicio").click();

    //Seleccionar fecha
    cy.get(
      ".carousel-fecha-prev > #icon_navigation_chevron_left_24px"
    ).dblclick();
    cy.get("#agendarCita").click({ force: true });
    /* cy.get("#carouselActive > :nth-child(5)").should("be.visible").click(); */
    cy.get(
      `[value="${day} ${mesDeCita} ${diaDeCita} 2022 18:00:00 GMT-0600 (hora estándar central)"]`
    ).click();

    //Seleccionar hora
    cy.get("#dropdownMenuButton").click();
    //cy.get(".dropdown-menu > :nth-child(2) > .category_item > p").click();
    cy.get(
      `[onclick="horaSeleccion('${horaCita} AM','${horaCita}','1180',this)"]`
    ).click();

    //Ingresar datos de cita
    cy.get("#agendarCita").click().wait(1000);
    cy.get("#identidad").type(idPaciente);
    cy.get("#fechaNacimiento").type(fechaNacimientoPaciente);

    //Click en agendar
    cy.get(".my-4 > .btn-primary").click();

    //Click en agendar ventana resumen
    cy.get(".btn-caja > .btn").click();

    //Click en ok confirmacion de cita agendada
    cy.get(".pb-5 > a > .btn").click();
  });
});
