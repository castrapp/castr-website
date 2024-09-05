import './Footer.css'

const Footer = () => {
	return (
		<div id='footer'>
			<div id='footer-container'>
				<div className='footer-section'>
					<div className='footer-header'>Support</div>
					<div className='footer-link'>Reddit Community</div>
					<div className='footer-link'>Slack Group</div>
					<div className='footer-link'>Documentation</div>
				</div>
				<div className='footer-section'>
					<div className='footer-header'>Company</div>
					<div className='footer-link'>About</div>
					<div className='footer-link'>Contribute</div>
				</div>
				<div className='footer-section'>
					<div className='footer-header'>Legal</div>
					<div className='footer-link'>Privacy</div>
					<div className='footer-link'>Terms</div>
				</div>
				<div className='footer-section'>
					<div className='footer-header'>Download</div>
					<div className='footer-link'>MacOS Store</div>
					<div className='footer-link'>Other</div>
				</div>
			</div>	
		</div>

	);
}
export { Footer }
