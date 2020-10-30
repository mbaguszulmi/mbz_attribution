document.body.onload = () => {
    const attribution = document.createElement("div")
    const attributionMini = document.createElement("div")
    const portofolioLink = "https://mbaguszulmi.github.io"
    const getYoursLink = "https://api.whatsapp.com/send?phone=+6289682056995"
    const stylesheetUrl = "https://raw.githack.com/mbaguszulmi/mbz_attribution/master/style.css"

    attribution.id = "attribution"

    attribution.innerHTML = `<div class="left">Created and managed by <b>Muhammad Bagus Zulmi</b></div>
                            <div class="right">
                                <a href="${getYoursLink}" target="_blank" rel="noopener noreferrer" class="attr-btn">Get yours now!</a>
                                <a href="${portofolioLink}" target="_blank" class="attr-btn">My Portfolio</a>
                            </div>
                            <div id="close-attr">
                                &times;
                            </div>`

    attributionMini.id = "attribution-mini"
    
    attributionMini.innerHTML = `<div class="creator">Created By <b>Muhammad Bagus Zulmi</b></div>
                                <div class="buttons">
                                    <a href="${getYoursLink}" target="_blank" rel="noopener noreferrer">Get yours now!</a>
                                    <a href="${portofolioLink}" target="_blank">My Portfolio</a>
                                </div>`

    document.body.prepend(attributionMini)
    document.body.prepend(attribution)

    // close main attribution
    const closeBtn = document.querySelector("div#close-attr")
    closeBtn.onclick = (event) => {
        attribution.style.display = 'none'
        attributionMini.style.display = 'block'
    }

    const linkCSS = document.createElement("link")
    linkCSS.rel = "stylesheet"
    linkCSS.href = stylesheetUrl
    document.head.append(linkCSS)

    const creatorMini = document.querySelector("div#attribution-mini .creator")
    const buttonsMini = document.querySelector("div#attribution-mini .buttons")
    let showButtons = true;

    setInterval(() => {
        creatorMini.style.height = showButtons ? 0 : '22px'
        buttonsMini.style.height = showButtons ? '22px' : 0

        showButtons = !showButtons
    }, 5000);
}