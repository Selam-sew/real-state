import image1 from "../assets/dollar.png"
import image2 from "../assets/calculator.png"
import image3 from "../assets/money.png"
import image4 from "../assets/keys.png"
import image5 from "../assets/direction.png"
import image6 from "../assets/profile.png"

export const Agents = [
    {
        id: 1,
        image: "",
        name: "Jane Doe",
        Adress:"Qatar"
    },
    {
        id: 1,
        image: "",
        name: "John Doe",
        Adress:"Dubai"
    },
    {
        id: 1,
        image: "",
        name: "Mike Mentzer",
        Adress:"Abu Dhabi"
    }
]

export const buyFeatures = [
    {
        id: 1,
        image:image1,
        title: "Find out how much you can afford",
        description: "Use our affordability calculator to get a better sense of how much you can afford to spend on a home.",

    },
    {
        id: 2,
        image:image2,
        title: "Understand Your monthly costs",
        description: "Get an in depth look at your monlty and closing costs."

    },
    {
        id: 3,
        image:image3,
        title: "Find the right loan",
        description: "Our loan finder tool helps you understand your options and find the right loan for you."
    }
]

const rentingFeatures = [
    {
        id: 1,
        money:image4,
        title: "Rent with the option to buy",
        description: "Lease from Home Partners of America and get pre-approved to buy a home when the time is right."
    },
    {
        id: 2,
        image:image5,
        title: "fint out  if it's better to rent or buy",
        description:"Determine if buying or rntign makes more financial sense."
    },
    {
        id: 3,
        imae:image6,
        title: "save time with  a renter profile",
        description: "Create a profile to save time filling out applications and get alerts on new listings."
    }
]

export const linkInfo = [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    {
        title: "Search",
        path:"/search"
    },
    {
      id: 2,
      title: "Buy",
      path: "/buy",
    },
    {
      id: 3,
      title: "Rent",
      path: "/rent",
    },
    {
        id: 4,
        title: "About Us",
        path:"/aboutus"
    }
];
  
export const buttons = [
    {
        id: 1,
        title: 'Sign In',
        path: '/signin'
    },
    {
        id: 2,
        title: 'Sign Up',
        path: '/signup'
    }
]