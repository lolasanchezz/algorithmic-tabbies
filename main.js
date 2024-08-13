const center = (objWidth, objHeight, contWidth, contHeight) => {
//x = (w - ww) / 2;
//y = (h - hh) / 2;
  const newX = ( contWidth - objWidth)/2;
  const newY = (contHeight - contWidth)/2;

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
const tallnessOfFace = bt.randInRange((availableHeight*0.3), (availableHeight*0.5));
const widthOfFace = availableWidth * (r(0.6, 1));

const widthOfEar = bt.randInRange(widthOfFace * 1/3, widthOfFace * 1/6);
const widthOfHalfEar = widthOfEar*(bt.randInRange(1/4, 1/2));
const paddingForCenter = ((availableWidth-widthOfFace)/2)



const leftTopAnchor = [paddingForCenter, tallnessOfFace];
const leftBottomAnchor = [paddingForCenter, padding];

const topLeftEarAnchor = [(paddingForCenter+widthOfHalfEar), availableHeight];
const leftMiddleAnchor = [(paddingForCenter+widthOfEar), tallnessOfFace];

const rightMiddleAnchor = [((availableWidth-paddingForCenter)-widthOfEar), tallnessOfFace];
const topRightEarAnchor = [((availableWidth-paddingForCenter)-widthOfHalfEar), availableHeight];

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

allLines.push(looseCatOutline);




//making the bounding box for the eyes
const boxOffset = tallnessOfFace*(r(1/6, 1/5));
const boxWidth = widthOfFace*(r(0.6,1));
const boxHeight = tallnessOfFace*(r(1/4,1/2));

const leftEyeBox = (paddingForCenter+((widthOfFace-boxWidth)/2))
const eyeBox = [
  [leftEyeBox, (boxHeight+boxOffset)],
  [leftEyeBox+boxWidth, (boxHeight+boxOffset)],
  [leftEyeBox+boxWidth, boxOffset],
  [leftEyeBox, boxOffset],
  [leftEyeBox, (boxHeight+boxOffset)],
  ];
  
allLines.push(eyeBox);


//making the eyes
const eyeWidth = boxWidth*(r(0.3, 0.45));
const eyeHeight = boxHeight*(r(0.2, 0.7));


const eyeLeft = bt.catmullRom([[leftEyeBox+eyeWidth,(boxHeight+boxOffset-eyeHeight)],
                               [leftEyeBox+(eyeWidth*2), (boxHeight+boxOffset-eyeHeight)],
                               [leftEyeBox+(eyeWidth*2), boxOffset],
                               [leftEyeBox+eyeWidth, boxOffset],
                               [leftEyeBox+eyeWidth, boxHeight+boxOffset-eyeHeight]], 25);


allLines.push(eyeLeft);

drawLines(allLines);








