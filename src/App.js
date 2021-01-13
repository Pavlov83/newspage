import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        articles : []
    }
  }
    componentDidMount(){
      fetch('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=59511cd32c1a4765952e02a6750d7c0a')
      .then((response) => {
        return response.json();
      }).then((apiData) => {
        this.setState({
          articles: apiData.articles
        })
      })
    }
  render(){
    console.log(this.state)
      return(
            <div>
            {
              this.state.articles.map((item,index)=>{
                return(
                  <div style={{width:'90%',
                                maxWidth:'80rem',
                              margin:'2rem auto',
                              border: '1px solid #ccc',
                             'border-radius': '25px',
                              padding: '1rem'
                           }}>
                <h2>{item.title}</h2>
                <img src={item.urlToImage} style={{width: '20vw'}}></img>
                <a href={item.url}>Read more</a>
                <p>{item.content}</p>
                <b>by {item.author}</b>
                </div>
                )
              })
            }
            </div>
      )
  }
    
}
export default App;
