function myFunction() {
  //google sheets URL goes here
  var dataSpreadsheetUrl = 'Google Sheets URL Go Here';
  var ss = SpreadsheetApp.openByUrl(dataSpreadsheetUrl);
  var deck = SlidesApp.getActivePresentation();

  var sheet = ss.getSheetByName('Form Responses 1');
  var values = sheet.getRange('B2:M114').getValues();

  var slides = deck.getSlides();
  var templateSlide = slides[1];
  var presLength = slides.length;

  values.forEach(function(page) {
    if(page[0]){

    //replace '0' with whatever column you want to assign a name to
    //You can do this for multiple columns
    var name = page[0];
    

    templateSlide.duplicate();
    slides = deck.getSlides();
    newSlide = slides[2];

    var shapes = (newSlide.getShapes());
    shapes.forEach(function(shape){
      //replace 'Name' with descripton on slide, replace 'name' with variable
      shape.getText().replaceAllText('{{Name}}', name);
  

      

    });
    presLength = slides.length;
    newSlide.move(presLength);
    


    }
  });

templateSlide.remove();
  

}
