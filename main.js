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
const leftBound = ((availableWidth-widthOfFace)/2)


const leftTopAnchor = [leftBound, tallnessOfFace];
const leftBottomAnchor = [leftBound, padding];

const topLeftEarAnchor = [(leftBound+widthOfHalfEar), availableHeight];
const leftMiddleAnchor = [(leftBound+widthOfEar), tallnessOfFace];

const rightMiddleAnchor = [(widthOfFace-widthOfEar), tallnessOfFace];
const topRightEarAnchor = [(widthOfFace-widthOfHalfEar), availableHeight];

const rightTopAnchor = [(widthOfFace), tallnessOfFace];
const rightBottomAnchor = [(widthOfFace), padding];

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
const eyeBox = [
  [((widthOfFace - boxWidth)/2), (boxHeight+boxOffset)],
  [boxWidth, (boxHeight+boxOffset)],
  [boxWidth, boxOffset],
  [((widthOfFace - boxWidth)/2), boxOffset]
  ];
  
allLines.push(eyeBox);





drawLines(allLines);








