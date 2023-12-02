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
        description: {
            en: `Fully functional e-commerce based in Liquid Shopify template scripting language. 
        The site sells small plastic bags to retail stores all around Spain. With more than 5K
         users monthly and updated to the latests Dawn Shopify version. The site was developed with custom JS and specific
         demands from the client both in functionality and visual elements. The site is currently active and mantained.`,
            es: `E-commerce complemente funcional e integrado con la última version de Shopify usando el lenguaje de plantillas Shopify Liquid.
            La tienda online se dedica a vender bolsas de plástico al por menor a pequeña y mediana empresa. Desarrollada usando Javascript para resolver
            los requisitos específicos del cliente tanto en funcionalidad como en elementos visuales. Con más de 5K de visitas mensuales el sitio está actualizado a la
            última version de Shopify Dawn.`
        },
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
            fast loads and easy interaction. The store sells high quality products for a personal brand based in the U.S.`,
            es: `Sitio de comercio electrónico totalmente funcional hecho a medida, desarrollado con la última tecnología de Shopify, Hydrogen. 
            Utilizando Remix 2.0 como marco, es posible integrar el sistema backend de Shopify con renderizado del lado del servidor e
             hidratación súper rápida para ofrecer experiencias asombrosas. No solo el sitio está diseñado con cuidado meticuloso, 
             sino que el código también permanece legible, estable y con una complejidad mínima para permitir características adicionales y un mantenimiento fácil. 
             La experiencia del usuario se convierte en algo maravilloso con cargas rápidas e interacción sencilla. 
             La tienda vende productos de alta calidad para una marca personal con sede en los Estados Unidos.`
        },
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
            was used sparingly to adapt the site to the user needs.`,
            es: `
        Sitio web empresarial de topografía desarrollado para una empresa española con sede en el norte de España, en Pontevedra. 
        Explora las maravillas de la topografía, los drones y la última tecnología en el campo. El sitio se desarrolló utilizando WordPress 
        ya que no era necesario vender productos y el cliente exigía poder modificar su propio contenido y realizar cambios de diseño fácilmente. 
        Se utilizó Elementor para crear fácilmente páginas personalizadas que interactúan sin problemas con todas las plataformas y dispositivos. 
        Se utilizaron JS y CSS personalizados de manera limitada para adaptar el sitio a las necesidades del usuario.`},
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
            and CSS as needed across the site.`,
            es: `
            Descubre las maravillas de esta aserradero y estación de trabajo de madera en el norte de España.
             Explora productos de madera hechos a medida y la excelencia en la carpintería mientras navegas por este sitio.
              Desarrollado con las versiones más recientes de WordPress y Elementor, el sitio web ofrece una excelente experiencia de usuario según 
              los estándares web más recientes. El usuario exigía poder introducir su propio contenido y reemplazar características existentes, 
              de ahí la necesidad de WordPress. Se utilizó JS y CSS personalizados según lo necesario en todo el sitio.`
        },
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
            pictures from different planes and landscapes.` ,
            es: ``
        },
        url: "https://aerorioja.com",
        platform: "Wordpress",
        tech: "Custom",
        year: "2017",
        location: "Logroño, Spain",
        title: "Aerorioja"
    },
    yournextproject: {
        id: "yournextproject", imageSrc: yournextprojectImage, alt: "your next project",
        description: {
            en: `Discover great oportunities working with me. Create a new personal website for your brand, an e-commerce or any other solution
            you can imagine using the latest tech available. Fast and reliable web solutions for modern day problems. Show yourself, sell your products,
            and let your website talk about you.`,
            es: ``
        },
        url: "https://yournextproject.com",
        platform: "Your platform of choice",
        tech: "Latest tech",
        year: "Right now",
        location: "Your location",
        title: "Your Next Project",
        show_title: true
    },
    jorgemadrid: {
        id: "jorgemadrid", imageSrc: jorgemadrid, alt: "jorge madrid",
        description: {
            en: `I am a software engineer with more than 12 years of experience in the field, both as a freelance and working for other companies. After graduating from San Pablo CEU 
            in Madrid I traveled to Denmark and completed a Master in Computer Science at Aalborg University . I like to explore many fields but have been mainly focused in web development and 
            mobile applications. Among my areas of expertise are React, Astro, Remix, Shopify (Hydrogen and Liquid), Wordpress, React Native and PHP, but I am ready to implement
            software solutions beyond this scope if necessary. Below you can check out my linkedin profile and download my resume in PDF.`,
            es: ``
        },
        url: "https://www.linkedin.com/in/jorge-madrid-0b17a915a/",
        platform: "Web Dev, Software solutions",
        tech: "Shopify (Hydrogen and Liquid), Javascript, React, Remix, Wordpress, React Native, PHP",
        year: "",
        location: "USA, Manhattan - Madrid, Spain",
        title: "Jorge Madrid Portillo",
        show_title: false,
        go_home: true,
        secondary_link: { href: "/data/Jorge_Madrid_Portillo_CV.pdf", text: "Download my resume in pdf" }
    },
}

const getPortfolioFromId = (id) => {
    return Object.values(portfolioData).find((portfolio) => {
        return portfolio.id == id
    })
}

export { getPortfolioFromId, portfolioData }