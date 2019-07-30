import React,{Component} from 'react';
import axios from 'axios';
import Header from './../Header/Header';
import './Home.css';
import Paginator from './../Paginator/Paginator';
import Result from './../Results/Result';
class Home extends Component
{
    constructor(props)
    {
        super(props);
        this.getHomeData = this.getHomeData.bind(this);
        this.setSearchedVal = this.setSearchedVal.bind(this);
        this.setPageVal = this.setPageVal.bind(this);
        this.state= {
            responseData:'',
            searchedVal:'',
            totalResults:0,
            pageSearched:1
        };
    }
    
    setSearchedVal(val)
    {
        var self = this;
        this.setState({
            searchedVal: val,
            pageSearched:1
        },
        this.getHomeData(val,self.state.pageSearched)
        );
    }
    setPageVal(val)
    {
        var self = this;
        this.setState(
            {
                pageSearched:val
            },this.getHomeData(self.state.searchedVal,val)
        );
    }
    componentDidMount()
    {
        //document.getElementById("loader").style.display = "none";
        this.getHomeData();
    }
    getHomeData(val,page)
    {
        var self = this;
        var val = val
        var serviceUrl;
        var page = page;
        if(val !== undefined)
        {
            serviceUrl  = 'http://www.omdbapi.com/?i=tt3896198&apikey=fa281222&s='+val+'&page='+page; 
        }
        else
        {
            serviceUrl  = 'http://www.omdbapi.com/?i=tt3896198&apikey=fa281222'; 
        }
        document.getElementById("loader").style.display = "block";
        axios.get(serviceUrl).then(function(response)
          {
              if(response.status === 200)
              {
                if(response.data)
                {
                    document.getElementById("loader").style.display = "none";
                    self.setState({
                        responseData : response.data,
                        totalResults:response.data.totalResults
                    });
                }
              }
              else
              {
                  console.log("NO DATA...");
              }
          });
    }
    render()
    {
 return(
     <div className="home-main">
     <Header setSearchedVal={this.setSearchedVal}/>
     {
     (this.state.searchedVal.length>0)?(
        <p className="bold-para">You have searched for: {this.state.searchedVal}, {(this.state.totalResults!==undefined)?(this.state.totalResults):(0)} results found</p>    
         ):
         (
         <p className="bold-para start-search-para">Please search to get started :)</p>
         )
     }
     <div id="loader"></div>
     <Result searchedVal = {this.state.searchedVal} data={this.state.responseData}/>
     <Paginator
        pageSearched = {this.state.pageSearched}
        responseData = {this.state.responseData}
        searchedVal={this.state.searchedVal}
        setPageVal = {this.setPageVal}
        totalResults = {this.state.totalResults}/>    
     </div>
 );
    }

}

export default Home;