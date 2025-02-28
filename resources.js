document.addEventListener("DOMContentLoaded", function () {
    const resources = [
        { title: "José Rizal’s Life and Works (NCCA)", link: "https://ncca.gov.ph/about-culture-and-arts/culture-profile/jose-rizal/" },
        { title: "Noli Me Tangere - Full Text", link: "https://www.gutenberg.org/ebooks/20228" },
        { title: "El Filibusterismo - Full Text", link: "https://www.gutenberg.org/ebooks/10676" },
        { title: "Rizal’s Final Farewell - Mi Último Adiós", link: "https://www.joserizal.ph/miultimo.htm" },
        { title: "Rizal’s Letters and Writings", link: "https://www.rizal.com/letters/" }
    ];

    const resourceList = document.getElementById("resource-list");

    resources.forEach(resource => {
        let listItem = document.createElement("li");
        let link = document.createElement("a");

        link.href = resource.link;
        link.textContent = resource.title;
        link.target = "_blank"; // Para mag-open sa bagong tab

        listItem.appendChild(link);
        resourceList.appendChild(listItem);
    });
});
