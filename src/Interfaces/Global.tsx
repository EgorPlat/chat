export interface IUserAddress {
    city: string,
    street: string
}
export interface IUser {
    phone: number, 
    name: string,
    address: IUserAddress,
}