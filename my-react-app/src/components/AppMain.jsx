import { useState } from 'react';
import dcIcon from '../assets/img/digital.png';
import merchandideIcon from '../assets/img/merchandise.png';
import subscriptionIcon from '../assets/img/subscriptions.png';
import locatorIcon from '../assets/img/locator.png';
import visaIcon from '../assets/img/visa.svg'
import jumboIcon from '../assets/img/jumbotron.jpg'
import AppFumetti from './AppFumetti'

export default function AppMain() {
    //const [showImage, setShowImage] = useState(false);
    const title = 'Benvenuto nel sito della DC Comics!'
    return (
        <main>
            <div className='bg-jumbotron'></div>
            <div className='bg-dark'>
                <div className='container text-white  mt-4 p-5'><h1 style={{ textAlign: 'center' }}>{title}</h1></div>
                <div className='container '>
                    <AppFumetti imgUrl="https://imgs.search.brave.com/aUNyvZBXUulb963JH7KnQm9AMr8bcBoLsiHREOqayIU/rs:fit:612:612:1/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvOWZm/ZWYzMDMtMGZhYy00/OGRkLTg3ODctYzUy/NTk0MDk2ODAwXzEu/MTc1ZDk1Mjg2NzY0/OGEwOTczMTY2NGMy/MTE1NjNlYWIuanBl/Zz9vZG5XaWR0aD02/MTImb2RuSGVpZ2h0/PTYxMiZvZG5CZz1m/ZmZmZmY" title="ACTION COMICS" />
                    <AppFumetti imgUrl="https://imgs.search.brave.com/OU2E3_3vA7flyv-SJ3TcFW1d99KDlp5ZfmW9ylLLFDo/rs:fit:1012:1200:1/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3LnN1/cGVycG91dm9pci5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDcvQW1lcmlj/YW4tVmFtcGlyZS0x/OTc2LTAxLWNvdi1B/bGJ1cXVlcnF1ZS0y/MDIwLmpwZz9yZXNp/emU9MTAxMiUyQzE1/NTYmc3NsPTE" title="AMERICAN VAMPIRE 1976" />
                    <AppFumetti imgUrl="https://imgs.search.brave.com/gAZQuZyt6WjcUWF6aXCIBaiJqtOJAK-X4nxS9Vbvwno/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4y/LnBlbmd1aW4uY29t/LmF1L2NvdmVycy9v/cmlnaW5hbC85Nzgx/NDAxMjc1NDI2Lmpw/Zw" title="AQUAMAN" />
                </div>
            </div>
            <div className='main-bg'>
                <div className="container p-5">
                    <div className="row">
                        <div className="col d-flex align-items-center">
                            <img src={dcIcon} alt="" className='main-icon' />
                            <div>
                                <a href="">DIGITAL COMICS</a>
                            </div>
                        </div>
                        <div className="col d-flex align-items-center">
                            <img src={merchandideIcon} alt="" className='main-icon' />

                            {/* BONUS DA LAVORARE */}
                            {/*   <div>
                                <a href="#" onClick={e => { e.preventDefault(); setShowImage(true) }}>DC MERCHANDISE</a>
                                {showImage && <img src={jumboIcon} alt="Merchandise" className='jumbo-popup' />}
                            </div> */}
                        </div>
                        <div className="col d-flex align-items-center">
                            <img src={subscriptionIcon} alt="" className='main-icon' />
                            <div>
                                <a href="">SUBSCRIPTION</a>
                            </div>
                        </div>
                        <div className="col d-flex align-items-center">
                            <img src={locatorIcon} alt="" className='main-icon' />
                            <div>
                                <a href="">COMIC SHOP LOCATOR</a>
                            </div>
                        </div>
                        <div className="col d-flex align-items-center me-5">
                            <img src={visaIcon} alt="" className='main-icon' />
                            <div>
                                <a href="">DC POWER VISA</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )

}