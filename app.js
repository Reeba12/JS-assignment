//chapter#1
//Q#1
alert("Welcome Visitor!");
//Q#2
alert("Error! Please enter a valid password");
//Q#3
alert("Welcome to JS Land..\nhappy coding!");
//Q#4
alert("Welcome to JS Land");
//Q#5
alert("Happy Coding\n ")
//Q#6
console.log("Hello...I can run JS through my web browser's console.");
//             ----------*******************---------------------
// chapter #2  
// Q#1
var username;
// Q#2
var myName;
myName="reeba siddiqui";
alert(myName);
// Q#3
var message;
message="Hello World"
alert(message);
// Q#4
var name="reeba"
var Ages="19years"
var course="certified mobile development"
alert(name);
alert(Ages);
alert(course);
//Q#5
alert("PIZZA\nPIZZ\nPIZ\nPI\nP")
// Q#6
var email=prompt("enter your email address");
alert("My email address is"+" "+email);
// Q#7
var book="A smarter way to learn JavaScript";
alert("I am trying to learn"+" "+book);
//Q#8
document.write("Yah! I can write HTML content through javascript<br>");
//Q#9
var h=" ▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬ ";
alert(h)
//               --------------------***********--------------------
//chapter #3
//Q#1
var age;
age=19;
alert("I am "+age+" years old");
// Q#2
var i;
i=0;
i++;
alert("you have visited this site "+i+" times");
//Q#3
var birthYear;
birthYear=2001;
document.write("My birthyear is "+birthYear+"<br> Data type of my Declared variable is "+typeof(i));
//Q#4
var customername="John Doe";
var productT="T-shirt";
var quantity=5;
document.write("<br>"+customername+" ordered "+quantity+" "+productT+" on XYZ Clothing store.")
//         ------------------------***************------------------------
//Chapter #4
//Q#1
var a,b,c;
//Q#2
document.write(" <h4>illegal variables</h4>");
document.write(" var -Car;<br>");
document.write(" var name of;<br>");
document.write(" var for;<br>");
document.write(" var 1cat;<br>");
document.write(" var ^saira;<br>");
document.write(" <h4>Legal variables</h4>");
document.write(" var Friend23;<br>");
document.write(" var nameof;<br>");
document.write(" var watch;<br>");
document.write(" var _ahmed;<br>");
document.write(" var $sidra;<br>");
//Q#3
document.write("<h3>Rules for naming JS variable</h3>")
document.write("variable can only contain numbers , $ and _. For example: $my_1stvariable<br>")
document.write("variable must begin with a letter, $ or _. For example: $name, _name, name<br>")
document.write("variable name are case sensitive<br>")
document.write("Variable names should not be JS keywords.<br>")
//          -----------------------******************-----------------------
//chapter 5
//Q#1 and 2
var r=parseInt(prompt("enter num1 for addition"));
var s=parseInt(prompt("enter num2 for addition"));
var additions=r+s;
document.write("the sum of "+r+" and "+s+"= "+additions+"<br>");
var subs=r-s;
document.write("the substraction of "+r+" and "+s+"= "+subs+"<br>");
var muli=r*s;
document.write("the multiplication of "+r+" and "+s+"= "+muli+"<br>");
var divi=r/s;
document.write("the division of "+r+" and "+s+"= "+divi+"<br>");
var module=r%s;
document.write("the module of "+r+" and "+s+"= "+module+"<br>");
//Q#3
var d;
d=8;
document.write("The intialized value : "+d);
d++;
document.write("<br> After increament a value : "+d)
m=parseInt(d+7)
document.write("<br> after addition is: "+m);
m--;
document.write("<br> Value after decreament is: "+m);
n=m%3;
document.write("<br>The remainder is: "+n)
//Q#4
var costperticket=600;
document.write("<br>The totalc ost of 5 ticket is: "+costperticket*5+"PKR<br>");
//Q#5
for(i=1; i<=10; i++){
    document.write(6+"*"+i+"="+6*i+"<br>")
}
//Q#6
var c=prompt("enter celcius temperature")
fahrenhiet=(c*9/5)+32;
document.write(c+" C is "+fahrenhiet+"<br>");
var f=prompt("enter farhenhiet temperature")
Celcius=(f-32)*5/9;
document.write(f+" F is "+Celcius);
//Q#7
var price1=800;
var price2=500;
var q1=3;
var q2=7;
var shopcharge=100;
var t=price1*3+price2*7+shopcharge;
document.write("<br>Price of item 1 is "+price1+"<br>")
document.write("Quantity of item 1 is "+q1+"<br>")
document.write("Price of item 2 is "+price2+"<br>")
document.write("Quantity of item 2 is "+q2+"<br>")
document.write("shopping Charges "+shopcharge+"<br><br>")
document.write("Total Cost of your order is "+t+"<br>")
//Q#8
var tmark=prompt("enter total marks");
var obtmark=prompt("enter obtained marks");
var pers=obtmark/tmark*100;
document.write("Total marks : "+tmark+"<br>")
document.write("Obtained marks : "+obtmark+"<br>")
document.write("Percentage : "+pers+"<br>")
//Q#9
var perUSdollar=104.80;
var perriyal=28;
var t_curruncy=10*perUSdollar+25*perriyal;
document.write("Total Currency in PKR is: "+t_curruncy+"<br>")
//Q#10
var u;
u=10+5*10/2;
document.write("Q#10<br>Result "+u+"<br>")
//Q#11
var currentyear=2020;
var birthyear=2001;
var yourage=currentyear-birthyear;
document.write("Current year: "+currentyear+"<br>")
document.write("Birth year: "+birthyear+"<br>")
document.write("Your age: "+yourage+"<br>")
//Q#12
var r=12;
var circ=2*3.14*r;
var area=3.14*r*r;
document.write("radius: "+r+"<br>")
document.write("Circumference: "+circ+"<br>")
document.write("Area: "+area+"<br>")
//Q#13
var fsnack="lays";
var age=19;
var maxage=50;
var eperday=4;
var rest=(maxage-age)*365*eperday
document.write("Favourite snack: "+fsnack+"<br>")
document.write("Current age: "+age+"<br>")
document.write("Estimate Maximum Age: "+maxage+"<br>")
document.write("Amount of snack per day: "+eperday+"<br>")
document.write("you will need "+rest+" to last you until the ripe old age of "+maxage+"<br>")
//                             -----------**********-------------------
// chapter 6-9
// Q#1
var c=parseInt(prompt("enter the value"));
document.write("<br>the value of a="+" "+c);
document.write("<br>the value of ++a:"+" "+ ++c);
document.write("<br>now the value of a is:"+c);
document.write("<br>the value of a++:"+" "+ c++);
document.write("<br>now the value of a:"+" "+ c);
document.write("<br>the value of --a:"+" "+ --c);
document.write("<br>now the value of a:"+" "+ c);
document.write("<br>the value of a--:"+" "+ c--);
document.write("<br>the value of a:"+" "+ c+"<br>");
//Q#2
var e= 2;
var f=1;
document.write("<br>e="+e+"<br>f="+f+"<br>");
document.write("--e = "+ --e+"<br>")
document.write("--e - --f = "+ (1- --f)+"<br>")
document.write("--e - --f + ++f = "+ (1+ ++f)+"<br>")
document.write("--e - --f + ++f + f-- = "+(2 + f--)+"<br>")
// Q#3
var Username=prompt("enter your name")
alert ("WELCOME! dear "+Username+"<br>")
// Q#4
var table=parseInt(prompt("enter table number"));
if(table===1 ||  table===2  || table===3 || table===4 ||table===5 || table===6 ||table===7||table===8 ||table===9  ){
    for(i=1; i<=10; i++){
        document.write("<br>"+table+"*"+i+"="+table*i);
}
}
else{
    for(i=1; i<=10; i++){
        document.write("<br>5"+"*"+i+"="+5*i);
}
}
//       --------------------------***********************-----------------------
// chapter 9-10
    // Q#1
    var city= prompt("enter the city name")
    if (city==="karachi"){
        document.write("<br>welcome! to the city of light")
    }
    else{
        document.write("<br>welcome but its not a karachi")
    }
    // Q#2
    var gender=prompt("enter your gender");
    if(gender==="male"){
        document.write("<br>Good Morning Sir!")
    }
    if (gender==="female"){
        document.write("<br>Good Morning Mam!")
    }
    // Q#3
