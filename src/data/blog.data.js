const BlogData = [
  {
    date: `January 21st, 2021`,
    title: `Becoming A Part Of A Startup`,
    body: `Good news! This week I joined a startup named KyFlex! For now it is unpaid, and I will primarily be doing front end development, but will be dipping into fullstack as well.
    \n
    KyFlex will be making a web app that connects people through experiences. If there is something that you want to do, you can use the app to find like minded people who want to do the same, and then experience it together!
    \n
    So far it has been a good learning experience and I expect it will continue to be so. I have learned Docker and how to set up a Container on my computer which acts like a virtual machine. I have also done some Google Authentication for logging a user in. 
    \n
    The team has been friendly, and are encouraging everyone, for the time being, to continue looking for paid work while the startup grows and looks for funding.`,
  },
  {
    date: `January 15th, 2021`,
    title: `My Journey So Far`,
    body: `In the past two and a half months, I have applied for over 100 jobs. There have been a few jobs where I absolutely want, and I will follow up on them over and over. I have had wonderful people in my life help network with me.
    \n
    But, there's a lot of times during the application phase, I mostly give a bottled response in the "About Me" section. Every now and then I get tired of the game, and I speak from the heart, not caring about saying the right buzzwords or reducing myself to numbers.
    \n
    In my most recent application I did exactly that, and I wanted to share what I wrote:
    \n
    "Growing up, I always had a passion for technology and had a great attention to detail. My family taught me that hard work and determination pays off, and I have kept that to heart ever since. I was a volunteer firefighter which taught me teamwork, communication, and improved my problem solving.
    \n
    "From there I became a maintenance engineer, where I learned independence, version control, and how to network. Along my journeys, I received promotions, and pay raises, but it never satisfied my passion. 
    \n
    "When COVID hit, my place of business shut down, and instead of sitting around or panicking, I immediately went back to school, and learned full stack web development. I followed my passion. Because I love what I do so much, I learn it so much faster. Coding, web development, designing, all speak to me. They fulfill my desire to problem solve and to be creative. However, doing a career switch is difficult for anyone, so I am relying on my networking, my determination, and trusting my newfound skills. 
    \n
    "I graduated from the University of Oregon's full stack web development program, and began looking for work. I received accolades from my teaching staff, classmates, and recruiters. I graduated with straight A's, the beginning of a new network, and knowing the MERN stack. Other than learning MongoDB, Express, React, and Node.js, I also learned MySQL, Git, jQuery, Bootstrap, Material-UI, Google APIs, NASA APIs, version control, and how to work in an Agile environment. 
    \n
    "I then never stopped learning and immediately began courses through Udemy to gain even more knowledge. I wanted to improve my skills in React, so I began a course teaching Redux, GraphQL, Stripe, and Firebase. Along the way I learned Typescript, SCSS, Shopify, and began Freelance work. 
    \n
    "Building Apps and projects is a great way to learn as well. I have built an app that helps users find out if they are registered to vote, helps them register if they are not, gives them a Google map of all the ballot dropboxes nearest to them, and gives them an alert feed. I am also building my second fully functional online store. 
    \n
    "I am looking for full time employment at a place that will value my unyielding ability to never stop improving. I am looking for a place to know that I may be a Junior Dev now, but I will grow faster than my competition. 
    \n
    "When fueled by passion and hard times, humans can achieve great things. I am one."`,
  },
  {
    date: `December 9th, 2020`,
    title: `Creating a Single Page Application on GitHub Pages`,
    body: `I am a React developer, and when creating a portfolio or personal website that you want to deploy on GitHub pages, you will find that GitHub does not natively support single page applications (SPAs). To get around this problem you have to use a npm package called "gh-pages". This will help you with deployment. The docs and tutorials to use gh-pages are a plenty, and you can do a quick Google search to read them. 
    \n
    However, deploying a React app, is not the only hurdle. Navigating it is another. On GitHub pages, you are unable to navigate to another page, if you are rerendering the page. If your url pathname changes, you cannot have the browser tab reload. It must remain a SPA. To do this there are two ways:
    \n
    1. For 99% percent of my projects, I use the npm package: "react-router-dom" to navigate through the pages of my SPAs. This is a lightweight and easy to use package that wraps your project in a <Router> parent element, and then uses child <Route> components that renders different components depending on the given path. If you only want one component rendering at a time, you wrap the <Routes> in a <Switch> component (still within the <Router>), which will render the first <Route> that has a matching path, then terminates the <Switch>. You can use this package page for simple naviagation, or even for conditional component rendering. For a full tutorial, you can contact me at keithbillingsbusiness@gmail.com, or check out the documentation for the package. 
    \n
    2. The second option is manually switching a conditional statement within React using the "useState" hook. For demonstration purposes, I have done that with my personal website. Within the app, I have created a state called navState. This state is carried throughout the whole app, and the components and pages that the app contains have different ways to change that state. Then with some conditional statements that check that navState, different components load. Using React state is so fast, as it is already there, ready for you to use. This results in very quick operations, where components and pages load very quickly. This also removes any bload that the npm package may have (if any).
    \n
    Between the two, I would pick the "react-router-dom", but I wanted to point out that it is not the only option.`,
  },
  {
    date: `December 8, 2020`,
    title: `My First Blog Post!`,
    body: `Today I thought it would be great to add a blog page to my website to log my journey into my new career! It has been a rollercoaster thus far, but I have excitement for the future. 
    \n
    I am now 6 weeks into my job search after the graduation of my coding bootcamp, and so far have applied to 53 places for about 60ish different coding jobs. I started off by scouring the job boards on LinkedIn, Glassdoor, and many others to no avail. It is still early in the search phase, and with COVID cases higher than ever, and the holiday season coming up, there is not much response from many places. 
    \n
    Although job boards have not been much help, I have had the opportunity to do a bit of networking. Everyone I have been fortunate enough to be in contact with has been so gracious and helpful. They are genuinely doing their best to help me out, and have given me good advice! It is very reassuring to know that this industry is filled with good people, all looking out for each other and trying to make the world a better place. 
    \n
    While I have been job hunting, I continue to hone my skills. I have begun a React course on Udemy to further my React skills and add on Redux, GraphQL, Stripe, and Firebase! I really have grown to love front end development.`,
  },
];

export default BlogData;
