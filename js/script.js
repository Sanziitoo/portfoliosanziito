document.addEventListener('DOMContentLoaded', () => {
    // Rolagem suave para todos os links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Sistema de Troca de Idioma (PT / EN)
    const langToggleBtn = document.getElementById('lang-toggle');
    let currentLang = 'pt';

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            currentLang = currentLang === 'pt' ? 'en' : 'pt';
            langToggleBtn.textContent = currentLang === 'pt' ? 'EN' : 'PT';

            const translatableElements = document.querySelectorAll('[data-pt]');

            translatableElements.forEach(el => {
                if (currentLang === 'en') {
                    el.innerHTML = el.getAttribute('data-en');
                } else {
                    el.innerHTML = el.getAttribute('data-pt');
                }
            });
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const langToggleBtn = document.getElementById("lang-toggle");
    
    // Recupera o idioma salvo no localStorage (padrão é 'pt')
    let currentLang = localStorage.getItem("site_lang") || "pt";
    
    // Aplica o idioma ao carregar a página
    setLanguage(currentLang);

    if (langToggleBtn) {
        langToggleBtn.addEventListener("click", () => {
            currentLang = currentLang === "pt" ? "en" : "pt";
            localStorage.setItem("site_lang", currentLang);
            setLanguage(currentLang);
        });
    }

    function setLanguage(lang) {
        // Altera o texto do botão (se estiver em PT, mostra "EN" para mudar; se em EN, mostra "PT")
        if (langToggleBtn) {
            langToggleBtn.textContent = lang === "pt" ? "EN" : "PT";
        }

        // Traduz todos os elementos que possuem os atributos data-pt e data-en
        const translatableElements = document.querySelectorAll("[data-pt][data-en]");
        translatableElements.forEach(el => {
            if (lang === "en") {
                el.innerHTML = el.getAttribute("data-en");
            } else {
                el.innerHTML = el.getAttribute("data-pt");
            }
        });
    }
});