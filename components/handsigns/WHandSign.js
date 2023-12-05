import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const wHandSign = new GestureDescription('W');
// [
//     [
//       "Thumb",
//       "Half Curl",
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
//       "No Curl",
//       "Diagonal Up Left"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Diagonal Up Left"
//     ]
//   ]

//Thumb
wHandSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
wHandSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
wHandSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
wHandSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
wHandSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
wHandSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
wHandSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
wHandSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.70);

//Pinky
wHandSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
wHandSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);

