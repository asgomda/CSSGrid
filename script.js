
let isPlaying = false;

var sound = new Howl({
    src: ['intEdit.mp3'],
    loop: true,
    volume: 0.5,
    onend: function() {
      console.log('Finished!');
    }
  });


$(".myGrid3 div").each((index, element) => {
   index += 1; //1 indexed
    element = $(element);
    element.click(function (){

        if(isPlaying){
            sound.stop()
            isPlaying = false;
        } else{
            isPlaying = true;
            sound.play();
        }
    })
    element.css("grid-row", index);
    if(index % 2 == 0){
      element.css("grid-column", 1);
    }
    else {
      element.css("grid-column", 2);
    }
  });



 
  

  AOS.init();


