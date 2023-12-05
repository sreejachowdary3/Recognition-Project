import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const kHandSign = new GestureDescription('K');
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
//       "Vertical Up"
//     ]
//   ]

//Thumb
kHandSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
kHandSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
kHandSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
kHandSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
kHandSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
kHandSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
kHandSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
kHandSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
kHandSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
kHandSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

