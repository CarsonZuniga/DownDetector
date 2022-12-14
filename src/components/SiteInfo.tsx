import React from "react";
import {
    Container,
    Row,
    Col
} from "react-bootstrap/";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Chart, Line } from 'react-chartjs-2'
import { faker } from '@faker-js/faker';
import { ISiteProp, ISiteInfoState } from "../services/AppModels.ts";
import AppService from '../services/AppService.ts'
  
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const range = (start, end) => Array.from(Array(end - start + 1).keys()).map(x => x + start);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Reports in last 12 hours',
    },
  },
};

export default class SiteInfo extends React.Component<ISiteProp, ISiteInfoState> {

    appService:AppService;
    siteName:string;

    constructor(props:any) {
        super(props);
        this.state = {
            dataObj: {
                labels: [],
                datasets: []
            },
            hour: (new Date()).getHours()
        }
        this.appService = this.props.appServiceObj;
        this.siteName = this.props.siteName;
        this.checkUpdate = this.checkUpdate.bind(this);
        this.updateData = this.updateData.bind(this);
    }

    componentDidMount() {
        setInterval(() => this.checkUpdate(), 60 * 1000);
        this.updateData();
    }

    checkUpdate() {
        const new_hour = (new Date()).getHours();
        if(new_hour !== this.state.hour) {
            this.setState({hour: new_hour});
            this.updateData();
        }
    }

    updateData() {
        // this.appService.getData(this.siteName).then(result => {
        //     console.log(result);
        // });
        let labels = range(this.state.hour-12, this.state.hour);
        const new_data = {
            labels,
            datasets: [{
                    label: 'Reports per hour',
                    data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },]
        }
        this.setState({dataObj: new_data});
    }

    render() {
        return (
            <Container fluid>
                <Row id="site-name">
                    Currently viewing {this.siteName}
                </Row>
                <Row>
                    <Line options={options} data={this.state.dataObj} />
                </Row>
            </Container>
        );
    }

}