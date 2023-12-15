import './Footer.css';

const Footer = (props) => {
    return (
        <footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="http://www.facebook.com" target="_blank">
                        <img src="/imagens/fb.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="http://www.twitter.com" target="_blank">
                        <img src="/imagens/tw.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="http://www.instagram.com" target="_blank">
                        <img src="/imagens/ig.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por <b>tmiazaki</b> com Alura.
            </p>
        </section>
    </footer>
    );
}

export default Footer;