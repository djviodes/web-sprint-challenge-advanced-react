import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);

    const header = screen.queryByText(/checkout form/i);

    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent(/checkout form/i);
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />);

    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);

    fireEvent.change(firstNameInput, { target:{ value: 'David', name: 'firstName'}});
    fireEvent.change(lastNameInput, { target:{ value: 'Viodes', name: 'lastName'}});
    fireEvent.change(addressInput, { target:{ value: '7654 Numbers Way', name: 'address'}});
    fireEvent.change(cityInput, { target:{ value: 'Numbers City', name: 'city'}});
    fireEvent.change(stateInput, { target:{ value: 'NY', name: 'state'}});
    fireEvent.change(zipInput, { target:{ value: '76543', name: 'zip'}});

    const button = screen.getByRole('button');
    fireEvent.click(button);

    await waitFor(() => {
        expect(screen.getByTestId(/successmessage/i)).toBeInTheDocument();
    })
});
