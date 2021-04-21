import React, { useState } from "react";
import emailjs from "emailjs-com";

import { init } from "emailjs-com";
init("user_d76y5UNtsWcmzoRNMEJkv");

const EmailServices = () => {
  console.log(process.env);
  const [feedback, setFeedback] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitSuccessful, setFormSubmitSuccessful] = useState(false);

  const senderEmail = "sender@example.com";

  const handleChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleCancel = () => {
    setFeedback("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const receiverEmail = process.env.REACT_APP_EMAILJS_RECEIVER;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATEID;
    const user = process.env.REACT_APP_EMAILJS_USERID;

    sendfeedback({
      templateId,
      senderEmail,
      receiverEmail,
      feedback,
      user,
    });

    setFormSubmitted(true);
  };

  const sendfeedback = ({
    templateId,
    senderEmail,
    receiverEmail,
    feedback,
    user,
  }) => {
    emailjs
      .send(
        "default_service",
        templateId,
        {
          senderEmail,
          receiverEmail,
          feedback,
        },
        user
      )
      .then((res) => {
        if (res.status === 200) {
          setFormSubmitSuccessful(true);
        }
      })
      // Handle errors here however you like
      .catch((err) => console.error("Failed to send feedback. Error: ", err));
  };

  if (formSubmitted && formSubmitSuccessful) {
    return <h2>Thank You! Your submission was sent.</h2>;
  }
  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <h1>Your Feedback</h1>
      <textarea
        className="text-input"
        id="feedback-entry"
        name="feedback-entry"
        onChange={handleChange}
        placeholder="Enter your feedback here"
        required
        value={feedback}
      />

      <div className="btn-group">
        <button className="btn btn--cancel" onClick={handleCancel}>
          Cancel
        </button>
        <input type="submit" value="Submit" className="btn btn--submit" />
      </div>
    </form>
  );
};

// pallavi75@sandbox2a1c29981e4141e4af17d83d40e64c3c.mailgun.org

//pallavi75@sandbox2a1c29981e4141e4af17d83d40e64c3c.mailgun.org
export default EmailServices;
