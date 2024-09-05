import './Contact.css';


const Contact = () => {

	return (
		<div id='contact'>
            
			<div id='contact-container'>

				<div id='contact-section-1' className='contact-section' style={{  backgroundColor: 'rgb(250, 250, 250)' }}>
					<div className='contact-section-header'>Contact Us</div>
					<div className='contact-section-text'>
					Whether you have a question, need assistance, or just want to provide feedback, feel free to contact us
					at support@castr.app, and we’ll get back to you as soon as possible.
					</div>
				</div>
				

				<form className='contact-section' action="https://forwardemail.net/form" method="POST">
					<input type="hidden" name="to" value="support@castr.app" />
					<div className='contact-section-subheader'>Email</div>
					<input 
						id='contact-email' 
						type='email' 
						placeholder='Email'
						name='from' 
						required 
					/>

					<div 
						className='contact-section-subheader'
						style={{ marginTop: '32px' }}
					>
						How can we help?
					</div>
					<textarea 
						id='contact-textarea'
							name='text'
						placeholder='You questions and/or concerns'
					>
					</textarea>

					<button 
						id='contact-submit'
						type="submit"
						style={{ marginTop: '32px', marginLeft: 'auto' }}
					>
						Submit
					</button>
				</form>
			</div>
        </div>
	)
}

export { Contact }
