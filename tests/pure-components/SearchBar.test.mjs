import { render } from '@testing-library/react'; // screen

export default ({ test, mock, compose }) => async () => {

    await test('callback invoked on search term change', async () => {
        const onSearch = () => mock.fn();
        const config = { mixpanelEnabled: false };
        const { SearchBar } = compose({ config }).modules.pureComponents;
        render(<SearchBar onSearch={onSearch} />);
    });

};
