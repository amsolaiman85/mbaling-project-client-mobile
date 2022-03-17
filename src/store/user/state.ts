export interface UserInterface {
  username: string;
  password: string;
  isStudent: boolean;
  studentID: string;
  landlordID: string;
  name: {
    firstname: string;
    middlename: string;
    lastname: string;
  };
  prfphoto: string;
  email?: string;
  mobileNum?: string;
  birthdate?: string;
  course: {
    degree: string;
    department: string;
    college: string;
    yearAdmitted: number;
  };
  address: {
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    addressLine4: string;
  };
  housingName: string;
}

export interface UserStateInterface {
  user: UserInterface;
  users: UserInterface[];
}

function state(): UserStateInterface {
  return {
    user: {
      username: "palawanexpress98",
      password: "password",
      isStudent: true,
      studentID: "201812730",
      landlordID: "",
      name: {
        firstname: "Nahed",
        middlename: "Solaiman",
        lastname: "Bashier",
      },
      prfphoto: "https://cdn.quasar.dev/img/boy-avatar.png",
      email: "bashier.ns30@s.msumain.edu.ph",
      mobileNum: "09531409858",
      birthdate: "October 19, 1998",
      course: {
        degree: "BS Information Technology (Database System)",
        department: "Department of Information Sciences",
        college: "College of Information and Computing Sciences",
        yearAdmitted: 2018,
      },
      address: {
        addressLine1: "0059 Disarip Street",
        addressLine2: "Bubonga Marawi",
        addressLine3: "Marawi City",
        addressLine4: "Lanao del Sur",
      },
      housingName: "",
    },
    users: [
      {
        username: "palawanexpress98",
        password: "password",
        isStudent: true,
        studentID: "201812730",
        landlordID: "",
        name: {
          firstname: "Nahed",
          middlename: "Solaiman",
          lastname: "Bashier",
        },
        prfphoto: "https://cdn.quasar.dev/img/boy-avatar.png",
        email: "bashier.ns30@s.msumain.edu.ph",
        mobileNum: "09531409858",
        birthdate: "October 19, 1998",
        course: {
          degree: "BS Information Technology (Database System)",
          department: "Department of Information Sciences",
          college: "College of Information and Computing Sciences",
          yearAdmitted: 2018,
        },
        address: {
          addressLine1: "0059 Disarip Street",
          addressLine2: "Bubonga Marawi",
          addressLine3: "Marawi City",
          addressLine4: "Lanao del Sur",
        },
        housingName: "",
      },
      {
        username: "zinboarding",
        password: "password",
        isStudent: false,
        studentID: "",
        landlordID: "20220001",
        name: {
          firstname: "Azshara",
          middlename: "Queldorei",
          lastname: "Highborne",
        },
        prfphoto: "https://cdn.quasar.dev/img/avatar2.jpg",
        email: "azshara.highborne@gmail.com",
        mobileNum: "09090206852",
        birthdate: "August 31, 1989",
        course: {
          degree: "",
          department: "",
          college: "",
          yearAdmitted: 0,
        },
        address: {
          addressLine1: "1205 5th Street",
          addressLine2: "Dimaluna I",
          addressLine3: "Marawi City",
          addressLine4: "Lanao del Sur",
        },
        housingName: "Zin-Azshari Boarding House",
      },
    ],
  };
}

export default state;
