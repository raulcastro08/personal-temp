import React from "react";
import Link from "../../@ninjas/components/commons/Link";
import { Box } from "../../@ninjas/components/foundation/Layout/Box";
import { Grid } from "../../@ninjas/components/foundation/Layout/Grid";
import Text from "../../@ninjas/components/foundation/Text";
import FormLogin from "../../src/patterns/FormLogin";
import { WebsitePageContext } from "../../@ninjas/components/wrappers/WebsitePage";
import websitePageHOC from "../../@ninjas/components/wrappers/WebsitePage/hoc";
import { Logo } from "../../src/theme/Logo";

// Essa página e desafio, e vamos dar pronto no próximo módulo o 04
function LoginScreen() {
  const websitePageContext = React.useContext(WebsitePageContext);

  return (
    <Grid.Container display="flex" flex="1" alignItems="center">
      <Grid.Row flex="1" alignItems="center" justifyContent="center">
        <Grid.Col
          display="flex"
          flexDirection="column"
          justifyContent="center"
          offset={{ lg: 2 }}
          value={{ xs: 12, md: 6, lg: 4 }}
          flex={1}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            marginTop="37px"
            marginBottom="37px"
          >
            <Link href="/" color="secondary.main">
              <Logo size="large" />
            </Link>
          </Box>
          <FormLogin />
          <Text
            variant="paragraph1"
            tag="p"
            color="tertiary.light"
            textAlign="center"
          >
            {"Não tem uma conta? "}
            <Link
              href="/"
              color="secondary.main"
              onClick={(e) => {
                e.preventDefault();
                websitePageContext.toggleModalSignIn();
              }}
            >
              Cadastre-se
            </Link>
          </Text>
        </Grid.Col>

        <Grid.Col value={{ xs: 12, md: 6 }}>
          <Box display="flex" justifyContent="center">
            <img
              src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
              alt="Telefones mostrando as páginas internas do app"
            />
          </Box>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
}

export default websitePageHOC(LoginScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: "Login",
    },
    menuProps: {
      display: false,
    },
    pageBoxProps: {
      backgroundImage: "url(/images/bubbles.svg)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom right",
    },
  },
});
