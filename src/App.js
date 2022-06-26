import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import Footer from './Components/Footer';
import { useState,useEffect } from 'react';

function App() {
  const[category,setCategory]=useState('general');
  const[fetchedNews,setFetchedNews]=useState([]);
  const[results,setResults]=useState();
  const[pagesize,setPageSize]=useState(20);

  console.log(pagesize);
  const fetchDataHandler=async()=>{
    const response=await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=${pagesize}&apiKey=2d14e7ed4c75478b8659ff88ca888b61`);
    const data= await response.json();
    setFetchedNews(data.articles);
    setResults(data.totalResults);
    console.log(data);
  }
  useEffect(()=>{
    fetchDataHandler();
  },[results,category,pagesize])
  return (
   <>
   <Navbar setCategory={setCategory} />
   {!results?<img className="spinner" src={require('./loading.gif')} alt="img"/> : 
   <News results={fetchedNews} pagesize={pagesize} setPageSize={setPageSize}/>}
   <Footer />
   </>
  );
}

export default App;
