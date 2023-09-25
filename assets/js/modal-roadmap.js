linkModalHead = document.getElementById('link-modal-headband');
linkModalHead.addEventListener('click', openModal);
linkModalSection = document.getElementById('link-modal-section');
linkModalSection.addEventListener('click', openModal);
linkModalSide = document.getElementById('link-modal-side');
linkModalSide.addEventListener('click', openModal);

function openModal() {
    $('#formModal').modal('toggle');
}