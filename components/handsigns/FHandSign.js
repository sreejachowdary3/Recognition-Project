import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const fHandSign = new GestureDescription('F');
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Index",
//       "Full Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Middle",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Ring",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Pinky",
//       "No Curl",
//       "Vertical Up"
//     ]
//   ]

//Thumb
fHandSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
fHandSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Index
fHandSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
fHandSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
fHandSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
fHandSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
fHandSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
fHandSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
fHandSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
fHandSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

