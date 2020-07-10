import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Row, Col, Pagination } from 'antd';
import axios from 'axios'
import { withRouter } from  'react-router-dom'

import './index.css'
function Index(props) {
  console.log(props)
  // let datas = [1, 2, 3]
  const [data, setData] = useState({ data: []});
  // const [name, setName] = useState('aaa');
  // const liRef = useRef();
  // const liRefList = useRef([])
  // const inputEl = useRef();
  // const refs = createRef([]);
  // const getRef = (dom) => {
  //   // console.log(dom)
  //   // let el = liRefList.current[index]
  //   const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight 
  //   const top = dom.getBoundingClientRect() && dom.getBoundingClientRect().top
  //   // console.log(top, viewPortHeight, el)
  //   // console.log(top  <= viewPortHeight + 100)
  //   console.log(top  <= viewPortHeight + 100)
  //   top  <= viewPortHeight + 100 ? dom.className = 'ddd' : dom.className = 'vvv'
  //   // liRefList.current.push(dom)
  // }
  // const [isLoading, setLoading] = useState(false);
  // let listQuery = { page: 1, pageSize: 12 } 
  const [query, setCount] = useState(() => {
    return {
      page: 1,
      pageSize: 12
    }
  })
  // const dddd = () => {
  //   return 'acs'
  // }
  // const isInViewPortOfTwo = (index) => {
  //   // console.log(index, liRefList.current)
  //   // console.log(liRefList.current[])
  //   // console.log(inputEl)
  //   // console.log(index, liRefList.current)
  //   // let el = liRefList.current[index]
  //   const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight 
  //   const top = el.getBoundingClientRect() && el.getBoundingClientRect().top
  //   // console.log(top, viewPortHeight, el)
  //   // console.log(top  <= viewPortHeight + 100)
  //   return top  <= viewPortHeight + 100
  //   // console.log(name)
  //   // setName(name)
  // }
  // const addClassName = () => {
  //   console.log(111)
  // }
  // const removeClass = () => {
  //   console.log(222)
  // }
  // isInViewPortOfTwo(document.body)
  // const [ listQuery ] = useState(() => 1)
  // console.log(state)
  useEffect(() => {
    // console.log(inputEl)
    // const [ listQuery ] = useState(() => 1)
    const fetchData = async () => {
      let result = await axios.get('http://47.110.124.41', {params: query})
      console.log(result)
      setData(result.data)
      // setLoading(false)
    }
    fetchData()
    
  }, [query])
  const onChange = (val) => {
    setCount({
      ...query,
      page: val
    })
  }
  let ele = data.data.map((ele, i) => {
    return (
    <Col span={8} key={ele.hsh}  >
      <Link to={`/detail/${ele.hsh}`}>
        <div className="content">
          <img   className="aa"  style={{'width': '100%', height: '100%'}} src={ele.url} alt={ele.copyright} />
          {/* </Link> */}
          <div className="desc">
            <h3>{ ele.copyright }</h3>
            <p>{ele.enddate}</p>
            {/* <p>111</p> */}
          </div>
        </div>
        </Link>
    </Col>
    )
  })
  return (
    <div className="Index">
      <Row>
        {
          ele
        }
      </Row>
    <Pagination
    className="pageStyle"
    onChange={onChange} 
    current={query.page}
    pageSize={query.pageSize}
    total={data.total} />
    </div>
  );
}

export default withRouter(Index);
