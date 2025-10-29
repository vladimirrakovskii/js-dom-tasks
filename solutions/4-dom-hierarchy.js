// BEGIN
export default (el) => {
  const txts = [];
  const findP = (node) => {
    if (node.nodeType === 1) {
      node.tagName === 'P' ? txts.push(node.textContent.trim()) : [...node.children].forEach(findP);
    }
  };
  findP(el);
  return txts;
};
// END
