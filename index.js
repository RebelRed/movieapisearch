$(document).ready( () => {
 $('#Search-btn').on('click', (e) => {
    let searchText = $('#searchText').val();
    let searchYear = $('#searchYear').val();
    console.log(searchYear)
    getMovies(searchText,searchYear);
   e.preventDefault();
 });
});

$('#Search-btn-2').on('click', (e) => {
  let searchID = $('#searchID').val();
  console.log(searchID);
  getMoviesByID(searchID);
  e.preventDefault();
})

// function getMoviesByID(searchID){
//   axios.get('http://www.omdbapi.com/?i='+searchID+'&apikey=460ecbb6')
//   .then((response) => {
//     console.log(response);
//     if(response.data.Response == "True"){
//       let movies = response.data;
//     let output = `<div class="col-sm-12 col-md-6 col-lg-4 col-xs-12">
//     <div class="card" style="width: 22rem; margin: 3%;">
//       <img class="card-img-top" src="${movies.Poster}" alt="Card image cap">
//       <div class="card-body">
//         <h5 class="card-title">${movies.Title}</h5>
//         <p class="card-text">${movies.Year}</p>
//         <a href="#" class="btn btn-primary" onclick="movieSelected('${movies.imdbID}'">Movie Details</a>
//       </div>
//     </div>
//     </div>`;

//     $('#movies').html(output);
//     }else{
//       let Err = response.data
//       let output = `<div class="col-sm-12 col-md-6 col-lg-4 col-xs-12">
//       <div class="card" style="width: 22rem; margin: 3%;">
//         <img class="card-img-top" src="./noimagem.jpg" alt="Card image cap">
//         <div class="card-body">
//           <strong><h4 class="card-title">${Err.Error}</h4></strong>
//         </div>
//       </div>
//       </div>`;
//       $('#movies').html(output);
//     }
    
//   }).catch((err) => {
//     console.log(err)

//     alert(err)
//   });
// }

function getMoviesByID(searchID){

  $.ajax({
    type: 'GET',
    dataType: 'json',
    async: true,
    url:'http://www.omdbapi.com/?i='+searchID+'&apikey=460ecbb6',

    success: (response) => {

      console.log(response);
      if(response.Response == "True"){
        let movies = response;
        let output = `<div class="col-sm-12 col-md-6 col-lg-4 col-xs-12">
        <div class="card" style="width: 22rem; margin: 3%;">
          <img class="card-img-top" src="${movies.Poster}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${movies.Title}</h5>
            <p class="card-text">${movies.Year}</p>
            <a href="#" class="btn btn-primary" onclick="movieSelected('${movies.imdbID}'">Movie Details</a>
          </div>
        </div>
        </div>`;
        $('#movies').html(output);
      }else{
        let error = response.Error 

        let Err = response
        let output = `<div class="col-sm-12 col-md-6 col-lg-4 col-xs-12">
        <div class="card" style="width: 22rem; margin: 3%;">
          <img class="card-img-top" src="noimagem.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${Err.Error}</h5>
          </div>
        </div>
        </div>`;
        $('#movies').html(output);
      }
      
    },
    error: (err) => {
       console.log(err)
    
    }

  })


}






function getMovies(searchText, searchYear){

  $.ajax({
    type: 'GET',
    dataType: 'json',
    async: true,
    url:'http://www.omdbapi.com/?s='+searchText+'&y='+searchYear+'&apikey=460ecbb6',

    success: (response) => {

      console.log(response);
      if(response.Response == "True"){
        let movies = response.Search;
        let output = '';
        $.each(movies, (index, movie) => {
          output += `
          <div class="col-sm-12 col-md-6 col-lg-4 col-xs-12">
          <div class="card" style="width: 22rem; margin: 3%;">
            <img class="card-img-top" src="${movie.Poster}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${movie.Title}</h5>
              <p class="card-text">${movie.Year}</p>
              <a href="#" class="btn btn-primary" onclick="movieSelected('${movie.imdbID}'">Movie Details</a>
            </div>
          </div>
          </div>`;
        });
        $('#movies').html(output);
      }else{
        let error = response.Error 

        let Err = response
        let output = `<div class="col-sm-12 col-md-6 col-lg-4 col-xs-12">
        <div class="card" style="width: 22rem; margin: 3%;">
          <img class="card-img-top" src="noimagem.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${Err.Error}</h5>
          </div>
        </div>
        </div>`;
        $('#movies').html(output);
      }
      
    },
    error: (err) => {
       console.log(err)
    
    }

  })


}