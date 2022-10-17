function grading(score) {
    let grade;

    switch (true) {
        case (score <= 100 && score >= 90):
            grade = "S"
            break;
        case (score <= 89 && score >= 80):
            grade = "A"
            break;
        case (score <= 79 && score >= 70):
            grade = "B"
            break;
        case (score <= 69 && score >= 60):
            grade = "C"
            break;
        case (score <= 59 && score >= 50):
            grade = "D"
            break;
        case (score <= 49 && score >= 40):
            grade = "E"
            break;
        case (score <= 39 && score >= 0):
            grade = "Fail"
            break;
        case (score > 100 && score < 0):
            grade = "Invalid marks"
            break;
        default:
            return "Invalid marks"
    }

    return grade;
}

console.log(grading(30));
console.log(grading(50));
console.log(grading(80));
    
