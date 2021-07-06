import React from "react";
import Image from "next/image";
import Text from "../foundation/Text";
import { Box } from "../foundation/Layout/Box";
import { Grid } from "../foundation/Layout/Grid";

const aboutScreen = () => {
  return (
    <Box display="flex" flexDirection="column" flex="1">
      <Grid.Container style={{ flex: 1 }} padding="0">
        <Grid.Row
          marginTop={{ xs: 0, md: "50px" }}
          marginBottom={{ xs: "40px", md: "20px" }}
          paddingLeft={{ md: "100px" }}
          paddingRight={{ md: "100px" }}
          paddingTop={{ md: "40px" }}
          background="#f2f2f1"
          width="100%"
          margin="0"
        >
          <Grid.Col value={{ xs: 12, md: 12 }} flex={1}>
            <Text
              variant="paragraph1"
              tag="h1"
              color="tertiary.main"
              textAlign={{ xs: "left", md: "left" }}
            >
              Sobre
            </Text>
            <Text
              variant="title"
              tag="h1"
              color="tertiary.main"
              textAlign={{
                xs: "left",
                md: "left",
              }}
            >
              Dra. Alice Braga
            </Text>
            <Text
              variant="paragraph1"
              tag="p"
              color="tertiary.light"
              textAlign={{
                xs: "left",
                md: "left",
              }}
              fontFamily="Montserrat"
            >
              Sou um parágrafo. Clique aqui para editar e adicionar o seu
              próprio texto. É fácil! Basta clicar em Editar Texto ou clicar
              duas vezes sobre mim e você poderá adicionar o seu próprio
              conteúdo e trocar fontes. Sinta-se à vontade para arrastar e
              soltar em qualquer lugar em sua página.
            </Text>
            <Text
              variant="paragraph1"
              tag="p"
              color="tertiary.light"
              textAlign={{
                xs: "left",
                md: "left",
              }}
              fontFamily="Montserrat"
            >
              Este é um ótimo espaço para escrever um texto sobre você e seus
              serviços. Você pode usar esse espaço para entrar em detalhes sobre
              os tratamentos. Fale sobre a sua equipe e sobre os serviços
              prestados por você. Conte aos seus visitantes sobre como teve a
              ideia de iniciar o seu negócio e o que o torna diferente de seus
              concorrentes. Faça com que sua empresa se destaque e mostre quem
              você é. Dica: Adicione a sua própria imagem clicando duas vezes
              sobre a imagem e clicando em Alterar Imagem.
            </Text>
          </Grid.Col>
          <Grid.Col
            value={{ xs: 12, md: 12 }}
            display="flex"
            justifyContent="center"
            marginTop={{ md: "40px" }}
          >
            {/* <Image
              src="/images/psico.png"
              alt="Picture of the author"
              width={400}
              height={450}
            /> */}
            <Grid.Container
              backgroundImage={{
                xs: "url(/images/person-2.jpg)",
                md: "url(/images/person-2.jpg)",
              }}
              backgroundRepeat="round"
              width="450px"
              height="500px"
            />
          </Grid.Col>
        </Grid.Row>
        <Grid.Row
          paddingLeft={{ xs: "15px", md: "100px" }}
          paddingRight={{ md: "100px" }}
          paddingTop={{ md: "40px" }}
          marginBottom={{ xs: 0, md: "100px" }}
          background="#cff4ec"
          width="100%"
          margin="0"
        >
          <Grid.Col value={{ xs: 12, md: 12 }} flex={1}>
            <Text
              variant="paragraph1"
              tag="h1"
              color="tertiary.main"
              textAlign={{ xs: "left", md: "left" }}
            >
              Qualificações
            </Text>
            <Text
              variant="title"
              tag="h1"
              color="tertiary.main"
              textAlign={{
                xs: "left",
                md: "left",
              }}
            >
              Psicologia Organizacional e do Trabalho
            </Text>
            <Text
              variant="paragraph1"
              tag="p"
              color="tertiary.light"
              textAlign={{
                xs: "left",
                md: "left",
              }}
              fontFamily="Montserrat"
            >
              Minha especialidade é ... Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aspernatur necessitatibus reiciendis laborum
              sequi vitae quia quidem ex dolorum ea, dolores doloremque
              voluptatibus, assumenda dicta consequatur distinctio consequuntur
              eaque minima voluptatum.
            </Text>
          </Grid.Col>
          <Grid.Col
            value={{ xs: 12, md: 12 }}
            flex={1}
            marginTop={{ md: "50px" }}
          >
            <Text
              variant="paragraph1"
              tag="h1"
              color="tertiary.main"
              textAlign={{ xs: "left", md: "left" }}
            >
              Formação Acadêmica
            </Text>
          </Grid.Col>

          <Grid.Col value={{ xs: 12, md: 6 }} flex={1}>
            <Text
              variant="subTitle"
              tag="h3"
              color="tertiary.main"
              textAlign={{ xs: "left", md: "left" }}
              fontFamily="Montserrat"
              marginBottom="0"
            >
              2017 - Presente
            </Text>

            <Text
              variant="paragraph1"
              tag="p"
              color="tertiary.light"
              textAlign={{
                xs: "left",
                md: "left",
              }}
              fontFamily="Montserrat"
              marginTop="2px"
            >
              Atuando como... (edite com os seus dados)
            </Text>
            <Text
              variant="subTitle"
              tag="h3"
              color="tertiary.main"
              textAlign={{ xs: "left", md: "left" }}
              fontFamily="Montserrat"
              marginBottom="2px"
            >
              2009 - 2017
            </Text>

            <Text
              variant="paragraph1"
              tag="p"
              color="tertiary.light"
              textAlign={{
                xs: "left",
                md: "left",
              }}
              fontFamily="Montserrat"
              marginTop="0"
            >
              Pós graduação cursada na Universidade Federal de Pernambuco (UFPE)
              (edite com os seus dados)
            </Text>
            <Text
              variant="subTitle"
              tag="h3"
              color="tertiary.main"
              textAlign={{ xs: "left", md: "left" }}
              fontFamily="Montserrat"
              marginBottom="2px"
            >
              2002 - 2009
            </Text>

            <Text
              variant="paragraph1"
              tag="p"
              color="tertiary.light"
              textAlign={{
                xs: "left",
                md: "left",
              }}
              fontFamily="Montserrat"
              marginTop="0"
            >
              Pós graduação cursada na Universidade Federal de Pernambuco (UFPE)
              (edite com os seus dados)
            </Text>
          </Grid.Col>
          <Grid.Col value={{ xs: 12, md: 6 }} flex={1}>
            <Text
              variant="subTitle"
              tag="h3"
              color="tertiary.main"
              textAlign={{ xs: "left", md: "left" }}
              fontFamily="Montserrat"
              marginBottom="2px"
            >
              2002 - 2009
            </Text>

            <Text
              variant="paragraph1"
              tag="p"
              color="tertiary.light"
              textAlign={{
                xs: "left",
                md: "left",
              }}
              fontFamily="Montserrat"
              marginTop="0"
            >
              Pós graduação cursada na Universidade Federal de Pernambuco (UFPE)
              (edite com os seus dados)
            </Text>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Box>
  );
};

export default aboutScreen;
