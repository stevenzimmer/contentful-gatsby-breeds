# Gatsby and Contentful Pet Breeds

## 🚀 Startup 

**To view the site in local environment.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd gatsby-contentful-breeds/
    npm i
    npm run develop
    ```

    The site can now be seen in browser at http://localhost:8000!

## Structure

  The content is structured as follows

  Content associations: 
  - 1 pet type attached to each breed
  - multiple breed can be attached to pet type

  Homepage
  - Lists the Pet Types cards

  /{pet-type}-breeds/
  - Lists the breeds cards for that pet type
  
  /{pet-type}-breeds/{breedName}
   - A page of details about the breed

## Future State

  If more pet types are added in Contentful CMS and then breeds are added to that pet type then those will automatically show on the homepage and details pages will be generated accordingly.

## 🚀 ToDos

  - Refactor the cards into a reusable component.
  - Add page meta tags
  - Revamp the overall layout/design
  - Create graceful enhancements for loading, error, and empty states.
  - Restructure and unionize the naming conventions for each content type
