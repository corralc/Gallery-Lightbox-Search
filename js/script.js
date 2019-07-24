    //Selects the a tags with the value of img-set for the data-lightbox attribute and stores them in a variable
    let $images = $("[data-lightbox='img-set']");

    //listens to the search box every time the user releases a key on the keyboard
    $("#search").on('keyup', function() {

      //stores what the user types in a variable
      let $usrInput = $(this).val().toLowerCase();

      //Loop through the the a tags
      for (let i = 0; i < $images.length; i++) {

        //Gets the captions from the data-title attribute in the a tag and stores it in a variable.
        let captions = $images.eq(i).attr("data-title").toLowerCase();

        //Gets the title from the alt attribute in the image tag and stores it in a variable.
        let $title = $("a img").eq(i).attr("alt").toLowerCase();

        // If the user input does not contain any single letter or
        // words that are in the image caption or the images alt text hide them

        if (captions.includes($usrInput) === false && $title.includes($usrInput) === false) {

          //Hides the images
          $images.eq(i).hide();
          $(".img-item").eq(i).hide();

          //Sets the data-lightbox attribute to hidden so only the images that show can be cycled through
          $images.eq(i).attr("data-lightbox", "hidden");
        }

        // Show images that do not meet the criteria of the first if statement
        else {

          //Show images
          $images.eq(i).show();
          $(".img-item").eq(i).show();

          //Set data-lightbox attribute in a tags to img-set (The original attribute given).
          $images.eq(i).attr("data-lightbox", "img-set");

        }

      }
    });
    lightbox.option({
      // Disables image number to show on screen when the user clicks a image.
      'showImageNumberLabel': false,
      //Disables the ability to scroll up or down when a user clicks an image.
      'disableScrolling' : true,
      //Allows the last image of the set to scroll to the first image 
      'wrapAround' : true
    })
