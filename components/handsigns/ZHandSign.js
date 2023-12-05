import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const zHandSign = new GestureDescription('Z');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Horizontal Left"
//     ],
//     [
//       "Index",
//       "No Curl",
//       "Diagonal Up Left"
//     ],
//     [
//       "Middle",
//       "Full Curl",
//       "Horizontal Left"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Horizontal Left"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Horizontal Left"
//     ]
//   ]

//Thumb
zHandSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.8);
zHandSign.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.70);

//Index
zHandSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
zHandSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Middle
zHandSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
zHandSign.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 0.70);

//Ring
zHandSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
zHandSign.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.70);

//Pinky
zHandSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
zHandSign.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.70);

