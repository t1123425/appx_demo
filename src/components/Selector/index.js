import styles from './selector.module.scss';
const Selector = ({dataList,showBorder,className,defaultValue}) => {

    return (
        <select className={styles.Selector+className} defaultValue={defaultValue}>
            {
                dataList.map((e,i) => {
                 return <option key={i}>{e}</option>
                })
            }
        </select>
    )
}

export default Selector;