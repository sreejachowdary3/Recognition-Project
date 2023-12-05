import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const hHandSign = new GestureDescription('H');
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
//       "No Curl",
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
//       "Horizontal Right"
//     ]
//   ]

//Thumb
hHandSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
hHandSign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.70);

//Index
hHandSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
hHandSign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.70);

//Middle
hHandSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
hHandSign.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 0.70);

//Ring
hHandSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
hHandSign.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.70);

//Pinky
hHandSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
hHandSign.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.70);

