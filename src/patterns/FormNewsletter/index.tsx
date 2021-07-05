import React from "react";
import { useRouter } from "next/router";
import { Button } from "../../../@ninjas/components/commons/Button";
import TextField from "../../../@ninjas/components/forms/TextField";
import { useForm } from "../../../@ninjas/infra/hooks/forms/useForm";
import { loginService } from "../../services/login/loginService";

function FormNewsletter() {
  const router = useRouter();
  const initialValues = {
    username: "",
    password: "",
    email: "",
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
    <form
      style={{ display: "flex" }}
      id="newsletterForm"
      onSubmit={form.handleSubmit}
    >
      <TextField
        tag="input"
        placeholder="Nome"
        name="username"
        value={form.values.username}
        onChange={form.handleChange}
      />

      <Button
        tag="button"
        type="submit"
        variant="primary.main"
        margin={{
          xs: "0 auto",
          md: "0 5px",
        }}
      >
        Enviar
      </Button>
    </form>
  );
}

export default FormNewsletter;
