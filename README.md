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
- [ ] Writeup and clean up readme
- [ ] finish styling

## Stretch
- [x]  Search by Artist
- [x]  Improve search functionality, include more than just Artist
- [x]  individual album view - xen
- [x]  make icon clickable '/'
- [ ]  Edit Album info - PATCH only to Lib (allowing for mutations of albums specific to user)
- [ ]  Validation on album addition form to check for incoming duplicates
- [ ]  When editing Album, edits the MyCollection at the same time (lib is always source of truth)
- [ ]  light mode

------------
# Wax Staxx

Welcome to Wax Staxx! -  a React web application that provides information about various vinyl albums, allowing users to showcase their personal collection. for collectors it fun to talk about music and what albums you have this website is clean and to the point to be able to keep your collection up to date. 

## Features

- Browse a collection of Albums.
- Search and filter albums by artist and album title.
- Sort albums by artist or album title in alphabetical order
- Add new albums to the collective and your personal staxx at the same time using the submission form.
- An option to remove an album from your personal collection but not from the collective. 
- (Optional) view more album details by clicking on the album itself. 

## Project Structure

The project is structured with the following components:

- `App`: The main component.
- `Library`: The landing page of the website.
- `SearchBar` and `SortButtons`: Component for searching and filtering albums.
- `Form`: Form for submitting new albums.
- `Library` and `AlbumProvider`: Components for displaying a list of albums in the collective or in your `my staxx`, respectively.
- `SingleAlbumDetails`: Component for identifying /:id to get a specific albums details

### Additional Components (if applicable)

- `Header`: Header component (considered optional).
- `ErrorPage`: Page for handling errors (considered optional).
- `Nav`: Navigation component for linking to specific pages.

## Installation

1. Clone this repository.
2. Open a terminal window to open this repository in your code editor
3. Install dependencies: `npm install`
4. Run `npm run server` This will start the server on port http://localhost:4000/records and watch for changes in the db.json file .
5. Run the application: `npm start` which should open http://localhost:5173/
6.  - http://localhost:5173/ is fetching from http://localhost:4000/records which is required to run the application

## Usage

???


## Authors

- Vinny Revard
- Peggy Wang
- Xen Contreras

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.