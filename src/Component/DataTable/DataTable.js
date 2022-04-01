import './DataTable.css';
import {useEffect, useState} from 'react'

function DataTable() {

  const [dataList, setDataList] = useState([]);
  const [search, setSearch] = useState('');

  const API_URL = 'https://api.publicapis.org/categories';


  useEffect(() => {
    const fetchAPI = async () => {
      const res = await fetch(API_URL);
      const data = await res.json();
      setDataList(data.categories);
    }

    fetchAPI();
  }, []);
  
  return (
    <>
      <div className='data_container'>
        <div className='searchBox'>
          <span>Search: </span>
          <input type="text" 
            name="searchTxt" 
            placeholder='..... search' 
            onChange={(e) => setSearch(e.target.value)} 
          />
        </div>
        <div className='data_container_list'>
            <table>
                <thead>
                    <tr>
                        <th>Categories</th>
                    </tr>
                </thead>
                <tbody>
                  {/* {categories.map((category, index) =>
                    <tr key={index}>
                      <td key={index}>{category}</td>
                    </tr>
                  )} */}
                  {dataList.filter((value) => {
                    if(search === '') {
                      return value;
                    } else if ( value?.toString().toLowerCase().includes(search.toLowerCase()) ) {
                      return value;
                    }
                  })
                  .map((item, index) =>
                    <tr key={index}>
                      <td>{item}</td>
                    </tr>
                  )}
                </tbody>
            </table>
        </div>
      </div>
    </>
  );
}

export default DataTable;
