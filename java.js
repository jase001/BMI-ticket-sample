//asignment 1
function bmiCalculator(weight, height){
    var bmiFormula = weight / (height * height)

    if(bmiFormula<18.5){
        return `your BMI is ${bmiFormula.toFixed(1)} , so you are underweight`
    }

    else if(25.0 <=bmiFormula<=29.9){
        return `your BMI is ${bmiFormula.toFixed(1)}kg/m2 ao you are normal weight`
    }
    
    else{
        return `your BMI is ${bmiFormula.toFixed(1)} ao you are overweight`
    }

}

document.write(bmiCalculator(90,2));

//asiignment 2


var age = 13;
var accompanied = false;

if(age>=13){
    let text = "you are allowed in"
    alert(text);
}
    
else if(age <=12 && accompanied){
    let text = "you are allowed in"
    alert(text);
}
    
else{
    let text = "you are not allowed in "
    alert(text);
}

