document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. DATI DELLE MATERIE SCOLASTICHE ---
    const subjectData = {
        info: {
            title: "Informatica",
            num: "4.1",
            category: "Area Tecnica",
            img: "immagini/materia-informatica.jpg",
            desc: "L'informatica è una disciplina che ho sempre ritenuto interessante, e il mio percorso di studi di scuola superiore non ha fatto altro che confermare, se non ampliare questo interesse. All'inizio la seguivo in modo passivo, ma un'esperienza ha risvegliato l'interesse puro per questa disciplina, ossia uno sviluppo di un'applicazione che si comportasse esattamente come un link shortener.",
            topics: [
                "Linguaggio SQL avanzato: query annidate, viste, stored procedure, trigger",
                "Progettazione di basi di dati: modello ER, normalizzazione, vincoli di integrità",
                "Sviluppo backend con PHP e API REST in formato JSON",
                "Sviluppo frontend con HTML5, CSS3 e JavaScript (DOM, fetch, async/await)",
                "Progetto di classe: applicazione web per la gestione di emergenze sul territorio",
                "Versionamento del codice con Git e collaborazione tramite GitHub"
            ]
        },
        sistemi: {
            title: "Sistemi e Reti",
            num: "4.2",
            category: "Area Tecnica",
            img: "immagini/materia-sistemi-reti.jpg",
            desc: "Sistemi e reti va a braccetto con informatica; senza l'una non esiste l'altra. Riservo un noto interesse per questo insegnamento, in particolare sul mondo della sicurezza informatica, che mi affascina per il suo intricato ed elegante funzionamento.",
            topics: [
                "Modello ISO/OSI e stack TCP/IP a confronto",
                "Indirizzamento IPv4 e IPv6, subnetting e VLSM",
                "Routing statico e dinamico (cenni a RIP, OSPF)",
                "VLAN, trunking e sicurezza nelle reti locali",
                "Crittografia simmetrica e asimmetrica, certificati digitali, HTTPS",
                "VPN, firewall e principi base di cybersecurity"
            ]
        },
        tpsit: {
            title: "TPSIT",
            num: "4.3",
            category: "Area Tecnica",
            img: "immagini/materia-tpsit.jpg",
            desc: "TPSIT (Tecnologie e Progettazione di Sistemi Informatici e di Telecomunicazione) è la materia che unisce la programmazione alle reti. Scoprire come i sistemi comunicano e scambiano dati ha stimolato profondamente la mia curiosità, spingendomi a mettere in pratica queste logiche per sviluppare progetti personali interattivi.",
            topics: [
                "Architetture client-server e peer-to-peer",
                "Socket di rete in Python e in Java",
                "Programmazione multi-thread e gestione della concorrenza",
                "Protocolli applicativi: HTTP, FTP, SMTP, DNS",
                "Servizi web e API REST",
                "Containerizzazione: introduzione a Docker"
            ]
        },
        gpoi: {
            title: "GPOI",
            num: "4.4",
            category: "Area Tecnica",
            img: "immagini/materia-gpoi.jpg",
            desc: "GPOI (Gestione Progetto e Organizzazione d'Impresa) è una materia che si può esprimere con la definizione di 'ponte tra informatica ed economia', perché si affrontano problemi di natura aziendale che implicano conoscenze informatiche per la parte tecnica ed economiche per la parte contabile e gestionale della società.",
            topics: [
                "Cos'è un progetto, ciclo di vita e fasi",
                "Metodologie tradizionali: modello a cascata, diagrammi di Gantt e di PERT",
                "Metodologie agili: Scrum, Kanban, ruoli e cerimonie",
                "Analisi dei requisiti e stesura di documentazione tecnica",
                "Stima dei costi, ROI e analisi di fattibilità",
                "Sicurezza sul lavoro (D.Lgs. 81/08) e qualità (cenni ISO 9001)",
                "Modelli organizzativi d'impresa e ruoli aziendali nell'IT"
            ]
        },
        mate: {
            title: "Matematica",
            num: "4.5",
            category: "Area Tecnica",
            img: "immagini/materia-matematica.jpg",
            desc: "Matematica è la materia da cui parte tutto il mondo informatico e soprattutto il mondo dell'Intelligenza Artificiale: modelli informatici e sistemi intelligenti sfruttano modelli matematici come integrali e limiti. Non è solo questo, ma è anche la lingua dei fatti: statistiche, probabilità e dati sono calcolati dalla matematica, ed è ciò che la rende così importante.",
            topics: [
                "Limiti di funzioni reali, forme indeterminate e teoremi sui limiti",
                "Derivate: definizione, regole di derivazione, applicazioni",
                "Studio completo di funzione e tracciamento del grafico",
                "Integrali indefiniti e definiti, metodi di integrazione",
                "Calcolo di aree e di volumi",
                "Cenni a equazioni differenziali e probabilità"
            ]
        },
        ia: {
            title: "Intelligenza Artificiale",
            num: "4.6",
            category: "Area Tecnica",
            img: "immagini/materia-ia.jpg",
            desc: "L'Intelligenza Artificiale non è definibile solo come una 'materia', ma è un intero mondo. In particolare all'IIS Marconi Pieralisi si inizia dalle basi del deep learning, fino ad arrivare all'addestramento e all'interazione con le IA, inclusi i più famosi chatbot come ChatGPT, Copilot e Gemini.",
            topics: [
                "Storia dell'intelligenza artificiale: dai primi sistemi esperti al deep learning",
                "Apprendimento supervisionato: regressione lineare, classificazione, alberi decisionali",
                "Apprendimento non supervisionato: clustering, riduzione della dimensionalità",
                "Reti neurali artificiali: percettrone, reti feed-forward, backpropagation",
                "Convolutional Neural Networks (CNN) per il riconoscimento di immagini",
                "Strumenti di lavoro: Python, NumPy, Pandas, scikit-learn, TensorFlow",
                "Etica dell'IA: bias, privacy, impatto sociale"
            ]
        },
        ita: {
            title: "Italiano",
            num: "4.7",
            category: "Area Umanistica",
            img: "immagini/materia-italiano.jpg",
            desc: "Italiano è la materia di cui spesso non sappiamo di aver bisogno, perché lo studio di poeti e periodi letterari apre nuovi orizzonti di pensiero e analisi introspettiva, come ad esempio il concetto di identità e maschere per Pirandello o la teoria del fanciullino di Pascoli.",
            topics: [
                "Giacomo Leopardi: pensiero, poetica e opere principali",
                "Naturalismo e Verismo: Giovanni Verga e i 'Malavoglia'",
                "Decadentismo: Pascoli e D'Annunzio",
                "Le avanguardie del primo Novecento e il Futurismo",
                "Italo Svevo e Luigi Pirandello: la crisi dell'io",
                "La poesia del Novecento: Ungaretti, Montale, Saba, Quasimodo",
                "Il neorealismo: Primo Levi, Calvino, Pavese"
            ]
        },
        storia: {
            title: "Storia",
            num: "4.8",
            category: "Area Umanistica",
            img: "immagini/materia-storia.jpg",
            desc: "Storia insegna a guardare il passato e analizzare gli errori commessi in determinati frangenti storici, in modo da comprenderli e non commetterli di nuovo nel presente, sia a livello personale che a livello macro-sociale e geopolitico.",
            topics: [
                "L'Italia dell'età giolittiana e la seconda rivoluzione industriale",
                "La Prima Guerra Mondiale e le sue conseguenze",
                "I totalitarismi: fascismo, nazismo, stalinismo",
                "La Seconda Guerra Mondiale e la Shoah",
                "La nascita della Repubblica italiana e la Costituzione",
                "La Guerra Fredda e la decolonizzazione",
                "L'Italia del dopoguerra: boom economico, anni di piombo, Tangentopoli"
            ]
        },
        ing: {
            title: "Inglese",
            num: "4.9",
            category: "Area Umanistica",
            img: "immagini/materia-inglese.jpg",
            desc: "Considerare l'Inglese solo una materia scolastica è riduttivo, in quanto saperlo apre a moltissimi altri fronti a livello internazionale, oltre ad essere la lingua di base e lo standard universale per chiunque scelga un indirizzo tecnico e informatico.",
            topics: [
                "Grammatica avanzata: tempi verbali, periodo ipotetico, forma passiva",
                "Letteratura: il romanzo vittoriano, Orwell e la distopia, cenni di poesia moderna",
                "Technical English: networking, programming, cybersecurity terminology",
                "Preparazione a certificazioni linguistiche (livello B2)",
                "Storytelling: presentare progetti tecnici in lingua inglese",
                "Civiltà britannica e statunitense"
            ]
        },
        motoria: {
            title: "Scienze Motorie",
            num: "4.10",
            category: "Altro",
            img: "immagini/materia-scienze-motorie.jpg",
            desc: "Ridurre Scienze Motorie a semplice 'attività fisica' sarebbe un errore, in quanto è il vero specchio della disciplina di uno studente. Imparare a conoscere e gestire il proprio corpo apre la strada al benessere psicofisico e insegna il valore imprescindibile del rispetto delle regole e del lavoro di squadra, competenze fondamentali tanto nello sport quanto nella vita di tutti i giorni.",
            topics: [
                "Apparato muscolare e scheletrico",
                "Educazione alimentare e nutrizione sportiva",
                "Sport di squadra: pallavolo, basket, calcio a 5",
                "Atletica leggera: corsa, salto, lancio",
                "Doping e sport: aspetti etici e sanitari"
            ]
        }
    };
    // --- 2. GESTIONE TEMI (DARK/LIGHT MODE) ---
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');
    const body = document.body;
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark-theme';
    body.className = savedTheme;
    updateThemeToggleUI(savedTheme);
    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            body.classList.replace('dark-theme', 'light-theme');
            localStorage.setItem('portfolio-theme', 'light-theme');
            updateThemeToggleUI('light-theme');
        } else {
            body.classList.replace('light-theme', 'dark-theme');
            localStorage.setItem('portfolio-theme', 'dark-theme');
            updateThemeToggleUI('dark-theme');
        }
    });
    function updateThemeToggleUI(theme) {
        if (theme === 'dark-theme') {
            themeIcon.textContent = '☀';
        } else {
            themeIcon.textContent = '🌙';
        }
    }
    // --- 3. COMPORTAMENTO NAVBAR ---
    const navbar = document.getElementById('site-navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    // --- 4. SCROLLSPY (ACTIVE LINKS) ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', () => {
        let currentSectionId = 'home';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.pageYOffset >= sectionTop) {
                currentSectionId = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });
    // --- 5. MENU MOBILE (HAMBURGER) ---
    const menuToggle = document.getElementById('menu-toggle');
    const navLinksContainer = document.getElementById('nav-links');
    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('menu-open');
        navLinksContainer.classList.toggle('open');
    });
    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('menu-open');
            navLinksContainer.classList.remove('open');
        });
    });
    // --- 6. FILTRO MATERIE (TABS) ---
    const tabButtons = document.querySelectorAll('.tab-btn');
    const subjectCards = document.querySelectorAll('.subject-card');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active from other buttons
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.getAttribute('data-category');
            subjectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (category === cardCategory || category === 'tutte') {
                    card.classList.add('active');
                } else {
                    card.classList.remove('active');
                }
            });
        });
    });
    // --- 7. MODAL GESTIONE DETTAGLI MATERIA ---
    const modal = document.getElementById('subject-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const modalBackdrop = modal.querySelector('.modal-backdrop');
    
    // Modal elements
    const modalNum = document.getElementById('modal-subject-num');
    const modalCat = document.getElementById('modal-subject-cat');
    const modalTitle = document.getElementById('modal-subject-title');
    const modalImg = document.getElementById('modal-subject-img');
    const modalDesc = document.getElementById('modal-subject-desc');
    const modalTopics = document.getElementById('modal-subject-topics');
    // Attach click event to cards
    subjectCards.forEach(card => {
        card.addEventListener('click', () => {
            const subjectId = card.getAttribute('data-subject');
            const data = subjectData[subjectId];
            
            if (data) {
                // Populate Modal Data
                modalNum.textContent = data.num;
                modalCat.textContent = data.category;
                modalTitle.textContent = data.title;
                modalDesc.textContent = data.desc;
                
                // Fallback for missing local images using Unsplash placeholders
                modalImg.src = data.img;
                modalImg.onerror = function() {
                    let fallbackUrl = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop';
                    if (subjectId === 'mate') fallbackUrl = 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&h=400&fit=crop';
                    if (subjectId === 'ia') fallbackUrl = 'https://images.unsplash.com/photo-1677442136019-21780efad99a?w=600&h=400&fit=crop';
                    if (subjectId === 'sistemi') fallbackUrl = 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop';
                    if (subjectId === 'tpsit') fallbackUrl = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop';
                    if (subjectId === 'ita') fallbackUrl = 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop';
                    if (subjectId === 'storia') fallbackUrl = 'https://images.unsplash.com/photo-1447069387593-a5de0862481e?w=600&h=400&fit=crop';
                    if (subjectId === 'ing') fallbackUrl = 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&h=400&fit=crop';
                    if (subjectId === 'motoria') fallbackUrl = 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&h=400&fit=crop';
                    modalImg.src = fallbackUrl;
                };
                // Clear and build topics list
                modalTopics.innerHTML = '';
                data.topics.forEach(topic => {
                    const li = document.createElement('li');
                    li.textContent = topic;
                    modalTopics.appendChild(li);
                });
                // Open Modal
                modal.classList.add('open');
                body.style.overflow = 'hidden'; // Lock background scrolling
            }
        });
    });
    function closeModal() {
        modal.classList.remove('open');
        body.style.overflow = ''; // Unlock scrolling
    }
    closeModalBtn.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', closeModal);
    // Close modal on Escape key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            closeModal();
        }
    });
    // --- 8. SUBMISSION FORM DI CONTATTO MOCK ---
    const contactForm = document.getElementById('contact-form');
    const formResponse = document.getElementById('form-response');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Show sending status
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Invio in corso...';
            submitBtn.disabled = true;
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                // Clear inputs
                contactForm.reset();
                // Show success message
                formResponse.textContent = 'Grazie! Il tuo messaggio è stato inviato con successo. Ti risponderò al più presto.';
                formResponse.className = 'form-response-message success';
                
                // Fade out message after 5 seconds
                setTimeout(() => {
                    formResponse.style.display = 'none';
                }, 5000);
            }, 1500);
        });
    }
});
