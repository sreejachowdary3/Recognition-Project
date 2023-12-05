import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const pHandSign = new GestureDescription('P');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Horizontal Right"
//     ],
//     [
//       "Index",
//       "No Curl",
//       "Horizontal Right"
//     ],
//     [
//       "Middle",
//       "Full Curl",
//       "Horizontal Right"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Horizontal Right"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Diagonal Down Right"
//     ]
//   ]

//Thumb
pHandSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
pHandSign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.70);

//Index
pHandSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
pHandSign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.70);

//Middle
pHandSign.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1);
pHandSign.addDirection(Finger.Middle, FingerDirection.DiagonalDownRight, 0.70);

//Ring
pHandSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
pHandSign.addDirection(Finger.Ring, FingerDirection.DiagonalDownRight, 0.70);

//Pinky
pHandSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
pHandSign.addDirection(Finger.Pinky, FingerDirection.DiagonalDownRight, 0.70);

