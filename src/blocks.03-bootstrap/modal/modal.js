$(document).ready(function() {
  let index = 1040;
  $(document).on('shown.bs.modal', function(e) {
    let needElements = $('.modal.show');
    if (needElements.length > 1) {
      index = index * needElements.length;
      let backDrops = document.querySelectorAll('.modal-backdrop');

      backDrops[backDrops.length - 1].style.zIndex = index;
      needElements[needElements.length - 1].style.zIndex = index + 10;
    }
  });
});



