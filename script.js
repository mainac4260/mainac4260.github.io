/**
 * Before / After 比較LP - Script
 * スクロール連動のフェードインアニメーション
 */
document.addEventListener('DOMContentLoaded', () => {
    // 比較行のフェードインアニメーション
    const rows = document.querySelectorAll('.comp-row');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // 各行を少しずつ遅延させて表示
                    const row = entry.target;
                    const delay = Array.from(rows).indexOf(row) * 100;
                    setTimeout(() => {
                        row.classList.add('visible');
                    }, delay);
                    observer.unobserve(row);
                }
            });
        },
        {
            threshold: 0.15,
            rootMargin: '0px 0px -40px 0px',
        }
    );

    rows.forEach((row) => {
        observer.observe(row);
    });

    // ページ上部に既に表示されている行を即座に表示
    setTimeout(() => {
        rows.forEach((row) => {
            const rect = row.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                row.classList.add('visible');
            }
        });
    }, 200);
});
