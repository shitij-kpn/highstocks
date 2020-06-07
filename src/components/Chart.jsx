import React from 'react'
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import {connect} from 'react-redux'
import processData from './../utils'
//1. get data out of dataReducer
//2. get object keys from the data for series property
//3. get corresponding values using Object.values
//4. get volumes by mapping the volumes
//5. inject data into options 

const mapStateToProps = (state) => ({
    options: processData(state.dataReducer.data),
})


function Chart(props) {
    return (
        <div className="chart-container">
            <HighchartsReact highcharts={Highcharts} options={props.options} constructorType={'stockChart'} allowChartUpdate = { false } />
        </div>
    )
}


export default connect(mapStateToProps)(Chart);
