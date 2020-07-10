
import React, { useEffect, useState } from 'react';
import { Button } from 'antd'
import './index.css'
function Detail (props) {
  // console.log(props.match.params.id)
  const [imgUrl, setImg] = useState('');
  useEffect(() => {
    // console.log(props.match.params.id)
    let url = `http://bing.shanch.cn/${props.match.params.id}`
    setImg(url)
  }, [props, imgUrl])
  const backTop = () => {
    // console.log(props)
    props.history.goBack()
  }
    // console.log(props.match.prarms.id)
  // const [id] = useEffect()
  // const [ids] = useState()
  return (
    <div style={{height: '100vh'}}>
        <Button onClick={backTop} style={{position: 'absolute', top: '10px', left: '10px'}}>返回</Button>
        <div className="backImgStyle" style={{backgroundImage: `url(${imgUrl})`}} />
    </div>
  )
}
export default Detail;
