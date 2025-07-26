/*let str="universal truth";
//length
console.log("length:"+str.length);
//toUpperCase()
console.log("Uppercase:"+str.toUpperCase());
//toLowerCase()
console.log("Lowercase:"+str.toLowerCase());
//trim()
console.log("Trim:"+str.trim());
//trimStart
console.log("Trim start:"+str.trimStart());
//trimEnd
console.log("Trim End:"+str.trimEnd());
//slice(start,end)
console.log("Slice(2,7)"+str.slice(2,7));
//substring(start,end)
console.log("substring(2,7):",str.substring(2,7));
//substr
console.log("Substr(2,5):",str.substr(2,5));
//replace
console.log("Replace:",str.replace("truth","sach"));
//replaceAll
let sentence="apple,apple,orange";
console.log("ReplaceAll:",sentence.replaceAll("apple","mango"));
//concat
console.log("Concat:",str.concat(" hein"));
//includes
console.log("Includes world:",str.includes("tru"));
//startsWith()
console.log("Starts with ",str.startsWith("uni"));
//Endswith()
console.log(str);
console.log("Ends with ",str.endsWith("uth"));
str="Helloooo Wooorrrrlddd "
//indexOf()
console.log("Index of o",str.indexOf('o'));
//lastindexof
console.log("Last Index of o",str.lastIndexOf('o'));
//charAt()
console.log("charAt(6):",str.charAt(6));
//split
console.log("Split by space:",str.trim().split(" "));
//repeat
console.log("Repeat 3 times:",str.repeat(3));
//match
console.log("Match 'Helloooo':",str.match(/Helloooo/));*/
//fibonacci
let a=1,b=2,c;
console.log(a+"\n"+b);
for(i=0;i<51;i++){
    c=a+b;
    a=b;
    b=c;
    console.log(c);
}