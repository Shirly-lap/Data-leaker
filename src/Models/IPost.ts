
export interface IPost {
    // id:                       string;
    title:                    string;
    body:                     string;
    creationDate:             Date;
    creator:                  string;
    estimatedPublicationDate: Date;
    status:                   string;
    approvalPercentage:       number;
    corrections:              string;
    platform:                 string;
    postUrl:                  string;
    multimediaUrl:            string;
}

export interface IResponsePost {
    id:                       string;
    postByUser:               number;
    title:                    string;
    body:                     string;
    creationDate:             Date;
    estimatedPublicationDate: Date;
    status:                   string;
    approvalPercentage:       number;
    corrections:              string;
    platform:                 string;
    postUrl:                  string;
    multimediaUrl:            string;
    deletedAt:                null;
}

