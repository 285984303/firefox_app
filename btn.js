function find()
{
var q = document.getElementById("txt").value;

window.location.href="http://s.makepolo.com/eps.php?q="+q;  
}
//find();
//alert("123");
var btn = document.getElementById("search");
//alert(btn);
btn.addEventListener("click", find);
