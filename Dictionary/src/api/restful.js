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
        `https://translate.googleapis.com/translate_a/single?&ie=utf-8&oe=utf-8&client=at&sl=${source}&tl=${target}&dt=t&q=${encodeURI(
          content,
        )}`,
      )
      .then(responseBody),
};

export default {
  GoogleTranslate,
};
