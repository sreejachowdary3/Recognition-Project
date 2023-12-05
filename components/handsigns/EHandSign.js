import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const eHandSign = new GestureDescription('E');
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Vertical Up"
//     ],
//     [
//       "Index",
//       "Half Curl",
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
//       "Vertical Up"
//     ]
//   ]

//Thumb
eHandSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
eHandSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Index
eHandSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
eHandSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
eHandSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
eHandSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
eHandSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
eHandSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
eHandSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
eHandSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

