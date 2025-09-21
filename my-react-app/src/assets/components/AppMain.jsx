import dcIcon from '../img/digital.png';
import merchandideIcon from '../img/merchandise.png';
import subscriptionIcon from '../img/subscriptions.png';
import locatorIcon from '../img/locator.png';
import visaIcon from '../img/visa.svg'

export default function AppMain() {
    const title = 'Benvenuto nel sito della DC Comics!'
    return (
        <main>
            <div className='bg-dark'>
                <div className='container text-white  mt-4 p-5'><h1 style={{ textAlign: 'center' }}>{title}</h1></div>
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
                            <div>
                                <a href="">DC MERCHANDISE</a>
                            </div>
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
                        <div className="col d-flex align-items-center">
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