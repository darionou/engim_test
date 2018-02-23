//metto in src tutto il testo contenuto all'interno di <p></p>
var src = $("p").text();
//console.log(source);

var tmp;

/*la funzione parte quando il tasto viene rilasciato*/
$("input").keyup(function() {
  $("p").text(src);



  //console.log($("p").text(source));
  tmp = $("input").val();
    
  $("p").html(function(_, html){ /*.html restituisce il codice in formato html*/
      /*la funzione split cerca e join aggiunge gli span*/
   return html.split(tmp).join("<span>" + tmp + "</span>");
  });
})
