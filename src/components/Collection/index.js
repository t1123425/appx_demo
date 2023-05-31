import CollectionItem from "./CollectionItem";
import Selector from "../Selector";
import arrowLeft from '../../assets/img/arrowLeft.svg';
import arrowRight from '../../assets/img/arrowRight.svg';
import styles from './collection.module.scss';
const Collection = () => {
    return (
        <section className={styles.collectionWrap}>
            <div className={styles.collectionInfo +' flexCenter'}>
                <h2 className={styles.title}>My Collection</h2>
                <div className="pageInfo flexCenter moblieHide">
                    <span className={styles.title+' '+styles.total}>Total 480</span>
                    <div className={styles.pageSwitcher+' flexCenter'}>
                        <span>
                            <img src={arrowLeft}  alt="prev"/>
                        </span>
                        <div className={styles.pageList+' whiteBg'}>
                            <Selector dataList={[1,2,3,4]} className={styles.pageSelector} />
                        </div>
                        <span>
                            <img src={arrowRight}  alt="next"/>
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.collectionContent}>
                {
                    new Array(10).fill(0).map((e,i)=>{
                        return <CollectionItem key={i} id={e} />
                    })
                }
            </div>
        </section>
    )
}

export default Collection;