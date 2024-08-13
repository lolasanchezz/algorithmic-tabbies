const width = 125;
const height = 125;
const padding = 2;
setDocDimensions(width, height);

const availableHeight = height - padding;
const availableWidth = width - padding;
//drawing the cat outline

//RULES FOR THE ANCHORS: left three points add up to the height - padding
const tallnessOfFace = bt.randInRange((availableHeight*0.3), (availableHeight*0.5));
const widthOfEar = bt.randInRange(availableWidth * 1/3, availableWidth * 1/6);
const widthOfHalfEar = widthOfEar*(bt.randInRange(1/4, 1/2));
  
const middleLeftAnchor = [padding, tallnessOfFace];
const bottomAnchor = [padding, padding];

const topLeftEarAnchor = [widthOfHalfEar, availableWidth];
const leftMiddleAnchor = [widthOfEar, tallnessOfFace];

const rightMiddleAnchor = [(availableWidth-widthOfEar), tallnessOfFace)];
const topRightEarAnchor = [(availableWidth-widthOfHalfEar), 













