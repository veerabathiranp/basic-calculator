var z="";
function allclear()
{
    document.getElementById("output").value="";
}
function update(value)
{
 
    document.getElementById("output").value+=value;
}
function result()
{
   var temp= document.getElementById("output").value;
   var re=eval(temp);
   document.getElementById("output").value=re;
    his(temp,re);
}
function backsp()
{
    var val=document.getElementById("output").value;
    document.getElementById("output").value=val.substr(0,val.length-1);
}
function perc()
{
    var x=0;
    x=document.getElementById("output").value/100;
    document.getElementById("output").value=x
    z+="percentage is "+x+"\n"+"\n";
    document.getElementById("hist").value=z;

}
function sqr()
{
    var s1;
    s1=document.getElementById("output").value;
    document.getElementById("output").value=s1*s1;
    z+="Square of"+ s1 + "=" + (s1*s1)+"\n"+"\n";
    document.getElementById("hist").value=z;
}
function cbe()
{
    var s2;
    s2=document.getElementById("output").value;
    document.getElementById("output").value=s2*s2*s2;
    z+="cube of"+ s2 + "=" + (s2*s2*s2)+"\n"+"\n";
    document.getElementById("hist").value=z;
}
function sinno()
{
    var s3;
    s3=document.getElementById("output").value;
    document.getElementById("output").value=Math.sin(s3);
    z+="Sin("+s3+")" + "=" + Math.sin(s3)+"\n"+"\n";
    document.getElementById("hist").value=z;
}
function cosno()
{
    var s4;
    s4=document.getElementById("output").value;
    document.getElementById("output").value=Math.cos(s4);
    z+="cos("+s4+")" + "=" + Math.cos(4)+"\n"+"\n";
    document.getElementById("hist").value=z;
}
function tan()
{
    var s5;
    s5=document.getElementById("output").value;
    document.getElementById("output").value=Math.tan(s5);
    z+="tan("+s5+")" + "=" + Math.sin(s5)+"\n"+"\n";
    document.getElementById("hist").value=z;
}
function log()
{
    var s6;
    s6=document.getElementById("output").value;
    document.getElementById("output").value=Math.log(s6);
    z+="log("+s6+")" + "=" + Math.log(s6)+"\n";
    document.getElementById("hist").value=z;
}
function symb()
{
    var s7;
    s7=document.getElementById("output").value;
    document.getElementById("output").value=Math.sqrt(s7);
    z+="sqrt("+s7+")" + "=" + Math.sqrt(s7)+"\n"+"\n";
    document.getElementById("hist").value=z;

}
function factr()
{
    var s10=0;
    var ans=1;
    s10=document.getElementById("output").value;
    for(var i=2;i<=s10;i++)
    {
        ans=ans*i;
    }
    document.getElementById("output").value=ans;
    z+=s10+"!" + "=" + ans+"\n"+"\n";
    document.getElementById("hist").value=z;
}
function log2()
{
    var s8;
    s8=document.getElementById("output").value;
    document.getElementById("output").value=Math.log2(s8);
    z+="log("+s8+")" + "=" + Math.log(s8)+"\n"+"\n";
    document.getElementById("hist").value=z;
}
function log10()
{
    var s9;
    s9=document.getElementById("output").value;
    document.getElementById("output").value=Math.log10(s9);
    z+="log10("+s9+")" + "=" + Math.log10(s9)+"\n"+"\n";
    document.getElementById("hist").value=z;
}
function expr()
{
    var s11;
    s11=document.getElementById("output").value;
    document.getElementById("output").value=Math.exp(s11);
    z+="exp("+s11+")" + "=" + Math.exp(s11)+"\n"+"\n";
    document.getElementById("hist").value=z;
}
function asinno()
{
    var s12;
    s12=document.getElementById("output").value;
    document.getElementById("output").value=Math.asin(s12);
    z+="asin("+s12+")" + "=" + Math.asin(s12)+"\n"+"\n";
    document.getElementById("hist").value=z;
}
function acosno()
{
    var s13;
    s13=document.getElementById("output").value;
    document.getElementById("output").value=Math.acos(s13);
    z+="acos("+s13+")" + "=" + Math.acos(s13)+"\n"+"\n";
    document.getElementById("hist").value=z;
}
function atan()
{
    var s14;
    s14=document.getElementById("output").value;
    document.getElementById("output").value=Math.atan(s14);
    z+="atan("+s14+")" + "=" + Math.atan(s14)+"\n"+"\n";
    document.getElementById("hist").value=z;
}
function ab()
{
    var s15;
    s15=document.getElementById("output").value;
    document.getElementById("output").value=Math.abs(s15);
    z+="abs("+s15+")" + "=" + Math.abs(s15)+"\n"+"\n";
    document.getElementById("hist").value=z;
}
function pie()
{
    document.getElementById("output").value=Math.PI;

}
function secr()
{
    var q;
    var m;
    q=document.getElementById("output").value;
    m=1/(Math.cos(q));
    document.getElementById("output").value=m;
    z+="sec("+q+")" + "=" + m+"\n"+"\n";
    document.getElementById("hist").value=z;
}
function cosec()
{
    var s17;
    var w;
    s17=document.getElementById("output").value;
    w=1/(Math.sin(s17));
    document.getElementById("output").value=w;
    z+="cosec("+s17+")" + "=" +w+"\n"+"\n";
    document.getElementById("hist").value=z;
}
function his(x,y)
{
    
    if(document.getElementById("hist").value=="")
    {
        z=x+"="+y+"\n"+"\n";
        document.getElementById("hist").value=z;
    }
    else{
        z=z+x+"="+y+"\n"+"\n";
        document.getElementById("hist").value=z;
    }
}
