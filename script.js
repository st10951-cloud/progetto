document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Management
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeToggle.querySelector('.btn-icon');
    // Retrieve saved theme or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark-theme';
    body.className = savedTheme;
    updateThemeIcon(savedTheme);
    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            body.classList.replace('dark-theme', 'light-theme');
            localStorage.setItem('theme', 'light-theme');
            updateThemeIcon('light-theme');
            logToConsole('[SYSTEM] Tema cambiato a: Chiaro', 'info');
        } else {
            body.classList.replace('light-theme', 'dark-theme');
            localStorage.setItem('theme', 'dark-theme');
            updateThemeIcon('dark-theme');
            logToConsole('[SYSTEM] Tema cambiato a: Scuro', 'info');
        }
    });
    function updateThemeIcon(theme) {
        if (theme === 'dark-theme') {
            themeIcon.textContent = '☀'; // Show sun to toggle to light
        } else {
            themeIcon.textContent = '🌙'; // Show moon to toggle to dark
        }
    }
    // 2. Sidebar Navigation & Tab Switching
    const files = document.querySelectorAll('.tree-node.file');
    const cards = document.querySelectorAll('.card');
    files.forEach(file => {
        file.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent folder click handler if nested (though this is a leaf)
            
            // Remove active classes
            files.forEach(f => f.classList.remove('active'));
            cards.forEach(c => c.classList.remove('active'));
            
            // Set active
            file.classList.add('active');
            const targetId = file.getAttribute('data-target');
            const targetCard = document.getElementById(targetId);
            if (targetCard) {
                targetCard.classList.add('active');
                
                const fileName = file.querySelector('.node-name').textContent;
                logToConsole(`[INFO] Visualizzazione file: ${fileName}`, 'system');
            }
        });
    });
    // Folder Collapse/Expand
    const folders = document.querySelectorAll('.tree-node.folder > .node-content');
    folders.forEach(folder => {
        folder.addEventListener('click', (e) => {
            const parentNode = folder.parentElement;
            parentNode.classList.toggle('collapsed');
            
            const arrow = folder.querySelector('.node-arrow');
            if (parentNode.classList.contains('collapsed')) {
                arrow.textContent = '▶';
            } else {
                arrow.textContent = '▼';
            }
        });
    });
    // 3. Agent Console & Logger
    const consoleLogs = document.getElementById('console-logs');
    const clearConsoleBtn = document.getElementById('clear-console');
    function logToConsole(message, type = 'system') {
        const time = new Date().toLocaleTimeString();
        const line = document.createElement('div');
        line.className = `log-line ${type}`;
        
        let prefix = '';
        if (type === 'system') prefix = `[${time}] `;
        else if (type === 'success') prefix = `[${time} OK] `;
        else if (type === 'info') prefix = `[${time} INFO] `;
        else if (type === 'warning') prefix = `[${time} WARNING] `;
        else if (type === 'command') prefix = `$ `;
        line.textContent = `${prefix}${message}`;
        consoleLogs.appendChild(line);
        consoleLogs.scrollTop = consoleLogs.scrollHeight;
    }
    clearConsoleBtn.addEventListener('click', () => {
        consoleLogs.innerHTML = '';
        logToConsole('Console pulita.', 'system');
    });
    // 4. Workflow Simulation Runs
    const runBuildBtn = document.getElementById('run-build-workflow');
    const runRevBtn = document.getElementById('run-rev-workflow');
    if (runBuildBtn) {
        runBuildBtn.addEventListener('click', () => {
            simulateBuildWorkflow();
        });
    }
    if (runRevBtn) {
        runRevBtn.addEventListener('click', () => {
            simulateRevisionWorkflow();
        });
    }
    function simulateBuildWorkflow() {
        runBuildBtn.disabled = true;
        runBuildBtn.style.opacity = '0.7';
        
        logToConsole('antigravity run-workflow build-website', 'command');
        
        const steps = [
            { delay: 400, text: '[AGENTE] Avvio workflow build-website...', type: 'system' },
            { delay: 1000, text: '[AGENTE] Lettura del file di origine: project/contenuti.md', type: 'system' },
            { delay: 1800, text: '[AGENTE] Struttura markdown identificata: Titolo, 2 Sezioni Principali, Lista ordinata, Lista descrittiva.', type: 'info' },
            { delay: 2500, text: '[AGENTE] Generazione del file HTML semantico: index.html...', type: 'info' },
            { delay: 3200, text: '[AGENTE] Applicazione stili e regole responsive: style.css...', type: 'info' },
            { delay: 3800, text: '[AGENTE] Configurazione della logica di comportamento: script.js...', type: 'info' },
            { delay: 4400, text: '[AGENTE] Verifica SEO e meta-tag superata con successo.', type: 'success' },
            { delay: 4800, text: '[OK] Workflow build-website completato! Il sito web è aggiornato e pronto.', type: 'success' }
        ];
        steps.forEach(step => {
            setTimeout(() => {
                logToConsole(step.text, step.type);
                if (step.text.includes('[OK]')) {
                    runBuildBtn.disabled = false;
                    runBuildBtn.style.opacity = '1';
                }
            }, step.delay);
        });
    }
    function simulateRevisionWorkflow() {
        runRevBtn.disabled = true;
        runRevBtn.style.opacity = '0.7';
        logToConsole('antigravity run-workflow revisione-codice', 'command');
        const steps = [
            { delay: 400, text: '[AGENTE] Avvio workflow revisione-codice...', type: 'system' },
            { delay: 900, text: '[AGENTE] Analisi del codice sorgente di index.html, style.css e script.js...', type: 'system' },
            { delay: 1600, text: '[AGENTE] Verifica degli standard semantici HTML5: CORRETTA', type: 'success' },
            { delay: 2200, text: '[AGENTE] Controllo accessibilità e chiavi uniche (Unique IDs): CORRETTO', type: 'success' },
            { delay: 2900, text: '[AGENTE] Ottimizzazione CSS: nessuna anomalia rilevata. Utilizzo corretto delle variabili HSL.', type: 'info' },
            { delay: 3500, text: '[AGENTE] Analisi Script: rilevata corretta prevenzione del default del click e propagazione.', type: 'info' },
            { delay: 4000, text: '[OK] Revisione completata! Il codice rispetta le best practice di sviluppo.', type: 'success' }
        ];
        steps.forEach(step => {
            setTimeout(() => {
                logToConsole(step.text, step.type);
                if (step.text.includes('[OK]')) {
                    runRevBtn.disabled = false;
                    runRevBtn.style.opacity = '1';
                }
            }, step.delay);
        });
    }
});