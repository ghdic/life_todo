

// remove
function remove_card(checkbox) {
  let card = checkbox.parentElement.parentElement;
  card.classList.add('kkk')
  // card.parentNode.removeChild(card);
}

$(document).on('transitionend', '.kkk',() => {
  $(this).remove();
})