var color=prompt("enter color name(red,yellow,green)");
if (color==="red"){
    document.write("<br>Must Stop")
}
if (color==="yellow"){
    document.write("<br>Ready to move")
}
if(color==="green"){
    document.write("<br>Move now")
}
    // Q#4
    var fuel= prompt("enter your remaining fuel in car in liters");
    if (fuel<0.25){
        document.write("<br>Please refill the fuel in your car")
    }
    else{
        document.write("<br>there is no need of fuel")
    }
    // Q#5 a
    var a=4;
   if (++a===5){
       alert("given condition for variable a is true")
   }
//    Q#5 b
   var b=82;
   if (b++=== 83){
       alert("given condition for variable b is true")
   }
//    Q#5 c
  var c=12;
  if(c++=== 13){
      alert("given condition for variable c is true")
  }
  if(c===13){
      alert("condition 2 is true")
  }
  if(++c<14){
    alert("condition 3 is true")
}
if(c===14){
    alert("condition 4 is true")
}
// Q#5 d
var materialcost= 20000;
var laborcost=2000;
var totalcost= materialcost + laborcost;
if(totalcost=== materialcost + laborcost){
    alert("The cost equals")
}
// Q#5 e
if(true){
    alert("True")
} 
if(false){
    alert("False")
}
// Q#5 f
if("car"<"cat"){
    alert("car is smaller than cat")
}
// Q#6
var sub1=parseInt (prompt("enter the marks of subject1"));
var sub2=parseInt (prompt("enter the marks of subject2"));
var sub3=parseInt (prompt("enter the marks of subject3"));
var totalmarks=prompt("enter the total marks");
var marksobtained=sub1 + sub2 + sub3;
document.write("<br>Total marks="+" "+totalmarks);
document.write("<br>Marks Obtained="+" "+marksobtained);
var percentage=marksobtained/totalmarks*100;
document.write("<br>Percentage="+" "+percentage);
if(percentage>=80 && percentage<=100){
    document.write("<br>Grade="+" "+"A+")
    document.write("<br>Remarks: Excellent")
}
if(percentage>=70 && percentage<=79){
    document.write("<br>Grade="+" "+"A") 
    document.write("<br>Remarks: Good") 
}
if(percentage>=60 && percentage<=69){
    document.write("<br>Grade="+" "+"B")  
    document.write("<br>Remarks: You need to improve")
}
if(percentage<59){
    document.write("<br>fail")  
    document.write("<br>Remarks: SOrry")
}

