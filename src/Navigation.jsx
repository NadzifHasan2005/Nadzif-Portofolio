import { useState, useEffect } from 'react';

function Navigation() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="navigation">
            <div className={`navigation-inner ${scrolled ? 'scrolled' : ''}`}>
                <ul>
                    <li><a href="/"><span className="navigation-home">Home</span></a></li>
                    <li><a href="/Skills">Skills</a></li>
                    <li><a href="/Experience">Experience</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navigation;