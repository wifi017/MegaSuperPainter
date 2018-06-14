document.addEventListener('deviceready', function() {
    // erst jetzt ist APP geladen und ready um was zu tun!
    console.log( 'DEVICE READY!' );

    window.screen.orientation.lock('portrait');

    $( document ).ready( function() {
      console.log( 'DOM READY!' );

    

    });
});
