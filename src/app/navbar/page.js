import Link from "next/link"
import styles from '../page.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.logo}>
        <Link href="/home">
         
          <h1>News App</h1>
        </Link>
      </div>
      <div className={styles.navs}>
        <ul>
          <Link href="/home">Home</Link>
          <Link href="/general">General</Link>
          <Link href="/business">Business</Link>
          <Link href="/sports">Sports</Link>
          <Link href="/science">Science</Link>
          <Link href="/health">Health</Link>
          <Link href="/entertainment">Entertainment</Link>
          <Link href="/technology">Technology</Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar