import { setCookie, destroyCookie } from "nookies";

export const HttpClient = async <TBody>(
  url: string,
  { headers, body, ...options }: RequestInit
): Promise<TBody> => {
  return fetch(url, {
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    ...options,
  }).then((respondeServer) => {
    if (respondeServer.ok) {
      return respondeServer.json() as Promise<TBody>;
    }

    throw new Error("falha ao pegar os dados do servidor");
  });
};

export const loginService = {
  async login({ username, password }) {
    // return HttpClient(
    //   "https://instalura-api-omariosouto.vercel.app/api/login",
    //   {
    //     method: "POST",
    //     body: {
    //       // object DTO = Data transfer object
    //       username,
    //       password,
    //     },
    //   }
    // ).then((response) => {
    //   const { token } = response.data;
    //   const DAY_IN_SECONDS = 86400;
    //   setCookie(null, "APP_TOKEN", token, {
    //     path: "/",
    //     maxAge: DAY_IN_SECONDS * 7,
    //   });
    //   return {
    //     token,
    //   };
    // });
  },
  logout() {
    destroyCookie(null, "APP_TOKEN");
  },
};
