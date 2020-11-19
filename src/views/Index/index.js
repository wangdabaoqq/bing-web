import React, { useEffect, useState, createRef } from 'react';
import { Link } from 'react-router-dom'
import { Row, Col, Pagination } from 'antd';
import axios from 'axios'
import { withRouter } from  'react-router-dom'
// import LazyLoad from 'react-lazy-load';

import './index.css'
function Index(props) {
  // console.log(props)
  // let datas = [1, 2, 3]
  const [data, setData] = useState({ data: []});
  // const [flur, setFlur] = useState(false)
  // const [name, setName] = useState('aaa');
  const [time, setTime] = useState(null)
  const [datas, setDatas] = useState({ data: [] })
  // const liRef = useRef();
  // const liRefList = useRef([])
  // const inputEl = useRef();
  const ddd = createRef();
  const [query, setCount] = useState(() => {
    return {
      page: 1,
      pageSize: 12
    }
  })
  const loadImage = (el) => {
    // console.log(el)
    setTimeout(function () {
      var img = new Image()

      img.onload = function () {
        // console.log(el.classList)
        el.classList.remove('progressive--not-loaded')
        el.classList.add('progressive--is-loaded')
        el.src = this.src
        // console.log(this.src)
        // console.log(onLoad)
        // onLoad(el)
      }
      // console.log(el.getAttribute('data-progressive'))
      img.src = el.getAttribute('data-progressive')
    }, 0)
  };
  const isview = (el) => {
    // let el = ddd.current
    // console.log(el.getBoundingClientRect(), el)
    let box = el.getBoundingClientRect()
    let top = box.top
    let height = box.height

    el = el.parentNode
    // console.log(box, el)
    do {
      box = el.getBoundingClientRect()
      // console.log(box, el)
        // console.log(el, box, top)
      // eslint-disable-next-line no-mixed-operators
      if (top <= box.bottom === false) {
        return false
      }
      // console.log(top + height, box.top, el)
      if ((top + height) <= box.top) {
        return false
      }

      el = el.parentNode
      // console.log(el, document.documentElement.clientHeight, top)
    } while (el !== document.body)
    // console.log(el, document.documentElement.clientHeight, top)
    // console.log(box, top, document.documentElement.clientHeight, el)
    return top <= document.documentElement.clientHeight
  }
  const render = () => {
    for (var i = datas.length - 1; i >= 0; --i) {
      let elem = datas[i]
      // console.log(elem)
      // console.log(elem.getBoundingClientRect())
      // console.log(elem)
      // console.log(isview(elem))
      if (isview(elem) && elem.classList.contains('progressive--not-loaded')) {
        loadImage(elem)
        datas.splice(i, 1)
      }
    }
  }
  const listen = () => {
    if (time) {
      return
    }
    clearTimeout(setTime)
    setTime(setTimeout(function () {
      // check()
      render()
      // setTime = null
    }, 200))
  }
  const getEle = () => {
    setTimeout(() => {
      let dom = document.querySelectorAll('.progressive__img')
      // console.log(dom)
      setDatas(Array.from(dom))
      render()
      if (document.addEventListener) {
        window.addEventListener('scroll', listen, false)
        window.addEventListener('load', listen, false)
      } else {
        window.attachEvent('onscroll', listen)
        window.attachEvent('onload', listen)
      }
      // console.log(Array.from(dom), dom)
      // let data = Array.from(dom)
      // for (let index = 0; index <data.length; index++) {
      //   const element = data[index]
      //   console.log(element.getBoundingClientRect(), element)
      // }
    }, 100)
  }
  getEle()
  useEffect(() => {
    // console.log(inputEl)
    // const [ listQuery ] = useState(() => 1)
    const fetchData = async () => {
      let result = await axios.get('http://bing.pearadmin.com:3212/api', {params: query})
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
        <div className="content progressive">
          <img className="progressive__img progressive--not-loaded" ref={ddd} data-progressive={ele.url}  alt="" style={{'width': '100%', height: '100%'}} 
           src={ele.url}
           />
        {/* <Image
           style={{'width': '100%', height: '100%'}} 
           src={ele.url}
           placeholder={
          <Image onLoad={imgLoad}   style={{'width': '100%', height: '100%'}} src={`${ele.url}?imageMogr2/blur/200x50`} alt={ele.copyright} />
           }
           /> */}
          <div className="desc">
            <h3>{ ele.copyright }</h3>
            <p>{ele.enddate}</p>
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
    showSizeChanger
    total={data.total} />
    </div>
  );
}

export default withRouter(Index);
