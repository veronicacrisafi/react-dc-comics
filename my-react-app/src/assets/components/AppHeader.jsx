import dcLogo from '../img/dc-logo.png'

export default function AppHeader() {
    return (
        <header>
            <div className='container mt-5'>
                <img src={dcLogo} alt="DC-logo-Header" />
                <nav>
                    <a href="">characters</a>
                    <a href="">comics</a>
                    <a href="">movies</a>
                    <a href="">tv</a>
                    <a href="">games</a>
                    <a href="">collectibles</a>
                    <a href="">videos</a>
                    <a href="">fans</a>
                    <a href="">news</a>
                    <a href="">shop</a>

                </nav>
            </div>
        </header>
    )
}