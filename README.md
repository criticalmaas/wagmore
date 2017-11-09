# Rover Coding Project

## Scenario

Rover's Git repo was involved in a head-on SHA-1 collision and we lost all of our search frontend code. It is your responsibility to write a replacement for our search page using the latest and greatest frontend tech.

##  Core Requirements

Use our [Search API](/search-api.md) endpoint to fetch a list of search results and display them in a reasonable manner. The design and styling of the page are completely up to you. The application should be isomorphic.

- Use a current-generation frontend JavaScript framework
- Pull search results from the Search API endpoint
- Display search results
- You can hard code the geolocation (latitude and longitude) and the service type (e.g. 'overnight-boarding')
- Add search filters for at least date and price
- Use Webpack to bundle assets with separate development and production builds 
- The development environment should have HMR
- The production environment should be server-side rendered (including the initial search results) with client-side hydration
- The layout should be responsive and reflow reasonably on mobile and tablet

## Additional Requirements

Once you have met the core requirements, this is your chance to show us what you're really capable of. Please add a feature or embellishment of your choosing. It doesn't have to be time consuming, just something to showcase your unique talents. Please make sure it doesn't compromise the core requirements.

Please include a README.md describing your design and implementation choices, and with instructions on using your app. We expect to hear back from you within a week.

## How to Install Wagmore ##

1. from the terminal run: `npm install` or `npm i`

## How to Run Wagmore in DEV ##

1. from the terminal run: `npm run dev`

Note: When running in dev mode HMR will be enabled and all calls will be made to the server

## How to Run Wagmore in PROD ##

1. Firstly, and hugely, the API server will need to have 'Access-Control-Allow-Origin=*' sent back in the response
in order to allow cross origin requests (CORS)

1. Option 1: (Needs some form of web server) From the terminal run: `npm run build` or `npm run start`

2. Option 2: Using Now from Zeit.co - from the terminal type `now`. You can optionally alias your deployment to a more human readable URL as needed using the `now alias {deploymeny} {your alias}` command

Note: The process.env.NODE_ENV environment variable must be set to 'production'

Note: The latest production version is running at https://wagmore.now.sh but you can deploy to where ever you please

## Why are you running your own node server? ##

1. Per the documentation from [https://github.com/mobxjs/mobx-react#server-side-rendering-with-usestaticrendering] | (Mobx)

## glaring missing pieces :o( ##

1. Calendar

2. Form field validation

3. Better breakout of components - SearchBox could br broken down into smaller pieces

4. Styleguist is now broken renderign SearchResult component with addition of MobX provider

5. Integration testing - wanted to use Cypress

6. CORS support in Prod. Currently using a public proxy

7. requestAnimationFrame warning in test



### All work submitted is Copyright &copy; 2017 Ryan Maas - All rights reserved ###

