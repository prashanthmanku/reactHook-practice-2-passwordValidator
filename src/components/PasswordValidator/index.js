import {useState} from 'react'
import {
  BgCard,
  WidthCard,
  Heading,
  Description,
  Input,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [inputText, setInputText] = useState('')

  const onChangeInput = e => {
    setInputText(e.target.value.trim())
  }

  return (
    <BgCard>
      <WidthCard>
        <Heading>Password Validator</Heading>
        <Description>Check how strong and secure is your password</Description>
        <Input type="password" value={inputText} onChange={onChangeInput} />
        {inputText.length < 8 && (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </WidthCard>
    </BgCard>
  )
}
export default PasswordValidator
