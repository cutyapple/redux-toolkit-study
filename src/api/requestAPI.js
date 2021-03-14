import axios from "axios";

export const methodType = {
  GET: "get",
  POST: "post",
  PUT: "put",
  PATCH: "patch",
  DELETE: "delete",
};

export const requestApi = async (method, url, body, headers) => {
  try {
    const res = await axios[method](BASE_URL + url, body, {
      headers,
    });

    return res;
  } catch (error) {
    console.log(`requestApi/requestApi`);
    console.log(error);
  }
};
