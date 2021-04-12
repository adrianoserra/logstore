$("#content-input").keyup(function (event) {
  if (event.keyCode === 13) {
    $("#save-register").click();
  }
});

$('#content-input').on('keypress', function (event) {
  var char = event.which || event.keyCode;
  if (event.keyCode === 13) {
    event.preventDefault();
  }
})

$("#form-add").submit(function () {

  var log = {content:document.getElementById("content-input").value,occurrences:document.getElementById("occurrences-input").value};

  $.ajax({
    type: "POST",
    data :JSON.stringify(log),
    url: "http://localhost:8080/logstore/log",
    contentType: "application/json"
});

window.location.href = '/index.html';
return false;

});
