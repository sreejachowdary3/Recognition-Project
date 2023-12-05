import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const mHandSign = new GestureDescription('M');
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Diagonal Up Left"
//     ],
//     [
//       "Index",
//       "Full Curl",
//       "Diagonal Up Right"
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
//       "Full Curl",
//       "Vertical Up"
//     ]
//   ]

//Thumb
mHandSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
mHandSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
mHandSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
mHandSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
mHandSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
mHandSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
mHandSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
mHandSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
mHandSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
mHandSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

