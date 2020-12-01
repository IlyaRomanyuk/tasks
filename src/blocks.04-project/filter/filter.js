import 'jquery-ui/ui/widgets/slider';

$(document).ready(function() {
  let sliderDiv = $('#range');
  sliderDiv.slider({
    range: true,
    min: 130,
    max: 3900,
    values: [130, 3900],
    slide: function( event, ui ) {
      $('.filter__first-1').text(ui.values[0]);
      $('.filter__first-2').text(ui.values[1]);
    },
  });

  $('.filter__first-1').text($('#range').slider('values', 0 ));
  $('.filter__first-2').text($('#range').slider('values', 1 ));
});
