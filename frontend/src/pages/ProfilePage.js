import React, {useRef, useEffect, useState} from 'react';
import * as tmImage from '@teachablemachine/image';
import Iframe from 'react-iframe';

export default function ProfilePage() {
    return (
    //   <div style={{width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor:"#E8EAED"}} >
          <Iframe url="https://csy1204.github.io/animal-face/"
            width="100%"
            height="800px"
            id="myId"
            className="myClassname"
            display="initial"
            frameBorder="0"
            />
    //   </div>
    )
}