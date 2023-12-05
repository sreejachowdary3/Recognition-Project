import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const lHandSign = new GestureDescription('L');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Index",
//       "No Curl",
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
//       "Full Curl",
//       "Vertical Up"
//     ]
//   ]

//Thumb
lHandSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
lHandSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Index
lHandSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
lHandSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
lHandSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
lHandSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
lHandSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
lHandSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
lHandSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
lHandSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

