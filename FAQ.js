import React from "react";

const faqs = [
  {
    q: "How do I sign up for MODENZO?",
    a: "Click the Sign Up button on the homepage and enter your email to get started.",
  },
  {
    q: "What brands do you feature?",
    a: "We feature top global brands in fashion, tech, beauty, streetwear, and more.",
  },
  {
    q: "How do I get notified about new releases?",
    a: "Sign up and enable notifications in your dashboard to receive updates.",
  },
  {
    q: "Can I shop international limited editions?",
    a: "Yes, our filters help you find region-exclusive drops and limited items.",
  },
];

function FAQ() {
  return (
    <div style={{padding:"2rem"}}>
      <h2>Frequently Asked Questions</h2>
      <ul>
        {faqs.map((f, idx) => (
          <li key={idx} style={{marginBottom:"1.5rem"}}>
            <strong>Q:</strong> {f.q}<br/>
            <strong>A:</strong> {f.a}
          </li>
        ))}
      </ul>
      <p style={{marginTop:"2rem", color:"#6a38ab"}}>
        Didn’t find your answer? Contact us for more help.
      </p>
    </div>
  );
}

export default FAQ;