 let popup = document.querySelector('.infoPopup');
    console.log(popup);
    let onePopupOpened = false;

    function openPopup() {
        if(!onePopupOpened){
        popup.classList.add("open-popup");
        onePopupOpened = true;
        }
    }

    function closePopup() {
        popup.classList.remove("open-popup");
        onePopupOpened = false;
    }