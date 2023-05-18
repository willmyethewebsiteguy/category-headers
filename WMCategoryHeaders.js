/* =========
  Category Stuff
  This Code is Licensed by Will-Myers.com
========== */

(function() {
  let els = document.querySelectorAll('.page-section [data-category-section]');
  if (!els) return;
  let header = document.querySelector('#header');
  let url = window.location.pathname;
  let isBackend = window.self !== window.top;
  let isActiveProduct = document.querySelector('.category-link.active')

  /*Remove Unneeded Sections on LIVE site*/
  for (let el of els){
    let category = el.dataset.categorySection;
    let section = el.closest('.page-section');
    if (category == url || (category + '/') == url) continue;
    if (isBackend) {
      section.classList.add('hidden');
    } else {
      section.remove();
    }
  }

  // Set Header Color Theme
  let firstSection = document.querySelector('#sections > *:first-child')
  let theme = firstSection.dataset.sectionTheme || 'white';
  header.classList.remove('white', 'white-bold', 'light', 'light-bold', 'bright', 'bright-bold', 'dark', 'dark-bold', 'black', 'black-bold');
  header.classList.add(theme);

  //Set First Section Padding via .first Class
  firstSection.classList.add('first');

  //Add offset Height for Header
  function setHeight() {
    let height = header.getBoundingClientRect().height + 'px';
    document.body.style.setProperty('--header-height', height);
  }

  setHeight();
  window.addEventListener('resize', setHeight)
}())