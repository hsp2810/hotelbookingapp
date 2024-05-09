export interface IRoom {
  id: string;
  unitNumber: number;
  floor: number;
  rent: number;
  isBookedNow: boolean | null;
  bookedFrom: Date | null;
  bookedTill: Date | null;
  roomCategoryId: string;
  userId: string | null;
  roomKey: number;
  category?: IncludeCategory | null;
  features: string[];
}

export interface ICategory {
  id: string;
  categoryName: string;
  categoryUnit: number;
  floors: number[];
  priceStart: number;
  priceEnd: number;
  nOfRooms: number | null;
}

interface IncludeCategory {
  categoryName: string | null;
}
