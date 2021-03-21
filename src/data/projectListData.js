import AdvocateImage from '../images/advotecate.png';
import EmployeeDirectoryImage from '../images/thumbs/employeeDirectory.jpg';
import PartyPlanningCommitteeImage from '../images/thumbs/PartyPlanner.png';
import AboutYourBirthdayImage from '../images/thumbs/BirthdayApp.png';
import WeatherAppImage from '../images/thumbs/WeatherApp.png';

const projectListData = [
  {
    title: 'adVOTEcate',
    image: AdvocateImage,
    deployment: 'https://advotecate.herokuapp.com/',
    description:
      'This was our final group project of our bootcamp. This app is your advocate to your voting needs! We aim to provide users easily accesible information to check if they are registered to vote, learn how to register if they are not, search where the nearest ballot drop boxes are, and set reminders!',
  },
  {
    title: 'Employee Directory',
    image: EmployeeDirectoryImage,
    deployment: 'https://employee-directory-kmb.herokuapp.com/',
    description: 'This is a React app that maps over data and creates a stylized, sortable, and filterable table.',
  },
  {
    title: 'Party Planning Committee',
    image: PartyPlanningCommitteeImage,
    deployment: 'https://partyplanningcommittee.herokuapp.com/',
    description:
      'This was a joint effort between myself, Max Edmonds, Brian Soldani, and Alex Shafer. This project was our first fully full-stack project. I learned a lot about saving information on a database, using the db to serve different pages, how to create working routers, and using homemade APIs.',
  },
  {
    title: 'About Your Birthday',
    image: AboutYourBirthdayImage,
    deployment: 'https://keithbillings.github.io/About-Your-Birthday/',
    description:
      "This was our first major class project involving teams. It didn't take much time to focus on a topic that everyone could relate to: Birthdays! We learned how to use external APIs like NASA, birthday facts, number facts, zoidac, and more!",
  },
  {
    title: 'Weather App',
    image: WeatherAppImage,
    deployment: 'https://keithbillings.github.io/Weather-Dashboard/',
    description:
      'This weather dashboard is stylish and minimal. It has a rotating background of seasonal images, and a sleek design. Enter the city query in the text input box and it will return current live weather data, and a 5 day forecast.',
  },
];
export default projectListData;