// Q#7
var scretenum=prompt("enter screte number ranging(1-10)");
if(scretenum===5){
    document.write("<br>Bingo! Correct answer")
}
if(scretenum===6){
    document.write("<br>Close enough to correct answer")
}
// Q# 8
var numb=prompt("enter number,i am telling the given the number is divisible by 3 or not");
if(numb%3===0){
    document.write("<br>the number is divisible by 3")
}
if(numb%3!==0){
    document.write("<br>the number is not divisible by 3")
}
// Q#9
var numbe=prompt("enter number,i am telling the given the number is even or odd");
if(numbe%2===0){
    document.write("<br>the number is even")
}
if(numbe%2!==0){
    document.write("<br>the number is odd")
}
// Q#10
var temp=prompt("enter temperature");
if(temp>40){
    document.write("<br>Its too hot outside")
}
if(temp>30 && temp<40){
    document.write("<br>the weather today is normal")
}
if(temp>20 && temp<30){
    document.write("<br>Today's weather is cool")
}
if(temp>10 && temp<20){
    document.write("<br>OMG! Today's weather is too cool")
}
// Q#11
var a =parseInt(prompt("enter first number"));
var b =parseInt(prompt("enter last number"));
var operation=prompt("+, -, *, /, % \n Select any one")
if(operation=== "+"){
var add= a+b;
document.write("<br>add="+add);
}
if(operation=== "-"){
var sub=a-b;
document.write("<br>sub="+sub);
}
if(operation=== "*"){
    var mul=a*b;
    document.write("<br>multiply="+mul);
}
if(operation=== "/"){
    var div=a/b;
    document.write("<br>divide="+div);
}
if(operation=== "%"){
    var mod=a%b;
    document.write("<br>mod="+mod)
}    
// ---------------------------------------*********************--------------------------------------
// chapter # 12-13
// Q#1
var ch=prompt("enter number or string")
if (ch >= 'A' && ch <= 'Z')  {
    document.write ("<br>" + ch +  " is an UpperCase character"); } 
      
