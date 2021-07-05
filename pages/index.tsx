import React from "react";
import FormEmail from "@patterns/FormEmail";
import Text from "../@ninjas/components/foundation/Text";
import { Button } from "../@ninjas/components/commons/Button";
import { Grid } from "../@ninjas/components/foundation/Layout/Grid";
import { WebsitePageContext } from "../@ninjas/components/wrappers/WebsitePage";
import { Box } from "../@ninjas/components/foundation/Layout/Box";
import websitePageHOC from "../@ninjas/components/wrappers/WebsitePage/hoc";

function HomeScreen() {
  const websitePageContext = React.useContext(WebsitePageContext);

  return (
    <Box display="flex" flexDirection="column" flex="1">
      <Grid.Row
        height={{ md: "900px" }}
        marginBottom={{ xs: 0, md: 0 }}
        display={{ xs: "block", md: "flex" }}
        width="100%"
        margin="0"
      >
        <Grid.Col
          value={{
            xs: 12,
            md: 6,
          }}
          backgroundImage={{ md: "url(/images/psico.png)" }}
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        />
        <Grid.Col
          value={{ xs: 12, md: 6 }}
          offset={{ xs: 0, md: 0 }}
          display="flex"
          alignItems="flex-center"
          height={{ xs: "900px" }}
          paddingLeft={{ xs: "30px", lg: "10px" }}
          justifyContent="center"
          flexDirection="column"
          background={{ xs: "url(/images/psico.png)", md: "none" }}
          backgroundPosition={{ xs: "center", md: 0 }}
        >
          <Grid.Container
            width={{ xs: "400px", md: "400px" }}
            background={{ xs: "#ffffffea" }}
            marginTop={{ xs: "500px" }}
            marginBottom={{ md: "200px" }}
            paddingTop={{ xs: "10px" }}
          >
            <Text
              variant="titleXL"
              tag="h1"
              color="tertiary.main"
              textAlign={{
                xs: "center",
                md: "left",
              }}
              marginTop="0"
              marginBottom="10px"
              fontFamily="Montserrat"
            >
              Alice Braga
            </Text>
            <Text
              variant="titleXS"
              tag="h2"
              color="tertiary.light"
              textAlign={{
                xs: "center",
                md: "left",
              }}
              fontFamily="Montserrat"
            >
              Psicoterapeuta Clínica
            </Text>
            <Text
              variant="paragraph1"
              tag="p"
              color="tertiary.light"
              textAlign={{
                xs: "center",
                md: "left",
              }}
              fontFamily="Montserrat"
            >
              Sou um parágrafo. Clique aqui para editar e adicionar o seu
              próprio texto. É fácil! Basta clicar em Editar Texto ou clicar
              duas vezes sobre mim e você poderá adicionar o seu próprio
              conteúdo e trocar fontes.
            </Text>
          </Grid.Container>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row
        marginBottom={{ xs: 0, md: 0 }}
        background="#d5e1df"
        minHeight={{ xs: "1000px" }}
        width="100%"
        margin="0"
      >
        <Grid.Col
          value={{ xs: 12, md: 6 }}
          offset={{ xs: 0, md: 0 }}
          display="block"
          height={{ md: "800px" }}
          alignItems="flex-center"
          paddingTop={{ md: "150px" }}
          paddingLeft={{ sm: "50px", lg: "150px" }}
          paddingRight={{ sm: "50px", lg: "150px" }}
          flexDirection="column"
        >
          <Grid.Container
            width={{ md: "400px" }}
            marginTop={{ xs: "40px", md: 0 }}
            marginBottom={{ xs: "20px", md: 0 }}
          >
            <Text
              variant="titleXS"
              tag="h2"
              color="tertiary.main"
              textAlign={{
                xs: "center",
                md: "left",
              }}
              fontFamily="Montserrat"
            >
              Especialidades
            </Text>

            <Text
              variant="paragraph1"
              tag="p"
              color="tertiary.light"
              textAlign={{
                xs: "center",
                md: "left",
              }}
              fontFamily="Montserrat"
              marginBottom={{ xs: "20px", md: 0 }}
            >
              Sou um parágrafo. Clique aqui para editar e adicionar o seu
              próprio texto. É fácil! Basta clicar em Editar Texto ou clicar
              duas vezes sobre mim e você poderá adicionar o seu próprio
              conteúdo e trocar fontes. Sinta-se à vontade para arrastar e
              soltar em qualquer lugar em sua página. Sou um ótimo lugar para
              você contar sua história e permitir que seus clientes saibam um
              pouco mais sobre você.
            </Text>
          </Grid.Container>
        </Grid.Col>
        <Grid.Col
          value={{ xs: 12, md: 6 }}
          display="block"
          justifyContent="center"
          height={{ md: "700px" }}
          paddingTop={{ md: "150px" }}
          paddingLeft={{ sm: "50px", lg: "100px" }}
          paddingRight={{ sm: "50px", lg: "100px" }}
        >
          <Grid.Container>
            <Text
              variant="paragraph1"
              tag="p"
              color="tertiary.light"
              textAlign={{
                xs: "center",
                md: "left",
              }}
              fontFamily="Montserrat"
              marginBottom={{ md: "50px" }}
            >
              Sou um parágrafo. Clique aqui para editar e adicionar o seu
              próprio texto. É fácil! Basta clicar em Editar Texto ou clicar
              duas vezes sobre mim e você poderá adicionar o seu próprio
              conteúdo e trocar fontes. Sinta-se à vontade para arrastar e
              soltar em qualquer lugar em sua página. Sou um ótimo lugar para
              você contar sua história e permitir que seus clientes saibam um
              pouco mais sobre você.
            </Text>
            <Text
              variant="paragraph1"
              tag="p"
              color="tertiary.light"
              textAlign={{
                xs: "center",
                md: "left",
              }}
              fontFamily="Montserrat"
              marginBottom={{ xs: "30px", md: "50px" }}
            >
              Este é um ótimo espaço para escrever um texto longo sobre a sua
              empresa e seus serviços. Você pode usar esse espaço para detalhar
              sua empresa. Fale sobre a sua equipe e sobre os serviços prestados
              por você. Conte aos seus visitantes sobre como teve a ideia de
              iniciar o seu negócio e o que o torna diferente de seus
              competidores.
            </Text>

            <Button
              tag="link"
              href="/sobre"
              variant="primary.main"
              fullWidth
              margin={{
                xs: "0, 1000px",
                md: "initial",
              }}
            >
              Saiba mais
            </Button>
          </Grid.Container>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row
        height={{ xs: "900px", md: "1100px" }}
        marginBottom={{ xs: 0, md: 0 }}
        display={{ xs: "block", md: "flex" }}
        background="#f1f1f1"
        width="100%"
        margin="0"
      >
        <Grid.Col
          value={{
            xs: 12,
            md: 6,
          }}
          backgroundImage={{ md: "url(/images/plant.png)" }}
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        />
        <Grid.Col
          value={{ xs: 12, md: 6 }}
          offset={{ xs: 0, md: 0 }}
          display="flex"
          alignItems="flex-center"
          paddingLeft="10px"
          flexDirection="column"
          background={{ xs: "url(/images/plant.png)", md: "none" }}
          backgroundPosition={{ xs: "right" }}
        >
          <Grid.Container
            marginTop={{ xs: "70px", md: 0 }}
            paddingTop={{ md: "150px" }}
            paddingBottom={{ xs: "10px" }}
            marginBottom={{ xs: "50px" }}
            background={{ xs: "#ffffffea", md: "none" }}
            width={{ xs: "400px" }}
          >
            <Text
              variant="titleXS"
              tag="h2"
              color="tertiary.main"
              textAlign={{
                xs: "center",
                md: "left",
              }}
              fontFamily="Montserrat"
              marginBottom={{ md: "50px" }}
            >
              Contate-me
            </Text>

            <Text
              variant="paragraph1"
              tag="p"
              color="tertiary.light"
              textAlign={{
                xs: "center",
                md: "left",
              }}
              fontFamily="Montserrat"
              marginBottom={{ md: "50px" }}
            >
              Sou um parágrafo. Clique aqui para editar e adicionar o seu
              próprio texto. É fácil! Basta clicar em Editar Texto ou clicar
              duas vezes sobre mim e você poderá adicionar o seu próprio
              conteúdo e trocar fontes. Sinta-se à vontade para arrastar e
              soltar em qualquer lugar em sua página. Sou um ótimo lugar para
              você contar sua história e permitir que seus clientes saibam um
              pouco mais sobre você.
            </Text>
            <Grid.Container
              display={{ md: "block", lg: "flex" }}
              width={{ xs: "350px" }}
            >
              <Grid.Col value={{ xs: 12, md: 12, lg: 6 }} display="block">
                <Text
                  variant="paragraph1"
                  tag="p"
                  color="tertiary.light"
                  textAlign={{
                    xs: "center",
                    md: "left",
                  }}
                  fontFamily="Montserrat"
                >
                  Av. Bernardino de Campos 98, Pinheiros - São Paulo - SP
                  info@meusite.com
                </Text>
              </Grid.Col>
              <Grid.Col value={{ md: 12, lg: 6 }} display="block">
                <Text
                  variant="paragraph1"
                  tag="p"
                  color="tertiary.light"
                  textAlign={{
                    xs: "center",
                    md: "left",
                  }}
                  fontFamily="Montserrat"
                  marginBottom={{ lg: "10px" }}
                >
                  Tel: (11) 3456-7890 Fax: (11) 3456-7890
                </Text>
              </Grid.Col>
            </Grid.Container>
          </Grid.Container>
          <Grid.Container width={{ xs: "500px" }}>
            <FormEmail />
          </Grid.Container>
        </Grid.Col>
      </Grid.Row>
    </Box>
  );
}

export default websitePageHOC(HomeScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: "Home",
    },
    pageBoxProps: {
      // backgroundImage: "url(/images/bubbles.svg)",
      // backgroundRepeat: "no-repeat",
      // backgroundPosition: "bottom right",
    },
    menuProps: {
      display: true,
    },
  },
});
