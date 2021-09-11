import l from './style.module.css';

const Layout = ({title, descr, urlBg, colorBg = "red"}) => {

    const sbg = { backgroundImage: urlBg && `url("${urlBg}")`, backgroundColor: colorBg };

    return (
            <section className={l.root} style={sbg}>
                <div className={l.wrapper}>
                    <article>
                        <div className={l.title}>
                            {title && (<h3>{title}</h3>)}
                            <span className={l.separator}></span>
                        </div>
                        <div className={`${l.desc} ${l.full}`}>
                            {descr && (<p>{descr}</p>)}
                        </div>
                    </article>
                </div>
            </section> 
    )
}

export default Layout;