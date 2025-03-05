
        const slider = document.querySelector('.slider');
        const slides = document.querySelectorAll('.slide');
        const priceTag = document.querySelector('.price');
        let index = 0;

        function updateSlider() {
            slider.style.transform = `translateX(-${index * 100}%)`;
            priceTag.textContent = slides[index].dataset.price;
        }

        document.querySelector('.next').addEventListener('click', () => {
            index = (index + 1) % slides.length;
            updateSlider();
        });

        document.querySelector('.prev').addEventListener('click', () => {
            index = (index - 1 + slides.length) % slides.length;
            updateSlider();
        });
