const center = (objWidth, objHeight, contWidth, contHeight) => {
  //x = (w - ww) / 2;
  //y = (h - hh) / 2;
  const newX = (contWidth - objWidth) / 2;
  const newY = (contHeight - contWidth) / 2;

};




const width = 125;
const height = 125;
const padding = 2;
const allLines = [];
const r = bt.randInRange;
setDocDimensions(width, height);





const availableHeight = height - padding;
const availableWidth = width - padding;
//drawing the cat outline
const tallnessOfFace = bt.randInRange((availableHeight * 0.3), (availableHeight * 0.5));
const widthOfFace = availableWidth * (r(0.6, 1));

const widthOfEar = bt.randInRange(widthOfFace * 1 / 3, widthOfFace * 1 / 6);
const widthOfHalfEar = widthOfEar * (bt.randInRange(1 / 4, 1 / 2));
const paddingForCenter = ((availableWidth - widthOfFace) / 2)



const leftTopAnchor = [paddingForCenter, tallnessOfFace];
const leftBottomAnchor = [paddingForCenter, padding];

const topLeftEarAnchor = [(paddingForCenter + widthOfHalfEar), availableHeight];
const leftMiddleAnchor = [(paddingForCenter + widthOfEar), tallnessOfFace];

const rightMiddleAnchor = [((availableWidth - paddingForCenter) - widthOfEar), tallnessOfFace];
const topRightEarAnchor = [((availableWidth - paddingForCenter) - widthOfHalfEar), availableHeight];

const rightTopAnchor = [(paddingForCenter + widthOfFace + padding), tallnessOfFace];
const rightBottomAnchor = [(paddingForCenter + widthOfFace + padding), padding];

const looseCatOutline = [
  leftTopAnchor,
  topLeftEarAnchor,
  leftMiddleAnchor,
  rightMiddleAnchor,
  topRightEarAnchor,
  rightTopAnchor,
  rightBottomAnchor,
  leftBottomAnchor,
  leftTopAnchor
];


//making the cat's edges jagged

/*idea: keep adding random line segments together 
that slightly deviate from path  until the added y
OR x coordinates add up to the original lines's length - 
then replace the targeted points in the looseCatOutline array
w/new points
*/

function jaggedOutline(line, index, direction){
let newPoints = [];
let x = 0;
let y = 0;
const jaggedness = 2;

if (direction === "vertical"){
let maxY = line[index+1][1];
x = line[index][0];
y = line[index][1];

while (y >= maxY){
x = x + r((-1*jaggedness), jaggedness);
y = y - r(jaggedness/2, jaggedness^2);
newPoints.push([x,y]);

};
} else {
let maxX = line[index+1][0];
x = line[index][0];
y = line[index][1];

while (x <= maxX){
x = x + r(jaggedness/2, jaggedness^2);
y = y + r(-1*jaggedness, jaggedness);
newPoints.push([x,y]);

};

};
console.log(newPoints);

//months.splice(4, 1, 'May');
// Replaces 1 element at index 4
  
looseCatOutline.splice(index, 2, [newPoints]);
  
};
  
//jaggedOutline(looseCatOutline, 5, "vertical");  


const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months);









//making the bounding box for the eyes
const boxOffset = tallnessOfFace * (r(1 / 6, 1 / 5));
const boxWidth = widthOfFace * (r(0.7, 1));
const boxHeight = tallnessOfFace * (r(1 / 3, 1 / 1.75));

const leftEyeBox = (paddingForCenter + ((widthOfFace - boxWidth) / 2))
const rightEyeBoxP = leftEyeBox + boxWidth;
const eyeBox = [
  [leftEyeBox, (boxHeight + boxOffset)],
  [leftEyeBox + boxWidth, (boxHeight + boxOffset)],
  [leftEyeBox + boxWidth, boxOffset],
  [leftEyeBox, boxOffset],
  [leftEyeBox, (boxHeight + boxOffset)],
];



drawLines(allLines);

//making the eyes
const eyeWidth = boxWidth * (r(0.3, 0.4));
const eyeHeight = boxHeight * (r(0.5, 0.7));

const eyePadding = eyeWidth * 0.15;
const eyePaddingY = eyeHeight * 0.15;
const outerEyeLeft = bt.catmullRom([
  [leftEyeBox + eyePadding, (boxOffset + eyeHeight)],
  [leftEyeBox + (eyeWidth), (boxOffset + eyeHeight)],
  [leftEyeBox + (eyeWidth), boxOffset + eyePaddingY],
  [leftEyeBox + eyePadding, boxOffset + eyePaddingY],
  [leftEyeBox + eyePadding, boxOffset + eyeHeight]
], 100);


const outerEyeRight = bt.catmullRom([
  [rightEyeBoxP - eyePadding, (boxOffset + eyeHeight)],
  [rightEyeBoxP - eyeWidth, (boxOffset + eyeHeight)],
  [rightEyeBoxP - eyeWidth, (boxOffset + eyePaddingY)],
  [rightEyeBoxP - eyePadding, (boxOffset + eyePaddingY)],
  [rightEyeBoxP - eyePadding, (boxOffset + eyeHeight)]
], 100);



//making inner eyes
const eyeScale = 0.8;

const innerEyeLeft = bt.copy(outerEyeLeft);
bt.scale([innerEyeLeft], [eyeScale, eyeScale]);
bt.translate([innerEyeLeft], [eyeWidth * ((1 - eyeScale) / 2), eyeHeight * ((1 - eyeScale) / 2)]);
//^^this line works



const innerEyeRight = bt.copy(outerEyeRight);
bt.scale([innerEyeRight], [eyeScale, eyeScale]);
bt.translate([innerEyeRight], [-1 * (eyeWidth * ((1 - eyeScale) / 2)), eyeHeight * ((1 - eyeScale) / 2)]);

//console.log(innerEyeRight);

//attempting to stipple inside circles
//attempt 1:
/*
in a for loop that depends on how big a shape is,
the shape will be scaled, simplified OR resampled into 
less points, the points will be drawn, and then that will repeat with
the new shape translated being derived from the one in the
previous for loop

*/



function stippleV1(shape, Density, noise) {
//parameters
  const gapBetweenIterations = 0.966;
  const dotThickness = 0.01;
  const density = Density;
////

  const stiShape = bt.copy(shape);
  while (stiShape.length > 2){
  
  bt.scale([stiShape], [gapBetweenIterations, gapBetweenIterations]);
  bt.resample([stiShape], density);
  //bt.rotate([stiShape], 25);
  for (let i = 0; i < stiShape.length; i++){
    let deviationX = r(0.5,noise);
    let deviationY = r(0.5 ,noise);
  let newRightLine = [
    [stiShape[i][0] + deviationX, stiShape[i][1] + deviationY],
    [stiShape[i][0] + dotThickness + deviationX, stiShape[i][1] + dotThickness + deviationY]
  ];
  allLines.push(newRightLine);
  
  };
  
};
  
  
};

stippleV1(innerEyeLeft, 0.17,2);
stippleV1(innerEyeRight, 0.17,2);
stippleV1(outerEyeRight, 0.25,3);
stippleV1(outerEyeLeft, 0.25,3);
stippleV1(looseCatOutline, 0.4,10);

















drawLines(allLines);