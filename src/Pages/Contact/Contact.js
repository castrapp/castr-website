import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track if the form is being submitted

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission
    setIsSubmitting(true);  // Disable the button to prevent multiple submissions

    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-textarea').value;

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          message: message,
        }),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        // Clear the form
        document.getElementById('contact-email').value = '';
        document.getElementById('contact-textarea').value = '';
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    }

    setIsSubmitting(false); // Re-enable the button after the request is done
  };

  return (
    <div id='contact'>
      <div id='contact-container'>
        <div id='contact-section-1' className='contact-section'>
          <div className='contact-section-header'>Contact Us</div>
          <div className='contact-section-text'>
            Whether you have a question, need assistance, or just want to provide feedback, feel free to contact us
            at support@castr.app, and we’ll get back to you as soon as possible.
          </div>
        </div>

        <form className='contact-section' onSubmit={handleSubmit}>
          <input type="hidden" name="to" value="support@castr.app" />
          <div className='contact-section-subheader'>Email</div>
          <input
            id='contact-email'
            type='email'
            placeholder='Email'
            name='from'
            required
            disabled={isSubmitting}  // Disable input while submitting
          />

          <div className='contact-section-subheader' style={{ marginTop: '32px' }}>
            How can we help?
          </div>
          <textarea
            id='contact-textarea'
            name='text'
            placeholder='Your questions and/or concerns'
            disabled={isSubmitting}  // Disable input while submitting
          ></textarea>

          <button
            id='contact-submit'
            type="submit"
            style={{ marginTop: '32px', marginLeft: 'auto' }}
            disabled={isSubmitting}  // Disable the submit button while submitting
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}  {/* Change button text during submission */}
          </button>
        </form>
      </div>
    </div>
  );
};

export { Contact };
