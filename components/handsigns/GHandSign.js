import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const gHandSign = new GestureDescription('G');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Index",
//       "Half Curl",
//       "Horizontal Right"
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
//       "Full Curl",
//       "Horizontal Right"
//     ]
//   ]

//Thumb
gHandSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
gHandSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Index
gHandSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
gHandSign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.70);

//Middle
gHandSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
gHandSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.70);

//Ring
gHandSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
gHandSign.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.70);

//Pinky
gHandSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
gHandSign.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.70);

