import { IPost } from "../../Models/IPost";

export const createCard = (post: IPost): HTMLElement => {
    let { title, body, creationDate, status, platform, postUrl } = post;

    const card = document.createElement('div') as HTMLElement;
    card.className = "card text-center ";

    const headerCard = document.createElement('div') as HTMLElement;
    headerCard.className = "card-header";
    headerCard.innerText = title;

    const bodyCard = document.createElement('div') as HTMLElement;
    bodyCard.className = "card-body";

    const cardTitle = document.createElement("h5") as HTMLElement;
    cardTitle.className = "card-title";
    cardTitle.innerText = status;

    const cardText = document.createElement("p") as HTMLElement;  // Changed to <p> for better formatting
    cardText.className = "card-text";
    cardText.innerText = `${body} ${platform} ${postUrl}`;  // Correct concatenation

    const viewMore = document.createElement("a") as HTMLAnchorElement;
    viewMore.className = "btn btn-primary";
    viewMore.href = postUrl;  // Assuming you want to link to postUrl
    viewMore.innerText = "Ver más";

    bodyCard.append(cardTitle, cardText, viewMore);

    const cardFooter = document.createElement('div') as HTMLElement;
    cardFooter.className = "card-footer text-muted";
    cardFooter.innerText = String(creationDate);  // Use toDateString() for a readable date

    card.append(headerCard, bodyCard, cardFooter);  // Append card elements to the card

    return card;
};
