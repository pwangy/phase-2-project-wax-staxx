import { useState, useContext } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { AlbumsContext } from '../AlbumsProvider'
import { useNavigate } from 'react-router'

const validationSchema = Yup.object().shape({
    inCollection: Yup.boolean().required('Collection status is required'),
    artist: Yup.string().required('Artist is required'),
    albumCover: Yup.string().required('Album cover image link is required'),
    title: Yup.string().required('Title is required'),
    released: Yup.string().required('Release year is required'),
    label: Yup.string().required('Label is required'),
})

const errorStyle = { color: 'red', fontWeight: 'bold' }

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const AlbumsForm = () => {
    const [formStatus, setFormStatus] = useState('')
    const { handleAddAlbum } = useContext(AlbumsContext)
    const navigate = useNavigate()

    const initialValues = { //Establish your forms initial values
        inCollection: true,
        artist: '',
        albumCover: '',
        title: '',
        released: '',
        label: '',
    }

    return (
        <div>
        {formStatus && <div style={{ color: 'green' }}>{formStatus}</div>}
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema} //validates using validationSchema
            onSubmit={async (values, { //pass desired formik functions to assist with form control
                setSubmitting, resetForm, setStatus }) => {
            try {
                await handleAddAlbum(values) // Callback to handle POST
                setFormStatus('Form submitted successfully!') // Message appears on successful POST
                setTimeout(() => {
                    navigate('/') // Navigate back to the main library after ...
                    setFormStatus('') // reset the displayed Formstatus back
                }, 2000) // 2000 milliseconds / 2 seconds
                resetForm()
            } catch (validationError) { //upon Submit > forEach field
                const errors = {} // not completed display a error at the top of the form
                validationError.inner.forEach((e) => {
                errors[e.path] = e.message
                })
                setStatus({}) //removes prior status if one was set
                setSubmitting(false) //setSubmitting handles form control 
            }
            }} 
            //! We need to decide if we want all errors up top or below each option        
        >
            {({ isSubmitting, submitCount, errors }) => (
            <Form>
                           {/* Displaying each error mapped at the top of the form */}
                {submitCount > 0 &&
                Object.keys(errors).map((field) => (
                    <div key={field} style={errorStyle}>
                    {errors[field]}
                    </div>
                ))}

                <label htmlFor="artist">Artist Name:</label>
                <Field
                type="text"
                id="artist"
                name="artist"
                placeholder="Enter artist name"
                />
                <ErrorMessage name="artist" component="div" style={errorStyle} />

                <label htmlFor="albumCover">Album Cover Link:</label>
                <Field
                type="text"
                id="albumCover"
                name="albumCover"
                placeholder="Enter album cover link"
                />
                <ErrorMessage
                name="albumCover"
                component="div"
                style={errorStyle}
                />

                <label htmlFor="title">Album Title:</label>
                <Field
                type="text"
                id="title"
                name="title"
                placeholder="Enter album title"
                />
                <ErrorMessage name="title" component="div" style={errorStyle} />

                <label htmlFor="released">Album Release Year:</label>
                <Field
                type="text"
                id="released"
                name="released"
                placeholder="Enter release year"
                />
                <ErrorMessage
                name="released"
                component="div"
                style={errorStyle}
                />

                <label htmlFor="label">Album Label:</label>
                <Field
                type="text"
                id="label"
                name="label"
                placeholder="Enter album label"
                />
                <ErrorMessage name="label" component="div" style={errorStyle} />

                <label htmlFor="inCollection">
                Do you want to add this new Album to your collection?:
                </label>
                <Field type="checkbox" id="inCollection" name="inCollection" />
                <ErrorMessage
                name="inCollection"
                component="div"
                style={errorStyle}
                />

                <button type="submit" disabled={isSubmitting}>
                Submit
                </button>
            </Form>
            )}
        </Formik>
        </div>
    )
}


export default AlbumsForm