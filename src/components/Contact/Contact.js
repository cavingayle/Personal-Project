import React, { Component } from 'react';
import axios from 'axios';
import './Contact.css';

export default class Contact extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            text: ''
        }
    }

   nameHandler = (e) => {
       this.setState({
           name: e
       })
   }

   emailHandler = (e) => {
       this.setState({
           email: e
       })
   }

   messageHandler = (e) => {
       this.setState({
           text: e
       })
   }

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, text } = this.state
        axios.post('/api/sendmail', {
            name,
            email,
            text,
        }).then( res => {
            console.log( 'mail', JSON.stringify( res.data ) )
        })
    }

    render() {
        
        return (
            <div className= 'contact-container'>
                <div>
                    <h1 className= 'contact-title'> Contact </h1>
                    <h2> Customer Service </h2>
                    <div class="contact">
                        <h3>Email Us!</h3>
                        <br/>
                        <form className="contact-form" >
                            <div className="form-field">
                            <label htmlFor="name">
                                <div className="label-content">Name:</div>
                                <input onChange={ event => this.nameHandler(event.target.value)} type="text" name="name" required />
                            </label>
                            </div>

                            <div className="form-field">
                            <label htmlFor="email">
                                <div className="label-content">Email:</div>
                                <input onChange={ event => this.emailHandler(event.target.value)} type="email" name="email" required />
                            </label>
                            </div>

                            <div className="form-field">
                            <label htmlFor="message">
                                <div className="label-content">Message:</div>
                                <textarea onChange={ event => this.messageHandler(event.target.value)} className="stretch" name="message" rows="5" required />
                            </label>
                            </div>

                            <button onClick={ (e) => this.handleSubmit(e) } type="submit">Send</button>

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