export default function Footer(props){

    const{showModal, handleToggleModal, data}=props

    return(
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h2>{data?.title}</h2>
                <h1>NASA: Picture Of The Day</h1>
                <button onClick={handleToggleModal}>
                <i className="fa-solid fa-circle-info"></i>
                Learn More!
                </button>
            </div>
        </footer>
    )
}