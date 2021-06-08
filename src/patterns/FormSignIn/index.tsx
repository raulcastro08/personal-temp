/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Lottie } from "@crello/react-lottie";
import { useForm } from "@ninjas/infra/hooks/forms/useForm";

import { Grid } from "@ninjas/components/foundation/Layout/Grid";
import { Box } from "@ninjas/components/foundation/Layout/Box";
import { Button } from "@ninjas/components/commons/Button";
import TextField from "@ninjas/components/forms/TextField";
import Text from "@ninjas/components/foundation/Text";

import errorAnimation from "./animations/error.json";
import successAnimation from "./animations/success.json";

const formStates = {
  DEFAULT: "DEFAULT",
  LOADING: "LOADING",
  DONE: "DONE",
  ERROR: "ERROR",
};

const FormContent = () => {
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(formStates.DEFAULT);
  const { values: userInfo, handleChange } = useForm({
    initialValues: {
      username: "",
      name: "",
    },
  });

  const isFormInvalid =
    userInfo.username.length === 0 || userInfo.name.length === 0;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsFormSubmited(true);

        // Data Transfer Object
        const userDTO = {
          username: userInfo.username,
          name: userInfo.name,
        };

        fetch("https://instalura-api.vercel.app/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userDTO),
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            throw new Error(
              "Não foi possivel cadastrar o usuário no momento :("
            );
          })
          .then((objectResponse) => {
            // eslint-disable-next-line no-console
            console.log(objectResponse);
            setSubmissionStatus(formStates.DONE);
          })
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.error(error);
            setSubmissionStatus(formStates.ERROR);
          });
      }}
    >
      <Text variant="title" tag="h1" color="tertiary.main">
        Pronto para saber da vida dos outros?
      </Text>
      <Text
        variant="paragraph1"
        tag="p"
        marginBottom="32px"
        color="tertiary.light"
      >
        Você está a um passo de saber tudo que está rolando no bairro, complete
        seu cadastro agora!
      </Text>
      <div>
        <TextField
          tag="input"
          name="name"
          placeholder="Nome"
          value={userInfo.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          tag="input"
          name="username"
          placeholder="Usuário"
          value={userInfo.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <Button
          tag="button"
          fullWidth
          variant="primary.main"
          type="submit"
          disabled={isFormInvalid}
        >
          {" "}
          Cadastrar{" "}
        </Button>
      </div>
      {isFormSubmited && submissionStatus === formStates.DONE && (
        <Box display="flex" justifyContent="center">
          <Lottie
            width="150px"
            height="150px"
            className="lottie-container basic"
            config={{
              animationData: successAnimation,
              loop: false,
              autoplay: true,
            }}
          />
          {/* https://lottiefiles.com/14331-error */}
        </Box>
      )}
      {isFormSubmited && submissionStatus === formStates.ERROR && (
        <Box display="flex" justifyContent="center">
          <Lottie
            width="150px"
            height="150px"
            className="lottie-container basic"
            config={{
              animationData: errorAnimation,
              loop: false,
              autoplay: true,
            }}
          />
          {/* https://lottiefiles.com/14331-error */}
        </Box>
      )}
    </form>
  );
};

const FormSignIn = ({ modalProps }) => {
  return (
    <Grid.Row marginLeft={0} marginRight={0} flex={1} justifyContent="flex-end">
      <Grid.Col
        display="flex"
        paddingRight={{ md: "0" }}
        flex={1}
        value={{ xs: 12, md: 5, lg: 4 }}
      >
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          padding={{
            xs: "16px",
            md: "85px",
          }}
          backgroundColor="white"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...modalProps}
        >
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
};

export default FormSignIn;
