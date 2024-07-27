import React from 'react'
import './Feedback.css'
import Swal from 'sweetalert2'


const Feedback = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "87f791ca-262f-4904-83f2-d2ebbd5fe15a");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success",
                text: "Message Sent Successfully!!!",
                icon: "success"
              });        }
      };
      return (


    <div>
      <section className="contact">
        <form onSubmit={onSubmit}>
            <h2>
                Feedback Form
            </h2>

            <div className="input-box">
                <label> Full Name</label>
                <input type="text" className='field' placeholder='Enter your full name' name='name' required/>
            </div>

            <div className="input-box">
                <label> Email Address</label>
                <input type="email" className='field' placeholder='Enter your email' name='email' required/>
            </div>

            <div className="input-box">
                <label> Feedback</label>
                <textarea name="feedback"   className='field mess' placeholder='Enter your feedback' required></textarea>
            </div>

            <button type='submit'>Send Message</button>

        </form>
      </section>
    </div>
  )
}

export default Feedback
