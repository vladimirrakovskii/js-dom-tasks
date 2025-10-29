export default () => {
  // BEGIN
  const tabs = document.querySelectorAll('[data-bs-toggle]');
    tabs.forEach(tab => {
        tab.addEventListener('click', function(evt) {
            evt.preventDefault();
            const targetElementSelector = this.dataset.bsTarget;
            const targetElement = document.querySelector(targetElementSelector);
            if (!targetElement) {return;}
            const navElement = this.closest('.nav');
            if (!navElement) {
                return;
            }
            const allTabsInNav = navElement.querySelectorAll('[data-bs-toggle]');
            allTabsInNav.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
            const tabContentElement = findTabContent(navElement);
            if(tabContentElement) {
              const tabPanes = tabContentElement.querySelectorAll('.tab-pane');
              tabPanes.forEach(pane => pane.classList.remove('active'));
            }
            targetElement.classList.add('active');
        });
    });
    function findTabContent(navElement) {
      let tabContentElement = navElement.parentElement.querySelector('.tab-content');
      if (!tabContentElement) {
        tabContentElement = navElement.closest('.row, .container')?.querySelector('.tab-content');
      }
      if (!tabContentElement) {
        console.warn('No tab content container found!');
      }
      return tabContentElement;
    }
  // END
};
