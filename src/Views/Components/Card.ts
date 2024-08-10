import {IResponsePost } from "../../Models/IPost";

export const createCard = (post: IResponsePost): HTMLElement => {
    let { id, title, body, creationDate, status, platform, postUrl, estimatedPublicationDate } = post;

    const card = document.createElement('div') as HTMLElement;
    card.className = "card text-center ";

    const headerCard = document.createElement('div') as HTMLElement;
    headerCard.className = "card-header";
    headerCard.innerText = title;

    const bodyCard = document.createElement('div') as HTMLElement;
    bodyCard.className = "card-body";

    const cardTitle = document.createElement("h5") as HTMLElement;
    cardTitle.className = "card-title";
    cardTitle.innerText = `Estado: ${status}`;

    const textBody = document.createElement("p") as HTMLParagraphElement; 
    textBody.innerText = body

    const cardText = document.createElement("div") as HTMLElement;  
    cardText.className = "card-text"; 

    const textPlataform = document.createElement("a") as HTMLAnchorElement; 
    textPlataform.innerText = `Plataforma:  ${platform}`;
    textPlataform.href = platform

    const imgPostUrl = document.createElement("img") as HTMLImageElement; 
    imgPostUrl.src = postUrl;
    imgPostUrl.alt = "imgPost"
    imgPostUrl.className = "card-img-top"

    cardText.append(textBody,textPlataform, imgPostUrl)


    const btnEdit = document.createElement("button") as HTMLButtonElement;
    btnEdit.className = "btn btn-primary m-1" ;
    btnEdit.innerText = "Editar";
    btnEdit.dataset.id = id;

    const btnDelete = document.createElement("button") as HTMLButtonElement;
    btnDelete.className = "btn btn-danger";
    btnDelete.innerText = "Eliminar";
    btnDelete.dataset.id = id;


    bodyCard.append(cardTitle, cardText, btnEdit, btnDelete);

    const cardFooter = document.createElement('div') as HTMLElement;
    cardFooter.className = "card-footer text-muted";
    cardFooter.innerText = String(creationDate);  // Use toDateString() for a readable date

    card.append(headerCard, bodyCard, cardFooter);  // Append card elements to the card

    return card;
};
