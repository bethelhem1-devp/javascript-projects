function getAverage(score){//get avrage from scores
  let sum=0;
  for(let i=0; i<score.length; i++){
    sum= sum + score[i];
  }
  let avrage= sum / score.length;
  return avrage;
}

function getGrade(score){//convert number into grade letter
  if(score==100){
    return "A+"
  }else if(score >= 90 && score <= 99){
    return "A"
  }else if(score >= 80 && score <= 89){
    return "B";
  } else if(score >= 70 && score <= 79){
   return "C"
  }else if(score >= 60 && score <= 69){
    return "D"
  } else{
    return "F";
  }
}

function hasPassingGrade(score){//check it is pass or nah accept num
  
  let grade = getGrade(score);
  if (grade === "F") {
    return false;
  } else {
    return true;
  }
}

function studentMsg(score, studentScore){//output avg,grade,pass
  let classAverage=getAverage(score);
  let grade=getGrade(studentScore);
  let pass=hasPassingGrade(studentScore)
 if (pass) {
    return "Class average: " + classAverage + ". Your grade: " + grade + ". You passed the course.";
  } else {
    return "Class average: " + classAverage + ". Your grade: " + grade + ". You failed the course.";
  }
}