/*
**
** 	PARTHENON JS 1.1
** 	Copyright (c) 2015 Rogerio de Moraes (parthenonjs.linkinhost.com.br)
** 	Dual licensed under the MIT (MIT-LICENSE.txt)
**	
*/

var loadXMLDOC = '';

var $ = { 
setAttr: function (a,t,s) {
    var objectConstructor = a.split("."); 
    if(objectConstructor[0] == '#'){ 
        document.getElementById(objectConstructor[1]).setAttribute(t,s);    
    } else if(objectConstructor[0] == ':')
        document.getElementsByTagName(objectConstructor[1])[objectConstructor[2]].setAttribute(t,s); 
  },
setColor: function (a,s) {
    $.setAttr(a,'style','color:'+s,';');
},
setBackgroundColor: function (a,s) {
    $.setAttr(a,'style','background-color:'+s,';');
},
setButtonStyle: function (){        
        var css = '.but {display: inline-block;background-color: #ccc;color: #444;padding: 10px 20px;text-decoration: none;box-sizing: border-box;font-family: Helvetica, Arial, sans-serif;font-size: 14px;border: 0px;}.but:hover {background-image: linear-gradient(to bottom, transparent, rgba(0,0,0,.15));cursor: pointer; .but-primary {color: #fff;background-color: #0068B4;} .but-success {color: #fff;background-color: #009835;}.but-error {color: #fff;background-color: #CC0000;} .but-warning {color: #fff;background-color: #F28E00;}}',
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');
        style.type = 'text/css'; if (style.styleSheet){
          style.styleSheet.cssText = css;
        } else { style.appendChild(document.createTextNode(css));
        } head.appendChild(style);
},
LoadXML : function (dname)
{
 if (window.XMLHttpRequest)
 {
  xhttp=new XMLHttpRequest();
  }
else
  {
  xhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xhttp.open("GET",dname,false);
xhttp.send();
return xhttp.responseXML;
},
    GetXML : function (l,s){
        x=loadXMLDOC.getElementsByTagName(l)[s];
        y=x.childNodes[0];
        document.write(y.nodeValue);
  },
OpenXML : function (f){ loadXMLDOC = $.LoadXML(f);
},
printFame : function (ie){ parent.frames[ie].print();
}
}