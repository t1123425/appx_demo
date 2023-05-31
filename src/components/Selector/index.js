import styles from './selector.module.scss';
const Selector = ({dataList,className,styleType,defaultValue}) => {

    return (
        <div className={styles.selectorWrap+' '+styles[styleType]+' '+className}>
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