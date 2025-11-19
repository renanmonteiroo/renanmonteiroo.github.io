//================================================
// DADOS DOS PROJETOS (SIMULANDO UMA API)
//================================================
const projects = [
    {
        title_key: 'project_1_title',
        description_key: 'project_1_desc',
        image: 'assets/imgs/folio-1.jpg',
        demoUrl: '#',
        codeUrl: 'https://github.com/renanmonteiroo/ecommerce-api',
        category: 'backend',
        tech_key: 'project_1_tech'
    },
    { // Dashboard Administrativo
        title_key: 'project_2_title',
        description_key: 'project_2_desc', // Interface para visualização de dados e gerenciamento de conteúdo.
        image: 'assets/imgs/folio-2.jpg',
        demoUrl: '#',
        codeUrl: 'https://github.com/renanmonteiroo/admin-dashboard',
        category: 'frontend',
        tech_key: 'project_2_tech'
    },
    { // Microsserviço de Autenticação
        title_key: 'project_3_title',
        description_key: 'project_3_desc',
        image: 'assets/imgs/folio-3.jpg',
        demoUrl: '#',
        codeUrl: 'https://github.com/renanmonteiroo/auth-microservice',
        category: 'backend',
        tech_key: 'project_3_tech'
    },
    { // Landing Page Responsiva
        title_key: 'project_4_title',
        description_key: 'project_4_desc', // Página de marketing desenvolvida com foco em performance e SEO.
        image: 'assets/imgs/folio-4.jpg',
        demoUrl: '#',
        codeUrl: 'https://github.com/renanmonteiroo/responsive-landing-page',
        category: 'frontend',
        tech_key: 'project_4_tech'
    }
];

//================================================
// DADOS DOS DEPOIMENTOS
//================================================
const testimonials = [
    {
        text_key: 'Ooora porra!!!',
        author_key: 'Guilherme Calvo',
        role_key: 'Hater',
        image: 'assets/imgs/guilherme.jpg' // Substitua por imagens reais
    },
    {
        text_key: 'Olha o braço dele!',
        author_key: 'Garotinho autista',
        role_key: 'Admirador ',
        image: 'assets/imgs/washington.jpg'
    },
    {
        text_key: 'Muito racista, me trata mal pessoas negras!',
        author_key: 'Não identificado',
        role_key: 'Cliente não binário',
        image: 'assets/imgs/lucas.jpg'
    }
];

//================================================
// INTERNACIONALIZAÇÃO (i18n)
//================================================
let translations = {};

async function loadTranslations(lang) {
    try {
        const response = await fetch(`assets/lang/${lang}.json`);
        if (!response.ok) {
            throw new Error(`Could not load ${lang}.json`);
        }
        translations = await response.json();
        applyTranslations();
    } catch (error) {
        console.error('Failed to load translations:', error);
    }
}

function applyTranslations() {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[key]) {
            if (element.hasAttribute('data-placeholder-key')) {
                element.placeholder = translations[key];
            } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') { // Para inputs que não são placeholders mas tem data-key
                element.value = translations[key];
            }
            else {
                element.innerHTML = translations[key];
            }
        }
    });
    // Atualiza o efeito de digitação e os projetos com o novo idioma
    // Garante que o tema atual seja aplicado novamente para atualizar o ícone
    applyTheme(localStorage.getItem('theme') || 'light'); 
    const currentFilter = document.querySelector('#portfolio-filters button.active')?.getAttribute('data-filter') || 'all';
    
    // Re-renderiza o portfólio e depoimentos com o novo idioma
    renderTestimonials(); // Renderiza depoimentos com o novo idioma
    setupTypingEffect();
    renderProjects(currentFilter);
    
    // Atualiza os textos dos botões do modal
    if (document.getElementById('modal-project-demo')) {
        document.getElementById('modal-project-demo').textContent = translations['modal_view_demo'] || 'Ver Demo';
    }
    if (document.getElementById('modal-project-code')) {
        document.getElementById('modal-project-code').textContent = translations['modal_view_code'] || 'Ver Código';
    }
    if (document.querySelector('#projectDetailModal .modal-footer button')) {
        document.querySelector('#projectDetailModal .modal-footer button').textContent = translations['modal_close'] || 'Fechar';
    }
}

function changeLanguage(lang) {
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang.split('-')[0].toUpperCase();
    loadTranslations(lang);
}

