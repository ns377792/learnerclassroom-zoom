import React, {useEffect, useState} from 'react';

import './App.css';
import useAxios from './utils/useAxios';

declare var ZoomMtg

ZoomMtg.setZoomJSLib('https://source.zoom.us/2.0.1/lib', '/av');

ZoomMtg.preLoadWasm();
ZoomMtg.prepareWebSDK();
// loads language files, also passes any error messages to the ui
ZoomMtg.i18n.load('en-US');
ZoomMtg.i18n.reload('en-US');

function Thirdyearzoom() {

  let [links, setLinks] = useState([])

  useEffect(()=> {
      getData()
  }, [])
    let api = useAxios()
    let getData = async() =>{
      let response = await api.get('/api/zoom/third-year/')
      if(response.status === 200){
          setLinks(response.data)
          // startMeeting(links.signature)
      }
    }



  // var signatureEndpoint = '/api/zoom/sign/'
  var apiKey = links.apikey
  var meetingNumber = links.id
  // var role = links.role
  var leaveUrl = 'http://localhost:3000'
  var userName = links.name
  var userEmail = links.email
  var passWord = links.pass
  var registrantToken = ''
  var signature = links.signature

  function startMeeting() {
    getData()
    document.getElementById('zmmtg-root').style.display = 'block'

    ZoomMtg.init({
      leaveUrl: leaveUrl,
      success: (success) => {
        console.log(success)

        ZoomMtg.join({
          signature: signature,
          meetingNumber: meetingNumber,
          userName: userName,
          apiKey: apiKey,
          userEmail: userEmail,
          passWord: passWord,
          tk: registrantToken,
          success: (success) => {
            console.log(success)
          },
          error: (error) => {
            console.log(error)
          }
        })

      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  return (
    <div className="App">
      <main>
        <h1>BBARL Classes Third Year</h1>
        <button onClick={startMeeting}>Join Meeting</button>
      </main>
    </div>
  );
}

export default Thirdyearzoom;