else if (ch >= 'a' && ch <= 'z') { 
document.write("<br>" + ch +  " is an LowerCase character" );  }

else{
document.write("<br>" + ch +   " is number" );  
}  
//Q#2
var num1=prompt("enter any number"); 
var num2=prompt("enter any number");
if(num1>num2){
    document.write("<br>"+num1+" is larger");
}
if(num1<num2){
    document.write("<br>"+num2+" is larger");
}
if(num1===num2){
    document.write("<br>Both are equals");
}
//Q#3
var x=prompt("enter number what you want");
if(x>0){
    document.write("<br>The number is positive");
}
if(x<0){
    document.write("<br>The number is negative");
}
if(x===0){
    document.write("<br>The number is zero");
}
//Q#4
var vowel=prompt("enter vowels");
if(vowel==="a" ||  vowel==="e" || vowel==="i" || vowel==="o" || vowel==="u"){
    document.write("<br>True"+vowel+" is a vowel")
}
else{
    document.write("<br>False Not a vowel")
}
//Q#5
var pwd1="saylani";
var pwd2="saylani2"
var passwords=prompt("enter password");
if(passwords===pwd1 || passwords===pwd2){
    document.write("<br>Correct!")
}
else{
    document.write("<br>Please enter your password")
}
//Q#6
var greeting;
var hour=13;
if(hour>18){
    greeting="Good Day"
    document.write("<br>"+greeting);
}
else{
    greeting="Good evening"
    document.write("<br>"+greeting)
}
//Q#7
var hours=prompt("enter hours like: 7pm=19:00")
if(hours>=0000 && hours<=1200){
    document.write("<br>Good MOrning")
}
if(hours>=1200 && hours<=1700){
    document.write("<br>Good afternoon")
}
if(hours>=1700 && hours<=2100){
    document.write("<br>Good evening")
}
if(hours>=2100 && hours<=2359){
    document.write("<br>Good night")
}
//         --------------------------******************------------------------------
//chapter #14-16
//Q#1
var literal=[""];
//Q#2
var obj=[''];
//Q#3
var str;
str=["a","b","c"];
//Q#4
var arr;
arr=[1,2,3];
//Q#5
var bol;
bol=[true,false];
//Q#6
var mix;
mix=["ahmed",23,true];
//Q#7
var edu=["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"]
document.write("<h3>QULIFICATION</h3>")
for(i=0; i<=edu.length; i++){
    document.write(edu[i]+"<br>")
}
//Q#8
var stdname=["erum","nimra","reeba"]
var score=[320,230,480];
document.write("<br>Score of "+stdname[0]+" is "+score[0]+". Percentage: "+score[0]/500*100+"%")
document.write("<br>Score of "+stdname[1]+" is "+score[1]+". Percentage: "+score[1]/500*100+"%")
document.write("<br>Score of "+stdname[2]+" is "+score[2]+". Percentage: "+score[2]/500*100+"%")
//Q#9(a,b,c,d,e,f,g)
var color=["red","blue","green"]
document.write("<br>"+color+"<br>")
var addcolor=prompt("color:red,blue,green\n enter color you want to add in the beginning")
color.unshift(addcolor);
document.write("<br>Added color in the start of the list: "+color)
var addcolorend=prompt("enter color you want to add in the end")
color.push(addcolorend)
document.write("<br>add color in the end: "+" "+color)
var addcolors=prompt("enter color you want to add in the list")
var addindex=parseInt(prompt("enter index number you want to add in the list"))
color.splice(addindex ,1, addcolors);
document.write("<br> add color of user given index in the list: "+" "+color)
color.shift()
document.write("<br> delet color in the start: "+" "+color)
color.pop()
document.write("<br>deleted element from the end is the list: "+" "+color)
var addcolores=prompt("enter two or more color you want to add in the list")
color.unshift(addcolores)
document.write("<br> add two or more color in the list: "+" "+color)
var rmindex=parseInt(prompt("enter index number you want to remove in the list"))
color.splice(rmindex ,1);
document.write("<br> remove color of user given index in the list: "+" "+color)

