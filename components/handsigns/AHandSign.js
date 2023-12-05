import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const aHandSign = new GestureDescription('A');
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
//       "Full Curl",
//       "Diagonal Up Left"
//     ]
//   ]

//Thumb
aHandSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
aHandSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);
// aHandSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
aHandSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
aHandSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);
// aHandSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Middle
aHandSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
aHandSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);
// aHandSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.70);

//Ring
aHandSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
aHandSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
aHandSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
aHandSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

