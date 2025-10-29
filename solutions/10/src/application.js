import escapeHtml from 'escape-html';

// BEGIN
export default () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = form.elements.email.value;
    const name = form.elements.name.value;
    const comment = form.elements.comment.value;
    const escapedEmail = escapeHtml(email);
    const escapedName = escapeHtml(name);
    const escapedComment = escapeHtml(comment);
    const feedbackDiv = document.createElement('div');
    feedbackDiv.innerHTML = 
      `<p>Feedback has been sent</p>
      <div>Email: ${escapedEmail}</div>
      <div>Name: ${escapedName}</div>
      <div>Comment: ${escapedComment}</div>`;

    form.replaceWith(feedbackDiv);
  });
};
// END
