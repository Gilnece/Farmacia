const form = document.querySelector('#contact-form');
const feedback = document.querySelector('#form-feedback');
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav a');

const fields = {
    name: {
        input: document.querySelector('#name'),
        error: document.querySelector('#name-error'),
        message: 'Informe seu nome completo.'
    },
    email: {
        input: document.querySelector('#email'),
        error: document.querySelector('#email-error'),
        message: 'Informe um e-mail válido.'
    },
    message: {
        input: document.querySelector('#message'),
        error: document.querySelector('#message-error'),
        message: 'Descreva como podemos ajudar.'
    }
};

const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const setFieldError = (field, message = '') => {
    if (!field.input || !field.error) return;

    field.error.textContent = message;
    field.input.setAttribute('aria-invalid', String(Boolean(message)));
    field.input.setAttribute('aria-describedby', field.error.id);
};

const validateField = fieldName => {
    const field = fields[fieldName];
    if (!field?.input) return true;

    const value = field.input.value.trim();
    let message = '';

    if (!value) {
        message = field.message;
    } else if (fieldName === 'email' && !isValidEmail(value)) {
        message = field.message;
    }

    setFieldError(field, message);
    return !message;
};

const closeMenu = () => {
    mainNav?.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', 'Abrir menu');
};

Object.keys(fields).forEach(fieldName => {
    const field = fields[fieldName];

    field.input?.addEventListener('input', () => {
        if (field.input.getAttribute('aria-invalid') === 'true') {
            validateField(fieldName);
        }

        if (feedback) feedback.textContent = '';
    });
});

form?.addEventListener('submit', event => {
    event.preventDefault();

    const validations = Object.keys(fields).map(validateField);
    const firstInvalid = Object.values(fields).find(field => field.input?.getAttribute('aria-invalid') === 'true');

    if (validations.includes(false)) {
        if (feedback) {
            feedback.textContent = 'Revise os campos destacados para enviar sua mensagem.';
            feedback.style.color = '#b42318';
        }

        firstInvalid?.input?.focus();
        return;
    }

    form.reset();

    Object.values(fields).forEach(field => setFieldError(field));

    if (feedback) {
        feedback.textContent = 'Mensagem enviada. Em breve nossa equipe retornará o contato.';
        feedback.style.color = '#067647';
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', event => {
        const targetId = link.getAttribute('href');
        const target = targetId ? document.querySelector(targetId) : null;

        if (!target) return;

        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        closeMenu();
    });
});

menuToggle?.addEventListener('click', () => {
    if (!mainNav) return;

    const isOpen = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        closeMenu();
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 760) {
        closeMenu();
    }
});
