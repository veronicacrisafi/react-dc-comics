export default function AppFumetti({ imgURL, title }) {
    return (
        <div className="">
            <img src={imgURL} alt=""></img>
            <div className="">
                <h3 className="text-light">{title}</h3>
            </div>
        </div>
    )
}