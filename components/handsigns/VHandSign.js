import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const vHandSign = new GestureDescription('V');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Left"
//     ],
//     [
//       "Index",
//       "No Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Middle",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Diagonal Up Left"
//     ]
//   ]

//Thumb
vHandSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
vHandSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
vHandSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
vHandSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
vHandSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
vHandSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
vHandSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
vHandSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
vHandSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
vHandSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);

