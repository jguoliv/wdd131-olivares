const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

gallery.addEventListener('click', openModal);

function openModal(e) {
    if (e.target.tagName !== 'IMG') return;

    const smallSrc = e.target.src;
    const largeSrc = smallSrc.replace('-sm', '-full');

    modal.classList.remove('show');

    modalImage.src = largeSrc;
    modalImage.alt = e.target.alt;

    modalImage.offsetHeight;

    modal.showModal();

    modal.classList.add('show');
}


closeButton.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.close();
    }
});