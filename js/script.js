//close mobile menu when a link is clicked

    //define checkbox
    var checkbox = document.querySelector( '#nav-toggle' );

    //define nav links, so menu will close when click these
    var navlinks = document.querySelector('#links');

    //when you click links in the nav menu, the checkbox gets unchecked and menu closes
    document.body.addEventListener('click', function (event) {
        if (navlinks.contains(event.target)) {
            checkbox.checked = false;
        }
    });

    //adds event listener when you click on the burger menu
    checkbox.addEventListener( 'click', function(){
    if( this.checked ) {
        document.addEventListener( 'click', navlinks );
    } 
    });