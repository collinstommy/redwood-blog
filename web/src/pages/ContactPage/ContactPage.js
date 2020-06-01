import {
  Form,
  Label,
  TextField,
  Submit,
  FieldError,
  useMutation,
} from '@redwoodjs/web'
import { TextAreaField } from '@redwoodjs/web/dist/form/form'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const StyledForm = styled(Form)`
  color: blue;
`

const ContactPage = () => {
  const formMethods = useForm()
  const [create, { loading }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      formMethods.reset()
    },
  })
  const onSubmit = (input) => {
    create({
      variables: {
        input,
      },
    })
  }

  return (
    <BlogLayout>
      <StyledForm
        onSubmit={onSubmit}
        validation={{ mode: 'onBlur' }}
        formMethods={formMethods}
      >
        <Label name="name">Your Name</Label>
        <TextField
          name="name"
          errorClassName="error"
          validation={{ required: true }}
        ></TextField>

        <Label name="email">Your Email</Label>
        <TextField
          name="email"
          errorClassName="error"
          validation={{ required: true }}
        ></TextField>
        <FieldError name="email" />

        <Label name="message">Your Message</Label>
        <TextAreaField
          name="message"
          errorClassName="error"
          validation={{ required: true }}
        ></TextAreaField>
        <Submit disabled={loading}>Save</Submit>
      </StyledForm>
    </BlogLayout>
  )
}

export default ContactPage
