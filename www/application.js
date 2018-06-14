document.addEventListener('deviceready', function() {
    // erst jetzt ist APP geladen und ready um was zu tun!
    console.log( 'DEVICE READY!' );

    window.screen.orientation.lock('portrait');

    $( document ).ready( function() {
      console.log( 'DOM READY!' );

      var c = $( '<canvas>', { width:$(window).width(), height:$(window).height() } )
        .prependTo( 'body' );

      var ctx = c.get(0).getContext('2d');
      ctx.fillRect(100,100,100,100);

    });
});
