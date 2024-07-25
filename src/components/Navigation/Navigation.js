import './Navigation.css';
import { Logo, Divider, ChevronDown, DropdownMenuPointerArrow } from '../SVGs/SVG';
import { createContext, useContext, useEffect, useState } from 'react';



const Global = createContext();

const Navigation = () => {
	const [isHovered, setIsHovered] = useState(false);
	const [isHoveredOnDropdownLink, setIsHoveredOnDropdownLink] = useState(false);
	const [hoveredElement, setHoveredElement] = useState(null);
	const [left, setLeft] = useState(0);
	const [width, setWidth] = useState(70);
	const [dropdownWidth, setDropdownWidth] = useState(248);

	const setHovered = (elementId) => {
		const parentElement = document.querySelector('#navigationWrapper');
		const element = document.querySelector(`#${elementId}`);
		const parentElementValue = parentElement.getBoundingClientRect();
		const elementValue = element.getBoundingClientRect()

		setLeft(elementValue.left - parentElementValue.left);
		setWidth(elementValue.width);
		setHoveredElement(elementId);
	}

	// useEffect(() => {
	// 	console.log('left value is changing: ', left)
	// }, [left])
	// useEffect(() => {
	// 	console.log('width value is changing: ', width)
	// }, [width])
	useEffect(() => {
		console.log('isHovered is changing: ', isHovered)
	}, [isHovered])

	const values = {
		setDropdownWidth
	}

	return (
		<Global.Provider value={values}>
		<div id='header'>
			<div id='logoContainer'>
				<Logo />
				<Divider />
				<a>Castr</a>
			</div>

			<div 
				id='navigationWrapper'
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<div 
					id='dropdownLinksWrapper'
					onMouseEnter={() => setIsHoveredOnDropdownLink(true)}
					onMouseLeave={() => setIsHoveredOnDropdownLink(false)}
				>
					<a 
						id='docs' 
						className='navigationLink'
						onMouseEnter={() => {
							setHovered('docs');
						}}
					>
						Docs
						<ChevronDown />
					</a>
					<a 
						id='support' 
						className='navigationLink'
						onMouseEnter={() => {
							setHovered('support');
						}}
					>
						Support
						<ChevronDown />
					</a>


					{/* Dropdown Menu */}
					<div 
						id="dropdownMenuWrapper"
						className={isHoveredOnDropdownLink ? 'dropdownMenuWrapperHovered' : 'dropdownMenuWrapperUnhovered'}
						// className={'dropdownMenuHovered'}
						style={{width: dropdownWidth}}
					>
						<div id='dropdownMenu'>
							<DropdownMenuPointerArrow 
								style={{ left: left + ((width/2)-15) < 150 ? left + ((width/2)-15) : 60 }}
							/>
							{hoveredElement === 'docs' && 
							<DocsDropdown />
							}
							{hoveredElement === 'support' && 
							<SupportDropdown />
							}
						</div>
					</div>
				</div>
				
				<a 
					id='about' 
					className='navigationLink'
					onMouseEnter={() => {
						setHovered('about');
					}}
				>
					About
				</a>
				<a 
					id='github' 
					className='navigationLink' 
					href='https://github.com/harrysonhall/castr' 
					target="_blank"
					onMouseEnter={() => {
						setHovered('github');
					}}
				>
					GitHub
				</a>

				{isHovered &&
				<div id='navigationLinkHoverBackground' style={{ width: width, left: left }}></div>
				}

				{/* {isHoveredOnDropdownLink &&  */}
				
				{/* } */}
			</div>

			<a id='download' className='navigationLink'>
				Download
			</a>

			<HamburgerMenu />
		</div>
		</Global.Provider>
	)
}



const DocsDropdown = () => {

	const parentElement = document.querySelector('#docsDropdown');
	const { setDropdownWidth } = useContext(Global);

	const [left, setLeft] = useState(0)
	const [top, setTop] = useState(0)

	useEffect(() => {
		setDropdownWidth(500)
	}, [])
	
	const setHovered = (elementId) => {
		const element = document.querySelector(`#${elementId}`);
		const parentElementValue = parentElement.getBoundingClientRect();
		const elementValue = element.getBoundingClientRect()

		setLeft(elementValue.left - parentElementValue.left);
		setTop(elementValue.top - parentElementValue.top);
	}

	// 1. set left
	// 2. set top
	// 3. set width or actually widht should be like 248 and height like 64

	return (
		<div id="docsDropdown">
			<div 
				id="docsDropdownBackground"
				style={{ left: left, top: top }}
			></div>
			<div>
				Tutorial
			</div>
			<div 
				id='tutorial-one'
				className='dropdownMenuItem' 
				style={{gridArea: 'tutorial-one'}}
				onMouseEnter={() => setHovered('tutorial-one')}
			>
				<div className='dropdownMenuItemHeader'>1. Create a Scene</div>
				<div className='dropdownMenuItemSubtext'>Learn how to create a scene</div>
			</div>
			<div 
				id='tutorial-two'
				className='dropdownMenuItem' 
				style={{gridArea: 'tutorial-two'}}
				onMouseEnter={() => setHovered('tutorial-two')}
			>
				<div className='dropdownMenuItemHeader'>2. Add a Source</div>
				<div className='dropdownMenuItemSubtext'>Learn how to add a source</div>
			</div>
			<div 
				id='tutorial-three'
				className='dropdownMenuItem' 
				style={{gridArea: 'tutorial-three'}}
				onMouseEnter={() => setHovered('tutorial-three')}
			>
				<div className='dropdownMenuItemHeader'>3. Cast</div>
				<div className='dropdownMenuItemSubtext'>Learn how to cast to the virtual camera</div>
			</div>
		</div>
	)
}


const SupportDropdown = () => {

	const { setDropdownWidth } = useContext(Global);

	useEffect(() => {
		setDropdownWidth(250)
	}, [])
	
	return  (
		<div id='supportDropdown'>

		</div>
	)
}


const MenuItem = () => {

	return (
		<div class='menuItem'>

		</div>
	)
}


const HamburgerMenu = () => {

	return (
		<button id='hamburgerMenu'>
			<div className='hamburgerLine'></div>
			<div className='hamburgerLine'></div>
		</button>
	)
}

export { Navigation }