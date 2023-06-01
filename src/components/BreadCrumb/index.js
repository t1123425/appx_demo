import styles from './breadcrumb.module.scss'
const BreadCrumb = ({links}) => {
  // prop links可傳入連接陣列來呈現麵包屑中的連接，這邊基於樣式展示僅以靜態資料呈現
    return (
        <ul className={styles.breadCrumbList+' flexCenter'}>
          <li>
            <a href="/#">
                Home
            </a>
          </li>
          <li>
            <a href="/#">
                My Collection
            </a>
          </li>
        </ul>
    )
}

export default BreadCrumb