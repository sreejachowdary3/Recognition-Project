import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const sHandSign = new GestureDescription('S');
// [
//     [
//       "Thumb",
//       "Half Curl",
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
sHandSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
sHandSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Index
sHandSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
sHandSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
sHandSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
sHandSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
sHandSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
sHandSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
sHandSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
sHandSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);

