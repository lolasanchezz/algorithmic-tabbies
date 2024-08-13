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

const topLeftX = (paddingForCenter+((widthOfFace-boxWidth)/2))
const eyeBox = [
  [topLeftX, (boxHeight+boxOffset)],
  [topLeftX+boxWidth, (boxHeight+boxOffset)],
  [topLeftX+boxWidth, boxOffset],
  [topLeftX, boxOffset],
  [topLeftX, (boxHeight+boxOffset)],
  ];
  
allLines.push(eyeBox);





drawLines(allLines);








