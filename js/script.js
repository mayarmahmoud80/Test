 
 $("#news-slider6").owlCarousel({
        items : 3,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[980,2],
        itemsMobile : [600,1],
        pagination:false,
        navigationText:false
    });
   $(document).ready(function(){
    $('.one-time').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true
    });
     });









function notreturn(x=1 , y=14, contin , breaknum){
  if(contin ==undefined || breaknum ==undefined ){
    console.log("please enter contin and break");
  }
  else{
    for(var i=x ; i<=y;i++){
      if(i==contin){
        continue;
      }
      else if(i==breaknum){
        break;
      }
      else{
        console.log(i);
      }
      
    }
  }
}
notreturn(0,10,5,9);