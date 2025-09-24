export default function AppFumetti({ imgURL, title }) {
    return (
        <div className="">
            <img src={imgURL} alt="fumetti-main" className="img-fluid rounded" style={{ width: "150px", height: "200px", objectFit: "cover" }} ></img>
            <div className="">
                <h6 className="text-light text-break text-uppercase" style={{ whiteSpace: "normal", overflowWrap: "break-word" }}>{title}</h6>
            </div>
        </div>
    )
}