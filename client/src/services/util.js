
export function numberMagnitude(num){
    let letterGrade = "";
    
    switch(true){

        case num > 999999999999999 || num < -999999999999999 :
            letterGrade = "Q";
            break;
        case num > 999999999999 || num < -999999999999:
            letterGrade = "T";
            break;
        case num > 999999999 || num < -999999999:
            letterGrade = "B";
            break;
        case num > 999999 || num < -999999:
            letterGrade = "M";
            break;
    }

    return letterGrade;
}

export default { numberMagnitude }