import camelCase from 'lodash/camelCase';

// BEGIN
export default (doc) => {
  [...doc.body.querySelectorAll('*')].forEach(el => {
    [...el.classList].forEach(cls => {
      const camel = camelCase(cls);
      if (camel !== cls) {
        el.classList.replace(cls, camel);
      }
    });
  });
};
// END
