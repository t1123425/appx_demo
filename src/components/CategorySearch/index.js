import styles from './categorysearch.module.scss'
import Selector from '../Selector';
import InputText from '../InputText';
const CategorySearch = () => {
    return (
        <section className={styles.categorySearchWrap+' whiteBg'}>
            {/* category為下拉式選單，選項包含：HR Announcement、News、All
            Subtitle為輸入框 */}
            <div className={styles.searchBlock+' '+styles.categroy}>
                <label>Category</label>
                <Selector dataList={['HR Announcement',
                'News','All Subtitle']} />
            </div>
            <div className={styles.searchBlock+' '+styles.subtitle}>
                <label>Subtitle</label>
                <InputText />
            </div>
            <button type="button">
                Search
            </button>
        </section>
    )
}

export default CategorySearch;