let marks = "f";
// let result;

switch(marks.toUpperCase()) {
    case "A":
        console.log("Scores - 95 >= marks < 100 ");
        break;
    case "B":
        console.log("Scores - 85 >= marks < 95 ");
        break;

    case "C":
        console.log("Scores - 75 >= marks < 85 ");
        break;
    case "D":
        console.log("Scores - 65 >= marks < 75 ");
        break;
    default:
        console.log("Scores - marks < 65 - Not eligible to get admission in college");
}
