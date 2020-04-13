const getSleepHours = day => {
 if (day==='monday') {return 8;}
else if (day==='tuesday') {return 6;}
else if (day==='wednesday') {return 4;} 
else if (day==='thursday') {return 2;}
else if (day==='friday') {return 4;}
else if (day==='saturday') {return 10;}
else if (day==='sunday') {return 6;}
else {return '0'}
};


const getActualSleepHours = () => { return getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday')+getSleepHours('sunday');
};

console.log(getActualSleepHours());

const getIdealSleepHours=() => {const idealHours=8;
return idealHours*7;                            
}
console.log(getIdealSleepHours());

calculateSleepDept=() => {const actualSleepHours= getActualSleepHours();
const idealSleepHours=getIdealSleepHours();
if (actualSleepHours===idealSleepHours) {return 'User got the perfect amount of sleep';}
else if (actualSleepHours>idealSleepHours) {return 'User got '+(actualSleepHours-idealSleepHours)+'more sleep than needed.'}
else {return 'User should sleep '+(idealSleepHours-actualSleepHours) +' more hours';}}

console.log(calculateSleepDept());
