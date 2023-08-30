import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Header from '@/app/Components/Layout/Header';


describe('Header', () => {
    it('Logged in User', () => {
        render(
            <Header />
        );

        const heading = screen.getByRole('header');
        const headingText = 'Header';
        expect(heading).toHaveTextContent(headingText);
    });

});
