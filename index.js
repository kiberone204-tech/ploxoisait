document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Переключение миниатюр в галерее изображений
    const thumbs = document.querySelectorAll('.thumb');
    const mainImg = document.getElementById('main-img');

    thumbs.forEach(thumb => {
        thumb.addEventListener('click', function() {
            // Смена основного изображения
            mainImg.src = this.src;
            
            // Смена активного класса у миниатюр
            thumbs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // 2. Логика работы Табов (Описание / Характеристики)
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            // Переключение кнопок
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Переключение видимости контента
            tabPanels.forEach(panel => {
                if (panel.id === targetTab) {
                    panel.classList.add('active');
                } else {
                    panel.classList.remove('active');
                }
            });
        });
    });

    // 3. Обработка формы обратной связи
    const leadForm = document.getElementById('lead-form');
    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Здесь будет логика отправки на бэкенд (например, Java/Spring API)
            alert('Спасибо! Заявка успешно принята. Мы свяжемся с вами в ближайшее время.');
            leadForm.reset();
        });
    }
});