import React from 'react';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
// import { render } from 'node-sass';

class TableStats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data1: [],
            data2: [],
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/getDataFromUsers')
            .then(res => {
                // console.log(res.data);
                this.setState({ data1: res.data.data });
            });
        axios.get('http://localhost:5000/getDataFromUsersStatistic')
            .then(res => {
                // console.log(res.data);
                this.setState({ data2: res.data.data });
            });
    }

    render() {
        const newData = this.state.data1.map((item) => {
            let newItem = {
                "id": item.id,
                "first_name": item.first_name,
                "last_name": item.last_name,
                "email": item.email,
                "gender": item.gender,
                "ip_adress": item.ip_address,
            };
            let rowsFromData2 = this.state.data2.filter((element) => element.user_id === item.id);
            newItem["total_clicks"] = rowsFromData2.reduce((sum, current) => sum + current.clicks, 0);
            newItem["total_page_views"] = rowsFromData2.reduce((sum, current) => sum + current.page_views, 0);

            return newItem;
        });
        const columns = [
            {
                dataField: "id", text: "Id", headerStyle: {
                    
                    backgroundColor: ' #3A80BA',
                    color: '#FFFFFF'
                }
            },
            {
                dataField: "first_name", text: "First name", headerStyle: {
                    backgroundColor: ' #3A80BA',
                    color: '#FFFFFF'
                }
            },
            {
                dataField: "last_name", text: "Last name", headerStyle: {
                    backgroundColor: ' #3A80BA',
                    color: '#FFFFFF'
                }
            },
            {
                dataField: "email", text: "Email", headerStyle: {
                    backgroundColor: ' #3A80BA',
                    color: '#FFFFFF'
                }
            },
            {
                dataField: "gender", text: "Gender", headerStyle: {
                    backgroundColor: ' #3A80BA',
                    color: '#FFFFFF'
                }
            },
            {
                dataField: "ip_adress", text: "IP adress", headerStyle: {
                    backgroundColor: ' #3A80BA',
                    color: '#FFFFFF'
                }
            },
            {
                dataField: "total_clicks", text: "Total clicks", headerStyle: {
                    backgroundColor: ' #3A80BA',
                    color: '#FFFFFF'
                }
            },
            {
                dataField: "total_page_views", text: "Total page views", headerStyle: {
                    backgroundColor: ' #3A80BA',
                    color: '#FFFFFF'
                }
            },

        ];

        const pageButtonRenderer = ({
            page,
            active,
            disable,
            title,
            onPageChange
        }) => {
            const handleClick = (e) => {
                e.preventDefault();
                onPageChange(page);
            };
            const activeStyle = {};
            if (active) {
                activeStyle.backgroundColor = '#3A80BA';
                activeStyle.color = 'white';
            } else {
                activeStyle.backgroundColor = '#FFFFFF';
                activeStyle.color = 'black';
            }
            if (typeof page === 'string') {
                activeStyle.backgroundColor = 'white';
                activeStyle.color = '3A80BA';
            }
            return (
                <button className="btn-blue" onClick={handleClick} style={activeStyle}>{page}</button>

            );
        };

        const options = {
            pageButtonRenderer
        };
        return (
            <div className="container-xl">
                <BootstrapTable
                    keyField="id"
                    data={newData}
                    columns={columns}
                    pagination={paginationFactory(options)}
                    striped
                    hover
                />
            </div>
        )
    }
}
export default TableStats;