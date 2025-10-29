import 'whatwg-fetch';

export default () => {
  // BEGIN
  const autocompleteInputs = document.querySelectorAll('[data-autocomplete]');
  autocompleteInputs.forEach(autocompleteInput => {
    const suggestionUrl = autocompleteInput.dataset.autocomplete;
    const listName = autocompleteInput.dataset.autocompleteName;
    const suggestionList = document.querySelector(`ul[data-autocomplete-name="${listName}"]`);
    autocompleteInput.addEventListener('input', async (event) => {
      const query = event.target.value;
      const requestUrl = new URL(suggestionUrl, window.location.origin);
      requestUrl.searchParams.append('search', query);
      const apiResponse = await fetch(requestUrl);
      if (!apiResponse.ok) {
        console.error(`HTTP error! Status: ${apiResponse.status}`);
        suggestionList.innerHTML = '<li>Error fetching data</li>';
        return;
      }
      const suggestions = await apiResponse.json();
      suggestionList.innerHTML = '';
      if (suggestions.length > 0) {
        suggestions.forEach(suggestion => {
          const listItemElement = document.createElement('li');
          listItemElement.textContent = suggestion;
          suggestionList.appendChild(listItemElement);
        });
      } else {
        const listItemElement = document.createElement('li');
        listItemElement.textContent = 'Nothing';
        suggestionList.appendChild(listItemElement);
      }
    });
  });
  // END
};
