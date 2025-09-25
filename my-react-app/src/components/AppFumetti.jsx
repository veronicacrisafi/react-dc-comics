export default function AppFumetti({ imgURL, title }) {
    return (
        <>

            <img src={imgURL} alt="fumetti-main" className="img-fluid" style={{ width: "200px", height: "200px", objectFit: "cover" }} />
            <div>
                <h6 className="text-light text-break text-uppercase pt-3 pb-2 text-center" style={{ whiteSpace: "normal", overflowWrap: "break-word" }}>
                    <a href="" className="text-decoration-none" target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </h6>
            </div>

        </>
    )
}