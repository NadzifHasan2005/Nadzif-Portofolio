function Project() {
    const projects = [
        {
            code: "PRJ-01",
            title: "Sistem Komunikasi Darurat LoRa",
            desc: "Sistem pesan darurat berbasis LoRa untuk area tanpa infrastruktur seluler.",
            stack: ["LoRa", "ESP32", "IoT"],
            category: "Networking",
            status: "Ongoing"
        },
        {
            code: "PRJ-02",
            title: "SDN Load Balancing",
            desc: "Load balancing jaringan menggunakan Ryu Controller & Mininet, dideploy di Kubernetes.",
            stack: ["Mininet", "Ryu", "Kubernetes"],
            category: "Networking",
            status: "Completed"
        },
        {
            code: "PRJ-03",
            title: "FinanceTax ERP",
            desc: "Platform SaaS multi-tenant untuk akuntansi & perpajakan berskala besar.",
            stack: ["Go", "Beego", "MySQL"],
            category: "Software",
            status: "Ongoing"
        },
        {
            code: "PRJ-04",
            title: "Sistem Absensi Nexen",
            desc: "Aplikasi absensi berbasis Laravel untuk manajemen kehadiran internal.",
            stack: ["Laravel", "PHP", "MySQL"],
            category: "Software",
            status: "Completed"
        },
        {
            code: "PRJ-05",
            title: "FTTH/GPON Simulation",
            desc: "Simulasi desain jaringan dan link budget FTTH/GPON menggunakan OptiSystem.",
            stack: ["OptiSystem", "GPON"],
            category: "Networking",
            status: "Completed"
        },
        {
            code: "PRJ-06",
            title: "Digital Stage-Gate Management",
            desc: "Sistem manajemen siklus hidup inovasi proyek engineering secara digital.",
            stack: ["React", "Laravel"],
            category: "Software",
            status: "Ongoing"
        },
    ];

    return (
        <div className="project">
            <div className="project-header">
                <span className="project-label">// 03. Project</span>
                <h2>Recent Builds</h2>
            </div>

            <div className="project-grid">
                {projects.map((p, index) => (
                    <div
                        className="project-card"
                        key={p.code}
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="project-card-top">
                            <span className="project-code">{p.code}</span>
                            <span className={`project-status ${p.status === "Ongoing" ? "status-ongoing" : "status-done"}`}>
                                <span className="status-blip"></span>
                                {p.status}
                            </span>
                        </div>

                        <h3>{p.title}</h3>
                        <p className="project-desc">{p.desc}</p>

                        <div className="project-stack">
                            {p.stack.map((tech) => (
                                <span className="stack-tag" key={tech}>{tech}</span>
                            ))}
                        </div>

                        <div className="project-card-footer">
                            <span className={`category-dot ${p.category === "Networking" ? "dot-blue" : "dot-green"}`}></span>
                            <span className="category-text">{p.category}</span>
                            <a href="#" className="project-link">View →</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;