import React from "react";
import Image from "next/image";
import FormEmail from "@patterns/FormEmail";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Text from "../foundation/Text";
import { Box } from "../foundation/Layout/Box";
import { Grid } from "../foundation/Layout/Grid";

const contactScreen = () => {
  return (
    <Box display="flex" flexDirection="column" flex="1">
      <Grid.Row
        marginTop={{ xs: 0, md: "50px" }}
        paddingLeft={{ md: "100px", lg: "100px", xl: "350px" }}
        paddingRight={{ md: "100px", lg: "100px", xl: "350px" }}
        justifyContent="center"
        background="#e2f6cd"
        width="100%"
        margin="0"
      >
        <Grid.Col
          value={{ xs: 12, md: 12 }}
          flex={1}
          padding={{ xs: "40px", md: "100px" }}
        >
          <Text
            variant="paragraph1"
            tag="h1"
            color="tertiary.main"
            textAlign={{ xs: "center", md: "center" }}
          >
            Contato
          </Text>
          <Text
            variant="title"
            tag="h1"
            color="tertiary.main"
            textAlign={{
              xs: "center",
              md: "center",
            }}
            fontSize="38px"
          >
            Sou um parágrafo. Clique aqui para editar.
          </Text>
          <Text
            variant="paragraph1"
            tag="p"
            color="tertiary.light"
            textAlign={{
              xs: "justify",
              md: "center",
            }}
            fontFamily="Montserrat"
          >
            Sou outro parágrafo. Clique aqui para adicionar o seu próprio texto
            e editar
          </Text>
          <FormEmail />
          <Text
            variant="paragraph1"
            tag="h1"
            color="tertiary.main"
            textAlign={{ xs: "center", md: "center" }}
            marginTop={{ xs: "100px", lg: "100px" }}
          >
            Av. Bernardino de Campos, 98 São Paulo, SP 12345-678 Email:
            info@meusite.com / Tel: (11) 3456-7890
          </Text>
          <Grid.Col
            value={{ xs: 12, md: 12 }}
            display="flex"
            justifyContent="center"
          >
            <a
              href="https://www.alura.com.br/"
              style={{ margin: "10px 10px 0 0", color: "#222" }}
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.alura.com.br/"
              style={{ margin: "10px", color: "#222" }}
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.alura.com.br/"
              style={{ margin: "10px", color: "#222" }}
            >
              <FaFacebook />
            </a>
          </Grid.Col>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row width="100%" margin="0" background="#e2f6cd">
        <Grid.Col
          value={{ xs: 12, md: 12 }}
          flex={1}
          height={{ xs: "500px", md: "auto" }}
          paddingLeft="0"
          paddingRight="0"
          paddingTop="0"
          paddingBottom="0"
        >
          <Text
            variant="paragraph1"
            tag="h1"
            color="tertiary.main"
            textAlign={{ xs: "center", md: "center" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15926.178478185631!2d-38.65557202666015!3d-3.6905071768387194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c0cb24fdb71501%3A0x1856560d0a778234!2sR.%20Sabino%20Xavier%2C%20333%20-%20Jardim%20Icarai%2C%20Caucaia%20-%20CE%2C%2061621-220!5e0!3m2!1spt-BR!2sbr!4v1622632971367!5m2!1spt-BR!2sbr"
              width="100%"
              height="500px"
              style={{ border: 0 }}
              loading="lazy"
              title="map"
            />
          </Text>
        </Grid.Col>
      </Grid.Row>
    </Box>
  );
};

export default contactScreen;
