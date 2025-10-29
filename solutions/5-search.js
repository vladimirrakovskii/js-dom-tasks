export default (document) => {
  // BEGIN
const titleEl = document.querySelector('h1');
  const descEl = document.querySelector('.description');
  return {
    title: titleEl?.textContent ?? '',
    description: descEl?.textContent ?? '',
    items: [...document.querySelectorAll('.links > div')].map(div => ({
      title: div.querySelector('h2 a')?.textContent ?? '',
      description: div.querySelector('p')?.textContent ?? '',
    })),
  };
  // END
};
