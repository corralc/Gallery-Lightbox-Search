    //Selects the a tags with the value of img-set for the data-lightbox attribute and stores them in a variable
    let images = $("[data-lightbox='img-set']");

    //listens to the search box every time the user releases a key on the keyboard
    $("#search").on('keyup', function() {

      //stores what the user types in a variable
      let usrInput = $(this).val().toLowerCase();

      //Loop through the the a tags
      for (let i = 0; i < images.length; i++) {

        //Gets the captions from the data-title attribute in the a tag and stores it in a variable.
        let captions = images.eq(i).attr("data-title").toLowerCase();

        //Gets the title from the alt attribute in the image tag and stores it in a variable.
        let title = $("a img").eq(i).attr("alt").toLowerCase();

        // Conditional if user input does not start with any of the captions and does not start with any of the titles
        if (captions.includes(usrInput) === false && title.includes(usrInput) === false) {

          //Hides the images
          images.eq(i).hide();
          $(".img-item").eq(i).hide();

          //sets the data-lightbox attribute to hidden so only what is shown can be cycled through
          images.eq(i).attr("data-lightbox", "hidden");
        }

        //Conditional statement if the captions or title start with the user input.
        else {

          //Show images
          images.eq(i).show();
          $(".img-item").eq(i).show();

          //Set data-lightbox attribute in a tags to img-set (The original attribute given).
          images.eq(i).attr("data-lightbox", "img-set");

        }

      }
    });
