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
  - Lists the Pet Type cards

  /{pet-type}-breeds/
  - Lists the breeds cards associated to that pet type
  
  /{pet-type}-breeds/{breedName}
   - A page of details about the selected breed

## Future State

  When more pet types are added in Contentful CMS and breeds are then added to that pet type, the new pet type card will automatically render on the homepage and then the breed details pages will be generated accordingly.

## ToDos

  - Refactor the cards into a reusable component.
  - Add page meta tags
  - Revamp the overall layout/design
  - Create graceful enhancements for loading, error, and empty states.
  - Restructure and unionize the naming conventions for each content type