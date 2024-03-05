# Wax Staxx - MVP

## Pages
- [ ] Library
    - [x] (MVP 1. Display all albums (Lib) - GET) - pw
    - [ ] (MVP 1.5 Click - add to collection ) - pw
- [ ] MyStaxx
    - [x] (MVP 2. view My Collection - POST & GET) 
    - [ ] (MVP 4. Remove from My Collection ONLY (not allowed to remove from Lib) - PATCH) - pw
- [x] Form
  - [x] (MVP 3. Add new album to library & My Collection (Form) - POST) - vr

## Components
- [x] Card - called by library and mystaxx, component to hold basic info about each album - pw
- [x] Nav - links to: Home, mystaxx, Form, called in App - zen
- [x] Search - called in LibraryContainer - zen

## Other
- [x] LibraryProvider --- figure out how this works
- [x] ErrorPage - vr
- [ ] libraryLoader --- understand this and use it if appropriate
- [ ] Writeup and clean up readme
- [ ] load logo and favico
- [ ] finish styling
- [ ] code cleaning
- [ ] rev Matteo's code best practices

## Stretch
- [x]  Search by Artist
- [ ]  Improve search functionality, include more than just Artist
- [ ]  Edit Album info - PATCH only to Lib (allowing for mutations of albums specific to user)
- [ ]  Validation on album addition form to check for incoming duplicates
- [ ]  When editing Album, edits the MyCollection at the same time (lib is always source of tuth)
- [ ]  light mode
- [ ]  individual album view

------------
~* README template *~ 
# Wax Staxx

Foobar is a Python library for dealing with word pluralization.

## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

```bash
pip install foobar
```

## Usage

```python
import foobar

# returns 'words'
foobar.pluralize('word')

# returns 'geese'
foobar.pluralize('goose')

# returns 'phenomenon'
foobar.singularize('phenomena')
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)