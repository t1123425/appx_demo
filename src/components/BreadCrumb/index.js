import styles from './breadcrumb.module.scss'
const BreadCrumb = ({links}) => {
    return (
        <ul className={styles.breadCrumbList+' flexCenter'}>
          <li>
            <a href="#">
                Home
            </a>
          </li>
          <li>
            <a href="#">
                My Collection
            </a>
          </li>
        </ul>
    )
}

export default BreadCrumb