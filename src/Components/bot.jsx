import axios from "axios";
import React, { useState } from "react";
import "../CSS/bot.css"

export default function Bot() {
  const [question, setquestion] = useState("");

  async function api() {
    console.log("loading...");
    const responce = await axios({
      url: " https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCaa7nX0L8gWFBOSS75JvJupDDTznlV55Y",
      method: "post",
      data: {
        contents: [{ parts: [{ text: question }] }],
      },
    });
    console.log(
      responce["data"]["candidates"][0]["content"]["parts"]["0"]["text"]
    );
  }
  return (
    <div>
      <h1>hekki</h1>
      <button onClick={api} className="btn btn-primary">
        call
      </button>


<body>
      <div class="wrapper">
        <div class="title">Chatbot</div>
        <div class="box">
            <div class="item">
                <div class="icon">
                    <i class="fa fa-user"></i>
                </div>
                <div class="msg">
                    <p>Hello everyone, How are you?</p>
                </div>
            </div>
            <br clear="both"/>
            <div class="item right">
                <div class="msg">
                    <p>Nice</p>
                </div>
            </div>
        </div>
        
        <div class="typing-area">
            <div class="input-field">
                <input type="text" placeholder="Type your message" required/>
                <button>Send</button>
            </div>
        </div>
    </div>
    </body>
    </div>
  );
}