//================================================
// EFEITO DE DIGITAÇÃO
//================================================
let typingEffectElement;
let typingInterval;

function setupTypingEffect() {
    typingEffectElement = document.getElementById('typing-effect');
    if (!typingEffectElement) return;

    const itemsKey = 'typing_effect_items';
    const items = translations[itemsKey] ? translations[itemsKey].split(',') : [];
    let itemIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    clearInterval(typingInterval); // Limpa o intervalo anterior

    function type() {
        const currentItem = items[itemIndex];
        const currentText = isDeleting ? currentItem.substring(0, charIndex--) : currentItem.substring(0, charIndex++);
        typingEffectElement.textContent = currentText;
        typingEffectElement.classList.add('typing');

        const typeSpeed = isDeleting ? 100 : 200;
        if (!isDeleting && charIndex === currentItem.length + 1) {
            setTimeout(() => isDeleting = true, 2000);
        } else if (isDeleting && charIndex === -1) {
            isDeleting = false;
            itemIndex = (itemIndex + 1) % items.length;
        }
    }
    typingInterval = setInterval(type, 150);
}

//================================================
// SELETOR DE TEMA (DARK MODE)
//================================================
function applyTheme(theme) {
    const themeToggleIcon = document.querySelector('#theme-toggle i');
    if (theme === 'dark') {
        document.body.classList.add('dark-theme'); // Aplica a classe para o tema escuro
        if(themeToggleIcon) themeToggleIcon.className = 'ti-shine'; // Ícone de sol para sugerir tema claro
    } else {
        document.body.classList.remove('dark-theme');
        if(themeToggleIcon) themeToggleIcon.className = 'ti-moon'; // Ícone de lua para sugerir tema escuro
    }
    localStorage.setItem('theme', theme);
}

function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
}


