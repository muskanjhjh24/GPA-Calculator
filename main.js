
function gpacalc(){
    var grade= new Array(8) ;
    var credit= new Array(8)  ;
    var ingr = new Array(7) ;
    var incr =new Array(7);

    var count = 8 ;
    grade[0]="S";
    credit[0]=10;
    grade[1]="A";
    credit[1]=9;
    grade[2]="B";
    credit[2]=8;
    grade[3]="C";
    credit[3]=7;
    grade[4]="D";
    credit[4]=6;
    grade[5]="E";
    credit[5]=5;
    grade[6]="F";
    credit[6]=4;
    grade[7]="N";
    credit[7]=3;
    ingr[0] = document.GPACalcForm.GR1.value;
    ingr[1] = document.GPACalcForm.GR2.value;
    ingr[2] = document.GPACalcForm.GR3.value;
    ingr[3] = document.GPACalcForm.GR4.value;
    ingr[4] = document.GPACalcForm.GR5.value;
    ingr[5] = document.GPACalcForm.GR6.value;
    ingr[6] = document.GPACalcForm.GR7.value;
    ingr[7] = document.GPACalcForm.GR8.value;
    incr[0] = document.GPACalcForm.CR1.value;
    incr[1] = document.GPACalcForm.CR2.value;
    incr[2] = document.GPACalcForm.CR3.value;
    incr[3] = document.GPACalcForm.CR4.value;
    incr[4] = document.GPACalcForm.CR5.value;
    incr[5] = document.GPACalcForm.CR6.value;
    ingr[6] = document.GPACalcForm.GR7.value;
    ingr[7] = document.GPACalcForm.GR8.value;

    var allgr = 0;
    var allcr = 0;
    var gpa = 0;
    for(var x=0;x<5+3;x++){
        if(ingr[x]=="")break;
         if(isNaN(parseInt(incr[x])))alert("you did not enter a numeric credits vale for the given course");
         var validgrcheck =0;
         for(var xx =0; xx< count;xx++){
             if(ingr[x]==grade[xx])
             {
                 allgr= allgr+(parseInt(incr[x],10)* credit[xx]);
                 allcr=allcr + (parseInt(incr[x],10));
                 validgrcheck=1;
                 break;
             }
         }
        if(validgrcheck==0){
            alert("error-could not recognise the grade,try entering the same grade in CAPS");
            return 0;
        }

    }
    if(allcr==0){
        alert("error- you did not enter any credit value!!!")
        return 0;
    }
    
    gpa=allgr/allcr;
    alert("GPA =" +eval(gpa));
    
    return 0;






    



}
document.querySelector("#btn").addEventListener("click",function(){
    gpacalc()
});
