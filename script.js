

// remove
function remove_card(checkbox) {
  let card = checkbox.parentElement.parentElement;
  card.classList.add('remove')
  setTimeout(() => {
    card.parentNode.removeChild(card);
  }, 1200)
  
}