import Link from "next/link";
import { useRouter } from "next/router";
import JournalDetails from "./../../../components/FetchJournal";
import styles from "./../../../styles/Style.module.css";
import navbar from "./../../../styles/Navbar.module.css";

const JouranlDetail = () => {
  const router = useRouter();
  const { journalId } = router.query;


  return (
    <div className="wrapper">
     <header className={navbar.header}>
        <Link href="/admin">
          <a className={navbar.logo}>
            <span className={navbar.span}>STIFTUNG | </span>BATTENBERG
          </a>
        </Link>
        <nav className={navbar.navbar}>
          <Link href="/admin/absences">
            <a className={navbar.anchor}> Absenzen </a>
          </Link>
          <Link href="/admin/journals">
            <a className={navbar.anchor}> Journals </a>
          </Link>
          <Link href="/admin/users">
            <a className={navbar.anchor}> Benutzer </a>
          </Link>
          <Link href="/admin/register">
            <a className={navbar.anchor}> Erstellen </a>
            
          </Link>
        </nav>
      </header>
        <div className={styles.formContainer1}>
        <h1>Journal Details</h1>
          <JournalDetails journalId={journalId} />
          <Link href="/admin/journals">
            <a className={styles.btnContainer}>Zurück</a>
          </Link>
        </div>
    </div>
  );
};

export default JouranlDetail;
