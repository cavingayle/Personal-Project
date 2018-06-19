import React, { Component } from 'react';

export default class Contact extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    handleSubmit = (e) => {

    }

    render() {
        return (
            <div>
                <div>
                    <h1> Contact </h1>
                    <h2> Customer Service </h2>
                    <div class="contact">
                        <h3>Email Us</h3>
                        <form className="contact-form" method="POST" action="/api/sendMail">
    <div className="form-field">
      <label htmlFor="name">
        <div className="label-content">Name:</div>
        <input type="text" name="name" required />
      </label>
    </div>

    <div className="form-field">
      <label htmlFor="email">
        <div className="label-content">Email:</div>
        <input type="email" name="email" required />
      </label>
    </div>

    <div className="form-field">
      <label htmlFor="message">
        <div className="label-content">Message:</div>
        <textarea className="stretch" name="message" rows="5" required />
      </label>
    </div>

    <button type="submit">Send</button>

    <div>
      { window.location.hash === '#success' &&
        <div id="success">
          <p>Your message has been sent!</p>
        </div>
      }
      { window.location.hash === '#error' &&
        <div id="error">
          <p>An error occured while submitting the form.</p>
        </div>
      }
    </div>
  </form>
                    </div>
                </div>
            </div>
           
            

        );
    }
}