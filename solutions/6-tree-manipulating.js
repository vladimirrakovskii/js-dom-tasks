// BEGIN
export default () => {
    document.querySelectorAll('div').forEach(div => {
    [...div.childNodes].forEach(child => {
      if (child.nodeType === Node.TEXT_NODE && child.textContent.trim() !== '') {
        const p = document.createElement('p');
        p.textContent = child.textContent;
        div.replaceChild(p, child);
      }
    });
  });
}
// END
