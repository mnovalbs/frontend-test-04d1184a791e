import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import PhoneNumberMasker from "../PhoneNumberMasker"

describe("PhoneNumberMasker", () => {
  it('renders masked phone number', () => {
    render(<PhoneNumberMasker phoneNumber="12345678" />)

    expect(screen.getByText('1234XXXX')).toBeInTheDocument()
  });

  it('show real phone number when user click masked phone number', async () => {
    render(<PhoneNumberMasker phoneNumber="12345678" />)

    const element = screen.getByText('1234XXXX')

    await userEvent.click(element)

    expect(screen.getByText('12345678')).toBeInTheDocument()
  })
});