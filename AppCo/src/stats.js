import React from 'react';
import Header from './header';
import Arrow from './icons/arrow.svg';
import { Link } from 'react-router-dom';
import TableStats from './table.js'

// import axios from 'axios';


const Nav = () => (
    <div>
        <div className='container'>
            <ul className="nav">
                <Link to="/">
                    <li className="nav__item">Main page</li>
                </Link>
                <img className="nav__arrow" src={Arrow} alt="arrow" />
                <Link to="/stats">
                    <li className="nav__item"> User statistics</li>
                </Link>
            </ul>
            <div className="title">Users statistics</div>
        </div>
    </div>
)


// class TableStats extends React.Component {
//     // let data4;
//     // let data5;
//     // axios.get('http://localhost:5000/getDataFromUsers')
//     // .then(res => {
//     //     data4 = res.data.data;


//     // });
//     // console.log(data4);
//     // axios.get('http://localhost:5000/getDataFromUsersStatistic')
//     // .then(res => {
//     //     data5 = res.data.data;

//     // });
//     state = {
//         data: [],
//     }

//     componentDidMount() {
//         axios.get('http://localhost:5000/getDataFromUsers')
//             .then(res => {
//                 console.log(res.data.data);
//                 this.setState({ data: res.data.data })
//             })
//     }

//     render() {
//         let data1 = require('./users.json');
//         let data2 = require('./users_statistic.json');

//         let data3 = data1.map((item, index) => {
//             let newItem = {
//                 "id": item.id,
//                 "first_name": item.first_name,
//                 "last_name": item.last_name,
//                 "email": item.email,
//                 "gender": item.gender,
//                 "ip_adress": item.ip_address,
//             };
//             let rowsFromData2 = data2.filter((element) => element.user_id == item.id);
//             newItem["total_clicks"] = rowsFromData2.reduce((sum, current) => sum + current.clicks, 0);
//             newItem["total_page_views"] = rowsFromData2.reduce((sum, current) => sum + current.page_views, 0);

//             return newItem;
//         });

//         const columns = [
//             {
//                 dataField: "id", text: "Id", headerStyle: {
//                     backgroundColor: ' #3A80BA',
//                     color: '#FFFFFF'
//                 }
//             },
//             {
//                 dataField: "first_name", text: "First name", headerStyle: {
//                     backgroundColor: ' #3A80BA',
//                     color: '#FFFFFF'
//                 }
//             },
//             {
//                 dataField: "last_name", text: "Last name", headerStyle: {
//                     backgroundColor: ' #3A80BA',
//                     color: '#FFFFFF'
//                 }
//             },
//             {
//                 dataField: "email", text: "Email", headerStyle: {
//                     backgroundColor: ' #3A80BA',
//                     color: '#FFFFFF'
//                 }
//             },
//             {
//                 dataField: "gender", text: "Gender", headerStyle: {
//                     backgroundColor: ' #3A80BA',
//                     color: '#FFFFFF'
//                 }
//             },
//             {
//                 dataField: "ip_adress", text: "IP adress", headerStyle: {
//                     backgroundColor: ' #3A80BA',
//                     color: '#FFFFFF'
//                 }
//             },
//             {
//                 dataField: "total_clicks", text: "Total clicks", headerStyle: {
//                     backgroundColor: ' #3A80BA',
//                     color: '#FFFFFF'
//                 }
//             },
//             {
//                 dataField: "total_page_views", text: "Total page views", headerStyle: {
//                     backgroundColor: ' #3A80BA',
//                     color: '#FFFFFF'
//                 }
//             },

//         ];

//         const pageButtonRenderer = ({
//             page,
//             active,
//             disable,
//             title,
//             onPageChange
//         }) => {
//             const handleClick = (e) => {
//                 e.preventDefault();
//                 onPageChange(page);
//             };
//             const activeStyle = {};
//             if (active) {
//                 activeStyle.backgroundColor = '#3A80BA';
//                 activeStyle.color = 'white';
//             } else {
//                 activeStyle.backgroundColor = '#FFFFFF';
//                 activeStyle.color = 'black';
//             }
//             if (typeof page === 'string') {
//                 activeStyle.backgroundColor = 'white';
//                 activeStyle.color = '3A80BA';
//             }
//             return (
//                 <button className="btn-blue" onClick={handleClick} style={activeStyle}>{page}</button>

//             );
//         };

//         const options = {
//             pageButtonRenderer
//         };
//         return (
//             <div className="container-xl">
//                 <BootstrapTable
//                     keyField="id"
//                     data={data3}
//                     columns={columns}
//                     pagination={paginationFactory(options)}
//                     striped
//                     hover
//                 />
//             </div>
//         )
//     }

// }

function Stats() {
    return (
        <div>
            <Header />
            <Nav />
            <TableStats />
        </div>
    );
}

export default Stats