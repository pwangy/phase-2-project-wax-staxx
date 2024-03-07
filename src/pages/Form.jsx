import { useState, useContext } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { AlbumsContext } from '../context/AlbumsProvider'
import { useNavigate } from 'react-router'

const validationSchema = Yup.object().shape({
    inCollection: Yup.boolean().required('Collection status is required'),
    artist: Yup.string().required('Artist is required'),
    albumCover: Yup.string().required('Album cover image link is required'),
    title: Yup.string().required('Title is required'),
    released: Yup.number().required('Release year is required'),
    label: Yup.string().required('Label is required'),
})

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

    const fieldInfo = [
        { name: 'artist', type: 'text', label: '', placeholder: 'Artist Name' },
        { name: 'albumCover', type: 'text', label: '', placeholder: 'Album Cover Link' },
        { name: 'title', type: 'text', label: '', placeholder: 'Album Title' },
        { name: 'released', type: 'number', label: '', placeholder: 'Album Release Year' },
        { name: 'label', type: 'text', label: '', placeholder: 'Album Label' },
        { name: 'inCollection', type: 'checkbox', label: 'Add album to your collection?' },
    ]

    return (
        <>
            <div className='spacer' />
            {formStatus && <div className='alert-green'>{formStatus}</div>}
            <article className='article-wrapper'>
                <div className='article-title'>
                    <h2>Notice something missing?</h2>
                    <hr />
                </div>
                <p className='form-p'>Go ahead and add it to our main collection. If you want it included in your Staxx, keep the checkbox below checked.<br/><br/>All fields are required.</p>
            </article>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema} //validates using validationSchema
                onSubmit={async (values, { //pass desired formik functions to assist with form control
                    setSubmitting, resetForm, setStatus }) => {
                try {
                    await handleAddAlbum(values) // Callback to handle POST
                    setFormStatus(`You Have Successfully Added ${values.title} by ${values.artist}`) // Message appears on successful POST
                    await sleep(4000)
                    navigate('/') // Navigate back to the main library after ...
                    setFormStatus('') // reset the displayed Formstatus back
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
                {({ isSubmitting }) => (
                <Form className='form-wrapper'>
                    <section>
                        {fieldInfo.map((field) => (
                            <div key={field.name} className='formik'>
                            {field.type === 'checkbox' ? (
                                    <Field type={field.type} id={field.name} name={field.name} />
                                ) : (
                                    <Field type={field.type} id={field.name} name={field.name} placeholder={field.placeholder} />
                            )}
                            <label htmlFor={field.name} id={field.name}>{field.label}</label>
                            <ErrorMessage name={field.name} component='div' className='alerts' />
                            </div>
                        ))}
                        <button type='submit' disabled={isSubmitting} className='form-btn'>Submit</button>
                    </section>
                </Form>
            )}
            </Formik>
    </>
)}

export default AlbumsForm
