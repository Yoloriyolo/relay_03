import React, {useRef, useEffect, useState} from 'react';
import * as tmImage from '@teachablemachine/image';
import Iframe from 'react-iframe';

export default function ProfilePage() {
    return (
      <div style={{width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor:"#E8EAED"}} >
          <Iframe url="/profile.html"
            width="100%"
            height="800px"
            id="myId"
            className="myClassname"
            display="initial"
            frameBorder="0"
            />
      </div>
    )
}