import { useEffect } from 'react';
import './Navigation.css';

const Navigation = () => {

   const toggleMenu = () => {
        const root = document.querySelector('#root')
        root.hasAttribute("mobile-menu-opened") ? root.removeAttribute("mobile-menu-opened") : root.setAttribute("mobile-menu-opened", "")
   }

   const toggleDropdown = (id) => {
        const element = document.querySelector(`#mobile-menu #${id}`)
        element.hasAttribute("opened") ? element.removeAttribute("opened") : element.setAttribute("opened", "")
   }

    const handleResize = (e) => {
        document.querySelector('#root').removeAttribute('mobile-menu-opened')
    }

    const handleFocusIn = (event) => {
        console.log('Element focused:', event.target);

        if(!event.target.hasAttribute('data-navigation')) return;

        // Show the hover backdrop at navigation links location
        const hoverBackdrop = document.querySelector('#hover-backdrop')
        const navigation = document.querySelector(`#navigation`).getBoundingClientRect()
        const focusedLinkBounds = document.activeElement.getBoundingClientRect()

        hoverBackdrop.style.left = `${focusedLinkBounds.left - navigation.left}px`
        hoverBackdrop.style.width = `${focusedLinkBounds.width}px`
        hoverBackdrop.style.opacity = 1


        // if docs or support link is focused, show dropdown
        const dropdown = document.querySelector('#dropdown-menu')
        const docsDropdown = document.querySelector(`#dropdown-docs`)
        const supportDropdown = document.querySelector(`#dropdown-support`)

        const about = document.querySelector('#about').getBoundingClientRect()
        const docsBounds = docsDropdown.getBoundingClientRect()
        const supportBounds = supportDropdown.getBoundingClientRect()

        if(event.target.id == 'docs' || event.target.id == 'support') {
            dropdown.style.top = `${(about.top + about.height) - 2}px`
            dropdown.style.left = `${about.left - navigation.left + (about.width * 0.5)}px`
            dropdown.style.opacity = 1
            dropdown.style.pointerEvents = 'unset'
        } 

        if(event.target.id == "docs") {
            console.log('its equal to the docs ')
            dropdown.style.width = `${docsBounds.width}px`
            dropdown.style.height = `${docsBounds.height}px`

            docsDropdown.style.right = `0px`
            supportDropdown.style.right = `0px`
        }
        else if(event.target.id == "support") {
            console.log('adjusting the height: ')
            console.log('its equal to support: ', `-${supportBounds.width}px`)

            dropdown.style.width = `${supportBounds.width}px`
            dropdown.style.height = `${supportBounds.height}px`

            docsDropdown.style.right = `${docsBounds.width}px`
            supportDropdown.style.right = `${docsBounds.width}px`
        }
        

    };

    const handleFocusOut = (event) => {
        console.log('Element lost focus:', event.target);

        // Blur the hover backdrop
        const hoverBackdrop = document.querySelector('#hover-backdrop')
        hoverBackdrop.style.opacity = 0

        // if docs or support link lost focus, hide dropdown
        if(event.target.id == 'docs' || event.target.id == 'support' ) {
            const dropdown = document.querySelector('#dropdown-menu')
            dropdown.style.opacity = 0
            dropdown.style.pointerEvents = 'none'
        }
        
    };


    const handleNavigationPointerMove = (e) => {
        const elements = document.elementsFromPoint(e.clientX, e.clientY)
        const isHoveredOnDropdown = elements.some(element => element.id == 'dropdown-menu')

        if(e.nativeEvent.target.hasAttribute("data-navigation")) {
            e.nativeEvent.target?.focus()
        } 
        else if(isHoveredOnDropdown) {
            return 
        }
        else {
            document.activeElement?.blur()
        }
    }


    
    useEffect(() => {

        window.addEventListener('resize', handleResize)
        window.addEventListener('focusin', handleFocusIn);
        window.addEventListener('focusout', handleFocusOut);

        return () => {
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('focusin', handleFocusIn)
            window.removeEventListener('focusout', handleFocusOut)
        }

    }, [])




    return (
        <div 
            id='navigation' 
            onPointerMove={handleNavigationPointerMove}
            onPointerLeave={() =>  document.activeElement.blur()}
        >
            <div id="logo">
                <Logo />
                Castr
            </div>

            <a id="about" data-navigation tabIndex={0} target="_blank">About</a>
            <a id="docs" data-navigation tabIndex={0} target="_blank"> Documentation  <Chevron size={11}/> </a>
            <a id="support" data-navigation tabIndex={0} target="_blank">Support  <Chevron size={11}/> </a>
            <a id="github" data-navigation target="_blank" href="https://github.com/castrapp">GitHub</a>
            <a id="download"data-navigation tabIndex={0} target="_blank">Download</a>

            <div id="hover-backdrop" />

            <div id="dropdown-menu">
                <div id="dropdown-docs">
                    <div onPointerDown={e => e.preventDefault()}>
                        {/* <div className="dropdown-card-img"></div> */}
                        <div className="dropdown-card-header">Example 1</div>
                        <div className="dropdown-card-description">Document 1</div>
                    </div>
                    <div onPointerDown={e => e.preventDefault()}>
                        {/* <div className="dropdown-card-img"></div> */}
                        <div className="dropdown-card-header">Example 2</div>
                        <div className="dropdown-card-description">Document 2</div>
                    </div>
                    <div onPointerDown={e => e.preventDefault()}>
                        {/* <div className="dropdown-card-img"></div> */}
                        <div className="dropdown-card-header">Example 3</div>
                        <div className="dropdown-card-description">Document 3</div>
                    </div>
                </div>
                <div id="dropdown-support">
                    <div onPointerDown={e => e.preventDefault()}>
                        {/* <div className="dropdown-card-img">
                            <DiscordLogo />
                        </div> */}
                        <div className="dropdown-card-header">Community Discord</div>
                        <div className="dropdown-card-description">Join the Community Discord</div>
                    </div>
                    <div onPointerDown={e => e.preventDefault()}>
                        {/* <div className="dropdown-card-img">
                            <ContactIcon />
                        </div> */}
                        <div className="dropdown-card-header">Contact Us</div>
                        <div className="dropdown-card-description">For any questions or comments</div>
                    </div>
                </div>
            </div>

            <button id="hamburger-menu" onClick={() => toggleMenu()}>
                <div />
                <div />
                <div />
            </button>

            <div id="mobile-menu">
                <a id="about" className='link'>About</a>
                <div id="docs" onClick={() => toggleDropdown('docs')}>
                    <span className='link'>
                        Documentation
                        <Chevron />
                    </span>
                    <div className='dropdown'>
                        <a className='link'>Link 1</a>
                    </div>
                </div>
                <div id="support" onClick={() => toggleDropdown('support')}>
                    <span className='link'>
                        Support
                        <Chevron />
                    </span>
                    <div className='dropdown'>
                        <a className='link'>Contact</a>
                    </div>
                </div>
                <a id="github" className='link'>GitHub</a>
                <a id="download" className='link'>Download</a>
            </div>

        </div>
    );
}

