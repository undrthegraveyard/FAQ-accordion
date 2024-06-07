document.querySelectorAll('.faq__content').forEach(item => {
  item.addEventListener('click', () => {
    const answer = item.querySelector('.faq__answer');
    const plusIcon = item.querySelector('.faq__plus-icon');
    const minusIcon = item.querySelector('.faq__minus-icon');

    // Toggle the display of the answer
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
      plusIcon.style.display = 'block';
      minusIcon.style.display = 'none';
    } else {
      answer.style.display = 'block';
      plusIcon.style.display = 'none';
      minusIcon.style.display = 'block';
    }
  });
});