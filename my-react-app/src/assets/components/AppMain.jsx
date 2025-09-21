import dcIcon from '../img/digital.png';
import merchandideIcon from '../img/merchandise.png';
import subscriptionIcon from '../img/subscriptions.png';
import locatorIcon from '../img/locator.png';
import visaIcon from '../img/visa.svg'
export default function AppMain() {
    const title = 'Benvenuto nel sito della DC Comics!'
    return (
        <main>

            <div className="container mt-5">
                <div><h1 style={{ textAlign: 'start' }}>{title}</h1></div>
                <div className="row">
                    <div className="col">
                        <img src={dcIcon} alt="" />
                        <div>
                            <a href="">DIGITAL COMICS</a>
                        </div>
                    </div>
                    <div className="col">
                        <img src={merchandideIcon} alt="" />
                        <div>
                            <a href="">DC MERCHANDISE</a>
                        </div>
                    </div>
                    <div className="col">
                        <img src={subscriptionIcon} alt="" />
                        <div>
                            <a href="">SUBSCRIPTION</a>
                        </div>
                    </div>
                    <div className="col">
                        <img src={locatorIcon} alt="" />
                        <div>
                            <a href="">COMIC SHOP LOCATOR</a>
                        </div>
                    </div>
                    <div className="col">
                        <img src={visaIcon} alt="" />
                        <div>
                            <a href="">DC POWER VISA</a>
                        </div>
                    </div>


                </div>

            </div>

        </main>
    )

}