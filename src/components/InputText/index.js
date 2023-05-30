import styles from './inputText.module.scss';
const InputText = ({placeholder = '',className,children}) => {
    return (
        <div className={styles.inputTextWrap+' '+styles[''+className+'']+ ' flexCenter'}>
             <input type="text" placeholder={placeholder} />
             <span>
                {children}
             </span>
        </div>
    )
}

export default InputText;
