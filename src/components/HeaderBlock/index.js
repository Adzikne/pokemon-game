import s from './style.module.css';


const HeaderBlock = ({ title, hideBackgrond = false, descr }) => {
    const styleRoot = hideBackgrond ? { backgroundImage: 'none' } : {};
    return (
        <div className={s.root}> style={styleRoot}
            <div className={s.container}>
                { 
                    title && (<h1 className={s.header}>
                        {title}
                    </h1>)
                }
                {descr && <p className={s.paragraph}>Simple Triple Triad Card Game</p>}
            </div>
        </div>
    )
}

export default HeaderBlock;