export { Navigation };




const navigateTo = (path) => {
    const baseUrl = window.location.origin;
    window.location.href = `${baseUrl}${path}`;
}





const DiscordLogo = ({}) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 127.14 96.36"
    >
        <g>
            <g>
            <g>
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83A72.37,72.37,0,0,0,45.64,0A105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36A77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19A77,77,0,0,0,94.31,96.36A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
            </g>
            </g>
        </g>
    </svg>
)




const ContactIcon = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 26.162 26.161"
    >
        <path  d="M26.161,13.081A13.178,13.178,0,0,1,13.081,26.161,13.186,13.186,0,0,1,0,13.081,13.166,13.166,0,0,1,13.068,0,13.18,13.18,0,0,1,26.161,13.081ZM5.194,20.916a11.069,11.069,0,0,0,15.761,0c-1.4-2.206-4.437-3.462-7.887-3.462C9.592,17.454,6.579,18.736,5.194,20.916ZM8.669,10.439a4.573,4.573,0,0,0,4.4,4.835,4.534,4.534,0,0,0,4.4-4.835,4.579,4.579,0,0,0-4.4-4.745A4.579,4.579,0,0,0,8.669,10.439Z" />
     </svg> 
)




const Logo = () => {

    return (
        <svg 
            id='logo'
            xmlns="http://www.w3.org/2000/svg" 
            width="30" 
            height="30" 
            viewBox="0 0 31.876 31.876"
            onClick={() => navigateTo('/')}
        >
            {/* <path d="M7.324,0H24.552a7.324,7.324,0,0,1,7.324,7.324V24.552a7.324,7.324,0,0,1-7.324,7.324H7.324A7.324,7.324,0,0,1,0,24.552V7.324A7.324,7.324,0,0,1,7.324,0Z"/> */}
            <g transform="translate(7.266 6.672)">
                <path d="M16.374,14.462c.687.4.958.712.958,1.17s-.271.78-.958,1.179L9.743,20.66a2.1,2.1,0,0,1-1.077.348,2.08,2.08,0,0,1-1.077-.348L.95,16.811C.263,16.412,0,16.1,0,15.632s.263-.772.95-1.17l1.344-.779,1.394.81L1.832,15.556a.091.091,0,0,0-.059.076.092.092,0,0,0,.059.085l6.453,3.7a.821.821,0,0,0,.382.119.765.765,0,0,0,.373-.119l6.453-3.7a.089.089,0,0,0,.068-.085c0-.034-.025-.059-.068-.076l-1.854-1.062,1.394-.811Z" transform="translate(0 -2.184)" fill="#fff"/>
                <path d="M16.374,9.845c.687.407.958.712.958,1.179s-.271.772-.958,1.17L9.743,16.052a2.1,2.1,0,0,1-1.077.348,2.08,2.08,0,0,1-1.077-.348L.95,12.194c-.687-.4-.95-.7-.95-1.17s.263-.772.95-1.179l1.572-.912,1.4.811L1.832,10.939a.092.092,0,0,0-.059.085c0,.042.025.059.059.085L8.284,14.8a.821.821,0,0,0,.382.119.765.765,0,0,0,.373-.119l6.453-3.688c.042-.025.068-.042.068-.085a.089.089,0,0,0-.068-.085L13.4,9.746l1.4-.812ZM5.336,8.936h0L4.244,8.311Zm6.652,0h0l.655-.375Z" transform="translate(0 -1.476)" fill="#fff"/>
                <path d="M8.666,11.183a2.1,2.1,0,0,0,1.077-.348l6.631-3.85c.687-.4.958-.712.958-1.179s-.271-.772-.958-1.17L9.743.787A2.1,2.1,0,0,0,8.666.439,2.079,2.079,0,0,0,7.589.787L.95,4.637c-.687.4-.95.712-.95,1.17s.263.78.95,1.179l6.639,3.85A2.08,2.08,0,0,0,8.666,11.183Zm0-1.475a.821.821,0,0,1-.382-.119l-6.453-3.7a.092.092,0,0,1-.059-.085.091.091,0,0,1,.059-.076l6.453-3.7a.821.821,0,0,1,.382-.119.765.765,0,0,1,.373.119l6.453,3.7c.042.017.068.042.068.076a.089.089,0,0,1-.068.085l-6.453,3.7A.765.765,0,0,1,8.666,9.707Z" transform="translate(0 -0.439)" fill="#fff"/>
            </g>
        </svg>
    )
}




const Chevron = ({ size = 16 }) => {
    return (
        <svg
            height={size}
            strokeLinejoin="round" 
            viewBox="0 0 16 16" 
            width={size}
            pointerEvents={'none'}
        >
            <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M14.0607 5.49999L13.5303 6.03032L8.7071 10.8535C8.31658 11.2441 7.68341 11.2441 7.29289 10.8535L2.46966 6.03032L1.93933 5.49999L2.99999 4.43933L3.53032 4.96966L7.99999 9.43933L12.4697 4.96966L13 4.43933L14.0607 5.49999Z" 
                fill="currentColor"
            >
            </path>
        </svg>
    )
}