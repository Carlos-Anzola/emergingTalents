
export interface OfferCreate{
    name: string,
    categories: string[],
    salary: number;
    title: string;
    isAvailable: boolean;
    imageURL: string;
    isDisabled: boolean;
    description: string;
    id: number;
    modality: boolean;
}
export interface Offer extends OfferCreate{

}