//Q#10
var stdscore=[320,230,480,120]
document.write("<br> student score: "+stdscore)
document.write("<br> ordered score: "+stdscore.sort())
//Q#11
var cities=["karachi","Lahore","Islamabad","Quetta","Peshawar"]
document.write("<br><b>Cities: </b>"+cities)
var selectedcities=cities.slice(2,4)
document.write("<br><b>Selectedcities: </b>"+selectedcities)
//Q#12
var arra=["This", "is", "my" ,"cat"]
document.write("<br>"+"<b>Array:</b>"+arra.join())
document.write("<br>"+"<b>String:</b>"+arra.join(" ")+"<br>")
//Q#13
var device=["keyboard","mouse","printer","monitor<br>"]
document.write("DEVICES: <br>"+device+"<br>");
for(i=0; i<device.length; i++){
    document.write(device[i]+"<br>")
}
//Q#14
var Devices=["keyboard","monitor","printer","mouse"]
document.write("<br>"+Devices+"<br>")
for(i=3; i>=0; i--){
    document.write(Devices[i]+"<br>")
}
//Q#15
//on app.html

//         ------------------------********************--------------------------
//cahapter 17-20
//Q#1
var  multiarray;
multiarray=[[1,2],[2,3],[3,4]];
//Q#2
var numarray=[[1023],[1012],[2101]]
for(i=0; i<numarray.length; i++){
    document.write(numarray[i]+"<br>")
}
//Q#3
for(i=1; i<=10; i++){
    document.write(i+"<br>")
}
//Q#4
var table=parseInt(prompt("enter table number"));
var limit=parseInt(prompt("enter length of table"))
    for(i=1; i<=limit; i++){
        document.write("<br>"+table+"*"+i+"="+table*i);
}
//Q#5
var fruit=["apple","mango","banana","orange","strawberry"]
for(i=0; i<fruit.length; i++){
    document.write(fruit[i]+"<br>")
}
document.write("Element at index "+[0]+" is "+fruit[0]+"<br>")
document.write("Element at index "+[1]+" is "+fruit[1]+"<br>")
document.write("Element at index "+[2]+" is "+fruit[2]+"<br>")
document.write("Element at index "+[3]+" is "+fruit[3]+"<br>")
document.write("Element at index "+[4]+" is "+fruit[4]+"<br><br>")
//Q#6a
document.write("counting:")
for(i=1; i<=15; i++){
    document.write( i+",")
}
//Q#6b
document.write("<br>Reverse counting:")
for(i=10; i>=1; i--){
    document.write( i+",")
}
// //Q#6c
document.write("<br>Even:")
for(i=0; i<=20; i++){
  if(i % 2 == 0){
    document.write(i+" ,");
  }
}
//Q#6d
document.write("<br>Odd:")
for(i=0; i<=20; i++){
    if(i % 2 !== 0){
      document.write(i+" ,");
    }
}
//Q#6e
document.write("<br>Series:")
for(i=0; i<=20; i++){
  if(i % 2 == 0){
    document.write(i+"k ,");
  }
}
//Q#7
var bakery=["cake","appli pie","cookie","chips","patties"]
var select=prompt("Welcome to ABC bakery. What do you want to order sir/ma'am")
for(var i=0; i<bakery.length; i++) {
	if(select === bakery[i]){
        document.write(select+"<br> is available at "+i +"index  in our bakery");}}
if(select!= bakery[i]){
    document.write("<br>We are sorry."+select+" is not available in our bakery")}
//Q#8
var A=[24,53,78,91,12]
document.write("<br>Array: "+A+"<br>")
document.write("The largest number is: "+Math.max(...A))
//Q#9
var B=[24,53,78,91,12]
document.write("<br>Array: "+B+"<br>")
document.write("The smallest number is: "+Math.min(...B)+"<br>")
//Q#10
for(i=1; i<=20; i++){
    document.write(5*i+" ,")
}
//           -------------------------*****************--------------------------