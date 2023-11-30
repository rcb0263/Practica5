export type Client = {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: number;
    DNI:number;
    bookings: Array<Omit<Booking, "client">>;
  };
 
  export type Restaurante = {
    name: string;
    CIF: number;
    address: string;
    bookings: Array<Omit<Booking,"restaurant">>;
  };
  
  export type Booking = {
    date: string;
    client: string;
    restaurant: string;
  };