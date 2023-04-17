import prisma from "@/app/libs/prismadb";

export interface IListingsParams {
  userId?: string;
  guestCount?: number;
  roomCount?: number;
  bathroomCount?: number;
  startDate?: string;
  endDate?: string;
  locationValue?: string;
  category?: string;
}

export default async function getListings(
  // params: IListingsParams
) {
  try {
    // const {
    //   userId,
    //   guestCount,
    //   roomCount,
    //   bathroomCount,
    //   startDate,
    //   endDate,
    //   locationValue,
    //   category,
    // } = params;

    // let query: any = {};

    // if (userId) {
    //   query.userId = userId;
    // };

    // if (category) {
    //   query.category = category;
    // };

    // if (guestCount) {
    //   query.guestCount = {
    //     // Greater than or equal (>=)
    //     gte: +guestCount,
    //   };
    // };

    // if (roomCount) {
    //   query.roomCount = {
    //     // Greater than or equal (>=)
    //     gte: +roomCount,
    //   };
    // };

    // if (bathroomCount) {
    //   query.bathroomCount = {
    //     // Greater than or equal (>=)
    //     gte: +bathroomCount,
    //   };
    // };

    // if (locationValue) {
    //   query.locationValue = locationValue;
    // };

    // // Если есть хотя бы один забронированный день, убираем объявление из списка
    // if (startDate && endDate) {
    //   query.NOT = {
    //     reservations: {
    //       some: {
    //         OR: [
    //           {
    //             endDate: { gte: startDate },
    //             startDate: { lte: startDate },
    //           },
    //           {
    //             startDate: { lte: endDate },
    //             endDate: { gte: endDate },
    //           }
    //         ]
    //       }
    //     }
    //   }
    // }

    const listings = await prisma.listing.findMany({
      // where: query,
      orderBy: {
        createdAt: "desc",
      }
    });

    const safeListings = listings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    }));

    return safeListings;
  } catch (error: any) {
    throw new Error(error);
  }
}
