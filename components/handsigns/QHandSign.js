import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const qHandSign = new GestureDescription('Q');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Vertical Down"
//     ],
//     [
//       "Index",
//       "Half Curl",
//       "Vertical Down"
//     ],
//     [
//       "Middle",
//       "Half Curl",
//       "Vertical Down"
//     ],
//     [
//       "Ring",
//       "Half Curl",
//       "Vertical Down"
//     ],
//     [
//       "Pinky",
//       "Half Curl",
//       "Diagonal Down Left"
//     ]
//   ]

//Thumb
qHandSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
qHandSign.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 0.70);

//Index
qHandSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 1);
qHandSign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.70);

//Middle
qHandSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
qHandSign.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 0.70);

//Ring
qHandSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
qHandSign.addDirection(Finger.Ring, FingerDirection.DiagonalDownRight, 0.70);

//Pinky
qHandSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
qHandSign.addDirection(Finger.Pinky, FingerDirection.DiagonalDownRight, 0.70);

