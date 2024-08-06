import style from './Sponsors.module.css'
export function Sponsors() {
    return (
        <section className={style.sponsors}>
            <a className={style.btn} href="#">Sponsor Vite</a>
            <a className={style.btn}  href="#">Sponser Deividas</a>
        </section>
    );
}