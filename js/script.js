// Инициализация после загрузки DOM
document.addEventListener('DOMContentLoaded', function() {

    /**
     * Обработка формы подписки на email-рассылку
     */

    const form = document.querySelector('.footer__input-email');
    const emailInput = document.getElementById('footer-email');

    form.addEventListener('submit', function(e) {
        // Предотвращаем стандартное поведение формы
        e.preventDefault();
        
        // Регулярное выражение для проверки корректности email
        // Проверяет наличие @ и домена после точки
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        // Проверяем валидность введенного email
        if (!emailRegex.test(emailInput.value)) {
            alert('Пожалуйста, введите корректный email');
            return;
        }
        
        // При успешной валидации показываем уведомление и очищаем поле
        alert(`Ваш email ${emailInput.value} теперь подписан на рассылку`);
        emailInput.value = '';
    });



    /**
     * Обработка кнопки бургер-меню
     */

    const burgerButton = document.querySelector('.header__burger-button');

    burgerButton.addEventListener('click', () => {
        document.body.classList.toggle('open-burger');
    });

});