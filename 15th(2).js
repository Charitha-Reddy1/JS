var a,b,c;
for(a=1;a<20;a++){
    if(a==1 || a==19 || b==1 || b==19){
        for(b=1;b<45;b++){
            document.write("*");
        }
        document.write("<br>");
        
    }
    else{
        document.write("*");
        for(c=1;c<18;c++){
            
            document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
        }
        document.write("*");
        document.write("<br>");
    }

    
}