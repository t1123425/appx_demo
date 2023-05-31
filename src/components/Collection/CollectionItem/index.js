import thumbsUp from '../../../assets/img/thumbsUpIcon.svg';
import comments from '../../../assets/img/commentsIcon.svg';
import conrner from '../../../assets/img/cornerUpIcon.svg';
import collectionIcon from '../../../assets/img/collectionIcon.svg';
import styles from './collectionItem.module.scss'
const CollectionItem = ({id}) => {
    return (
        <div className={styles.collectionItemWrap+' whiteBg'}>
            <div className={styles.itemInfo}>
                <span className={styles.collectionStatus}>
                    <img src={collectionIcon} alt="collection" />
                </span>
                <p>APPX System New Version Release Announce on  14th Dec...</p>
                <span className={styles.news}>News</span>
            </div>
            <div className={styles.itemStatus+' flexCenter'}>
                <ul className={styles.itemList+' flexCenter'}>
                    <li>
                        <img src={thumbsUp} alt="likes" />
                        <span>150 Likes</span>
                    </li>
                    <li>
                        <img src={comments} alt="comments" />
                        <span>10 Comments</span>
                    </li>
                    <li>
                        <img src={conrner} alt="comments" />
                        <span>5 Shares</span>
                    </li>
                </ul>
                <span className='Date'>Dec 19, 2022</span>
            </div>
        </div>
    )
}

export default CollectionItem;