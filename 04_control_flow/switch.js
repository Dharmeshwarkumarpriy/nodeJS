const month='march' //string type value for testing default case in switch case statement 
switch(month){ //month variable is passed in switch expression 
    case 1: //case labels are checked against switch expression value one by one
        console.log('january'); //if match found corresponding block is executed
        break; //break statement is used to exit the switch case after executing matched case block 
    case 2: //next case label 
        console.log('febreary'); //if match found corresponding block is executed //if month is 'march' this case will be skipped
        break;
    case "march": //case label with string type value / this case will be matched //match found
        console.log('march');
        break;
    case 4:
        console.log('april');
        break;
    case 5:
        console.log('may');
        break;
    case 6:
        console.log('june');
        break;
    case 7:
        console.log('july');
        break;
    case 8:
        console.log('august');
        break;
    case 9:
        console.log('september');
        break;
    case 10:
        console.log('octuber');
        break;
    case 11:
        console.log('november');
        break;
    case 12:
        console.log('december');
        break;

    default: //default case if no match found in above cases // this block will be executed
        console.log("default case match"); //month is 'march' so this block will not be executed //if month is other then 1 to 12 this block will be executed
        break;
}