document.addEventListener('DOMContentLoaded', function () {

    //================================================
    // 1. ANIMAÇÕES AO ROLAR A PÁGINA (SCROLL REVEAL)
    //================================================
    const observerOptions = {
        root: null, // Observa em relação ao viewport
        rootMargin: '0px',
        threshold: 0.1 // Ativa quando 10% do elemento está visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Para de observar após a animação
            }
        });
    }, observerOptions);

    // Seleciona todos os elementos que queremos animar
    window.observeElements = function() { // Tornar global para re-observar após renderização dinâmica
        const elementsToAnimate = document.querySelectorAll('.custom-card, .progress, .contact .form, .contact .contact-infos, .img-wrapper');
        elementsToAnimate.forEach(el => {
            observer.observe(el);
        });
    }
    //================================================
    // 2. BOTÃO "VOLTAR AO TOPO"
    //================================================
    const scrollToTopBtn = document.getElementById('scroll-to-top');

    window.addEventListener('scroll', () => {
        // Mostra o botão se o scroll passar de 300px
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Rolagem suave
        });
    });


    //================================================
    // 3. NAVEGAÇÃO ATIVA COM SCROLL
    //================================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    const onScroll = () => {
        const scrollPosition = window.scrollY + 150; // Adiciona um offset

        sections.forEach(section => {
            if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                const currentId = section.getAttribute('id');
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    // Verifica se o href do link corresponde ao ID da seção
                    if (link.getAttribute('href') === `#${currentId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });

        // Caso especial para a seção "home" no topo
        if (window.scrollY < 400) {
             navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#home') {
                    link.classList.add('active');
                }
             });
        }
    };

    window.addEventListener('scroll', onScroll);
    // Executa uma vez no carregamento para o caso da página carregar no meio
    onScroll();
    
    //================================================
    // 4. RENDERIZAÇÃO E FILTRO DE PORTFÓLIO
    //================================================
    const portfolioGrid = document.getElementById('portfolio-grid');
    const filterButtons = document.querySelectorAll('#portfolio-filters button');

    window.renderProjects = function(filter = 'all') {
        if (!portfolioGrid) return;
        portfolioGrid.innerHTML = '';
        const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

        filteredProjects.forEach(project => {
            const projectCard = `
                <div class="col-md-6 col-lg-4">
                    <div class="img-wrapper" data-project-id="${project.title_key}" data-toggle="modal" data-target="#projectDetailModal">
                        <img src="${project.image}" alt="${project.title}">
                        <div class="overlay">
                            <div class="overlay-infos">
                                <h5>${translations[project.title_key] || project.title_key}</h5>
                                <p>${translations[project.description_key] || project.description_key}</p>
                                <a href="${project.demoUrl}" target="_blank" title="Ver Demo"><i class="ti-link"></i></a>
                                <a href="${project.codeUrl}" target="_blank" title="Ver Código"><i class="ti-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            portfolioGrid.insertAdjacentHTML('beforeend', projectCard);
        });
        // Re-observa os novos elementos para animação
        observeElements();
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove a classe 'active' de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Adiciona 'active' ao botão clicado
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            renderProjects(filter);
        });
    });

    //================================================
    // 5. MODAL DE DETALHES DO PROJETO
    //================================================
    const projectDetailModal = document.getElementById('projectDetailModal');
    if (projectDetailModal) {
        projectDetailModal.addEventListener('show.bs.modal', function (event) {
            const button = event.relatedTarget; // Botão que acionou o modal
            const projectId = button.getAttribute('data-project-id'); // Usar o title_key como ID
            const project = projects.find(p => p.title_key.replace(/_/g, '-') === projectId);

            if (project) {
                this.querySelector('.modal-title').textContent = translations[project.title_key] || project.title_key;
                this.querySelector('#modal-project-image').src = project.image;
                this.querySelector('#modal-project-description').innerHTML = translations[project.description_key] || project.description_key;
                this.querySelector('#modal-project-tech').textContent = translations[project.tech_key] || project.tech_key;
                
                const demoLink = this.querySelector('#modal-project-demo');
                demoLink.href = project.demoUrl;
                demoLink.textContent = translations['modal_view_demo'] || 'Ver Demo';
                demoLink.style.display = project.demoUrl && project.demoUrl !== '#' ? 'inline-block' : 'none';

                const codeLink = this.querySelector('#modal-project-code');
                codeLink.href = project.codeUrl;
                codeLink.textContent = translations['modal_view_code'] || 'Ver Código';
                codeLink.style.display = project.codeUrl && project.codeUrl !== '#' ? 'inline-block' : 'none';

                this.querySelector('.modal-footer button').textContent = translations['modal_close'] || 'Fechar';
            }
        });
    }

    //================================================
    // 6. CARROSSEL DE DEPOIMENTOS DINÂMICO
    //================================================
    window.renderTestimonials = function() {
        const carouselIndicators = document.querySelector('#carouselExampleIndicators .carousel-indicators');
        const carouselInner = document.getElementById('testimonials-carousel-inner');

        if (!carouselIndicators || !carouselInner) return;

        carouselIndicators.innerHTML = '';
        carouselInner.innerHTML = '';

        testimonials.forEach((testimonial, index) => {
            // Indicador
            const indicator = `<li data-target="#carouselExampleIndicators" data-slide-to="${index}" class="${index === 0 ? 'active' : ''}"></li>`;
            carouselIndicators.insertAdjacentHTML('beforeend', indicator);

            // Item do Carrossel
            const carouselItem = `
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                    <div class="card testmonial-card border">
                        <div class="card-body">
                            <img src="${testimonial.image}" alt="${translations[testimonial.author_key] || testimonial.author_key}">
                            <p>${translations[testimonial.text_key] || testimonial.text_key}</p>
                            <h1 class="title">${translations[testimonial.author_key] || testimonial.author_key}</h1>
                            <h1 class="subtitle">${translations[testimonial.role_key] || testimonial.role_key}</h1>
                        </div>
                    </div>
                </div>
            `;
            carouselInner.insertAdjacentHTML('beforeend', carouselItem);
        });
    };

    //================================================
    // 7. ANIMAÇÃO DAS BARRAS DE PROGRESSO
    //================================================
    document.querySelectorAll('.progress-bar').forEach(bar => {
        bar.style.width = bar.getAttribute('aria-valuenow') + '%'; // Define a largura inicial
    });

    //================================================
    // EVENT LISTENER PARA O SELETOR DE TEMA
    //================================================
    const themeToggleButton = document.getElementById('theme-toggle');
    if(themeToggleButton) {
        themeToggleButton.addEventListener('click', function(e) {
            e.preventDefault();
            toggleTheme();
        });
    }

    //================================================
    // INICIALIZAÇÃO
    //================================================
    const initialLang = localStorage.getItem('language') || 'pt-br';
    changeLanguage(initialLang);
    renderTestimonials(); // Renderiza depoimentos na inicialização
    const savedTheme = localStorage.getItem('theme') || 'light'; // 'light' como padrão
    applyTheme(savedTheme);
    observeElements();
});