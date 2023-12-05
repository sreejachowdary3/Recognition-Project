import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const oHandSign = new GestureDescription('O');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Index",
//       "Half Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Middle",
//       "Half Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Ring",
//       "Half Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Pinky",
//       "Half Curl",
//       "Diagonal Up Right"
//     ]
//   ]

//Thumb
oHandSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
oHandSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Index
oHandSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 1);
oHandSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
oHandSign.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1);
oHandSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.70);

//Ring
oHandSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
oHandSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.70);

//Pinky
oHandSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
oHandSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.70);
