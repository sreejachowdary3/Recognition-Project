import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const uHandSign = new GestureDescription('U');
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Diagonal Up Left"
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
uHandSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
uHandSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
uHandSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
uHandSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
uHandSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
uHandSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
uHandSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
uHandSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
uHandSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
uHandSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);

