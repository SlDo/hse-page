const breadcrumbBlock = document.querySelector('ul .pk-breadcrumb__list');

if (breadcrumbBlock) {
  const breadcrumb = document.createElement('li');
  breadcrumb.classList.add('pk-breadcrumb__item');

  const breadcrumbLink = document.createElement('a');
  breadcrumbLink.classList.add('pk-breadcrumb__link');
  breadcrumbLink.setAttribute('href', 'https://www.hse.ru/web/mobile/');
  breadcrumbLink.textContent = 'Главная';

  breadcrumb.append(breadcrumbLink);

  breadcrumbBlock.append(breadcrumb);
}

export {};
