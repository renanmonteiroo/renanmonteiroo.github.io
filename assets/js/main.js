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
        text_key: 'testimonial_1_text',
        author_key: 'testimonial_1_author',
        role_key: 'testimonial_1_role',
        image: 'assets/imgs/avatar-1.jpg'
    },
    {
        text_key: 'testimonial_2_text',
        author_key: 'testimonial_2_author',
        role_key: 'testimonial_2_role',
        image: 'assets/imgs/avatar-2.jpg'
    },
    {
        text_key: 'testimonial_3_text',
        author_key: 'testimonial_3_author',
        role_key: 'testimonial_3_role',
        image: 'assets/imgs/avatar-3.jpg'
    }
];

//================================================
// TRADUÇÕES (CONSOLIDADO AQUI)
//================================================
const allTranslations = {
    'pt-br': {
        // Título do site
        'site_title': 'Renan Monteiro',
        
        // Navegação
        'nav_home': 'Home',
        'nav_about': 'Sobre',
        'nav_services': 'Serviços',
        'nav_portfolio': 'Portfólio',
        'nav_contact': 'Contato',
        
        // Idiomas
        'language_portuguese': 'Português (BR)',
        'language_english': 'English (US)',
        'language_russian': 'Русский (RU)',
        
        // Header
        'header_greeting': 'Prazer, sou',
        'header_contact_btn': 'ENTRE EM CONTATO!',
        'typing_effect_items': 'Desenvolvedor Back-end Java,Especialista em Microserviços,Apaixonado por Código Limpo',
        
        // Sobre
        'about_title': 'Prazer, Renan Monteiro',
        'about_subtitle': 'Desenvolvedor de software',
        'about_p1': 'Sou apaixonado por tecnologia e por tudo o que envolve construção de soluções inteligentes. Desde muito jovem tive contato com computadores e, ao longo dos anos, transformei essa curiosidade em profissão.',
        'about_p2': 'Sou formado em Ciências da Computação pela UNIFG e possuo pós-graduação em Teste e Qualidade de Software pela UNINASSAU, concluída em 2019. Minha trajetória acadêmica e profissional me proporcionou experiência em análise, desenvolvimento, testes e manutenção de sistemas, sempre buscando criar aplicações estáveis, eficientes e de fácil uso.',
        'about_p3': 'Ao longo da carreira, trabalhei com diversas ferramentas, tecnologias e metodologias, o que me fez desenvolver uma visão ampla sobre o ciclo de vida de software e sobre as boas práticas de desenvolvimento. Gosto de aprender continuamente e estou sempre explorando novas soluções, frameworks, linguagens e tendências do mercado.',
        'about_p4': 'Este site foi criado com finalidade educacional, como parte do meu processo de estudo e aprimoramento. Aqui compartilho meu primeiro portfólio pessoal, hospedado no GitHub Pages, onde também pretendo divulgar projetos, experimentos, códigos e conteúdos relacionados ao universo da programação.',
        'about_p5': 'Fique à vontade para navegar, conhecer meu trabalho e acompanhar minha evolução.',
        
        // Serviços
        'services_subtitle': 'Serviços',
        'services_title': 'O que eu faço',
        'services_desc': 'Foco em desenvolvimento back-end, microserviços e aplicações web.<br>3 anos de experiência utilizando as tecnologias Java, Spring Boot, JSP, JSF <br>Banco de dados MySql, Postgresql, Oracle',
        'services_api': 'API',
        'services_microservices': 'Micro Serviços',
        'services_webapps': 'Aplicações Web',
        'services_database': 'Banco de Dados',
        
        // Skills
        'skills_subtitle': 'Skills',
        'skills_title': 'Por que me contratar?',
        'skills_agile': 'Metodologia Ágeis',
        'skills_db': 'Banco de dados',
        'skills_pm': 'Gerenciamento de Projetos',
        
        // Portfólio
        'portfolio_subtitle': 'Portfólio',
        'portfolio_title': 'Veja Meus Projetos',
        'portfolio_desc': 'Aqui estão alguns dos projetos em que trabalhei, demonstrando minhas habilidades em diferentes tecnologias.',
        'portfolio_filter_all': 'Todos',
        'portfolio_filter_backend': 'Back-end',
        'portfolio_filter_frontend': 'Front-end',
        
        // Depoimentos
        'testimonials_subtitle': 'Depoimentos',
        'testimonials_title': 'O que meus clientes dizem',
        'testimonials_desc': 'Confira o feedback de alguns dos meus clientes e admiradores.',
        'testimonial_1_text': 'Renan é um desenvolvedor excepcional, sempre entregando soluções de alta qualidade e superando as expectativas. Recomendo fortemente!',
        'testimonial_1_author': 'Ana Silva',
        'testimonial_1_role': 'Gerente de Projetos',
        'testimonial_2_text': 'Trabalhar com Renan foi uma experiência fantástica. Sua expertise em Java e Spring Boot é impressionante e ele é um ótimo comunicador.',
        'testimonial_2_author': 'Carlos Oliveira',
        'testimonial_2_role': 'CTO',
        'testimonial_3_text': 'A atenção aos detalhes e a capacidade de resolver problemas complexos de Renan são inigualáveis. Um profissional de primeira linha!',
        'testimonial_3_author': 'Mariana Costa',
        'testimonial_3_role': 'Desenvolvedora Sênior',
        
        // Contrate-me
        'hire_me_title': 'Compartilhe comigo seu projeto incrível',
        'hire_me_btn': 'Fale Comigo!',
        
        // Contato
        'contact_subtitle': 'Contato',
        'contact_title': 'Fale Comigo Agora',
        'contact_form_subtitle': 'Disponível 24/7',
        'contact_form_title': 'Mande uma mensagem',
        'contact_form_name_placeholder': 'Seu nome',
        'contact_form_message_placeholder': 'Mensagem',
        'contact_form_send_btn': 'Enviar Mensagem',
        'contact_info_location': 'Localização',
        'contact_info_address': 'Rua i, Barra de Jangada, Jaboatão dos Guararapes',
        'contact_info_phone': 'Telefone',
        'contact_info_email': 'Email',
        
        // Modal de Projeto
        'modal_view_demo': 'Ver Demo',
        'modal_view_code': 'Ver Código',
        'modal_close': 'Fechar',
        'modal_technologies': 'Tecnologias:',

        // Footer
        'footer_copyright': 'Copyright'
    },
    // ... (restante das traduções para 'en' e 'ru' serão adicionadas aqui)
};

