document.addEventListener("DOMContentLoaded", function() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    // Функция открытия/закрытия мобильного меню
    function toggleMobileMenu() {
        mobileMenu.classList.toggle('active');
        console.log('Mobile menu toggled:', mobileMenu.classList.contains('active'));
    }

    // Добавление кнопки закрытия в мобильное меню
    const closeBtn = document.createElement('div');
    closeBtn.className = 'close-mobile-menu';
    closeBtn.innerHTML = '&times;';
    closeBtn.onclick = function(e) {
        e.stopPropagation();
        toggleMobileMenu();
    };
    mobileMenu.insertBefore(closeBtn, mobileMenu.firstChild);

    // Обработчик клика по кнопке открытия меню
    mobileMenuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMobileMenu();
    });

    // Закрытие меню при клике вне его области
    document.addEventListener('click', function(e) {
        // Проверка, что клик был не внутри мобильного меню и не на кнопке открытия
        if (!mobileMenu.contains(e.target) && 
            !mobileMenuToggle.contains(e.target)) {
            if (mobileMenu.classList.contains('active')) {
                toggleMobileMenu();
            }
        }
    });
});
