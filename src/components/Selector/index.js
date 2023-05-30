import styles from './selector.module.scss';
const Selector = ({dataList,className,defaultValue}) => {

    return (
        <div className={styles.selectorWrap+' '+styles[className]}>
             <select defaultValue={defaultValue}>
                {
                    dataList.map((e,i) => {
                    return <option key={i}>{e}</option>
                    })
                }
            </select>
        </div>
    )
}

export default Selector;