document.addEventListener('DOMContentLoaded', function () {
    var offcanvasTrigger = document.querySelector('[data-bs-target="#offcanvasWithBothOptions"]');
    var offcanvasBody = document.querySelector('.offcanvas-body');

    offcanvasTrigger.addEventListener('click', function () {
        offcanvasBody.classList.remove('offcanvas-body-hidden');
    });
});
