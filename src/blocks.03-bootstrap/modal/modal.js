// $(document).ready(function() {
//   $(document).on('shown.bs.modal', function(e) {
//     let needElements = $('.modal.show');
//     if (needElements.length > 1) {
//       needElements[needElements.length - 1].addClass('index');
//     }
//   });
// });

window.onload = function() {
  document('body').addEventListener('shown.bs.modal', function(e) {
    // eslint-disable-next-line no-console
    console.log('fefefe');
      let elements = document.querySelectorAll('.modal.show');
      if (elements.length > 1) {
        // eslint-disable-next-line no-console
        console.log('fewfew');
      }
  });
};
