# Wax Staxx
Welcome to Wax Staxx! - A React app that provides information about various albums, allowing users to track and showcase their personal collection. 
![Screenshot 2024-03-07 at 10 57 12](https://github.com/pwangy/phase-2-project-wax-staxx/assets/64912576/cfbd6282-0f2e-46a0-b26a-a4033fecfcad)

## View it Live

[Frontend](https://waxstaxx.netlify.app/) // [Backend](https://waxstaxx-db.onrender.com/records)

[![Netlify Status](https://api.netlify.com/api/v1/badges/8b8a7181-f0ae-4d9e-aea9-c985c768e706/deploy-status)](https://app.netlify.com/sites/waxstaxx/deploys) 

## Features
- Browse the main Collection of albums.
- Search and filter albums by artist or title.
- Sort albums by artist or title in alphabetical order
- Add new albums to the Collection and your Staxx at the same time using the form.
- An option to remove an album from your Staxx but not from the Collection. 
- View album details by clicking on the album itself. 

## Structure
- `App` Root component
- `AlbumProvider` Provides context data to share with child routes
- `Library` Default view, shows the main Collection
- `SearchBar` and `SortButtons` component for searching and filtering albums.
- `Form` Allows users to add an album
- `SingleAlbumDetails` Displays a single album along with details by matching to the album's assigned database id `/album/:id`

### Additional
- `Nav` Navigation component, appears in the header of all pages to allow easy navigation
- `ErrorPage` and `ErrorAlertsProvider` Provide context, manages alerts and popups to inform user of successful actions or prompting a different action. Custom hook.
- `Footer` Links and credits to app authors
- `helpers` utility file holding different functional helpers
- `routes` Routing structure defining pairs of routes and the component to display when called

## Getting Up and Running
1. Clone this repository
2. Install dependencies: `npm install`
4. `npm run server` will start the server on `http://localhost:4000/records`
5. `npm run start`  stars the frontend on `http://localhost:5173/`
6.  - http://localhost:5173/ is fetching from http://localhost:4000/records which is required to run the application

## Tech
- Vite
- React
- React-Router-Dom
- Scss
- Formik
- Yup
- UUID v4

## Authors
⚡Waxx Staxx was built with 💖 by 👨‍🎤 [Vinny Revard](https://github.com/Vincent-Revard), 👩‍🎤 [Xen Contreras](https://github.com/Xenbydesign), and 👩‍🎤 [Peggy Wang](https://github.com/pwangy/) for educational purposes as part of Flatiron School's Software Engineering bootcamp.⚡

## License
[MIT](https://choosealicense.com/licenses/mit/)

----
# Wax Staxx - MVP

## Pages
- [x] Library
    - [x] (MVP 1. Display all albums (Lib) - GET) - pw
    - [x] (MVP 1.5 Click - add to collection ) - pw
- [x] MyStaxx
    - [x] (MVP 2. view My Collection - POST & GET) 
    - [x] (MVP 4. Remove from My Collection ONLY (not allowed to remove from Lib) - PATCH) - pw
- [x] Form
  - [x] (MVP 3. Add new album to library & My Collection (Form) - POST) - vr

## Components
- [x] Card - called by library and mystaxx, component to hold basic info about each album - pw
- [x] Nav - links to: Home, mystaxx, Form, called in App - xen
- [x] Search - called in LibraryContainer - xen

## Other
- [x] LibraryProvider --- figure out how this works
- [x] ErrorPage - vr
- [x] libraryLoader - understand this and use it if appropriate - rm
- [x] load logo and favicon
- [x] Writeup and clean up readme
- [x] finish styling

## Stretch / Roadmap
- [x]  Search by Artist
- [x]  Improve search functionality, include more than just Artist
- [x]  individual album view - xen
- [x]  make icon clickable '/'
- [ ]  Edit Album info - PATCH only to Lib (allowing for mutations of albums specific to user)
- [ ]  Validation on album addition form to check for incoming duplicates
- [ ]  When editing Album, edits the MyCollection at the same time (lib is always source of truth)
- [ ]  light mode
