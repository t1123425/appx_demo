import styles from './toggleList.module.scss'
import { useState } from 'react'
// 最下面層級的清單
const ChildList = ({lists,title}) => {
    const [toggle,setToggle] = useState(false);
    const triggerToggle = (e) => {
        e.stopPropagation();
        setToggle(!toggle);
    }
    return (
        <>
          <p className={styles.toggleTitle} onClick={(e)=>{triggerToggle(e)}}>{title}</p>
          <ul className={styles.childList+' '+(toggle?styles.active:'')}>
                {
                    lists.map((e,i) => {
                        return <li key={i}>
                            <a href="/#">
                                {e.text}
                            </a>
                        </li>
                    })
                }
           </ul>
        </>
    )
}
// 子選單
const ToggleList = () => {
    // 依設計稿呈現的範例資料
    const demoData = [
        {
          id:1,
          text:'Option_1'
        },
        {
          id:2,
          text:'Option_2',
          children:[
            {
                text:'Suboption_1'
            },
            {
                text:'Suboption_2'
            },
            {
                text:'Suboption_3'
            }
          ]
        },
        {
            id:3,
            text:'Option_3',
        }
    ]
    return (
        <div className={styles.toggleListWrap}>
            <ul className={styles.toggleList}>
                {
                    demoData.map((e,i)=>{
                        return (
                            <li key={i}>
                               {
                                 e.children?<ChildList 
                                            lists={e.children} 
                                            title={e.text}/>:(
                                    <a href="/#">{e.text}</a>)
                               }
                            </li>
                        )
                    })
                }
            </ul>
    
        </div>
    )
}

export default ToggleList;