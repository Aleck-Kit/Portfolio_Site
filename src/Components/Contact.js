import emailjs from "emailjs-com";
import React from 'react';


const Contact = () => {
   
  
     function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('my_gmail', 'template_9tj355r', e.target, 'user_w6Yp0yW41Q3gIe9HsdaOe')
      .then((result) => {
          console.log(result.text);
          alert("Your message was sent successfully!");
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()

     }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">Kindly drop me an email and let's see about bringing your ideas to life</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form action="" method="post"  id="contactForm" name="contactForm" onSubmit= {sendEmail}>
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="name" placeholder="Please enter your full name..."  />
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="email" defaultValue="" size="35" id="contactEmail" name="email" placeholder="Please enter your email address..."/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" defaultValue="" size="35" id="contactSubject" name="subject"/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="message" placeholder="How can I be of assistance?"/> <br/>
                  </div>

                  <div>
                     <input className="submit" type="submit" value="Send" />
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>You can also reach me here:-</h4>
					   <p className="address">
						   Aleck Kitenge<br />
                     
						   - aleck.kit@gmail.com <br />
                     - aleck.kit@zoho.com <br />
					   </p>
				   </div>

            </aside>
      </div>
   </section>
    );
  }


export default Contact;
