document.body.onload = () => {
    const attribution = document.createElement("div")
    const portofolioLink = "https://mbaguszulmi.github.io"
    const getYoursLink = "https://api.whatsapp.com/send?phone=+6289682056995"
    const stylesheetUrl = "style.css"

    attribution.id = "attribution"

    attribution.innerHTML = `<div class="left">Created and managed by Muhammad Bagus Zulmi</div>
                            <div class="right">
                                <a href="${getYoursLink}" target="_blank" rel="noopener noreferrer" class="attr-btn">Get yours now!</a>
                                <a href="${portofolioLink}" target="_blank" class="attr-btn">My Portfolio</a>
                            </div>`

    document.body.prepend(attribution)

    const linkCSS = document.createElement("link")
    linkCSS.rel = "stylesheet"
    linkCSS.href = stylesheetUrl
    document.head.append(linkCSS)
}