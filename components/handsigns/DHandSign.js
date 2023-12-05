import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const dHandSign = new GestureDescription('D');
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
dHandSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
dHandSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Index
dHandSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
dHandSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
dHandSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
dHandSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
dHandSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
dHandSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
dHandSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
dHandSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

