export interface PostInterface {
  id: string;
  date: number;
  firstname: string;
  middlename: string;
  lastname: string;
  prfphoto: string;
  housingName: string;
  title: string;
  fee: number;
  prvKitchen: boolean;
  prvCR: boolean;
  description: string;
  photos: {
    id: number;
    url: string;
  }[];
  likes: number;
  bookmarks: number;
}

export interface PostStateInterface {
  posts: PostInterface[];
  activePost?: PostInterface;
}

function state(): PostStateInterface {
  return {
    posts: [
      {
        id: "zinboarding1631096539262",
        date: 1631096539262,
        firstname: "Azshara",
        middlename: "Queldorei",
        lastname: "Highborne",
        prfphoto: "https://cdn.quasar.dev/img/avatar2.jpg",
        housingName: "Zin-Azshari Boarding House",
        title:
          "Free boarding room @ Zin-Azshari Boarding House 5th street MSU-Marawi",
        fee: 1200,
        prvKitchen: false,
        prvCR: false,
        description: `Room dimension: 12x10ft
          Beds: 2 (single bed)
          rent fee is per person
          w/ Personal cabinet and shelves
          w/ 24/7 security camera surveillance

          POLICIEs:
          -Observe cleanliness and personal privacy
          -Respect other boarders (if you have problems with other boarder, in the manager to settle them)
          -Always lock the door when leaving your room
          -The management will not be liable of your stolen properties
          -No visitors allowed
          -Curfew is 9pm-5am`,
        photos: [
          {
            id: 1,
            url: "https://cdn.quasar.dev/img/parallax1.jpg",
          },
          {
            id: 2,
            url: "https://cdn.quasar.dev/img/mountains.jpg",
          },
          {
            id: 3,
            url: "https://cdn.quasar.dev/img/quasar.jpg",
          },
        ],
        likes: 44,
        bookmarks: 1,
      },
      {
        id: "pirateking_home3499526422061",
        date: 1632388510672,
        firstname: "Monkey",
        middlename: "Dante",
        lastname: "Luffy",
        prfphoto: "https://cdn.quasar.dev/img/avatar4.jpg",
        housingName: "Pirate King Apartment",
        title:
          "Family/Couple size Apartment room w/ Private kitchen and bathroom",
        fee: 6500,
        prvKitchen: true,
        prvCR: true,
        description: `Apartment for small family or couples.
          *with security camera surveillance
          *with private parking lot`,
        photos: [
          {
            id: 1,
            url: "https://cdn.quasar.dev/img/parallax2.jpg",
          },
          {
            id: 2,
            url: "https://cdn.quasar.dev/img/mountains.jpg",
          },
        ],
        likes: 32,
        bookmarks: 4,
      },
    ],
  };
}

export default state;
