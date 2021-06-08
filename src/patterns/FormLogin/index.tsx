import React from "react";
import { useRouter } from "next/router";
import { Button } from "../../../@ninjas/components/commons/Button";
import TextField from "../../../@ninjas/components/forms/TextField";
import { useForm } from "../../../@ninjas/infra/hooks/forms/useForm";
import { loginService } from "../../services/login/loginService";

function FormLogin() {
  const router = useRouter();
  const initialValues = {
    username: "",
    password: "",
  };

  const form = useForm({
    initialValues,
    onSubmit: async (values) => {
      try {
        await loginService.login({
          username: values.username,
          password: values.password,
        });

        router.push("/app/profile");
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <form id="formSignIn" onSubmit={form.handleSubmit}>
      <TextField
        tag="input"
        placeholder="Usuário"
        name="username"
        value={form.values.username}
        onChange={form.handleChange}
      />
      <TextField
        tag="input"
        placeholder="Senha"
        name="password"
        type="password"
        value={form.values.password}
        onChange={form.handleChange}
      />

      <Button
        tag="button"
        type="submit"
        variant="primary.main"
        margin={{
          xs: "0 auto",
          md: "initial",
        }}
        fullWidth
      >
        Entrar
      </Button>
    </form>
  );
}

export default FormLogin;
