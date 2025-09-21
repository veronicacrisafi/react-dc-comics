import facebookIcon from '../img/footer-facebook.png';
import twitterIcon from '../img/footer-twitter.png';
import youtubeIcon from '../img/footer-youtube.png'
import pinterestIcon from '../img/footer-pinterest.png'
import periscopeIcon from '../img/footer-periscope.png'

export default function AppFooter() {
    return (
        <footer>

            <div className="dc-image">
                <div className="container d-flex align-items-start p-5">

                    <div className="row">
                        <div className="col pt-5 p-3">
                            <h6 className="text-light">DC COMICS</h6>
                            <ul>
                                <li>
                                    <a href="">Characters</a>
                                </li>
                                <li><a href="">Comics</a></li>
                                <li><a href="">Movies</a></li>
                                <li><a href="">TV</a></li>
                                <li><a href="">Games</a></li>
                                <li><a href="">Videos</a></li>
                                <li><a href="">News</a></li>
                                <h6 className="text-light pt-4">SHOP</h6>
                                <ul>
                                    <li><a href="">Shop DC</a></li>
                                    <li><a href="">Shop DC Collectibles</a></li>

                                </ul>

                            </ul>
                        </div>

                        <div className="col pt-5 p-3">
                            <h6 className="text-light">DC</h6>
                            <ul>
                                <li><a href="">Terms Of Use</a></li>
                                <li><a href="">Privacy policy(New)</a></li>
                                <li><a href="">Ad Choises</a></li>
                                <li><a href="">Advertising</a></li>
                                <li><a href="">Jobs</a></li>
                                <li><a href="">Subscription</a></li>
                                <li><a href="">Talent Workshops</a></li>
                                <li><a href="">CPSC Certificates</a></li>
                                <li><a href="">Ratings</a></li>
                                <li><a href="">Shop Help</a></li>
                                <li><a href="">Contact Us</a></li>

                            </ul>
                        </div>
                        <div className="col pt-5 p-3">
                            <h6 className="text-light">SITES</h6>
                            <ul>
                                <li><a href="">DC</a></li>
                                <li><a href="">MAD Magazine</a></li>
                                <li><a href="">DC Kids</a></li>
                                <li><a href="">DC Universe</a></li>
                                <li><a href="">DC Power Visa</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-dark p-4 ">
                <div className="container">
                    <div className="row">
                        <div className="col ms-5">
                            <button className='btn btn-outline-primary rounded-0 border-2 '>
                                <a href="" className='fs-6 text-light'>SIGN-UP NOW!</a>
                            </button>
                        </div>
                        <div className="col d-flex align-items-center ms-5">
                            <h4 className="fs-6 text-primary pt-2 ms-5">FOLLOW US</h4>
                            <a href="">
                                <img src={facebookIcon} alt="" className='footer-icon ms-5' />
                            </a>
                            <a href="">
                                <img src={twitterIcon} alt="" className='footer-icon ms-3' />
                            </a>
                            <a href="">
                                <img src={youtubeIcon} alt="" className='footer-icon ms-3' />
                            </a>
                            <a href="">
                                <img src={pinterestIcon} alt="" className='footer-icon ms-3' />
                            </a>
                            <a href="">
                                <img src={periscopeIcon} alt="" className='footer-icon ms-3' />
                            </a>

                        </div>
                    </div>
                </div>
            </div>


        </footer >
    )
}