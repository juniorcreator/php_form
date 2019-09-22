window.onload = function () {


 let btn = document.querySelector('#send');
  btn.onclick = function () {
    var inp_email = document.querySelector('input[name=email]');
    var inp_phone = document.querySelector('input[name=phone]');
    var inp_name = document.querySelector('input[name=name]');
    var params = 'email=' + inp_email.value + '&' + 'phone=' + inp_phone.value + '&' + 'name=' + inp_name.value;
    ajaxPost(params,'POST', 'form.php', function (data) {

      if(data == 1) {
        document.getElementById("result").innerHTML = 'Form field successfull';
        document.getElementById("form").style.display = 'none';
      }else {
        document.getElementById("result").innerHTML = data;
      }

    });
  };
};


//get ajax vanila js
function ajaxPost(params,method, url, cb) {
  var callback = cb || function (data){};

  var request = new XMLHttpRequest();

  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

      callback(this.responseText);

    }
  };

  request.open(method, url);
  request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  request.send(params);

}