document.addEventListener('DOMContentLoaded', function() {
    // تنقل القائمة
    const menuItems = document.querySelectorAll('.menu-item');
    const sections = {
        dashboard: document.getElementById('dashboard-section'),
        modules: document.getElementById('modules-section'),
        quizzes: document.getElementById('quizzes-section'),
        certificates: document.getElementById('certificates-section')
    };

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // إزالة النشط من جميع العناصر
            menuItems.forEach(i => i.classList.remove('active'));
            
            // إضافة النشط للعنصر الحالي
            this.classList.add('active');
            
            // إخفاء جميع الأقسام
            Object.values(sections).forEach(section => {
                if(section) section.style.display = 'none';
            });
            
            // إظهار القسم المحدد
            const sectionId = this.dataset.section + '-section';
            if(sections[this.dataset.section]) {
                sections[this.dataset.section].style.display = 'block';
            }
        });
    });
    
    // تأثيرات تقدم التعلم
    function animateProgressBars() {
        document.querySelectorAll('.progress-bar').forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0%';
            
            setTimeout(() => {
                bar.style.transition = 'width 1.5s ease-in-out';
                bar.style.width = width;
            }, 300);
        });
    }
    
    // تأثيرات للبطاقات
    function animateCards() {
        const cards = document.querySelectorAll('.module-card, .stat-card');
        cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
        });
    }
    
    // تهيئة التأثيرات
    animateProgressBars();
    animateCards();
    
    // تنزيل الشهادة
    document.addEventListener('click', function(e) {
        if(e.target.classList.contains('btn-primary') && e.target.textContent.includes('تنزيل')) {
            alert('سيبدأ تنزيل شهادتك الآن. في النسخة الكاملة سيتم إنشاء ملف PDF للشهادة.');
            // يمكنك إضافة منطق تنزيل حقيقي هنا
        }
    });
});
