// heart count handler
function handleHeartClick() {

    const heartCount = parseInt(document.getElementById('heart-count').innerText);
    const updatedHeartCount = heartCount + 1;
    return document.getElementById('heart-count').innerText = updatedHeartCount;



}

document.getElementById('heart-btn1').addEventListener('click', function (e) {
    e.preventDefault
    handleHeartClick();

});
document.getElementById('heart-btn2').addEventListener('click', function (e) {
    e.preventDefault
    handleHeartClick();

});
document.getElementById('heart-btn3').addEventListener('click', function (e) {
    e.preventDefault
    handleHeartClick();

});
document.getElementById('heart-btn4').addEventListener('click', function (e) {
    e.preventDefault
    handleHeartClick();

});
document.getElementById('heart-btn5').addEventListener('click', function (e) {
    e.preventDefault
    handleHeartClick();

});
document.getElementById('heart-btn6').addEventListener('click', function (e) {
    e.preventDefault
    handleHeartClick();

});
document.getElementById('heart-btn7').addEventListener('click', function (e) {
    e.preventDefault
    handleHeartClick();

});
document.getElementById('heart-btn8').addEventListener('click', function (e) {
    e.preventDefault
    handleHeartClick();

});
document.getElementById('heart-btn9').addEventListener('click', function (e) {
    e.preventDefault
    handleHeartClick();

});

// call button handler

const callButtons = document.querySelectorAll('.call-btn');
for (let callBtn of callButtons) {
    callBtn.addEventListener('click', function (e) {
        e.preventDefault;
        const serviceTitle = this.closest('.card-body').querySelector('.card-title').innerText;
        const serviceNumber = this.closest('.card-body').querySelector('.service-number').innerText;
        const date = new Date().toLocaleTimeString();
        if (parseInt(document.getElementById('coins').innerText) < 20) {
            return alert('Insufficient coins to make a call.At least 20 coins are required to make a call.');
        }
        alert(`Calling ${serviceTitle}  ${serviceNumber}...`);
        const amount = parseInt(document.getElementById('coins').innerText);
        const remaining = amount - 20;
        document.getElementById('coins').innerText = remaining;
        const callHistories = document.getElementById('call-histories');
        const newHistory = document.createElement('div');
        newHistory.innerHTML = `<div class=" px-4 py-4 rounded-lg mb-2  bg-[#fafafa]">
           <h3 class="font-semibold">${serviceTitle}</h3>
                <div class="flex justify-between  ">
                    <p>${serviceNumber}</p>
                    <p>${date}</p>
                </div>
        
        </div>`;
        callHistories.appendChild(newHistory);
    });
}
// clear history
document.getElementById('clear-btn').addEventListener('click', function (e) {
    e.preventDefault;
    document.getElementById('call-histories').innerText = '';
});
// copy button handler

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
       
    }).catch(err => {
        console.error('Failed to copy: ', err);
       
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        
        document.body.removeChild(textArea);
    });
}

// Add event listeners to copy buttons
const copyBtns = document.querySelectorAll('.copy-btn');
for(let copyBtn of copyBtns){
    copyBtn.addEventListener('click', function(e){
        e.preventDefault();
        
        
        alert(`Number copied to clipboard! ${this.closest('.card-body').querySelector('.service-number').innerText}`);
        
        
        const copyAmount = parseInt(document.getElementById('copy-count').innerText);
        const updateCopyAmount = copyAmount + 1;
        document.getElementById('copy-count').innerText = updateCopyAmount;
        
        
        const serviceNumber = this.closest('.card-body').querySelector('.service-number').innerText;
        copyToClipboard(serviceNumber);
        
        
        this.classList.add('copied');
        const originalHtml = this.innerHTML;
        
        setTimeout(() => {
            this.innerHTML = originalHtml;
            this.classList.remove('copied');
        }, 2000);
    });
}