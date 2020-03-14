'use strict';

const tooltip = document.querySelector('.tooltip');

const linksWithTooltip = document.querySelectorAll('a.has-tooltip');
linksWithTooltip.forEach((link) =>{
  link.addEventListener('click', (event) => {
    event.preventDefault();

    if (tooltip === link.nextElementSibling) {
      tooltip.classList.toggle('tooltip_active');
    } else {
      tooltip.classList.add('tooltip_active');
      tooltip.innerText = link.title;

      const coords = link.getBoundingClientRect();
      tooltip.style.left = coords.left + "px";
      tooltip.style.top = coords.top + 20 + "px";

      link.insertAdjacentElement('afterend', tooltip);
    }
  });
});