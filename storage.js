function initiate(){
  var button = document.getElementById('save');
  button.addEventListener('click', newitem);
  addEventListener('storage', storagechange);
  show();
}
function newitem(){
  var keyword = document.getElementById('keyword').value;
  var value = document.getElementById('text').value;
  localStorage.setItem(keyword, value);
  document.getElementById('keyword').value = '';
  document.getElementById('text').value = '';
  show();
}
function storagechange(e){
  console.log(e.key);
  console.log(e.oldValue);
  console.log(e.newValue);
  console.log(e.url);
  console.log(e.storageArea);
  show();
}
function show(){
  var databox = document.getElementById('databox');
  databox.innerHTML = '';
  for(var f = 0; f < localStorage.length; f++){
    var keyword = localStorage.key(f);
    var value = localStorage.getItem(keyword);
    databox.innerHTML += '<div>' + keyword + ' - ' + value + '</div>';
  }
}
addEventListener('load', initiate);