function Keahlian() {
    const skills = [
        { name: "IP Configuration", code: "IP-01", level: 70, category: "Networking" },
        { name: "HTML", code: "SW-01", level: 85, category: "Software" },
        { name: "CSS", code: "SW-02", level: 80, category: "Software" },
        { name: "JavaScript", code: "SW-01", level: 70, category: "Software" },
        { name: "Python", code: "SW-01", level: 70, category: "Software" },
        { name: "React.js", code: "SW-02", level: 65, category: "Software" },
        { name: "Laravel", code: "SW-01", level: 65, category: "Software" },
        { name: "MySQL", code: "SW-01", level: 65, category: "Software" },
    ];

    return (
        <div className="keahlian">
            <div className="keahlian-header">
                <span className="keahlian-label">// 02. Keahlian</span>
                <h2>Tech Stack & Tools</h2>
            </div>

            <div className="keahlian-list">
                {skills.map((skill, index) => (
                    <div
                        className="skill-row"
                        key={skill.code}
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="skill-row-label">
                            <span className="skill-code">{skill.code}</span>
                            <span className="skill-name">{skill.name}</span>
                        </div>

                        <div className="skill-bar-track">
                            <div
                                className={`skill-bar-fill ${skill.category === "Networking" ? "fill-blue" : "fill-green"}`}
                                style={{
                                    width: `${skill.level}%`,
                                    animationDelay: `${index * 0.1 + 0.2}s`
                                }}
                            >
                                <span className="skill-bar-value">{skill.level}%</span>
                            </div>
                        </div>

                        <span className={`skill-dot ${skill.category === "Networking" ? "dot-blue" : "dot-green"}`}></span>
                    </div>
                ))}
            </div>

            {/* <div className="keahlian-axis">
                <span>0</span>
                <span>25</span>
                <span>50</span>
                <span>75</span>
                <span>100</span>
            </div> */}
        </div>
    );
}

export default Keahlian;