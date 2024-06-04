import axios from "axios";
import React, { useState } from "react";
import "../CSS/bot.css";

export default function Bot() {
  const [question, setquestion] = useState("");
  const [ans, setans] = useState("");

  async function api(e) {
    e.preventDefault();
    console.log({ question });

    const responce = await axios({
      url: "  https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCaa7nX0L8gWFBOSS75JvJupDDTznlV55Y",
      method: "post",
      data: {
        contents: [{ parts: [{ text: question }] }],
      },
    });
    setans(responce["data"]["candidates"][0]["content"]["parts"]["0"]["text"]);
  }

  return (
    <div>
      <body>
        <div class="wrapper">
          <div class="title">Chatbot</div>
          <div class="box">
            <div class="item">
              {/* {ans} */}
              <textarea value={ans} rows={10} cols={95}></textarea>
              {/* <div class="icon">
                <i class="fa fa-user"></i>
              </div> */}
              {/* <div class="msg">
                    <p>Hello everyone, How are you?</p>
                </div> */}
            </div>
            <br clear="both" />
            <div class="item right">
              {/* <div class="msg">
                <p>Nice</p>
              </div> */}
            </div>
          </div>

          <div class="typing-area">
            <form onSubmit={api}>
              <div class="input-field">
                <input
                  onChange={(e) => setquestion(e.target.value)}
                  type="text"
                  placeholder="Type your message"
                  required
                />
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </body>
    </div>
  );
}
