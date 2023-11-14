import donbolsasImage from "/src/images/donbolsas_full.png"
import classiquesImage from "/src/images/classiques.png"
import topoforImage from "/src/images/topofor.png"
import exfopinoImage from "/src/images/exfopino.png"
import aeroriojaImage from "/src/images/aerorioja.png"

const portfolioData = {
    donbolsas: { id: "donbolsas", imageSrc: donbolsasImage, alt: "don bolsas web" },
    classiques: { id: "classiques", imageSrc: classiquesImage, alt: "classiques web" },
    topofor: { id: "topofor", imageSrc: topoforImage, alt: "topofor web" },
    exfopino: { id: "exfopino", imageSrc: exfopinoImage, alt: "exfopino web" },
    aerorioja: { id: "aerorioja", imageSrc: aeroriojaImage, alt: "aerorioja web" },
}

const getPortfolioFromId = (id) => {
    return Object.values(portfolioData).find((portfolio) => {
        return portfolio.id == id
    })
}

export { getPortfolioFromId, portfolioData }