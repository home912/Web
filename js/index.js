// По событию скрола
window.addEventListener('scroll', function() {
    // Найти блок к которому нужно проскролить
    const element = document.querySelector('#target')
  
    // скролим к элементу
    element.scrollIntoView({ behavior: 'smooth' })
  });