import dcLogo from '../assets/img/dc-logo.png'
const navHeader = [
    {
        id: 1,
        text: "characters",
    },
    {
        id: 2,
        text: "comics",
    },
    {
        id: 3,
        text: "movies",
    },
    {
        id: 4,
        text: "tv",
    },
    {
        id: 5,
        text: "games",
    },
    {
        id: 6,
        text: "collectibles",
    },
    {
        id: 7,
        text: "videos",
    },
    {
        id: 8,
        text: "fans",
    },
    {
        id: 9,
        text: "news",
    },
    {
        id: 10,
        text: "shop",
    }

]

export default function AppHeader() {
    return (
        <header>
            <div className='container d-flex align-items-center p-4'>
                <img src={dcLogo} alt="DC-logo-Header" />
                <nav className='ms-auto ms-5'>
                    {/* <a href="">characters</a>
                    <a href="" className='active'>comics</a>
                    <a href="">movies</a>
                    <a href="">tv</a>
                    <a href="">games</a>
                    <a href="">collectibles</a>
                    <a href="">videos</a>
                    <a href="">fans</a>
                    <a href="">news</a>
                    <a href="">shop</a> */}
                    <ul className="d-flex gap-3 list-unstyled">
                        {navHeader.map(item => (
                            <li key={item.id}>
                                <a
                                    href="#"
                                    className={item.text === "comics" ? "active" : ""}
                                >
                                    {item.text}
                                </a>
                            </li>
                        ))}
                    </ul>


                </nav>
            </div>
        </header>
    )
}