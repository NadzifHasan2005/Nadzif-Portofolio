import { useState, useEffect } from 'react';

function Footer() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const socials = [
        { name: "GitHub", code: "SRC", href: "https://github.com/NadzifHasan2005" },
        { name: "LinkedIn", code: "NET", href: "https://www.linkedin.com/in/muhammad-ramdhan-nadzif-hasan-0156a5211/" },
        { name: "Instagram", code: "IMG", href: "https://www.instagram.com/mr_nadzif19/" },
        { name: "Email", code: "MSG", href: "mailto:nadzif.hasan3work@gmail.com" },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="footer">
            <div className="footer-scanline"></div>

            <div className="footer-top">
                <div className="footer-status">
                    <span className="status-dot"></span>
                    <span className="status-text">SYSTEM ONLINE</span>
                    <span className="status-time">{time.toLocaleTimeString('id-ID')}</span>
                </div>
            </div>

            <div className="footer-main">
                <div className="footer-brand">
                    <h3>Nadzif<span className="cursor-blink">_</span></h3>
                    <p>IP Engineer & Software Engineer<br/>Membangun jaringan dan aplikasi yang saling terhubung.</p>
                </div>

                <div className="footer-links">
                    <span className="footer-links-label">// NAVIGATION</span>
                    <a href="#">Beranda</a>
                    <a href="#">Keahlian</a>
                    <a href="#">Pengalaman</a>
                    <a href="#">Kontak</a>
                </div>

                <div className="footer-nodes">
                    <span className="footer-links-label">// CONNECT</span>
                    <div className="node-grid">
                        {socials.map((s) => (
                            <a href={s.href} className="node-item" key={s.code}>
                                <span className="node-ping"></span>
                                <span className="node-core">{s.code}</span>
                                <span className="node-name">{s.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Nadzif — All packets delivered.</p>
                <button className="scroll-top-btn" onClick={scrollToTop}>
                    <span>PING ↑</span>
                </button>
            </div>
        </div>
    );
}

export default Footer;