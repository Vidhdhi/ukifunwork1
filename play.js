SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function()
{ SC.stream('/tracks/496210638',function(sound){
   $('#start').click(function(e) {
           e.preventDefault();
           sound.start();
         });

     $('#stop').click(function(e) {
                    e.preventDefault();
                    sound.stop();
                  });
});

SC.stream('/tracks/615502014',function(sound){
  $('#start1').click(function(e) {
          e.preventDefault();
          sound.start();
        });

    $('#stop1').click(function(e) {
                   e.preventDefault();
                   sound.stop();
                 });
});
SC.stream('/tracks/473450493',function(sound){
  $('#start2').click(function(e) {
          e.preventDefault();
          sound.start();
        });

    $('#stop2').click(function(e) {
                   e.preventDefault();
                   sound.stop();
                 });
});
SC.stream('/tracks/163621565',function(sound){
  $('#start3').click(function(e) {
          e.preventDefault();
          sound.start();
        });

    $('#stop3').click(function(e) {
                   e.preventDefault();
                   sound.stop();
                 });
});
SC.stream(' /tracks/619854585',function(sound){
  $('#start4').click(function(e) {
          e.preventDefault();
          sound.start();
        });

    $('#stop4').click(function(e) {
                   e.preventDefault();
                   sound.stop();
                 });
});
SC.stream('/tracks/624412443',function(sound){
  $('#start5').click(function(e) {
          e.preventDefault();
          sound.start();
        });

    $('#stop5').click(function(e) {
                   e.preventDefault();
                   sound.stop();
                 });
});
SC.stream('/tracks/163621565',function(sound){
  $('#start6').click(function(e) {
          e.preventDefault();
          sound.start();
        });

    $('#stop6').click(function(e) {
                   e.preventDefault();
                   sound.stop();
                 });
}); SC.stream('/tracks/393554874',function(sound){/tracks/602682816
   $('#start7').click(function(e) {
           e.preventDefault();
           sound.start();
         });

     $('#stop7').click(function(e) {
                    e.preventDefault();
                    sound.stop();
                  });
});

 });
