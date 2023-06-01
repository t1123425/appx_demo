import styles from './inputText.module.scss';
/**
 * 客製化輸入欄位元件prop說明:
 * placeholder:佔位符設定
 * classname:為延伸的對應樣式，可根據需要在父層傳入對應樣式
 * styleType: 從父層傳入不同狀賴類型的樣式，支援的狀態(grayBorder,lightText)
 * children:可從父層傳入其他樣式元素(例如:圖片)
 */
const InputText = ({placeholder = '',styleType,className,children}) => {
    return (
        <div className={styles.inputTextWrap+' '+styles[styleType]+' '+className}>
             <input type="text" placeholder={placeholder} />
             {
                children
             }
        </div>
    )
}

export default InputText;
