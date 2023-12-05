import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const iHandSign = new GestureDescription('I');
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Diagonal Up Left"
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
//       "No Curl",
//       "Vertical Up"
//     ]
//   ]

//Thumb
iHandSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
iHandSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
iHandSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
iHandSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
iHandSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
iHandSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
iHandSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
iHandSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
iHandSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
iHandSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

