:: Components
Card - called by library and mystaxx, component to hold basic info about each album - pw
Nav - links to: Home, mystaxx, Form, called in App - zen
Search - will live in header under nav within App - zen

:: Pages - useMemo to help with mapping info.
Library - displays collection of Cards, click to add to Collection (MVP 1. Display all albums (Lib) - GET) (MVP 1.5 AAdd to collection ) - pw

MyStaxx - displays user's collection, click to remove  (not Delete)individual albums (MVP 2. view My Collection - POST & GET) (MVP 4. Remove from My Collection ONLY (not allowed to remove from Lib) - PATCH) - pw

Form - to add new album to lib - POST (MVP 3. Add new album to library & My Collection (Form) - POST) - vr


:: Other
LibraryProvider --- figure out how this works
ErrorPage - vr


:: Stretch
- Search by Artist
- Improve search functionality, include more than just Artist
- Edit Album info - PATCH only to Lib (allowing for mutations of albums specific to user)
- Validation on album addition form to check for incoming duplicates
- When editing Album, edits the MyCollection at the same time (lib is always source of tuth)
- light mode
- individual album view

TEMPLATE! 

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Foobar

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