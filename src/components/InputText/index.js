import styles from './inputText.module.scss';
const InputText = ({placeholder = '',styleType,className,children}) => {
    return (
        <div className={styles.inputTextWrap+' '+styles[styleType]+' '+className}>
             <input type="text" placeholder={placeholder} />
             <span>
                {children}
             </span>
        </div>
    )
}

export default InputText;
