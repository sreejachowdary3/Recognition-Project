import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const cHandSign = new GestureDescription('C');
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
cHandSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
cHandSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Index
cHandSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
cHandSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
cHandSign.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1);
cHandSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.70);

//Ring
cHandSign.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1);
cHandSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.70);

//Pinky
cHandSign.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1);
cHandSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.70);

