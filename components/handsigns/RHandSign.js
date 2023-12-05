import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const rHandSign = new GestureDescription('R');
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
rHandSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
rHandSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
rHandSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
rHandSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
rHandSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
rHandSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
rHandSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
rHandSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
rHandSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
rHandSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

