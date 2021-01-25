import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = '';

const encode = encodeURIComponent;
const responseBody = (res) => res.body;

const tokenPlugin = (req) => {};

const getCurrentLang = () => {};

const requests = {
  //.withCredentials()
  del: (url) =>
    superagent
      .del(`${API_ROOT}${url}?lang=${getCurrentLang()}`)
      .use(tokenPlugin)
      .then(responseBody),
  get: (url) =>
    superagent
      .get(`${API_ROOT}${url}?lang=${getCurrentLang()}`)
      .use(tokenPlugin)
      .then(responseBody),
  put: (url, body) =>
    superagent
      .put(`${API_ROOT}${url}?lang=${getCurrentLang()}`, body)
      .use(tokenPlugin)
      .then(responseBody),
  post: (url, body) =>
    superagent
      .post(`${API_ROOT}${url}?lang=${getCurrentLang()}`, body)
      .use(tokenPlugin)
      .then(responseBody),
};

const GoogleTranslate = {
  trans: (source, target, content) =>
    superagent
      .get(
        `https://translate.google.com/translate_a/t?client=gtx&sc=1&v=2.0&sl=${source}&tl=${target}&hl=nl&ie=UTF-8&oe=UTF-8&text=${encodeURI(
          content,
        )}`,
      )
      .use(tokenPlugin)
      .then(responseBody),
};

export default {
  GoogleTranslate,
};
