import React, { useRef, useState, useEffect } from "react"
import * as tf from "@tensorflow/tfjs"
import Webcam from "react-webcam"
import { drawHand } from "../components/handposeutil"
import * as fp from "fingerpose"
import Signs from "../components/handsigns"
import { RiCameraFill, RiCameraOffFill } from "react-icons/ri"

import Info from "../components/Info"
import MetaInformation from "../components/MetaInformation"
import * as handpose from "@tensorflow-models/handpose"
import {
  Text,
  Heading,
  Button,
  Image,
  Stack,
  Container,
  Box,
  VStack,
  ChakraProvider,
} from "@chakra-ui/react"

import { Signimage, Signpass } from "../components/handimage"

export default function Home() {
  const refWebcam = useRef(null)
  const refCanvas = useRef(null)

  const [cameraState, setCameraState] = useState("on")

  const [handSign, setHandSign] = useState(null)

  let handSignList = []
  let currentHandSign = 0

  let screenState = "started"

  async function runHandpose() {
    const net = await handpose.load()
    _signList()

    setInterval(() => {
      detect(net)
    }, 150)
  }

  function _signList() {
    handSignList = generateSigns()
  }

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[a[i], a[j]] = [a[j], a[i]]
    }
    return a
  }

  function generateSigns() {
    const password = shuffle(Signpass)
    return password
  }

  async function detect(net) {
    // Check data is available
    if (
      typeof refWebcam.current !== "undefined" &&
      refWebcam.current !== null &&
      refWebcam.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = refWebcam.current.video
      const videoWidth = refWebcam.current.video.videoWidth
      const videoHeight = refWebcam.current.video.videoHeight

      // Set video width
      refWebcam.current.video.width = videoWidth
      refWebcam.current.video.height = videoHeight

      // Set canvas height and width
      refCanvas.current.width = videoWidth
      refCanvas.current.height = videoHeight

      // Make Detections
      const hand = await net.estimateHands(video)

      if (hand.length > 0) {
        //loading the fingerpose model
        const GE = new fp.GestureEstimator([
          fp.Gestures.ThumbsUpGesture,
          Signs.aHandSign,
          Signs.bHandSign,
          Signs.cHandSign,
          Signs.dHandSign,
          Signs.eHandSign,
          Signs.fHandSign,
          Signs.gHandSign,
          Signs.hHandSign,
          Signs.iHandSign,
          Signs.jHandSign,
          Signs.kHandSign,
          Signs.lHandSign,
          Signs.mHandSign,
          Signs.nHandSign,
          Signs.oHandSign,
          Signs.pHandSign,
          Signs.qHandSign,
          Signs.rHandSign,
          Signs.sHandSign,
          Signs.tHandSign,
          Signs.uHandSign,
          Signs.vHandSign,
          Signs.wHandSign,
          Signs.xHandSign,
          Signs.yHandSign,
          Signs.zHandSign,
        ])

        const estimatedGestures = await GE.estimate(hand[0].landmarks, 6.5)

        if (screenState === "started") {
          document.querySelector("#app-title").innerText =
            "Make a thumsup gesture with your hand to start"
        }

        if (
          estimatedGestures.gestures !== undefined &&
          estimatedGestures.gestures.length > 0
        ) {
          const confidence = estimatedGestures.gestures.map(p => p.confidence)
          const maxConfidence = confidence.indexOf(
            Math.max.apply(undefined, confidence)
          )
          if (
            estimatedGestures.gestures[maxConfidence].name === "thumbs_up" &&
            screenState !== "played"
          ) {
            _signList()
            screenState = "played"
          } else if (screenState === "played") {
            document.querySelector("#app-title").innerText = ""

            if (currentHandSign === handSignList.length) {
              _signList()
              currentHandSign = 0
              return
            }
            if (
              typeof handSignList[currentHandSign].src.src === "string" ||
              handSignList[currentHandSign].src.src instanceof String
            ) {
              document
                .getElementById("emojimage")
                .setAttribute("src", handSignList[currentHandSign].src.src)
              if (
                handSignList[currentHandSign].alt ===
                estimatedGestures.gestures[maxConfidence].name
              ) {
                currentHandSign++
              }
              setHandSign(estimatedGestures.gestures[maxConfidence].name)
            }
          } else if (screenState === "finished") {
            return
          }
        }
      }
      const ctx = refCanvas.current.getContext("2d")
      drawHand(hand, ctx)
    }
  }

  useEffect(() => {
    runHandpose()
  }, [])

  function turnOffCamera() {
    if (cameraState === "on") {
      setCamState("off")
    } else {
      setCamState("on")
    }
  }

  return (
    <ChakraProvider>
      <MetaInformation />
      <Box bgColor="#5784BA">
        <Container centerContent maxW="xl" height="100vh" pt="0" pb="0">
          <VStack spacing={4} align="center">
            <Box h="20px"></Box>
            <Heading
              as="h3"
              size="md"
              className="tutor-text"
              color="white"
              textAlign="center"
            ></Heading>
            <Box h="20px"></Box>
          </VStack>

          <Heading
            as="h1"
            size="lg"
            id="app-title"
            color="white"
            textAlign="center"
          >
            Loading the model..
          </Heading>

          <Box id="webcam-container">
            {cameraState === "on" ? (
              <Webcam id="webcam" ref={refWebcam} />
            ) : (
              <div id="webcam" background="black"></div>
            )}

            {handSign ? (
              <div
                style={{
                  position: "absolute",
                  marginLeft: "auto",
                  marginRight: "auto",
                  right: "calc(50% - 50px)",
                  bottom: 100,
                  textAlign: "-webkit-center",
                }}
              >
                <Text color="white" fontSize="sm" mb={1}>
                  detected gestures
                </Text>
                <img
                  alt="signImage"
                  src={
                    Signimage[handSign]?.src
                      ? Signimage[handSign].src
                      : "/loveyou_emoji.svg"
                  }
                  style={{
                    height: 30,
                  }}
                />
              </div>
            ) : (
              " "
            )}
          </Box>

          <canvas id="gesture-canvas" ref={refCanvas} style={{}} />

          <Box
            id="singmoji"
            style={{
              zIndex: 9,
              position: "fixed",
              top: "50px",
              right: "30px",
            }}
          ></Box>

          <Image h="150px" objectFit="cover" id="emojimage" />
        </Container>

        <Stack id="start-button" spacing={4} direction="row" align="center">
          <Button
            leftIcon={
              cameraState === "on" ? (
                <RiCameraFill size={20} />
              ) : (
                <RiCameraOffFill size={20} />
              )
            }
            onClick={turnOffCamera}
            colorScheme="orange"
          >
            Camera
          </Button>
          <Info />
        </Stack>
      </Box>
    </ChakraProvider>
  )
}
