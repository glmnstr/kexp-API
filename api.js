    function d(){
      var xhr = new XMLHttpRequest()
      //var url = "https://api.spacexdata.com/v4/launches/latest"
      var url = "https://api.kexp.org/v2/plays/"
      xhr.open("GET",url)
      xhr.addEventListener("load", fa)

      xhr.send()
    }

    function fa(){
      var data = this.responseText
      serialise(data)
    }

    function serialise(a){

      var js = JSON.parse(a)
      $('<div/>', {
        class :'card-columns',
        id :'cardGrid',
        text:'',

        }).appendTo("#data")
      
      for (var i = 0; i <= js.results.length - 1; i++){

      $(this).each(function(){

      $('<div/>', {
        class :'card',
        id :'cardGrid',

      }).appendTo(".card-columns")

      $('<div/>', {
        class :'card-top-header',
        id :'cardGrid',

      }).appendTo($(".card")[i])  

      $('<div/>', {
        class :'card-body',
        id :'cardGrid',

      }).appendTo($(".card")[i])  
      
      $('<div/>', {
        class :'card-footer',
        id :'cardGrid',
      }).appendTo($(".card")[i])  

      })
      $('<div/>', {
        class :'card-img-top',
        id : "img_thumb",
        html: $("<img>", {
          class :'card-img-top',
          src : js.results[i].thumbnail_uri,
        })

      }).appendTo($(".card-body")[i])

      $('<div/>', {
        class :'release_date',
        id :'release_date',
        html: "Lançado em : " + js.results[i].release_date

      }).appendTo($(".card-body")[i])
      $('<div/>', {
        class :'trackName',
        id :'cardGrid',
        html: "<h6> Track Name : " + js.results[i].song + "</h6>"

      }).appendTo($(".card-footer")[i])

      $('<div/>', {
        class :'artistName',
        id :'cardGrid',
        html: "<h6> Artist Name : " + js.results[i].artist + "</h6>"

      }).appendTo($(".card-footer")[i])

      $('<div/>', {
        class :'description',
        id :'description',
        text: js.results[i].comment,

          }).appendTo($(".card-body")[i])

      $('<div/>', {
        class :'albumDesc',
        id :'albumDesc',
        html: "<h7>" + "Album Name : " +  js.results[i].album + "</h7>",

          }).appendTo($(".card-footer")[i])
        }
      }
