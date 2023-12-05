import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const bHandSign = new GestureDescription('B');
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Vertical Up"
//     ],
//     [
//       "Index",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Middle",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Ring",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Pinky",
//       "No Curl",
//       "Vertical Up"
//     ]
//   ]

//Thumb
bHandSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
bHandSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);
bHandSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Index
bHandSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
bHandSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
bHandSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
bHandSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
bHandSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
bHandSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);


//Pinky
bHandSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
bHandSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);


