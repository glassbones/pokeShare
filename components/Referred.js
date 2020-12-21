import React, {useState, useEffect} from "react";
import { Container } from "./subComponents";
//import {objMap} from './utils/utils'
import { useParams } from "react-router-dom";
import axios from "axios";
import { JsonToTable } from "react-json-to-table";
import InjectTags from './subComponents/injectMetaTags'

export default () => {
  const { slug } = useParams();
  const [content, setContent] = useState([]);

  useEffect(() => {
    const headers = {"Access-Control-Allow-Origin": "*"}
      
    axios({ method: 'GET', url: `http://pokeapi.glitch.me/v1/pokemon/${slug}`, headers})
      .then((res) => {
        if (res.data.length){ setContent(res.data[0]); }
        //objMap(res.data, (v, k)=> v ? v : delete res.data.k)
      })
      .catch((error) => {
        console.log('error');
        console.log(error);
      });
      
  },[]);

  return <Container short={true} contents = {
    
    !content 
    ? 
    <p>loading..</p> 
    :
    <>
      <InjectTags 
        url='www.google.com'
        image='content.sprite'
        desc='this is a description test'
        title='this is a title test'
      />
      <img src={content.sprite} data={content} style= {{width: "350px", height: 'auto'}}/>
      <JsonToTable json={content} />
    </>

  }/>
  
};

