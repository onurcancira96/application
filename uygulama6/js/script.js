var eklenenlerjs =document.querySelector('.eklenenler').innerHTML;
var sayac =0;
var siljs= document.querySelector('.sil');
document.querySelector('.islem').addEventListener('click', islemjs);
function islemjs(){
        var b =document.querySelector('.islemIcerik').value;
        if(b==''){}
        else{
            ilkadim();
            ikinciadim();
            document.querySelector('.islemIcerik').value='';
            document.querySelector('.islemIcerik').focus();
        }

}
function ilkadim(){
    sayac = sayac+1;
    var icerik= document.querySelector('.islemIcerik').value;

    
      document.querySelector('.eklenenler').innerHTML =document.querySelector('.eklenenler').innerHTML +
        `
    <div class="check check1 rounded-1 d-flex mt-3">
        <div class="isaret">
            <input id="check${sayac}" type="checkbox">
            <label id="checkLabel${sayac}" for="check1" class="lead checkLabel">${icerik}</label>
        </div>
        <div class="d-flex ">
            <div id='duzenle${sayac}' class="duz duzenle rounded-1 me-1"><i class="bi bi-pencil-square"></i></div>
            <div id='sil${sayac}' class="sil rounded-1"><i class="bi bi-trash"></i></div>
        </div>
    </div>
        `;
}
function ikinciadim(){
        //tanımlama-----------------------------------------------
        const elemanlar = document.querySelectorAll('.check1');
        const silme = document.querySelectorAll('.sil');
        const duzenleme = document.querySelectorAll('.duz');
        const label = document.querySelectorAll('.checkLabel');
        const isaretleme = document.querySelectorAll('.isaret');
        //------------------------------------------------------
        //düzenleme-silme-kaydırma------------------------------
        for (let i=0; i<elemanlar.length; i++){
    
            duzenleme[i].addEventListener("click", function(){
                    let yeniIcerik = prompt("Yeni içeriği buraya yazınız.");
                    if (yeniIcerik != null) {
                      label[i].textContent = `${yeniIcerik}`;
                      console.log('alindi.')
                    } 
            })
    
            silme[i].addEventListener("click", function(){
                elemanlar[i].remove();
            })

    
            isaretleme[i].addEventListener("mouseup", function(){
                
                elemanlar[i].remove();
    
            document.querySelector('.eklenenler2').innerHTML =document.querySelector('.eklenenler2').innerHTML +
                `
            <div class="check check2 rounded-1 d-flex mt-3">
                <div class="isaret">
                    <input id="check${sayac}" type="checkbox"  checked="checked" disabled>
                    <label id="checkLabel${sayac}" for="check1" class="lead checkLabel2 text-decoration-line-through">${label[i].textContent}</label>
                </div>
                <div class="d-flex ">
                <div id='geri${sayac}' class="ger duzenle me-1 rounded-1"><i class="bi bi-arrow-counterclockwise"></i></div>
                    <div id='sil${sayac}' class="sil sil2 rounded-1"><i class="bi bi-trash"></i></div>
                </div>
            </div>
                `;
    const elemanlar2 = document.querySelectorAll('.check2');
    const label2 = document.querySelectorAll('.checkLabel2');
    const gerileme = document.querySelectorAll('.ger');
    const silme2 = document.querySelectorAll('.sil2');

    for (let i=0; i<elemanlar2.length; i++){
        silme2[i].addEventListener("click", function(){
            console.log('asdasd')
            elemanlar2[i].remove();
        })
    
        gerileme[i].addEventListener("click", function(){
            elemanlar2[i].remove();
            document.querySelector('.eklenenler').innerHTML =
            `
        <div class="check check1 rounded-1 d-flex mt-3">
            <div class="isaret">
                <input id="check${sayac}" type="checkbox" >
                <label id="checkLabel${sayac}" for="check1" class="lead checkLabel">${label2[i].textContent}</label>
            </div>
            <div class="d-flex ">
                <div id='duzenle${sayac}' class="duz duzenle rounded-1 me-1"><i class="bi bi-pencil-square"></i></div>
                <div id='sil${sayac}' class="sil rounded-1"><i class="bi bi-trash"></i></div>
            </div>
        </div>
            `+ document.querySelector('.eklenenler').innerHTML;
            ikinciadim();
        })
    
    
    
    }
    
     }
     
     )}
}