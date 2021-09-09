import l from './style.module.css';

const Layout = ({title, descr, urlBg, colorBg='red'}) => {

    const sbg =urlBg ? {backgrondImage: url(`${urlBg}`)} : {backgrondColor: `${colorBg}`}

    return (
        <>
            <section className={l.root} style={sbg}>
                <div className={l.wrapper}>
                    <article>
                        <div className={l.title}>
                            <h3>{title}</h3>
                            <span className={l.separator}></span>
                        </div>
                        <div className={l.desc.full}>
                            <p>{descr}</p>
                        </div>
                    </article>
                </div>
            </section>
        </>    
    )
}

export default Layout;