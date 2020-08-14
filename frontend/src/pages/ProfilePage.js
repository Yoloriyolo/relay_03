import React, {useRef, useEffect, useState} from 'react';
import Webcam from "react-webcam";
// import styled from "styled-components";
import * as tmImage from '@teachablemachine/image';

export default function ProfilePage() {
    // const setRef = webcam => {
    //     this.webcam = webcam;
    // };

    let webcam;
    let MainContainer;
    const webcamRef = useRef(null);
    const [flag, setFlag] = useState(false)

    useEffect(()=> {
        const flip = true;
        webcam = new tmImage.Webcam(200, 200, flip);
        const init = async () => {
            await webcam.setup(); // request access to the webcam
            await webcam.play();
            window.requestAnimationFrame(loop);
            // webcamRef.current.appendChild();
            console.log(webcam);
            console.log(React.createElement("div", { className: "webcam" }, webcam.canvas),  webcam.canvas)
            MainContainer = React.createElement("div", { className: "webcam" }, webcam.canvas);
            setFlag(true)
        }
        init();
    }, [])

    async function loop() {
        webcam.update(); // update the webcam frame
        // await predict();
        window.requestAnimationFrame(loop);
    }
    
    // const capture = React.useCallback(
    //     () => {
    //     const imageSrc = webcamRef.current.getScreenshot();
    //     },
    //     [webcamRef]
    // );

    // const videoConstraints = {
    //     width: 1280,
    //     height: 720,
    //     facingMode: "user"
    // };

    return (
      <div>
          {/* <div className="webcam" ref={webcamRef}> */}
          {flag? <MainContainer /> : <>"hi"</>}
          {/* <button onClick={init}></button> */}
      </div>
    )
}