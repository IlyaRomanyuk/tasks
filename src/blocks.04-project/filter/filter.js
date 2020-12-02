import 'jquery-ui/ui/widgets/slider';
import 'selectize/dist/js/selectize';

$(document).ready(function() {
  let sliderDiv = $('#slider');
  sliderDiv.slider({
    range: true,
    min: 130,
    max: 3900,
    values: [130, 3900],
    slide: function( event, ui ) {
      $('.range__first-1').text(ui.values[0]);
      $('.range__first-2').text(ui.values[1]);
    },
  });

  $('.range__first-1').text($('#slider').slider('values', 0 ));
  $('.range__first-2').text($('#slider').slider('values', 1 ));

  $('.select').selectize({
    create: true,
    sortField: 'text',
    maxItems: 3,
  });
});
