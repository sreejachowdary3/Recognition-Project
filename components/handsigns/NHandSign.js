import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const nHandSign = new GestureDescription('N');

//Thumb
nHandSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
nHandSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
nHandSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
nHandSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
nHandSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
nHandSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
nHandSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
nHandSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
nHandSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
nHandSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);

