import donbolsasImage from "/src/images/donbolsas_full.png"
import classiquesImage from "/src/images/classiques.png"
import topoforImage from "/src/images/topofor.png"
import exfopinoImage from "/src/images/exfopino.png"
import aeroriojaImage from "/src/images/aerorioja.png"
import yournextprojectImage from "/src/images/yournextproject.png"
import jorgemadrid from "/src/images/jorgemadrid.jpg"

const portfolioData = {
    donbolsas: {
        id: "donbolsas", imageSrc: donbolsasImage, alt: "don bolsas web",
    },
    classiques: {
        id: "classiques", imageSrc: classiquesImage, alt: "classiques web",
    },
    topofor: {
        id: "topofor", imageSrc: topoforImage, alt: "topofor web",
    },
    exfopino: {
        id: "exfopino", imageSrc: exfopinoImage, alt: "exfopino web",
    },
    aerorioja: {
        id: "aerorioja", imageSrc: aeroriojaImage, alt: "aerorioja web",

    },
    yournextproject: {
        id: "yournextproject", imageSrc: yournextprojectImage, alt: "your next project",
    },
    jorgemadrid: {
        id: "jorgemadrid", imageSrc: jorgemadrid, alt: "jorge madrid",
    },
}

const getPortfolioFromId = (id) => {
    return Object.values(portfolioData).find((portfolio) => {
        return portfolio.id == id
    })
}

export { getPortfolioFromId, portfolioData }