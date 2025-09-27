import { useState } from 'react';
import dcIcon from '../assets/img/digital.png';
import merchandideIcon from '../assets/img/merchandise.png';
import subscriptionIcon from '../assets/img/subscriptions.png';
import locatorIcon from '../assets/img/locator.png';
import visaIcon from '../assets/img/visa.svg'
import AppFumetti from './AppFumetti'
import fumettiData from '../data/fumettiData'

export default function AppMain() {
    const [showModal, setShowModal] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const title = 'Benvenuto nel sito della DC Comics!'
    return (
        <main>
            <div className='bg-jumbotron'></div>
            <div className='bg-dark'>
                <div className='container text-white p-5'><h1 style={{ textAlign: 'center' }}>{title}</h1></div>
                <div className='container'>
                    <div className="row">
                        <div className="row">
                            {fumettiData.map((fumetto, idFumetto) => (
                                <div className="col-2" key={fumetto.idFumetto}>
                                    <AppFumetti
                                        thumb={fumetto.thumb}
                                        series={fumetto.series}
                                    >
                                        <p className='text-light text-start mb-5'>{fumetto.price}</p>
                                    </AppFumetti>
                                </div>
                            ))}


                            {/*  <AppFumetti imgURL="https://imgs.search.brave.com/aUNyvZBXUulb963JH7KnQm9AMr8bcBoLsiHREOqayIU/rs:fit:612:612:1/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvOWZm/ZWYzMDMtMGZhYy00/OGRkLTg3ODctYzUy/NTk0MDk2ODAwXzEu/MTc1ZDk1Mjg2NzY0/OGEwOTczMTY2NGMy/MTE1NjNlYWIuanBl/Zz9vZG5XaWR0aD02/MTImb2RuSGVpZ2h0/PTYxMiZvZG5CZz1m/ZmZmZmY" title="ACTION COMICS">
                                <p className='text-light text-start mb-5'>$19.99</p>
                            </AppFumetti> */}
                        </div>
                        {/* <div className="col-2">
                            <AppFumetti imgURL="https://imgs.search.brave.com/OU2E3_3vA7flyv-SJ3TcFW1d99KDlp5ZfmW9ylLLFDo/rs:fit:1012:1200:1/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3LnN1/cGVycG91dm9pci5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDcvQW1lcmlj/YW4tVmFtcGlyZS0x/OTc2LTAxLWNvdi1B/bGJ1cXVlcnF1ZS0y/MDIwLmpwZz9yZXNp/emU9MTAxMiUyQzE1/NTYmc3NsPTE" title="AMERICAN VAMPIRE 1976">
                                <p className='text-light text-start mb-5'>$3.99</p>
                            </AppFumetti>
                        </div>
                        <div className="col-2">
                            <AppFumetti imgURL="https://imgs.search.brave.com/gAZQuZyt6WjcUWF6aXCIBaiJqtOJAK-X4nxS9Vbvwno/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4y/LnBlbmd1aW4uY29t/LmF1L2NvdmVycy9v/cmlnaW5hbC85Nzgx/NDAxMjc1NDI2Lmpw/Zw" title="AQUAMAN">
                                <p className='text-light text-start mb-5'>$16.99</p>
                            </AppFumetti>
                        </div>
                        <div className="col-2">
                            <AppFumetti imgURL="https://imgs.search.brave.com/YET9wY29Aa29TyHqlbieS9qsz3HWyNYQx-WkRqdBRX4/rs:fit:640:984:1/g:ce/aHR0cDovL2dldHlv/dXJjb21pY29uLmNv/LnVrL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE2LzA4L2JhdGdp/cmwtcmViaXJ0aC0x/LWNvdmVyLmpwZw" title="BATGIRL">
                                <p className='text-light text-start mb-5'>$2.99</p>
                            </AppFumetti>
                        </div>
                        <div className="col-2">
                            <AppFumetti imgURL="https://imgs.search.brave.com/jgxYlrx442aozemzjqdmCsd9DkIkRollJp1T8sG8TfE/rs:fit:720:1106:1/g:ce/aHR0cHM6Ly9veXN0/ZXIuaWduaW1ncy5j/b20vd29yZHByZXNz/L3N0Zy5pZ24uY29t/LzIwMTgvMTAvU1RM/MDk3MDk1LTcyMHgx/MTA2LmpwZw" title="BATMAN">
                                <p className='text-light text-start mb-5'>$3.99</p>
                            </AppFumetti>
                        </div>
                        <div className="col-2">
                            <AppFumetti imgURL="https://imgs.search.brave.com/jgxYlrx442aozemzjqdmCsd9DkIkRollJp1T8sG8TfE/rs:fit:720:1106:1/g:ce/aHR0cHM6Ly9veXN0/ZXIuaWduaW1ncy5j/b20vd29yZHByZXNz/L3N0Zy5pZ24uY29t/LzIwMTgvMTAvU1RM/MDk3MDk1LTcyMHgx/MTA2LmpwZw" title="BATMAN BEYOND">
                                <p className='text-light text-start mb-5'>$2.99</p>
                            </AppFumetti>
                        </div>
                        <div className="col-2">
                            <AppFumetti imgURL="https://imgs.search.brave.com/cSaB3m-tghN3_Cllp9IOlUPEPsyShCnl8gijRyPFdrg/rs:fit:791:1200:1/g:ce/aHR0cHM6Ly8xNDk0/NTUxNTIudjIucHJl/c3NhYmxlY2RuLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/OS8wOC9CTVNNX0N2/MV9CQVQuanBn" title="BATMAN/SUPERMAN">
                                <p className='text-light text-start mb-5'>$3.99</p>
                            </AppFumetti>
                        </div>
                        <div className="col-2">
                            <AppFumetti imgURL="https://imgs.search.brave.com/jfaQd--WUx7RG8MiQ-VyCOqLUJW19ojBnjkNOG81rL4/rs:fit:666:1024:1/g:ce/aHR0cHM6Ly90aGVn/d3cuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIwLzA5L0Jh/dG1hbi1TdXBlcm1h/bi1Bbm51YWwtQ3Yx/LTY2NngxMDI0Lmpw/Zw" title="BATMAN/SUPERMAN ANNUAL">
                                <p className='text-light text-start mb-5'>$4.99</p>
                            </AppFumetti>
                        </div>
                        <div className="col-2">
                            <AppFumetti imgURL="https://imgs.search.brave.com/kSLCPBIeE9s218LRC4cIyrHOYmxrSS2Wt7LvNNfED2I/rs:fit:455:700:1/g:ce/aHR0cHM6Ly9jb21p/Y2Jvb2tyZWFsbS5j/b20vY292ZXItc2Nh/bi81ZmFmMTFjYTk1/NGQ1MGVjZDA1ZmU3/M2U1NjBiNWQyOC94/bC8tLWlzc3VlLTEu/anBn" title="BATMAN: THE JOKER WAR ZONE">
                                <p className='text-light text-start mb-5'>$5.99</p>
                            </AppFumetti>
                        </div>
                        <div className="col-2">
                            <AppFumetti imgURL="https://imgs.search.brave.com/a6fAPUra4t94xMJFlYv6X7Lwm4z_qPmslx7Hiqafbok/rs:fit:600:923:1/g:ce/aHR0cHM6Ly9jZG4u/ZmxpY2tlcmluZ215/dGguY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIwLzA4L0Jh/dG1hbi1UaHJlZS1K/b2tlcnMtMS02MDB4/OTIzLTEuanBn" title="BATMAN: THREE JOKER">
                                <p className='text-light text-start mb-5'>$6.99</p>
                            </AppFumetti>
                        </div>
                        <div className="col-2">
                            <AppFumetti imgURL="https://imgs.search.brave.com/qMxyCwK99aguaETp4ioxXLrpxwNg2JNBN3Oq7LGAgzM/rs:fit:780:1200:1/g:ce/aHR0cHM6Ly9jZG4u/ZmxpY2tlcmluZ215/dGguY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIwLzEwL0Jh/dG1hbi1XaGl0ZS1L/bmlnaHQtUHJlc2Vu/dHMtSGFybGV5LVF1/aW5uLTEtMS5qcGc" title="BATMAN: WHITE KNIGHT PRESENTS: HARLEY QUINN">
                                <p className='text-light text-start mb-5'>$4.99</p>
                            </AppFumetti>
                        </div>
                        <div className="col-2">
                            <AppFumetti imgURL="https://imgs.search.brave.com/bf_FlGnymAgmvweY8YiLAcyy600JdSMl_jHpdR3t5ro/rs:fit:612:612:1/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvNTA5/M2IxOTEtZTkzZS00/NTJjLThhYTQtYTEw/ZDY0ZTcxN2E5LjA5/N2UwZWM5NDgzYzky/OGExMjY4Nzk1Nzk2/NTliZWNjLmpwZWc_/b2RuV2lkdGg9NjEy/Jm9kbkhlaWdodD02/MTImb2RuQmc9ZmZm/ZmZm" title="catwoman">
                                <p className='text-light text-start mb-5'>$16.99</p>
                            </AppFumetti>
                        </div>*/}
                    </div>
                    <div className='text-center'>
                        <a href="" className="btn btn-primary text-uppercase rounded-0 mb-4 px-5 fw-bold" target="_blank" rel="noopener noreferrer">
                            load more
                        </a>
                    </div>
                </div>
            </div>
            <div className='main-bg'>
                <div className="container p-5">
                    <div className="row">
                        <div className="col d-flex align-items-center">
                            <img src={dcIcon} alt="" className='main-icon' />
                            <div>
                                <a href="" style={{ fontSize: "14px" }}>DIGITAL COMICS</a>
                            </div>
                        </div>
                        <div className="col d-flex align-items-center">
                            <img src={merchandideIcon} alt="" className='main-icon' />
                            {/* BONUS */}
                            <>
                                <a href="" style={{ fontSize: "14px" }} onClick={e => { e.preventDefault(); setShowModal(true) }}>DC MERCHANDISE</a>
                                {showModal && (
                                    <div className="modal d-block" tabIndex="-1" style={{ background: "rgba(0,0,0,0.5)" }}>
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title">Ciao! Quale gadget stai cercando?</h5>
                                                    <button
                                                        type="button"
                                                        className="btn-close"
                                                        aria-label="Close"
                                                        onClick={() => setShowModal(false)}
                                                    ></button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="btn-group">
                                                        <button
                                                            className="btn btn-secondary btn-lg dropdown-toggle"
                                                            type="button"
                                                            onClick={() => setShowDropdown(!showDropdown)}
                                                        >
                                                            Lista Gadget
                                                        </button>
                                                        {showDropdown && (
                                                            <ul className="dropdown-menu show" style={{ position: "static", float: "none" }}>
                                                                <li><a className="dropdown-item" href="#">Tazza DC Comics</a></li>
                                                                <li><a className="dropdown-item" href="#">T-shirt Superman</a></li>
                                                                <li><a className="dropdown-item" href="#">Cappellino Batman</a></li>
                                                                <li><a className="dropdown-item" href="#">Zaino Wonder Woman</a></li>
                                                                <li><a className="dropdown-item" href="#">Portachiavi Flash</a></li>
                                                            </ul>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <button
                                                        type="button"
                                                        className="btn btn-secondary"
                                                        onClick={() => setShowModal(false)}
                                                    >
                                                        Chiudi
                                                    </button>
                                                    <button type="button" className="btn btn-primary">
                                                        Avanti
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </>
                            {/* FINE BONUS */}
                        </div>
                        <div className="col d-flex align-items-center">
                            <img src={subscriptionIcon} alt="" className='main-icon' />
                            <div>
                                <a href="" style={{ fontSize: "14px" }}>SUBSCRIPTION</a>
                            </div>
                        </div>
                        <div className="col d-flex align-items-center">
                            <img src={locatorIcon} alt="" className='main-icon' />
                            <div>
                                <a href="" style={{ fontSize: "14px" }} >COMIC SHOP LOCATOR</a>
                            </div>
                        </div>
                        <div className="col d-flex align-items-center me-5">
                            <img src={visaIcon} alt="" className='main-icon' />
                            <div>
                                <a href="" style={{ fontSize: "14px" }}>DC POWER VISA</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )

}