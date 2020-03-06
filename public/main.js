
$(document).ready(function() {
  $.post( "ajax/test", {test:'test'}, ( data ) => {
  console.log(data.output);
  });
});
