let paragraph = document.querySelector("p")
let button = document.querySelector("button")

const months = ['"ليس العار في أن نسقط، ولكنّ العار ألا نستطيع النّهوض"', 
'"المتفائل إنسان يرى ضوءاً غير موجود، والمتشائم أحمق يرى ضوءاً و لا يصدّقه".'
, '"عندما تعاون إنساناً على صعـود الجبل تقترب معه من القمّة."'
, '".تعلّمت أنّه من أجمل الأحاسيس هو الشّعور من داخلك بأنّك قمت بالعمل الصحيح، حتّى لو عاداك العالم أجمع"'
, '".تعلّمت أنّ مفتاح الفشل هو محاولة إرضاء كلّ شخصٍ تعرفه"',
 '".تعلّمت أنّ كلّ ما نراه عظيماً في الحياه بدأ بفكرة ومن بداية صغيرة"', 
 '". إنّ فشل التّجربـة لا يُعتبر أسوأ ما في الحياة، إنّما الفشل هو ألّا نجرّب"'];

    function Random(){
        const random = Math.floor(Math.random() * months.length);
        let quote = document.createTextNode(months[random])
        paragraph.innerHTML = "";
        paragraph.appendChild(quote)

    }

 const random = Math.floor(Math.random() * months.length);

let quote = document.createTextNode(months[random])
paragraph.appendChild(quote)


button.addEventListener("click",Random)