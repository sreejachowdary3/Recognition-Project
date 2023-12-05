import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const yHandSign = new GestureDescription('Y');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Index",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Middle",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Pinky",
//       "No Curl",
//       "Diagonal Up Left"
//     ]
//   ]

//Thumb
yHandSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
yHandSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Index
yHandSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
yHandSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
yHandSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
yHandSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
yHandSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
yHandSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
yHandSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
yHandSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);

