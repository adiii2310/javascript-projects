const massMark=78;
const massJohn=92;
const hMark=1.69;
const hJohn=1.76;
const bmiMark=(massMark/(hMark*hMark));
const bmiJohn=(massJohn/(hJohn*hJohn));
console.log("bmi of marks is ="+bmiMark);
console.log("bmi pf jon is="+bmiJohn);
let markHigherBmi=true;
if(bmiMark>bmiJohn)
{
    console.log("Mark's bmi is higher than john's MimeTypeArray")
}
else{
    console.log("john's bmi is higher than mark's bmi")
}