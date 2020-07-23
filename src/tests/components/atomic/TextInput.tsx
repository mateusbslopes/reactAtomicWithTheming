import { render, fireEvent } from 'react-native-testing-library'
import TextInput from '../../../components/atoms/TextInput'

test('form submits two answers', () => {
  const mockFn = jest.fn()

  const { getAllByA11yLabel, getByText } = render(
    <TextInput value=""  onChangeText={mockFn}/>
  )

  const answerInputs = getAllByA11yLabel('answer input')

  fireEvent.changeText(answerInputs[0], 'a1')
  fireEvent.changeText(answerInputs[1], 'a2')
  fireEvent.press(getByText('Submit'))

  expect(mockFn).toBeCalledWith({
    '1': { q: 'q1', a: 'a1' },
    '2': { q: 'q2', a: 'a2' },
  })
})