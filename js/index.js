const burgerBtn = document.querySelector('.header_burger')
const burgerContent = document.querySelector('.burger_content')

burgerBtn.addEventListener('click', function(){
    burgerContent.classList.toggle('moved')
    this.classList.toggle('burger_active')
})

const modalBtn = document.querySelectorAll('[data-modal-button')
const modals = document.querySelectorAll('[data-modal')
const modalClose = document.querySelectorAll    ('[data-modal-close]')

modalClose.forEach(function(item){
    item.addEventListener('click', function(){
        const modalCloseID = this.dataset.modalClose
        const thisWndw = document.querySelector('#' + modalCloseID)
        thisWndw.classList.add('hidden')
    })
})

modalBtn.forEach (function(item){
    item.addEventListener('click', function(){
        const modalId = this.dataset.modalButton
        const modalWndw = document.querySelector('#' + modalId)
        modalWndw.classList.remove('hidden')
        modalWndw.querySelector('.modal_info').addEventListener('click', function(e){
            e.stopPropagation();
        })

    })
});
modals.forEach (function(item){
    item.addEventListener('click', function(){
        this.classList.add('hidden')
    })
});

$(".whatsapp_num").mask("+7(999) 999-9999");
