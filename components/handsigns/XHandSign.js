import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const xHandSign = new GestureDescription('X');
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Vertical Up"
//     ],
//     [
//       "Index",
//       "Half Curl",
//       "Vertical Up"
//     ],
//     [
//       "Middle",
//       "Half Curl",
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
xHandSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
xHandSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Index
xHandSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 1);
xHandSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
xHandSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
xHandSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
xHandSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
xHandSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
xHandSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
xHandSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

