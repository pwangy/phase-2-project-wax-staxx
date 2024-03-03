import { useContext } from 'react' //useRef might be needed for later (redirect after submit)
import * as Yup from "yup"
import { useFormik } from 'formik'
// import { useOutletContext, useNavigate, useParams } from "react-router-dom";
import { AlbumsContext } from '../AlbumsProvider'

// const URL = 'http://localhost:4000/records/' //! needed for editing later

  const validationSchema = Yup.object().shape({
    inCollection: Yup.boolean().required('Collection status is required'),
    artist: Yup.string().required('Artist is required'),
    albumCover: Yup.string().required('Album cover image link is required'),
    title: Yup.string().required('Title is required'),
    released: Yup.string().required('Release year is required'),
    label: Yup.string().required('Label is required'),
    //! Finish validations 
  })

  const errorStyle = { color: 'red' , fontWeight: 'bold'}

const AlbumsForm = () => {
    const { handleAddAlbum } = useContext(AlbumsContext)
    // const updateError = useOutletContext() //! needed for editing later
    // const navigate = useNavigate() //! needed for editing later

    const initialValues = {
        inCollection: true,
        artist: '',
        albumCover: '',
        title: '',
        released: '',
        label: '',
    }

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: ( values, { setSubmitting, resetForm}) => {
        try {
            handleAddAlbum(values)
            console.log(values)

            resetForm();

        } catch (error) {
            console.error(error.message);
        } finally {
            setSubmitting(false);
        }
        },
    })

    return (
    <form onSubmit={formik.handleSubmit}>
        <label htmlFor="artist">Artist Name:</label>
        <input
            id="artist"
            name="artist"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.artist}
        />
        {formik.touched.artist && formik.errors.artist && <div style={errorStyle}>{formik.errors.artist}</div>}

        <label htmlFor="albumCover">Album Cover Link:</label>
        <input
            id="albumCover"
            name="albumCover"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.artist}
        />
        {formik.touched.artist && formik.errors.artist && <div style={errorStyle}>{formik.errors.artist}</div>}

        <label htmlFor="title">Album Title:</label>
        <input
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
        />
        {formik.touched.title && formik.errors.title && <div style={errorStyle}>{formik.errors.title}</div>}

        <label htmlFor="released">Album Release Year:</label>
        <input
            id="released"
            name="released"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.released}
        />
        {formik.touched.released && formik.errors.released && <div style={errorStyle}>{formik.errors.released}</div>}

        <label htmlFor="label">Album Label:</label>
        <input
            id="label"
            name="label"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.label}
        />
        {formik.touched.label && formik.errors.label && <div style={errorStyle}>{formik.errors.label}</div>}

        <label htmlFor="inCollection">Do you want to add this new Album to your collection?:</label>
        <input
            id="inCollection"
            name="inCollection"
            type="checkbox"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            checked={formik.values.inCollection}
        />
        {formik.touched.inCollection && formik.errors.inCollection && <div style={errorStyle}>{formik.errors.inCollection}</div>
        }

        <button type="submit" disabled={formik.isSubmitting}>
            Submit
        </button>
    </form>
    )
}

export default AlbumsForm