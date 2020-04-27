import React from 'react';

//you can include multiple components like these by making index.js inside your components folder
import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css';
import { fetchData } from './api'; //If you do not mention filename, by default index.js file is imported

import coronaImage from './images/logo.png'

class App extends React.Component {

    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        //fetch the data

        this.setState({ data: fetchedData, country: country });
        //set the state
    }

    render() {
        const { data, country } = this.state;
        console.log(data);

        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="COVID-19" />
               <Cards data={data} />
               <CountryPicker handleCountryChange={this.handleCountryChange} />
               <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;