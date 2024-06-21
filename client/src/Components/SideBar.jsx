export default function SideBar(props){
    const {handleToggleModal, data} = props
    return(
        <div className="sidebar">
            <div onClick={handleToggleModal} className="bgOverlay"></div>
            <div className="sidebarContents">
                <h2>{data?.title}</h2>
                <div className="descriptionContainer">
                    <p className="descriptionTitle">Description</p>
                    <p>{data?.date}</p>
                    <p>{data?.explanation}</p>
                </div>
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-angles-right"></i>
                </button>
            </div>
            
        </div>
    )
}