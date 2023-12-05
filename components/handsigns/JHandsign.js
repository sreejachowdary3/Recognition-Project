import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const jHandSign = new GestureDescription('J');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Index",
//       "Full Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Middle",
//       "Full Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Horizontal Right"
//     ],
//     [
//       "Pinky",
//       "No Curl",
//       "Horizontal Right"
//     ]
//   ]

//Thumb
jHandSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
jHandSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Index
jHandSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
jHandSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
jHandSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
jHandSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.70);

//Ring
jHandSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
jHandSign.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.70);

//Pinky
jHandSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
jHandSign.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.70);

