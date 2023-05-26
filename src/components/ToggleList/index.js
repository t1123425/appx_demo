const ToggleList= ({lists,title}) => {
    return (
        <div>
            <p className="listTitle">{title}</p>
            <ul>
                {
                    lists.map((e,i)=>{
                        return (
                            <li key={i}>
                                <a href="#">
                                    {e}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ToggleList;