import CollectionItem from "./CollectionItem";
import Selector from "../Selector";
import arrowLeft from '../../assets/img/arrowLeft.svg';
import arrowRight from '../../assets/img/arrowRight.svg';
import styles from './collection.module.scss';
const Collection = () => {
     {/* 目前收藏資料都為靜態資料呈現 */}
    return (
        <section className={styles.collectionWrap}>
            <div className={styles.collectionInfo +' flexCenter'}>
                <h2 className={styles.title}>My Collection</h2>
                <div className="pageInfo flexCenter moblieHide">
                     {/* 項目總數 */}
                    <span className={styles.title+' '+styles.total}>Total 480</span>
                     {/* 頁面切換 */}
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
                {/* 呈現10筆收藏項目 */}
                {/*  設計稿有提到點選收藏狀態可做顯示是否狀態出現，基於這邊目前作為切版參考暫不做開發，
                    不過若需要實作應該會根據每筆資料蒐藏狀態的布林值來決定呈現，這邊會根據傳入蒐藏的id，
                    內部會根據傳入id跟回傳id的props function，來根據資料中id改變蒐藏狀態的布林值 */}
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