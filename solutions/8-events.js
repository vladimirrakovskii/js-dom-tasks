export default () => {
  // BEGIN
const btn = document.getElementById('alert-generator');
  const container = document.querySelector('.alerts');
  let count = 0;
  btn?.addEventListener('click', () => {
    const alert = document.createElement('div');
    alert.className = 'alert alert-primary';
    alert.textContent = `Alert ${++count}`;
    container.insertBefore(alert, container.firstChild);
  });
  // END
};
