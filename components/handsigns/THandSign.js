import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const tHandSign = new GestureDescription('T');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Vertical Up"
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
//       "Diagonal Up Left"
//     ]
//   ]

//Thumb
tHandSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
tHandSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Index
tHandSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
tHandSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
tHandSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
tHandSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
tHandSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
tHandSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
tHandSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
tHandSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);

