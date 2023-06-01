import styles from './selector.module.scss';
/**
 * 客製化選單元件prop說明:
 * dataList:選項的option 清單 資料型態為陣列
 * classname:為延伸的對應樣式，可根據需要在父層傳入對應樣式
 * styleType: 從父層傳入不同狀賴類型的樣式，支援的狀態(grayBorder,lightText)
 * defaultValue:預設選項值
 */
const Selector = ({dataList,className = '',styleType,defaultValue}) => {

    return (
        <div className={styles.selectorWrap+' '+(styleType?styles[styleType]:'')+' '+className}>
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