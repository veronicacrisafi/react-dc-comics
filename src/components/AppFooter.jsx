import facebookIcon from '../assets/img/footer-facebook.png';
import twitterIcon from '../assets/img/footer-twitter.png';
import youtubeIcon from '../assets/img/footer-youtube.png';
import pinterestIcon from '../assets/img/footer-pinterest.png';
import periscopeIcon from '../assets/img/footer-periscope.png';

const footerDinamico = [
    {
        id: 1,
        title: "DC COMICS",
        list: [

            { id: 1, label: "Characters", url: "" },
            { id: 2, label: "Comics", url: "" },
            { id: 3, label: "Movies", url: "" },
            { id: 4, label: "TV", url: "" },
            { id: 5, label: "Games", url: "" },
            { id: 6, label: "Videos", url: "" },
            { id: 7, label: "News", url: "" },
        ]
    },

    {
        id: 2,
        title: "DC",
        list: [
            { id: 1, label: "Terms Of Use", url: "" },
            { id: 2, label: "Privacy policy(New)", url: "" },
            { id: 3, label: "Ad Choises", url: "" },
            { id: 4, label: "Advertising", url: "" },
            { id: 5, label: "Jobs", url: "" },
            { id: 6, label: "Subscription", url: "" },
            { id: 7, label: "Talent Workshops", url: "" },
            { id: 8, label: "CPSC Certificates", url: "" },
            { id: 9, label: "Ratings", url: "" },
            { id: 10, label: "Shop Help", url: "" },
            { id: 11, label: "Contact Us", url: "" }
        ]
    },
    {
        id: 3,
        title: "SITES",
        list: [
            { id: 1, label: "DC", url: "" },
            { id: 2, label: "MAD Magazine", url: "" },
            { id: 3, label: "DC Kids", url: "" },
            { id: 4, label: "DC Universe", url: "" },
            { id: 5, label: "DC Power Visa", url: "" }
        ]
    },
    {
        id: 4,
        title: "SHOP",
        list: [
            { id: 1, label: "Shop DC", url: "" },
            { id: 2, label: "Shop DC Collectibles", url: "" }
        ]
    }
];




export default function AppFooter() {
    return (
        <footer>

            <div className="dc-image">
                <div className="container d-flex align-items-start p-5">

                    <div className="row">
                        {footerDinamico.map((itemTitle, idTitle) => (
                            <div className='col pt-5 p-3' key={idTitle}>
                                <h6 className='text-light'>{itemTitle.title}</h6>
                                <ul>
                                    {itemTitle.list.map((itemList, idList) =>

                                        <li key={idList}>
                                            <a href="">{itemList.label}</a>
                                        </li>
                                    )
                                    }
                                </ul>
                            </div>

                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-dark">
                <div className="container p-5">
                    <div className="row justify-content-between">
                        <div className="col d-flex ms-5 ">
                            <button className='btn btn-outline-primary rounded-0 border-2 '>
                                <a href="" className='fs-6 text-light'>SIGN-UP NOW!</a>
                            </button>
                        </div>
                        <div className="col d-flex align-items-center ms-5 ">
                            <h4 className="color-follow fs-6 ">FOLLOW US</h4>
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