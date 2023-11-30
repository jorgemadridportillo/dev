import donbolsasImage from "/src/images/donbolsas_full.png"
import classiquesImage from "/src/images/classiques.png"
import topoforImage from "/src/images/topofor.png"
import exfopinoImage from "/src/images/exfopino.png"
import aeroriojaImage from "/src/images/aerorioja.png"

const portfolioData = {
    donbolsas: {
        id: "donbolsas", imageSrc: donbolsasImage, alt: "don bolsas web",
        description: {
            en: `Fully functional e-commerce based in Liquid Shopify template scripting language. 
        The site sells small plastic bags to retail stores all around Spain. With more than 5K
         users monthly and updated to the latests Dawn Shopify version. The site was developed with custom JS and specific
         demands from the client both in functionality and visual elements. The site is currently active and mantained.` },
        url: "https://donbolsas.com",
        platform: "Shopify",
        tech: "Liquid",
        year: "2020",
        location: "Madrid, Spain",
        title: "Don Bolsas"
    },
    classiques: {
        id: "classiques", imageSrc: classiquesImage, alt: "classiques web",
        description: {
            en: `Custom made fully functional e-commerce site developed with Shopify's latests technology Hydrogen. Using Remix 2.0 as 
            a framework it is possible to integrate Shopify's backend system with super fast server side rendering and hydration to deliver
            astounding experiences. Not only the site is designed with precious care but also the code remains readable, stable
            and with minor complexity to allow further features and easy mantainance. The user experience then becomes a wonderful experience with
            fast loads and easy interaction. The store sells high quality products for a personal brand based in the U.S.` },
        url: "https://classiques.com",
        platform: "Shopify",
        tech: "Hydrogen",
        year: "2023",
        location: "USA, New York",
        title: "Classiques"
    },
    topofor: {
        id: "topofor", imageSrc: topoforImage, alt: "topofor web",
        description: {
            en: `Topography business site developed for a spanish company based in the north of Spain in Pontevedra. Explore the wonders of topography, drones and the latest
            tech in the field. The site was developed using Wodrpress since there was no need to sell any products and the client demanded to be able to modify their own
            content as well as introduce design changes easily. Elementor was used to easily create custom pages that interact easily with all platforms and devices. Custom JS and Css
            was used sparingly to adapt the site to the user needs.` },
        url: "https://topofor.es",
        platform: "Wordpress",
        tech: "Elementor",
        year: "2023",
        location: "Pontevedra, Spain",
        title: "Topofor"
    },
    exfopino: {
        id: "exfopino", imageSrc: exfopinoImage, alt: "exfopino web",
        description: {
            en: `Discover the wondrs of this sawmill and wood work station in the north of Spain. Explore custom made wood products and the excellence of woodwork
            while navigating through this site. Developed with the latests versions of Wordpress and elementor the website offers a great user experience up the
            most recent web standards. The user demanded to be able to introduce his own content and replace existing features and thus the need of Wordpress. There is custom JS
            and CSS as needed across the site.` },
        url: "https://exfopino.es",
        platform: "Wordpress",
        tech: "Elementor",
        year: "2023",
        location: "Pontevedra, Spain",
        title: "Exfopino"
    },
    aerorioja: {
        id: "aerorioja", imageSrc: aeroriojaImage, alt: "aerorioja web",
        description: {
            en: `Aerorioja is a website that explores a fantastic aerodrome in the north of Spain (Logroño). Built with care using Wordpress, it has been perfectly
            since its deployment. The website also serves as a portal for users that want to log in to their personal area. The pages were built using custom code and
            custom elemnts with HTML, JS and CSS. The users can learn from courses, schedules and contact the owner to reserve lessons and experiences. The galery section shows beautiful
            pictures from different planes and landscapes.` },
        url: "https://aerorioja.com",
        platform: "Wordpress",
        tech: "Custom",
        year: "2017",
        location: "Logroño, Spain",
        title: "Aerorioja"
    },
    yournextproject: {
        id: "yournextproject", imageSrc: undefined, alt: "",
        description: {
            en: ``
        },
        url: "https://yournextproject.com",
        platform: "Your platform of choice",
        tech: "Latest tech",
        year: "Right now",
        location: "Your location",
        title: "Your Next Project"
    },

}

const getPortfolioFromId = (id) => {
    return Object.values(portfolioData).find((portfolio) => {
        return portfolio.id == id
    })
}

export { getPortfolioFromId, portfolioData }