let currentTranslations = {}; // Variável para armazenar as traduções do idioma atual

//================================================
// INTERNACIONALIZAÇÃO (i18n)
//================================================

async function loadTranslations(lang) {
    try {
        currentTranslations = allTranslations[lang];
        if (!currentTranslations) {
            console.warn(`Translations for '${lang}' not found, falling back to 'pt-br'.`);
            currentTranslations = allTranslations['pt-br']; // Fallback para o idioma padrão
        }
        applyTranslations(); // Aplica as traduções após carregar
    } catch (error) {
        console.error('Failed to load translations:', error);
    }
}

function applyTranslations() {
    // Atualiza o título da página
    const siteTitleElement = document.querySelector('title[data-key="site_title"]');
    if (siteTitleElement) {
        siteTitleElement.textContent = currentTranslations['site_title'] || 'Renan Monteiro';
    }

    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (currentTranslations[key]) {
            if (element.hasAttribute('data-placeholder-key')) {
                element.placeholder = currentTranslations[key];
            } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') { // Para inputs que não são placeholders mas tem data-key
                // Apenas atualiza o placeholder se existir
                if (element.placeholder) {
                    element.placeholder = currentTranslations[key];
                }
            }
            else {
                element.innerHTML = currentTranslations[key];
            }
        }
    });
    // Atualiza o efeito de digitação e os projetos com o novo idioma
    // Garante que o tema atual seja aplicado novamente para atualizar o ícone
    applyTheme(localStorage.getItem('theme') || 'light'); 
    const currentFilter = document.querySelector('#portfolio-filters button.active')?.getAttribute('data-filter') || 'all';
    
    // Re-renderiza o portfólio e depoimentos com o novo idioma
    renderTestimonials(); // Renderiza depoimentos com o novo idioma
    setupTypingEffect(); // Re-inicializa o efeito de digitação com o novo idioma
    renderProjects(currentFilter);
    
    // Atualiza os textos dos botões do modal
    if (document.getElementById('modal-project-demo')) {
        document.getElementById('modal-project-demo').textContent = currentTranslations['modal_view_demo'] || 'Ver Demo';
    }
    if (document.getElementById('modal-project-code')) {
        document.getElementById('modal-project-code').textContent = currentTranslations['modal_view_code'] || 'Ver Código';
    }
    if (document.getElementById('modal-project-tech')) { // Verifica se o elemento existe antes de tentar acessar previousElementSibling
        const techLabel = document.getElementById('modal-project-tech').previousElementSibling;
        if (techLabel) {
            techLabel.textContent = currentTranslations['modal_technologies'] || 'Tecnologias:';
        }
        const closeButton = document.querySelector('#projectDetailModal .modal-footer button');
        if (closeButton) {
            closeButton.textContent = currentTranslations['modal_close'] || 'Fechar';
        }
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
    const items = currentTranslations[itemsKey] ? currentTranslations[itemsKey].split(',') : [];
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
                                <h5>${currentTranslations[project.title_key]}</h5>
                                <p>${currentTranslations[project.description_key]}</p>
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
            const project = projects.find(p => p.title_key === projectId);

            if (project) {
                this.querySelector('.modal-title').textContent = currentTranslations[project.title_key] || project.title_key;
                this.querySelector('#modal-project-image').src = project.image;
                this.querySelector('#modal-project-description').innerHTML = currentTranslations[project.description_key];
                this.querySelector('#modal-project-tech').textContent = currentTranslations[project.tech_key];
                
                const demoLink = this.querySelector('#modal-project-demo');
                demoLink.href = project.demoUrl;
                demoLink.textContent = currentTranslations['modal_view_demo'];
                demoLink.style.display = project.demoUrl && project.demoUrl !== '#' ? 'inline-block' : 'none';

                const codeLink = this.querySelector('#modal-project-code');
                codeLink.href = project.codeUrl;
                codeLink.textContent = currentTranslations['modal_view_code'];
                codeLink.style.display = project.codeUrl && project.codeUrl !== '#' ? 'inline-block' : 'none';

                this.querySelector('.modal-footer button').textContent = currentTranslations['modal_close'];
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
                            <img src="${testimonial.image}" alt="${currentTranslations[testimonial.author_key]}">
                            <p>"${currentTranslations[testimonial.text_key]}"</p>
                            <h1 class="title">${currentTranslations[testimonial.author_key]}</h1>
                            <h1 class="subtitle">${currentTranslations[testimonial.role_key]}</h1>
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
    const savedTheme = localStorage.getItem('theme') || 'light'; // 'light' como padrão
    applyTheme(savedTheme);
    observeElements();
});