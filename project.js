var itemarray = [];
var array1 = [];
var count = 0;
var i = 0;


function first()
{
	var xhttp=new XMLHttpRequest();
	xhttp.open("GET","Json/electics.json");
	xhttp.send();
	xhttp.onreadystatechange= function()
	{
		if(xhttp.readyState==4 && xhttp.status==200)
			{
			var resp=xhttp.responseText;
			var item=JSON.parse(resp);
			
			itemarray =item.products;
			var lstorage = localStorage.setItem("array1", itemarray);
			if(count == 0){
				document.getElementById("imm").src = itemarray[0].image;
				document.getElementById("pd1").innerHTML = itemarray[0].title;
                document.getElementById("pd2").innerHTML = itemarray[0].price;
                document.getElementById("pd3").innerHTML = itemarray[0].description;
                
              
            }
            else{
                document.getElementById("imm").src = itemarray[lstorage].image;
                document.getElementById("pd1").innerHTML = itemarray[lstorage].title;
                document.getElementById("pd2").innerHTML = itemarray[lstorage].price;
                document.getElementById("pd3").innerHTML = itemarray[lstorage].description;
                }
			}
	}
}
function next(){
    
    if(i< itemarray.length - 1){
        i++;
    }
    else{
        i=0;
    }
    document.getElementById("pd1").innerHTML = itemarray[i].title;
    document.getElementById("pd2").innerHTML = itemarray[i].price;
    document.getElementById("pd3").innerHTML = itemarray[i].description;
    document.getElementById("imm").src = itemarray[i].image;
}
function previous(){
    
    if(i >= 0){
        i--;
    }
    else{
        i=itemarray.length;
    }
    document.getElementById("pd1").innerHTML = itemarray[i].title;
    document.getElementById("pd2").innerHTML = itemarray[i].price;
    document.getElementById("pd3").innerHTML = itemarray[i].description;
    document.getElementById("imm").src = itemarray[i].image;
}
var index;
var x;

function buy(){
	
	localStorage.setItem("index", i);
	window.location.href = "page2.html";

}

//fetch the data in one variable post to other page
function loadItems(){
	
	var x = new XMLHttpRequest();
	x.open("GET", "Json/electics.json");
	x.send();

		x.onreadystatechange = function(){
			if (x.readyState==4 && x.status==200){
				
				var items = JSON.parse(x.responseText);
				
				itemarray = items.products;
				
				a = localStorage.getItem("index")
				
                document.getElementById("imm1").src = itemarray[a].image;
				document.getElementById("titleord").innerHTML = itemarray[a].title;
                document.getElementById("priceord").innerHTML = itemarray[a].price;
                document.getElementById("desord").innerHTML = itemarray[a].description;
				
				localStorage.setItem("index", a);
			}
		}
}


	
function formvalidation(){

	var fn=document.forms["form1"]["firstname"].value;
	var ln=document.forms["form1"]["lastname"].value;
    var addr=document.forms["form1"]["address"].value;
	var st=document.forms["form1"]["state"];
	var zc=document.forms["form1"]["zipcode"].value;
	var cc=document.forms["form1"]["creditcard"].value;
	var sc=document.forms["form1"]["sc"].value;
	var cradit=cc.split("");
	var security=sc.split("");
	if (fn == null || fn == "" || isNaN(fn) == false) {
		  alert("Please enter valid your first name");
		 } 
	if (ln == null || ln == "" || isNaN(ln) == false){
		  //document.getElementById("text2").style.backgroundColor="red";
		  alert("Please enter valid your last name");
		 }
    if (addr == null || addr == "" || isNaN(addr) == false){
		  //document.getElementById("text2").style.backgroundColor="red";
		  alert("Please enter valid your address");
		 }
	if (st.selectedIndex == 0){
		 alert("Please select one state");
	 }
	if (zc == null || zc == ""){
		 alert("Please enter zipcode in numbers");
	 }
	if (cradit.length<16 || cradit.length>16){
		alert("Please enter 16 digit Credit Card Number");
	}
	if (security.length<3 || security.length >3){
		alert("Please enter 3 number security code");
	}
	 else {
//         if(fn != "" && ln != "" && addr != "" && st.selectedIndex != 0 && zc != "" && cradit != "" && security != ""){
             //alert("testing");
             localStorage.setItem("fnname", document.getElementById("firstname").value);
             localStorage.setItem("lnname", document.getElementById("lastname").value);
             localStorage.setItem("address", document.getElementById("address").value);
             localStorage.setItem("state",document.getElementById("state").value);
             localStorage.setItem("zipcode", document.getElementById("zipcode").value);
             window.open("page3.html", "_blank");
             //window.location.href = "orderedpage.html";
//         }
	 }
}
function orderconfirm(){
	
	var x = new XMLHttpRequest();
	x.open("GET", "Json/electics.json");
	x.send();

		x.onreadystatechange = function(){
			if (x.readyState==4 && x.status==200){
				
				var items = JSON.parse(x.responseText);
				
				itemarray = items.products;
				
				var z = localStorage.getItem("index");
				var fName= localStorage.getItem("fnname");
                var lName= localStorage.getItem("lnname");
                var address = localStorage.getItem("address");
                var state = localStorage.getItem("state");
                var zipcode = localStorage.getItem("zipcode");
				//var lName= localStorage.getItem("lastname");
                
				document.getElementById("imgordc").src = itemarray[z].image;			
                document.getElementById("titleordc").innerHTML = itemarray[z].title;
				document.getElementById("priceordc").innerHTML = itemarray[z].price;
				document.getElementById("decordc").innerHTML = itemarray[z].description;
				document.getElementById("fnordc").innerHTML = fName;
                document.getElementById("lnordc").innerHTML = lName;
                document.getElementById("addordc").innerHTML = address;
                document.getElementById("stordc").innerHTML = state;
                document.getElementById("zcordc").innerHTML = zipcode;
                
				//document.getElementById("lnordc").innerHTML = lName;
			}
	}
}
function editfunc(){
    window.location.href = "page2.html";
}
function finalordered(){
    localStorage.setItem("index1", i);
	window.location.href = "page4.html";
}
function getordertoserver(){
    
	var x = new XMLHttpRequest();
	x.open("GET", "Json/electics.json");
	x.send();

		x.onreadystatechange = function(){
			if (x.readyState==4 && x.status==200){
				
				var items = JSON.parse(x.responseText);
				
				itemarray = items.products;
				
				a = localStorage.getItem("index")
				
				document.getElementById("contitle").innerHTML = itemarray[a].title;
                document.getElementById("condec").innerHTML = itemarray[a].description;
				
				//localStorage.setItem("index", a);
			}
		}
}
function gohome()
{
    window.location.href = "page1.html";
}