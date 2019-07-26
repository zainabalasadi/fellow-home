
const  checkFeatures = [
    'Attic',
    'Basement',
    'Kitchen',
    'Garden'
];
const dropFeatures= [
    { value: "7", label: "7"},
    { value: "8", label: "8"},
    { value: "9", label: "9"}
]

const userProfile = {
    name: "Laura Smith",
    email: "jane@gmail.com",
    phone: "0412345678",
    password: "password",
    billing: {
        number: "0123456789012345",
        expMonth: 12,
        expYear: 20,
        cvv: 123
    },
    notif: {
        email: false,
        phone: true
    },
    abstract: "Hey! I’m Laura. I’m a Biomedical Science student at UNSW. My hobbies include hiking, bouldering, breadmaking " +
        "and watching National Geographic. I have a fascination with turtles and love dogs and cats.",
    temp: "",
    uni: ""
};
const listings = [
    {
        abstract:"Chatwood room",
        img: "../assets/images/cooking.jpg"
    },
    {
        abstract:"Chatwood room",
        img: "../assets/images/cooking.jpg"
    },

];
const reviews = [
    {
        id: 1,
        primary: 'Brunch this week?',
        secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
        person: '/static/images/avatar/5.jpg',
    },
    {
        id: 2,
        primary: 'Birthday Gift',
        secondary: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
        person: '/static/images/avatar/1.jpg',
    },
    {
        id: 3,
        primary: 'Recipe to try',
        secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
        person: '/static/images/avatar/2.jpg',
    }
    ];
module.exports = {
    checkFeatures: checkFeatures,
    dropFeatures: dropFeatures,
    listings: listings,
    reviews: reviews,
    userProfile: userProfile
}