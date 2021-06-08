/// <reference types="cypress" />;

describe("/pages/app/login", () => {
  // it === test
  it("preencha os campos do formulário e vá para a página /app/profile", () => {
    cy.intercept("https://instalura-api-omariosouto.vercel.app/api/login").as(
      "userLogin"
    );

    // visit the login page
    cy.visit("/app/login");

    // document.querySelector('input[name="user"]')
    // fill in the input username
    cy.get('#formSignIn input[name="username"]').type("omariosouto");
    // fill in the input password
    cy.get('#formSignIn input[name="password"]').type("senhasegura");
    // click in submit button to login
    cy.get('#formSignIn button[type="submit"]').click();
    // check redirect to correct URL
    cy.url().should("include", "/app/profile");

    // have token?
    cy.wait("@userLogin").then((intercept) => {
      const { token } = intercept.response.body.data;
      console.log(token);

      cy.getCookie("APP_TOKEN")
        .should("exist")
        .should("have.property", "value", token);
    });

    // what happens??
    // -> go to /app/profile
  });
});
