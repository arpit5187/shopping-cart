function disp()
{
	alert("hi");
	var xhttp=new XMLHttpRequest();
	xhttp.open("GET","Json/sample.txt",true);
	xhttp.send();
	
	xhttp.onreadystatechange = function()
	{
		if(xhttp.readyState==4 && xhttp.status==200)
			{
			var resp=xhttp.responseText;
			var a=document.getElementById("demo");
			a.innerHTML=resp;
			}
	}
}
