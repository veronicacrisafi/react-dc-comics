import dcLogo from '../assets/img/dc-logo.png'

export default function AppHeader() {
    return (
        <header>
            <div className='container mt-4 d-flex align-items-center p-2'>
                <img src={dcLogo} alt="DC-logo-Header" />
                <nav className='ms-auto ms-5'>
                    <a href="">characters</a>
                    <a href="" className='active'>comics</a>
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