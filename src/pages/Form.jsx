import { useContext, useEffect, useState } from 'react' //useRef might be needed for later for PATCH
import { AlbumsContext } from '../AlbumsProvider'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router' // useOutletContext, useParams necessary for PATCH
import * as Yup from "yup"
// import { useErrorAlerts } from "./ErrorAlertsProvider" // We might need these for PATCH - if fetch fails during patch steps

// const URL = 'http://localhost:4000/records/' //! needed for editing later

const validationSchema = Yup.object().shape({
    inCollection: Yup.boolean().required('Collection status is required'),
    artist: Yup.string().required('Artist is required'),
    albumCover: Yup.string().required('Album cover image link is required'),
    title: Yup.string().required('Title is required'),
    released: Yup.string().required('Release year is required'),
    label: Yup.string().required('Label is required'),
})

const errorStyle = { color: 'red' , fontWeight: 'bold'} //These format our errors, we can change these up if desired or have something else handle it

const AlbumsForm = () => {
    const [formStatus, setFormStatus] = useState('');
    const { handleAddAlbum } = useContext(AlbumsContext)
    // const updateError = useOutletContext() //! needed for editing later
    // const navigate = useNavigate() //! needed for editing later
    // const { error, includeErrorAlerts } = useErrorAlerts() //! We might need these for PATCH - if fetch fails during patch steps
    const navigate = useNavigate()


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
        validationSchema, //validates using validationSchema
        onSubmit: async ( values, { setSubmitting, resetForm, setStatus }) => { //pass desired formik functions to assist with form control
        try {
            await handleAddAlbum(values) // Callback to handle POST
                setFormStatus('Form submitted successfully!') // Message appears on successful POST
                resetForm()
        } catch (validationError) { //upon Submit > forEach field not completed display a error at the top of the form
            const errors = {}
            validationError.inner.forEach((e) => {
                errors[e.path] = e.message
            })
            setStatus({}) //removes prior status if one was set
            formik.setErrors(errors)
        } finally {           
            setSubmitting(false) //setSubmitting handles form control 
            setTimeout(() => {
                navigate("/")// Navigate back to the main library after 3 seconds
                setFormStatus('')
            }, 2000)
        }
        },
    })

    return (
        <div>
            {formStatus && (
            <div style={{ color: 'green' }}>
                {formStatus}
            </div>
            )}
            <form onSubmit={formik.handleSubmit}>
                    {formik.submitCount > 0 &&   //we are displaying each error here and using formik logic to iterate through them
                        Object.keys(formik.errors).map((field) => (
                        <div key={field} style={errorStyle}>
                            {formik.errors[field]}
                        </div>
                ))}
                <label htmlFor="artist">Artist Name:</label>
                <input
                    id="artist"
                    name="artist"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.artist}
                />
                {/* {formik.touched.artist && formik.errors.artist && <div style={errorStyle}>{formik.errors.artist}</div>} */}

                <label htmlFor="albumCover">Album Cover Link:</label>
                <input
                    id="albumCover"
                    name="albumCover"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.albumCover}
                />
                {/* {formik.touched.albumCover && formik.errors.albumCover && <div style={errorStyle}>{formik.errors.albumCover}</div>} */}

                <label htmlFor="title">Album Title:</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.title}
                />
                {/* {formik.touched.title && formik.errors.title && <div style={errorStyle}>{formik.errors.title}</div>} */}

                <label htmlFor="released">Album Release Year:</label>
                <input
                    id="released"
                    name="released"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.released}
                />
                {/* {formik.touched.released && formik.errors.released && <div style={errorStyle}>{formik.errors.released}</div>} */}

                <label htmlFor="label">Album Label:</label>
                <input
                    id="label"
                    name="label"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.label}
                />
                {/* {formik.touched.label && formik.errors.label && <div style={errorStyle}>{formik.errors.label}</div>} */}

                <label htmlFor="inCollection">Do you want to add this new Album to your collection?:</label>
                <input
                    id="inCollection"
                    name="inCollection"
                    type="checkbox"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.inCollection}
                />
                {/* {formik.touched.inCollection && formik.errors.inCollection && <div style={errorStyle}>{formik.errors.inCollection}</div>
                } */}

                <button type="submit" disabled={formik.isSubmitting}>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default AlbumsForm