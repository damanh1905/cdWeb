import instance from "./axios";

const doGet = (requestUrl) => {
  return instance.get(requestUrl);
}

const doPost = (requestUrl paramBody):  => {
  return instance.post(requestUrl, paramBody);
}

export {doGet, doPost}