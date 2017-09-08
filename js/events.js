//define functions here

function getIt() {
  $('p').on('click', () =>{
    alert('Hey!')
  })
}

function frameIt() {
  $('img').on('load', (e)=>{
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $('#typing').on('keydown', (key) =>{
    if (key.which === 71) {
      alert('G was pressed')
    }
  })
}

function submitIt() {
  $('form').on('submit', (e)=>{
    alert('Your form is going to be submitted now.')
  })
}


$(document).ready(function(){

});
