let rollno= 67;
let rgstno="JS2-067";
let name="Aween Anjum Bukhari";
let tname="Ma'am Hina Imtiaz";
let cla="9th";
let emarks=93;
let umarks=96;
let mmarks=94;
let cmarks=90;
let pmarks=98;
let total= emarks+umarks+mmarks+cmarks+pmarks;
let per= total/500*100;
let grade;
if(per<=100 && per>=89)//90-100
          {grade="A+";}
else if(per<=90 && per>=80)//80-89
          {grade="A";}
else if(per<=80 && per>=70)//70-79
          {grade="B";}
else if(per<=70 && per>=60)//60-69
          {grade="C";}
else if(per<=60 && per>=50)//50-59
          {grade="D";}
else{(grade="U");}

//****Subject grades****/
let subgrade;
if(per<=100 && per>=89)//90-100
          {subgrade="A+";}
else if(per<=90 && per>=80)//80-89
          {subgrade="A";}
else if(per<=80 && per>=70)//70-79
          {subgrade="B";}
else if(per<=70 && per>=60)//60-69
          {subgrade="C";}
else if(per<=60 && per>=50)//50-59
          {subgrade="D";}
else{(subgrade="U");}

//*****Remarks*******/
let remarks;
if(per<=100 && per>90)//90-100
         {remarks="Exceptional";}
else if(per<=90 && per>=80)//80-89
         {remarks="Excellent";}
else if(per<=80 && per>=70)//70-79
         {remarks="Good";}
else if(per<=70 && per>=60)//60-69
         {remarks="Fair";}
else if(per<=60 && per>=50)//50-59
         {remarks="Satisfactory";}
else{(remarks="Average");}

//NOW CREATE MARKSHEET

document.write("Roll No:",rollno);
document.write("<br>Registration No:",rgstno);
document.write("<br>Name:",name);
document.write("<br>Class:",cla);
document.write("<br>Teacher Name:",tname,"<br>");
document.write("<br><center><h3>MARKS CALCULATION</h3></center>");
document.write("<center><table border=3 width=600px height=300px></center>");
document.write("<tr><th>Subject</th><th>Obtained Marks</th><th>Out of</th><th>Subject Grades</th><th>Remarks</th></tr>");
document.write("<tr><td>English</td><td>",emarks,"</td><td>100</td><td>",subgrade,"</td><td>",remarks,"</td></tr>");
document.write("<tr><td>Urdu</td><td>",umarks,"</td><td>100</td><td>",subgrade,"</td><td>",remarks,"</td></tr>");
document.write("<tr><td>Maths</td><td>",mmarks,"</td><td>100</td><td>",subgrade,"</td><td>",remarks,"</td></tr>");
document.write("<tr><td>Chemistry<td>",cmarks,"</td><td>100</td><td>",subgrade,"</td><td>",remarks,"</td></tr>");
document.write("<tr><td>Physics</td><td>",pmarks,"</td><td>100</td><td>",subgrade,"</td><td>",remarks,"</td></tr>");
document.write("<tr><td>G.Total</td><td>",total,"</td><td>500</td><td></td><td></td></tr>");
document.write("<tr><td>Percentage</td><td>",per,"</td><td></td><td></td><td></td></tr>");
document.write("<tr><td>Grade</td><td>",grade,"</td><td></td><td></td><td></td></tr>");
document.write("<tr><td>Remarks</td><td>",remarks,"</td><td></td><td></td><td></td></tr>");
//document.write("<br><br><br><h4 align=right>Controler Examination</h4>")//
