const modalRoadmapLinks = document.getElementsByClassName('modal-roadmap');
for (const link of modalRoadmapLinks) {
    link.addEventListener('click', openModal);
}

function openModal() {
    $('#formModal').modal('toggle');
}